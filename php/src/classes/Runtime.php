<?php
declare(strict_types=1);
namespace Flint;
class Runtime
{
    private array $allowed;
    private readonly string $baseUrl;
    protected readonly array $contract;
    private readonly ?Internal\DescriptorSource $descriptors;
    private mixed $curl = null;
    private array $streams = [];
    public function __construct(
        array|Internal\DescriptorSource $contract,
        private readonly ClientOptions $options,
        bool $compiled = false,
    ) {
        $this->descriptors = $contract instanceof Internal\DescriptorSource ? $contract : null;
        $this->contract = $this->descriptors
            ? $this->descriptors->settings()
            : ($compiled
                ? $contract
                : \Flint\Internal\SchemaAdapter::runtimePlan($contract));
        if (!$this->descriptors) {
            self::assertCompiledPlan($this->contract);
        }
        $baseUrl = $options->baseUrl ?? ($this->contract['defaultBaseUrl'] ?? null);
        if ($baseUrl === null) {
            Codec::fail('baseUrl', 'required: pass baseUrl because this SDK has no default server');
        }
        if (!self::validBaseUrl($baseUrl)) {
            Codec::fail(
                'baseUrl',
                'expected an absolute URL without credentials, whitespace, backslash, query or fragment',
            );
        }
        $this->baseUrl = $baseUrl;
        if (
            isset($this->contract['authentication']) &&
            $options->token !== null &&
            !isset($this->contract['authShortcuts']['token'])
        ) {
            $shortcuts = array_keys($this->contract['authShortcuts'] ?? []);
            sort($shortcuts);
            throw new SdkError(
                'authentication',
                'token is not configured for this SDK; use ' .
                    ($shortcuts ? implode(', ', $shortcuts) : 'authMode and credentials'),
            );
        }
        $this->allowed = $options->allowedOrigins ?? [self::origin($this->baseUrl)];
        $this->checkUrl($this->baseUrl);
        if ($options->timeoutMs <= 0 || $options->deadlineMs <= 0) {
            Codec::fail('options', 'timeouts must be positive');
        }
    }
    public static function assertCompiledPlan(array $contract): void
    {
        if (
            ($contract['format'] ?? null) !== 1 ||
            !is_string($contract['semantics'] ?? null) ||
            ($contract['retrySemantics'] ?? null) !== 'budgets-1'
        ) {
            throw new \InvalidArgumentException('Unsupported compiled runtime format');
        }
        if (!is_array($contract['operations'] ?? null)) {
            throw new \InvalidArgumentException('Missing compiled operations');
        }
        if (array_key_exists('defaultBaseUrl', $contract)) {
            $default = $contract['defaultBaseUrl'];
            if (
                !is_string($default) ||
                !self::validBaseUrl($default) ||
                !in_array(
                    strtolower(parse_url($default, PHP_URL_SCHEME) ?? ''),
                    ['http', 'https'],
                    true,
                )
            ) {
                throw new \InvalidArgumentException('Invalid defaultBaseUrl in compiled runtime');
            }
        }
        foreach ($contract['authShortcuts'] ?? [] as $name => $shortcut) {
            $schemes = $contract['authentication'][$shortcut['mode'] ?? '']['schemes'] ?? [];
            if (
                !preg_match('/^[a-z][a-zA-Z0-9]*$/', $name) ||
                ($name !== 'token' &&
                    in_array(strtolower($name), ['baseurl', 'token', 'authmode', 'credentials', 'headers', 'idempotencykey', 'ifmatch', 'timeoutms', 'deadlinems', 'maxattempts', 'signal', 'cancellation', 'maxpages', 'maxitems', 'streamidletimeoutms', 'streamlifetimems', 'allowedorigins', 'allowinsecurehttp', 'transport', 'diagnostics', 'redactfields', 'constructor', 'prototype', '__proto__', 'withdeadline', 'this'], true)) ||
                count($schemes) !== 1 ||
                ($schemes[0]['name'] ?? null) !== ($shortcut['scheme'] ?? null)
            ) {
                throw new \InvalidArgumentException('Invalid authentication shortcut');
            }
        }
        if (isset($contract['authentication'])) {
            if (!is_array($contract['authentication'])) {
                throw new \InvalidArgumentException('Invalid authentication modes');
            }
            foreach ($contract['authentication'] as $mode) {
                if (!is_array($mode['schemes'] ?? null) || !$mode['schemes']) {
                    throw new \InvalidArgumentException('Invalid authentication mode');
                }
                $destinations = [];
                foreach ($mode['schemes'] as $scheme) {
                    if (
                        !is_string($scheme['name'] ?? null) ||
                        !is_string($scheme['header'] ?? null) ||
                        !in_array($scheme['type'] ?? null, ['bearer', 'apiKey'], true)
                    ) {
                        throw new \InvalidArgumentException('Invalid authentication scheme');
                    }
                    $header = strtolower($scheme['header']);
                    if (isset($destinations[$header])) {
                        throw new \InvalidArgumentException(
                            'Conflicting authentication destinations',
                        );
                    }
                    $destinations[$header] = true;
                }
            }
        }
        if (isset($contract['incoming'])) {
            if (!is_array($contract['incoming'])) {
                throw new \InvalidArgumentException('Invalid incoming contracts');
            }
            foreach ($contract['incoming'] as $entry) {
                foreach (['name', 'method', 'pointer', 'model'] as $key) {
                    if (!is_string($entry[$key] ?? null)) {
                        throw new \InvalidArgumentException('Invalid incoming ' . $key);
                    }
                }
                if (isset($entry['schema'])) {
                    throw new \InvalidArgumentException('Raw schema in incoming contract');
                }
                Codec::assertPlan($entry['codec'] ?? null, 'incoming.' . $entry['name']);
            }
        }
        foreach ($contract['operations'] as $op) {
            if (isset($op['authModes'])) {
                if (!is_array($op['authModes'])) {
                    throw new \InvalidArgumentException('Invalid operation authentication modes');
                }
                foreach ($op['authModes'] as $name) {
                    if (!is_string($name) || !isset($contract['authentication'][$name])) {
                        throw new \InvalidArgumentException(
                            'Invalid operation authentication mode',
                        );
                    }
                }
            }
            if (
                !is_array($op) ||
                !is_string($op['id'] ?? null) ||
                !is_string($op['path'] ?? null) ||
                !is_string($op['verb'] ?? null) ||
                !is_array($op['parameters'] ?? null) ||
                !is_array($op['responses'] ?? null)
            ) {
                throw new \InvalidArgumentException('Invalid compiled operation');
            }
            $policy = $op['retry'] ?? null;
            if (
                !is_array($policy) ||
                !in_array($op['replay'] ?? null, ['safe', 'idempotency'], true) ||
                !is_int($policy['maxAttempts'] ?? null) ||
                $policy['maxAttempts'] < 1 ||
                $policy['maxAttempts'] > 10 ||
                !is_array($policy['statuses'] ?? null) ||
                !array_is_list($policy['statuses']) ||
                !is_bool($policy['transport'] ?? null) ||
                (!is_int($policy['baseDelayMs'] ?? null) &&
                    !is_float($policy['baseDelayMs'] ?? null)) ||
                !is_finite((float) $policy['baseDelayMs']) ||
                $policy['baseDelayMs'] < 0 ||
                ($op['replay'] === 'idempotency' &&
                    $policy['maxAttempts'] > 1 &&
                    !isset($op['idempotency']))
            ) {
                throw new \InvalidArgumentException('Invalid compiled retry policy');
            }
            foreach ($policy['statuses'] as $status) {
                if (
                    !is_int($status) ||
                    $status < 400 ||
                    $status > 599 ||
                    in_array($status, [409, 412], true)
                ) {
                    throw new \InvalidArgumentException('Invalid compiled retry status');
                }
            }
            if (array_key_exists('errors', $policy)) {
                if (!is_array($policy['errors']) || !array_is_list($policy['errors'])) {
                    throw new \InvalidArgumentException('Invalid compiled retry errors');
                }
                foreach ($policy['errors'] as $rule) {
                    if (
                        !is_array($rule) ||
                        !is_int($rule['status'] ?? null) ||
                        $rule['status'] < 400 ||
                        $rule['status'] > 599 ||
                        $rule['status'] === 412 ||
                        !is_array($rule['codes'] ?? null) ||
                        !array_is_list($rule['codes']) ||
                        !$rule['codes'] ||
                        ($rule['status'] === 409 &&
                            (!isset($op['idempotency']) || isset($op['conditional'])))
                    ) {
                        throw new \InvalidArgumentException('Invalid compiled retry errors');
                    }
                    foreach ($rule['codes'] as $code) {
                        if (!is_string($code) || trim($code) === '') {
                            throw new \InvalidArgumentException('Invalid compiled retry code');
                        }
                    }
                }
            }
            foreach ($op['parameters'] as $parameter) {
                Codec::assertPlan($parameter['codec'], $op['id'] . '.parameter');
            }
            if (isset($op['body'])) {
                Codec::assertPlan($op['body'], $op['id'] . '.body');
            }
            if (isset($op['streamEventSchemas'])) {
                throw new \InvalidArgumentException('Raw stream schemas');
            }
            foreach ($op['streamEventCodecs'] ?? [] as $event => $codec) {
                Codec::assertPlan($codec, 'stream.' . $event);
            }
            foreach (['idleTimeoutMs', 'maxEventBytes'] as $key) {
                if (
                    isset($op['stream'][$key]) &&
                    (!is_int($op['stream'][$key]) || $op['stream'][$key] <= 0)
                ) {
                    throw new \InvalidArgumentException('Invalid stream limits');
                }
            }
            if (array_key_exists('successJsonFallback', $op)) {
                $candidates = array_keys(
                    array_filter(
                        $op['responses'],
                        fn($response, $status) => preg_match('/^2[0-9]{2}$/D', (string) $status) &&
                            ($response['bodyKind'] ?? null) === 'json',
                        ARRAY_FILTER_USE_BOTH,
                    ),
                );
                if (
                    count($candidates) !== 1 ||
                    (string) $candidates[0] !== $op['successJsonFallback']
                ) {
                    throw new \InvalidArgumentException('Invalid JSON success fallback');
                }
            }
            foreach ($op['responses'] as $status => $response) {
                if (isset($response['phpRepresentation'])) {
                    Model::assertRepresentation($response['phpRepresentation']);
                }
                if (
                    ($response['bodyKind'] ?? null) === 'sse' &&
                    (isset($response['codec']) ||
                        ($response['mediaType'] ?? null) !== 'text/event-stream')
                ) {
                    throw new \InvalidArgumentException('Invalid SSE descriptor');
                }
                if (
                    isset($response['bodyKind']) &&
                    !in_array($response['bodyKind'], ['empty', 'json', 'binary', 'sse'], true)
                ) {
                    throw new \InvalidArgumentException('Unsupported response body kind');
                }
                if (
                    isset($response['classification']) &&
                    !in_array($response['classification'], ['success', 'error', 'redirect'], true)
                ) {
                    throw new \InvalidArgumentException('Unsupported response classification');
                }
                if (
                    ($response['classification'] ?? null) === 'redirect' &&
                    !in_array((string) $status, ['302', '307'], true)
                ) {
                    throw new \InvalidArgumentException('Invalid redirect status');
                }
                if (
                    isset($response['locationRequired']) &&
                    !is_bool($response['locationRequired'])
                ) {
                    throw new \InvalidArgumentException('Invalid Location requirement');
                }
                if (($response['bodyKind'] ?? null) === 'json' && !isset($response['codec'])) {
                    throw new \InvalidArgumentException('Missing JSON response codec');
                }
                if (
                    ($response['bodyKind'] ?? null) === 'binary' &&
                    (isset($response['codec']) ||
                        ($response['mediaType'] ?? null) !== 'application/pdf')
                ) {
                    throw new \InvalidArgumentException('Invalid binary response descriptor');
                }
                if (isset($response['schema'])) {
                    throw new \InvalidArgumentException('Raw schema in compiled response');
                }
                if (isset($response['codec'])) {
                    Codec::assertPlan($response['codec'], $op['id'] . '.response.' . $status);
                }
            }
        }
        foreach ($contract['definitions'] ?? [] as $name => $codec) {
            Codec::assertPlan($codec, 'definitions.' . $name);
        }
        foreach ($contract['webhook']['events'] ?? [] as $name => $codec) {
            Codec::assertPlan($codec, 'events.' . $name);
        }
    }
    private function definitions(): array
    {
        return $this->descriptors?->definitions() ?? ($this->contract['definitions'] ?? []);
    }
    private function decode(mixed $value, array $codec, array $context = []): mixed
    {
        return Codec::execute($value, $codec, $context + ['definitions' => $this->definitions()]);
    }
    private static function now(): int
    {
        return (int) floor(hrtime(true) / 1000000);
    }
    private static function origin(string $url): string
    {
        $p = parse_url($url);
        $scheme = strtolower($p['scheme'] ?? '');
        return $scheme .
            '://' .
            strtolower($p['host'] ?? '') .
            (isset($p['port']) &&
            !(
                ($scheme === 'https' && $p['port'] === 443) ||
                ($scheme === 'http' && $p['port'] === 80)
            )
                ? ':' . $p['port']
                : '');
    }
    private static function validBaseUrl(string $url): bool
    {
        $p = parse_url($url);
        return $p !== false &&
            !empty($p['host']) &&
            !empty($p['scheme']) &&
            preg_match('~^[a-z][a-z0-9+.-]*://~i', $url) &&
            preg_match('/[\\\\\s\x00-\x1f\x7f{}?#]/u', $url) === 0 &&
            !isset($p['user']) &&
            !isset($p['pass']);
    }
    private function checkUrl(string $url): void
    {
        $p = parse_url($url);
        if (
            !$p ||
            empty($p['host']) ||
            preg_match('/[\\\\\x00-\x20]/', $url) ||
            isset($p['user']) ||
            isset($p['pass']) ||
            isset($p['fragment'])
        ) {
            throw new SdkError(
                'destination',
                'Invalid destination: embedded credentials and fragments are not allowed',
            );
        }
        $scheme = strtolower($p['scheme'] ?? '');
        if (!in_array($scheme, ['https', 'http'], true)) {
            throw new SdkError('destination', 'Unsupported destination protocol; use HTTPS');
        }
        if ($scheme === 'http' && !$this->options->allowInsecureHttp) {
            throw new SdkError(
                'destination',
                'HTTP is disabled; set allowInsecureHttp: true for deliberate local testing',
            );
        }
        if (!in_array(self::origin($url), $this->allowed, true)) {
            throw new SdkError('destination', 'Destination origin is not in allowedOrigins');
        }
    }
    private static function checkCancel(?Cancellation $c, string $outcome = 'unknown'): void
    {
        if ($c?->isCancelled()) {
            throw new SdkError(
                'cancelled',
                'Local waiting cancelled; this does not cancel the remote operation',
                $outcome,
            );
        }
    }
    private static function pause(int $ms, ?Cancellation $c): void
    {
        $end = self::now() + $ms;
        do {
            self::checkCancel($c);
            $left = $end - self::now();
            if ($left > 0) {
                usleep(min(10000, $left * 1000));
            }
        } while (self::now() < $end);
    }
    private function operation(string $id): array
    {
        if ($this->descriptors) {
            return $this->descriptors->operation($id);
        }
        foreach ($this->contract['operations'] as $op) {
            if ($op['id'] === $id) {
                return $op;
            }
        }
        Codec::fail('operation', 'operation is not included in this SDK');
    }
    public function request(
        string $id,
        array $input = [],
        ?RequestOptions $options = null,
        ?string $continuation = null,
    ): Result {
        $o = $options ?? new RequestOptions();
        $op = $this->operation($id);
        foreach (['streamIdleTimeoutMs', 'streamLifetimeMs'] as $key) {
            if ($o->{$key} !== null && $o->{$key} <= 0) {
                Codec::fail($key, 'must be positive');
            }
        }
        $start = self::now();
        $timeout = $o->timeoutMs ?? $this->options->timeoutMs;
        $duration = $o->deadlineMs ?? $this->options->deadlineMs;
        if ($timeout <= 0 || $duration <= 0) {
            Codec::fail('options', 'timeouts must be positive');
        }
        $deadline = $start + $duration;
        $policy = $op['retry'];
        $budget = $o->maxAttempts ?? ($this->options->maxAttempts ?? $policy['maxAttempts']);
        if (
            !is_finite((float) $budget) ||
            $budget < 1 ||
            $budget > 9007199254740991 ||
            floor($budget) != $budget
        ) {
            Codec::fail('maxAttempts', 'must be a positive safe integer');
        }
        $attempts = min((int) $budget, $policy['maxAttempts']);
        $headers = [
            'accept' =>
                implode(
                    ', ',
                    array_unique(
                        array_filter(
                            array_map(
                                fn($response) => ($response['classification'] ?? null) === 'success'
                                    ? $response['mediaType'] ?? null
                                    : null,
                                $op['responses'],
                            ),
                        ),
                    ),
                ) ?:
                'application/json',
            'user-agent' => $this->contract['userAgent'] ?? 'PublicSDK (PHP)',
        ];
        $set = function (string $name, string $value) use (&$headers, $op): void {
            if (
                !preg_match('/^[!#$%&\x27*+.^_`|~0-9A-Za-z-]+$/', $name) ||
                preg_match('/[\r\n]/', $value)
            ) {
                Codec::fail('headers', 'invalid HTTP header');
            }
            $existing = $headers[strtolower($name)] ?? null;
            if (
                strtolower($op['idempotency']['header'] ?? '') === strtolower($name) &&
                $existing !== null &&
                $existing !== $value
            ) {
                Codec::fail(
                    'idempotencyKey',
                    'conflicting keys were supplied through input headers or request options',
                );
            }
            $headers[strtolower($name)] = $value;
        };
        $path = $op['path'];
        $query = [];
        foreach ($op['parameters'] as $p) {
            $present = array_key_exists($p['name'], $input);
            $value = $present ? $input[$p['name']] : null;
            if (
                !$present &&
                $p['in'] === 'header' &&
                strtolower($op['idempotency']['header'] ?? '') === strtolower($p['name'])
            ) {
                if (($options->idempotencyKey ?? null) !== null) {
                    $value = $options->idempotencyKey;
                    $present = true;
                } else {
                    foreach ($options->headers ?? [] as $name => $headerValue) {
                        if (strtolower($name) === strtolower($p['name'])) {
                            $value = $headerValue;
                            $present = true;
                            break;
                        }
                    }
                }
                if (!$present && ($op['idempotency']['auto'] ?? false)) {
                    $value = bin2hex(random_bytes(16));
                    $present = true;
                }
            }
            if (
                $p['in'] === 'header' &&
                in_array(
                    strtolower($p['name']),
                    [
                        strtolower($op['conditional']['header'] ?? ''),
                        strtolower($this->contract['apiVersion']['header'] ?? ''),
                    ],
                    true,
                )
            ) {
                // Match final header precedence before validating the wire value.
                foreach ($o->headers as $name => $headerValue) {
                    if (strtolower($name) === strtolower($p['name'])) {
                        $value = $headerValue;
                        $present = true;
                    }
                }
                if (
                    strtolower($this->contract['apiVersion']['header'] ?? '') ===
                    strtolower($p['name'])
                ) {
                    $value = $this->contract['apiVersion']['value'];
                    $present = true;
                }
                if (
                    strtolower($op['conditional']['header'] ?? '') === strtolower($p['name']) &&
                    $o->ifMatch !== null
                ) {
                    $value = $o->ifMatch;
                    $present = true;
                }
            }
            if (!$present) {
                if ($p['required'] ?? false) {
                    Codec::fail($p['name'], 'required parameter is missing');
                }
                continue;
            }
            $v = $this->decode($value, $p['codec'], ['path' => $p['name']]);
            $scalar = fn($v) => $v instanceof RawNumber
                ? $v->value
                : (is_bool($v)
                    ? ($v
                        ? 'true'
                        : 'false')
                    : (string) $v);
            $values = array_map($scalar, is_array($v) ? $v : [$v]);
            if ($p['in'] === 'path') {
                if (array_intersect($values, ['.', '..'])) {
                    Codec::fail($p['name'], 'dot path segments are unsupported');
                }
                $path = str_replace(
                    '{' . $p['name'] . '}',
                    implode(',', array_map('rawurlencode', $values)),
                    $path,
                );
            }
            if ($p['in'] === 'query') {
                if (is_array($v) && ($p['explode'] ?? true)) {
                    foreach ($values as $value) {
                        $query[] = rawurlencode($p['name']) . '=' . rawurlencode($value);
                    }
                } else {
                    $query[] =
                        rawurlencode($p['name']) .
                        '=' .
                        implode(',', array_map('rawurlencode', $values));
                }
            }
            if ($p['in'] === 'header') {
                $set($p['name'], implode(',', $values));
            }
        }
        $url = rtrim($this->baseUrl, '/') . $path . ($query ? '?' . implode('&', $query) : '');
        if ($continuation !== null) {
            if (str_starts_with($continuation, '//')) {
                $url = (parse_url($this->baseUrl, PHP_URL_SCHEME) ?: 'https') . ':' . $continuation;
            } elseif (preg_match('/^[a-z][a-z0-9+.-]*:/i', $continuation)) {
                $url = $continuation;
            } elseif (str_starts_with($continuation, '/')) {
                $url = self::origin($this->baseUrl) . $continuation;
            } else {
                $url = rtrim($this->baseUrl, '/') . '/' . $continuation;
            }
        }
        $this->checkUrl($url);
        foreach ($o->headers as $k => $v) {
            $set($k, $v);
        }
        if (isset($this->contract['authentication'])) {
            $permitted = $op['authModes'] ?? [];
            $shortcutAuth = function ($options) {
                $supplied = [];
                foreach ($this->contract['authShortcuts'] ?? [] as $key => $shortcut) {
                    if (($options->$key ?? null) !== null) {
                        $supplied[] = [
                            'mode' => $shortcut['mode'],
                            'credentials' => [$shortcut['scheme'] => $options->$key],
                        ];
                    }
                }
                if (
                    count($supplied) > 1 ||
                    ($supplied &&
                        ($options->authMode !== null ||
                            ($options->credentials !== null &&
                                ($options instanceof RequestOptions ||
                                    $options->credentials !== []))))
                ) {
                    throw new SdkError(
                        'authentication',
                        'Use one authentication shortcut or explicit authMode/credentials, not both',
                    );
                }
                return $supplied[0] ?? null;
            };
            $clientShortcut = $shortcutAuth($this->options);
            $requestShortcut = $shortcutAuth($o);
            $defaultMode = $this->options->authMode ?? ($clientShortcut['mode'] ?? null);
            $modeName =
                $requestShortcut['mode'] ?? ($o->authMode ?? ($permitted ? $defaultMode : null));
            if ($modeName === null && $op['authenticated'] && count($permitted) === 1) {
                $modeName = $permitted[0];
            }
            if ($modeName === null && $op['authenticated']) {
                throw new SdkError(
                    'authentication',
                    'Select an explicit authentication mode for ' .
                        $op['id'] .
                        '; permitted modes: ' .
                        implode(', ', $permitted),
                );
            }
            $selected =
                $modeName === null ? null : $this->contract['authentication'][$modeName] ?? null;
            if (
                $modeName !== null &&
                ($selected === null || !in_array($modeName, $permitted, true))
            ) {
                throw new SdkError(
                    'authentication',
                    'Authentication mode is not permitted for ' .
                        $op['id'] .
                        '; permitted modes: ' .
                        implode(', ', $permitted),
                );
            }
            $expected = [];
            if ($selected !== null) {
                $credentials =
                    $requestShortcut['credentials'] ??
                    ($o->credentials ??
                        (($clientShortcut['mode'] ?? null) === $modeName
                            ? $clientShortcut['credentials']
                            : $this->options->credentials[$modeName] ?? []));
                foreach ($selected['schemes'] as $scheme) {
                    $credential = $credentials[$scheme['name']] ?? null;
                    if (
                        !is_string($credential) ||
                        $credential === '' ||
                        preg_match('/[\r\n]/', $credential)
                    ) {
                        throw new SdkError(
                            'authentication',
                            'Missing or invalid credential ' .
                                $scheme['name'] .
                                ' for authentication mode ' .
                                $modeName,
                        );
                    }
                    $expected[strtolower($scheme['header'])] =
                        $scheme['type'] === 'bearer' ? 'Bearer ' . $credential : $credential;
                }
            }
            foreach ($this->contract['authentication'] as $mode) {
                foreach ($mode['schemes'] as $scheme) {
                    $name = strtolower($scheme['header']);
                    if (isset($headers[$name]) && $headers[$name] !== ($expected[$name] ?? null)) {
                        throw new SdkError(
                            'authentication',
                            'Request headers conflict with the selected authentication mode',
                        );
                    }
                }
            }
            foreach ($expected as $name => $value) {
                $set($name, $value);
            }
        } elseif (
            $op['authenticated'] ||
            (($op['optionalAuthentication'] ?? false) && $this->options->token)
        ) {
            $auth = $this->contract['auth'] ?? null;
            if (!$auth || !$this->options->token) {
                throw new SdkError('authentication', 'Explicit API credentials are required');
            }
            $set(
                $auth['header'],
                $auth['type'] === 'bearer'
                    ? 'Bearer ' . $this->options->token
                    : $this->options->token,
            );
        }
        if (isset($this->contract['apiVersion'])) {
            $set($this->contract['apiVersion']['header'], $this->contract['apiVersion']['value']);
        }
        if ($o->ifMatch !== null) {
            if (!isset($op['conditional'])) {
                Codec::fail('ifMatch', 'operation does not declare conditional requests');
            }
            $set($op['conditional']['header'], $o->ifMatch);
        }
        $key =
            $o->idempotencyKey ??
            ($headers[strtolower($op['idempotency']['header'] ?? '')] ??
                (null ?? ($op['idempotency']['auto'] ?? false ? bin2hex(random_bytes(16)) : null)));
        if ($key !== null) {
            if (!isset($op['idempotency']) || $key === '') {
                Codec::fail(
                    'idempotencyKey',
                    'a nonempty key and declared capability are required',
                );
            }
            if (preg_match('/^[ \t]|[ \t]$/D', $key)) {
                Codec::fail(
                    'idempotencyKey',
                    'leading or trailing HTTP whitespace would change the key on the wire',
                );
            }
            $set($op['idempotency']['header'], $key);
        }
        $safe =
            $op['replay'] === 'safe' ||
            isset($headers[strtolower($op['idempotency']['header'] ?? '')]);
        if (!$safe) {
            $attempts = 1;
        }
        $body = null;
        if (array_key_exists('body', $input)) {
            if (!isset($op['body'])) {
                Codec::fail('body', 'operation does not accept a body');
            }
            $body = Codec::encode($this->decode($input['body'], $op['body']));
            $set('content-type', $op['mediaType']);
        } elseif ($op['bodyRequired']) {
            Codec::fail('body', 'required body is missing');
        }
        foreach (array_keys($input) as $key) {
            if ($key !== 'body' && !in_array($key, array_column($op['parameters'], 'name'), true)) {
                Codec::fail((string) $key, 'unknown input parameter');
            }
        }
        for ($attempt = 1; $attempt <= $attempts; $attempt++) {
            self::checkCancel($o->cancellation, $attempt === 1 ? 'not_sent' : 'unknown');
            $remaining = $deadline - self::now();
            if ($remaining <= 0) {
                throw new SdkError(
                    'deadline',
                    'Overall deadline exceeded',
                    $attempt === 1 ? 'not_sent' : 'unknown',
                );
            }
            $retryAfter = 0;
            $meta = null;
            $diagnosticError = null;
            try {
                $request = [
                    'url' => $url,
                    'method' => $op['verb'],
                    'headers' => $headers,
                    'body' => $body,
                    'timeoutMs' => min($timeout, $remaining),
                    'cancellation' => $o->cancellation,
                    'stream' =>
                        count(
                            array_filter(
                                $op['responses'],
                                fn($response) => ($response['bodyKind'] ?? null) === 'sse',
                            ),
                        ) > 0,
                    'streamIdleTimeoutMs' =>
                        $o->streamIdleTimeoutMs ?? ($op['stream']['idleTimeoutMs'] ?? 30000),
                    'streamLifetimeMs' => $o->streamLifetimeMs,
                ];
                $response = $this->options->transport
                    ? ($this->options->transport)($request)
                    : $this->send($request);
                $status = $response['status'];
                $rh = array_change_key_case($response['headers'], CASE_LOWER);
                $raw = $response['body'] ?? '';
                $declaredResponse =
                    $op['responses'][(string) $status] ??
                    ($op['responses']['default'] ??
                        ($status >= 200 && $status < 300 && isset($op['successJsonFallback'])
                            ? $op['responses'][$op['successJsonFallback']]
                            : null));
                $redirect =
                    ($op['responses'][(string) $status]['classification'] ?? null) === 'redirect';
                $binary =
                    $status >= 200 &&
                    $status < 300 &&
                    ($declaredResponse['bodyKind'] ?? null) === 'binary';
                $meta = [
                    'status' => $status,
                    'headers' => $rh,
                    'attempts' => $attempt,
                    'durationMs' => self::now() - $start,
                    'url' => $url,
                ];
                $requestIdHeader = strtolower(
                    $this->contract['errors']['requestIdHeader'] ?? 'x-request-id',
                );
                if (isset($rh[$requestIdHeader])) {
                    $meta['requestId'] = $rh[$requestIdHeader];
                }
                if (isset($response['failureCode'])) {
                    throw new \RuntimeException(
                        'HTTP transport failed with code ' . $response['failureCode'],
                    );
                }
                if (
                    $status >= 200 &&
                    $status < 300 &&
                    ($declaredResponse['bodyKind'] ?? null) === 'sse'
                ) {
                    $source = $response['stream'] ?? null;
                    if (
                        !($source instanceof ByteStream) ||
                        strtolower(trim(explode(';', $rh['content-type'] ?? '')[0])) !==
                            'text/event-stream'
                    ) {
                        if ($source instanceof ByteStream) {
                            $source->close();
                        }
                        throw new SdkError(
                            'protocol',
                            'Expected an SSE response stream',
                            'response',
                            false,
                            $meta,
                        );
                    }
                    if ($source instanceof CurlByteStream) {
                        $source->startStream();
                    }
                    $key = spl_object_id($source);
                    $stream = new EventStream(
                        $source,
                        $meta,
                        [
                            'idleTimeoutMs' => $request['streamIdleTimeoutMs'],
                            'maxEventBytes' => $op['stream']['maxEventBytes'] ?? 1048576,
                            'lifetimeMs' => $o->streamLifetimeMs,
                            'cancellation' => $o->cancellation,
                        ],
                        function (string $event, string $raw) use ($op): mixed {
                            $codec = $op['streamEventCodecs'][$event] ?? null;
                            return $codec
                                ? Codec::plainNumbers(
                                    $this->decode(Codec::parse($raw, true), $codec, [
                                        'mode' => 'response',
                                    ]),
                                )
                                : $raw;
                        },
                        function () use ($key): void {
                            unset($this->streams[$key]);
                        },
                    );
                    $this->streams[$key] = $stream;
                    return new Result($stream, $meta, '');
                }
                if (($response['stream'] ?? null) instanceof ByteStream) {
                    try {
                        while (($chunk = $response['stream']->read()) !== null) {
                            $raw .= $chunk;
                        }
                    } finally {
                        $response['stream']->close();
                    }
                }
                $data = null;
                try {
                    if ($raw !== '' && !$binary && !$redirect) {
                        $data = Codec::parse($raw, true);
                    }
                } catch (\Throwable $cause) {
                    if ($status >= 200 && $status < 300) {
                        throw new SdkError(
                            'protocol',
                            'Invalid JSON success response',
                            'response',
                            false,
                            $meta,
                            previous: $cause,
                            raw: $raw,
                        );
                    }
                }
                if ($status >= 300 && $status < 400 && $status !== 304 && !$redirect) {
                    throw new SdkError(
                        'destination',
                        'Redirects are not followed; explicitly configure an approved endpoint',
                        'response',
                        false,
                        $meta,
                    );
                }
                if (($status >= 200 && $status < 300) || $status === 304 || $redirect) {
                    $declared = $declaredResponse;
                    if ($declared === null) {
                        throw new SdkError(
                            'protocol',
                            'Undeclared success status',
                            'response',
                            false,
                            $meta,
                            raw: $raw,
                        );
                    }
                    try {
                        if ($binary) {
                            $contentType = strtolower(
                                trim(explode(';', $rh['content-type'] ?? '')[0]),
                            );
                            if ($contentType !== $declared['mediaType']) {
                                throw new \RuntimeException(
                                    'Unexpected binary response media type',
                                );
                            }
                            $data = $raw;
                        } elseif ($redirect) {
                            $location = $rh['location'] ?? null;
                            if (($declared['locationRequired'] ?? false) && !$location) {
                                throw new \RuntimeException('Missing Location header');
                            }
                            if (
                                $location !== null &&
                                preg_match('/[\\x00-\\x1f\\x7f]/', $location)
                            ) {
                                throw new \RuntimeException('Invalid Location header');
                            }
                            $data =
                                $location === null
                                    ? new \stdClass()
                                    : (object) ['location' => $location];
                        } elseif (isset($declared['codec'])) {
                            if ($raw === '') {
                                throw new \RuntimeException('Missing body');
                            }
                            $data = Codec::plainNumbers(
                                $this->decode($data, $declared['codec'], [
                                    'mode' => 'response',
                                    'path' => 'response',
                                ]),
                            );
                        } elseif ($raw !== '') {
                            throw new \RuntimeException('Unexpected body for an empty response');
                        }
                        if (isset($declared['phpRepresentation'])) {
                            $data = Model::hydrate(
                                $data,
                                $declared['phpRepresentation'],
                                $this->options->redactFields,
                            );
                        } else {
                            $model = $declared['model'] ?? null;
                            if (isset($declared['variants']) && is_object($data)) {
                                $codec = $declared['codec'];
                                $definitions = $this->definitions();
                                for ($depth = 0; isset($codec['reference']); $depth++) {
                                    if ($depth > 256) {
                                        Codec::fail(
                                            'response',
                                            'codec reference exceeds nesting limit',
                                        );
                                    }
                                    $definitions = $codec['definitions'] ?? $definitions;
                                    $codec =
                                        $definitions[$codec['reference']] ??
                                        throw new \LogicException('Unresolved response codec');
                                }
                                $tag = $codec['tag'] ?? null;
                                $model =
                                    $tag === null
                                        ? null
                                        : $declared['variants'][$data->{$tag} ?? ''] ?? null;
                            }
                            if ($model !== null && is_object($data)) {
                                $class = __NAMESPACE__ . '\\' . $model;
                                $data = new $class((array) $data, $this->options->redactFields);
                            }
                        }
                    } catch (\Throwable $cause) {
                        throw new SdkError(
                            'protocol',
                            'Response cannot be represented by the declared schema' .
                                (($reason = Codec::validationFailureMessage($cause)) !== null
                                    ? ': ' . $reason
                                    : ''),
                            'response',
                            false,
                            $meta,
                            previous: $cause,
                            raw: $raw,
                        );
                    }
                    // Decoding and model construction are synchronous; transport
                    // timeouts cannot interrupt them. Include them in the deadline.
                    $meta['durationMs'] = self::now() - $start;
                    if (self::now() >= $deadline) {
                        throw new SdkError(
                            'deadline',
                            'Response decoding exceeded the overall deadline',
                            'response',
                            false,
                            $meta,
                            raw: $raw,
                        );
                    }
                    return new Result($data, $meta, $raw);
                }
                $kind = match (true) {
                    in_array($status, [401, 403], true) => 'authentication',
                    $status === 429 => 'rate_limit',
                    in_array($status, [400, 422], true) => 'validation',
                    in_array($status, [409, 412], true) => 'conflict',
                    $status === 404 => 'not_found',
                    $status >= 500 && $status < 600 => 'server',
                    default => 'api',
                };
                $code = self::field($data, $this->contract['errors']['codePath'] ?? 'code');
                $originalMessage = self::field(
                    $data,
                    $this->contract['errors']['messagePath'] ?? 'message',
                );
                // Text fields use their wire kinds; public details keep exact numeric tokens as strings.
                $details = Codec::redactPlan(
                    Codec::plainNumbers($data),
                    $op['responses'][(string) $status]['codec'] ??
                        ($op['responses']['default']['codec'] ?? []),
                    $this->options->redactFields,
                    $this->definitions(),
                );
                $message = self::field(
                    $details,
                    $this->contract['errors']['messagePath'] ?? 'message',
                );
                $publicCode = self::field(
                    $details,
                    $this->contract['errors']['codePath'] ?? 'code',
                );
                if (isset($this->contract['errors']['detailsPath'])) {
                    $details = self::field($details, $this->contract['errors']['detailsPath']);
                }
                $diagnosticError = $kind;
                $error = new SdkError(
                    $kind,
                    // Match JavaScript trim's Unicode whitespace without changing the message.
                    is_string($message) &&
                    is_string($originalMessage) &&
                    preg_match('/[^\p{Z}\x{0009}-\x{000D}\x{FEFF}]/u', $originalMessage)
                        ? $message
                        : "API returned HTTP $status",
                    'response',
                    $safe &&
                        (in_array($status, $policy['statuses'], true) ||
                            (is_string($code) &&
                                count(
                                    array_filter(
                                        $policy['errors'] ?? [],
                                        fn($rule) => $rule['status'] === $status &&
                                            in_array($code, $rule['codes'], true),
                                    ),
                                ) > 0)),
                    $meta,
                    is_string($code) && is_string($publicCode) ? $publicCode : null,
                    $details,
                    raw: $raw,
                );
                if (isset($rh['retry-after'])) {
                    $retryAfter = max(
                        0,
                        is_numeric($rh['retry-after'])
                            ? (int) ((float) $rh['retry-after'] * 1000)
                            : ((strtotime($rh['retry-after']) ?: time()) - time()) * 1000,
                    );
                }
            } catch (SdkError $error) {
                $diagnosticError = $error->kind;
                throw $error;
            } catch (\Throwable $cause) {
                $diagnosticError = $o->cancellation?->isCancelled()
                    ? 'cancelled'
                    : (self::now() >= $deadline
                        ? 'deadline'
                        : 'transport');
                $error = new SdkError(
                    $diagnosticError,
                    'Request did not produce a usable response; remote outcome is unknown',
                    'unknown',
                    $diagnosticError === 'transport' && $safe && $policy['transport'],
                    $meta,
                    previous: $cause,
                );
            } finally {
                try {
                    if ($this->options->diagnostics) {
                        $event = array_intersect_key(
                            $meta ?? [],
                            array_flip(['status', 'requestId']),
                        ) + [
                            'operation' => $id,
                            'attempt' => $attempt,
                            'durationMs' => self::now() - $start,
                        ];
                        if ($diagnosticError !== null) {
                            $event['errorKind'] = $diagnosticError;
                        }
                        ($this->options->diagnostics)($event);
                    }
                } catch (\Throwable) {
                    /* Hooks must not alter request outcomes. */
                }
            }
            if (!$error->retryAllowed || $attempt >= $attempts || self::now() >= $deadline) {
                throw $error;
            }
            $wait = max(
                $retryAfter,
                random_int(0, (int) ($policy['baseDelayMs'] * 2 ** ($attempt - 1))),
            );
            if (self::now() + $wait >= $deadline) {
                throw new SdkError(
                    'deadline',
                    'Retry wait would exceed the overall deadline',
                    $error->outcome,
                    $error->retryAllowed,
                    $meta,
                );
            }
            self::pause($wait, $o->cancellation);
        }
        throw new \LogicException('Unreachable retry state');
    }
    private function send(array $r): array
    {
        if ($r['stream'] ?? false) {
            $stream = new CurlByteStream($r);
            return [
                'status' => $stream->status,
                'headers' => $stream->headers,
                'stream' => $stream,
            ];
        }
        if (!extension_loaded('curl')) {
            throw new \RuntimeException('ext-curl is required for the default transport');
        }
        $this->curl ??= curl_init();
        $ch = $this->curl;
        curl_reset($ch);
        $headers = [];
        curl_setopt_array($ch, [
            CURLOPT_URL => $r['url'],
            CURLOPT_CUSTOMREQUEST => $r['method'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_TIMEOUT_MS => $r['timeoutMs'],
            CURLOPT_CONNECTTIMEOUT_MS => $r['timeoutMs'],
            CURLOPT_HTTPHEADER => array_map(
                // cURL treats "name:" as suppression; "name;" sends an empty value.
                fn($k, $v) => $v === '' ? "$k;" : "$k: $v",
                array_keys($r['headers']),
                array_values($r['headers']),
            ),
            CURLOPT_NOPROGRESS => false,
            CURLOPT_XFERINFOFUNCTION => static fn() => $r['cancellation']?->isCancelled() ?? false
                ? 1
                : 0,
            CURLOPT_HEADERFUNCTION => static function ($ch, string $line) use (&$headers): int {
                if (str_starts_with($line, 'HTTP/')) {
                    $headers = [];
                } elseif (str_contains($line, ':')) {
                    [$k, $v] = explode(':', $line, 2);
                    $headers[strtolower(trim($k))] = trim($v);
                }
                return strlen($line);
            },
        ]);
        if ($r['body'] !== null) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $r['body']);
        }
        if ($r['method'] === 'HEAD') {
            curl_setopt($ch, CURLOPT_NOBODY, true);
        }
        $body = curl_exec($ch);
        return [
            'status' => curl_getinfo($ch, CURLINFO_RESPONSE_CODE),
            'headers' => $headers,
            'body' => $body === false ? '' : $body,
            'failureCode' => $body === false ? curl_errno($ch) : null,
        ];
    }
    public function close(): void
    {
        foreach ($this->streams as $stream) {
            $stream->close();
        }
        $this->curl = null;
    }
    public function __destruct()
    {
        $this->close();
    }
    private static function field(mixed $value, string $path): mixed
    {
        foreach (explode('.', $path) as $key) {
            if ($value instanceof ParsedNumber) {
                return null;
            }
            $value = is_array($value) ? $value[$key] ?? null : $value->{$key} ?? null;
        }
        return $value;
    }
    private static function resolveLink(string $link, string $base): string
    {
        if (preg_match('/^[a-z][a-z0-9+.-]*:/i', $link)) {
            return $link;
        }
        $parsed = parse_url($base);
        if (str_starts_with($link, '//')) {
            return $parsed['scheme'] . ':' . $link;
        }
        $origin = self::origin($base);
        if (str_starts_with($link, '?')) {
            return $origin . ($parsed['path'] ?? '/') . $link;
        }
        if (str_starts_with($link, '#')) {
            return $base . $link;
        }
        $parts = parse_url($link);
        if ($parts === false) {
            throw new SdkError('destination', 'Invalid continuation URL');
        }
        $path = str_starts_with($link, '/')
            ? $parts['path'] ?? '/'
            : preg_replace('~/[^/]*$~', '/', $parsed['path'] ?? '/') . ($parts['path'] ?? '');
        $segments = [];
        foreach (explode('/', $path) as $segment) {
            $dot = strtolower(rawurldecode($segment));
            if ($dot === '..') {
                array_pop($segments);
            } elseif ($dot !== '.') {
                $segments[] = $segment;
            }
        }
        return $origin .
            '/' .
            ltrim(implode('/', $segments), '/') .
            (isset($parts['query']) ? '?' . $parts['query'] : '') .
            (isset($parts['fragment']) ? '#' . $parts['fragment'] : '');
    }
    public function pages(
        string $id,
        array $input = [],
        ?RequestOptions $options = null,
    ): \Generator {
        $o = $options ?? new RequestOptions();
        $p = $this->operation($id)['pagination'] ?? null;
        if (!$p) {
            Codec::fail('pagination', 'capability is not declared');
        }
        $next = null;
        $limit = $o->maxPages ?? PHP_INT_MAX;
        if ($limit < 1) {
            Codec::fail('maxPages', 'must be positive');
        }
        for ($i = 0; $i < $limit; $i++) {
            self::checkCancel($o->cancellation);
            // Each page owns its request deadline; time spent consuming yields is unbounded.
            $result = $this->request($id, $input, $o, $p['kind'] === 'link' ? $next : null);
            yield $result;
            $previous = $p['kind'] === 'link' ? $next : $input[$p['parameter']] ?? null;
            if ($previous instanceof ParsedNumber) {
                $previous = $previous->value;
            }
            $next = self::field($result->data, $p['next']);
            if ($next === null || $next === '') {
                return;
            }
            if ($p['kind'] === 'link' && !is_string($next)) {
                throw new SdkError('protocol', 'Expected a pagination URL', 'response');
            }
            if ($p['kind'] === 'link') {
                $next = self::resolveLink($next, $result->meta['url']);
            }
            if (
                $next === $previous ||
                ($p['kind'] === 'offset' &&
                    $previous !== null &&
                    (string) $next === (string) $previous) ||
                ($p['kind'] === 'link' && $next === $result->meta['url'])
            ) {
                throw new SdkError(
                    'protocol',
                    'Pagination returned a non-advancing continuation',
                    'response',
                );
            }
            if ($p['kind'] !== 'link') {
                $input[$p['parameter']] = $next;
            }
        }
    }
    public function items(
        string $id,
        array $input = [],
        ?RequestOptions $options = null,
    ): \Generator {
        $p = $this->operation($id)['pagination'] ?? null;
        if (!$p) {
            Codec::fail('pagination', 'capability is not declared');
        }
        $count = 0;
        $limit = $options?->maxItems ?? PHP_INT_MAX;
        if ($limit < 1) {
            Codec::fail('maxItems', 'must be positive');
        }
        foreach ($this->pages($id, $input, $options) as $page) {
            $items = self::field($page->data, $p['items']);
            if (!is_array($items)) {
                throw new SdkError(
                    'protocol',
                    'Pagination items field is not an array',
                    'response',
                );
            }
            foreach ($items as $item) {
                self::checkCancel($options?->cancellation);
                yield $item;
                if (++$count >= $limit) {
                    return;
                }
            }
        }
    }
    public function wait(string $id, array $input, ?RequestOptions $options = null): Result
    {
        $o = $options ?? new RequestOptions();
        $p = $this->operation($id)['polling'] ?? null;
        if (!$p) {
            Codec::fail('polling', 'capability is not declared');
        }
        $deadline = self::now() + ($o->deadlineMs ?? $this->options->deadlineMs);
        $interval = $p['intervalMs'];
        while (true) {
            $remaining = $deadline - self::now();
            if ($remaining <= 0) {
                throw new SdkError(
                    'deadline',
                    'Polling deadline exceeded; remote operation may still be running',
                    'unknown',
                );
            }
            $result = $this->request($id, $input, $o->withDeadline($remaining));
            $state = self::field($result->data, $p['state']);
            if (in_array($state, $p['success'], true)) {
                return $result;
            }
            if (in_array($state, $p['failure'], true)) {
                throw new SdkError(
                    'api',
                    'Operation reached a declared failure state',
                    'response',
                    false,
                    $result->meta,
                );
            }
            self::pause(min((int) $interval, max(0, $deadline - self::now())), $o->cancellation);
            $interval = min($interval * 1.5, 10000);
        }
    }
    private static function webhookError(string $kind, string $code, string $message): never
    {
        throw new SdkError($kind, $message, errorCode: 'webhook_' . $code);
    }
    private static function webhookHeaderValues(array $headers, string $name): array
    {
        $values = [];
        foreach ($headers as $key => $value) {
            if (!is_string($key) || strtolower($key) !== strtolower($name)) {
                continue;
            }
            $parts = is_array($value) ? $value : [$value];
            if (!array_is_list($parts)) {
                self::webhookError(
                    'validation',
                    'invalid_input',
                    'Webhook signing header values must be strings',
                );
            }
            foreach ($parts as $part) {
                if (!is_string($part)) {
                    self::webhookError(
                        'validation',
                        'invalid_input',
                        'Webhook signing header values must be strings',
                    );
                }
                $values[] = $part;
            }
        }
        if (!$values || !array_filter($values, fn($value) => trim($value) !== '')) {
            self::webhookError(
                'authentication',
                'missing_header',
                'Missing webhook signing header: ' . $name,
            );
        }
        return $values;
    }
    private static function webhookScalarHeader(
        array $headers,
        string $name,
        bool $timestamp = false,
    ): string {
        $values = self::webhookHeaderValues($headers, $name);
        if (count($values) !== 1 || str_contains($values[0], ',')) {
            self::webhookError(
                'authentication',
                $timestamp ? 'invalid_timestamp' : 'invalid_signature',
                'Webhook signing header must have exactly one value: ' . $name,
            );
        }
        return trim($values[0]);
    }
    /** @param string $rawBody Original request bytes.
     * @param array<string, string|list<string>> $headers
     * @param string|array<array-key, string> $secrets
     * @param int|null $nowSeconds
     */
    public function verifyWebhook(
        mixed $rawBody,
        mixed $headers,
        mixed $secrets,
        mixed $nowSeconds = null,
    ): array {
        $w = $this->descriptors
            ? $this->descriptors->webhook()
            : $this->contract['webhook'] ?? null;
        if (!$w) {
            Codec::fail('webhook', 'capability is not declared');
        }
        if (!is_string($rawBody)) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Webhook body must be original request bytes; capture it before JSON parsing',
            );
        }
        if (!is_array($headers)) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Webhook headers must be a header map',
            );
        }
        if ($nowSeconds !== null && !is_int($nowSeconds)) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Webhook nowSeconds must be an integer Unix timestamp in seconds',
            );
        }
        $supplied = is_string($secrets) ? [$secrets] : $secrets;
        if (!is_array($supplied) || !$supplied) {
            self::webhookError(
                'validation',
                'invalid_secret',
                'Webhook secrets must be a nonempty string or array of strings',
            );
        }
        $format = $w['format'] ?? 'hex';
        $keys = [];
        foreach ($supplied as $secret) {
            if (!is_string($secret)) {
                self::webhookError(
                    'validation',
                    'invalid_secret',
                    'Webhook secrets must be a nonempty string or array of strings',
                );
            }
            if ($secret === '') {
                continue;
            }
            if ($format !== 'standard-webhooks') {
                $keys[] = $secret;
            } elseif (preg_match('/^whsec_[A-Za-z0-9+\/]{43}=$/D', $secret)) {
                $key = base64_decode(substr($secret, 6), true);
                if (
                    $key !== false &&
                    strlen($key) === 32 &&
                    base64_encode($key) === substr($secret, 6)
                ) {
                    $keys[] = $key;
                }
            }
        }
        if (!$keys) {
            self::webhookError(
                'validation',
                'invalid_secret',
                $format === 'standard-webhooks'
                    ? 'Webhook secret must be whsec_ followed by canonical base64 encoding of 32 bytes'
                    : 'Provide at least one nonempty webhook signing secret',
            );
        }
        $signatures = self::webhookHeaderValues($headers, $w['header']);
        $timestamp = '';
        $candidates = [];
        $prefix = '';
        if ($format === 'timestamped-hex') {
            $parts = [];
            foreach ($signatures as $signature) {
                $parts = array_merge($parts, array_map('trim', explode(',', $signature)));
            }
            $timestamps = array_values(
                array_filter($parts, fn($part) => str_starts_with($part, 't=')),
            );
            if (count($timestamps) !== 1) {
                self::webhookError(
                    'authentication',
                    'invalid_timestamp',
                    'Webhook signature must contain exactly one t= timestamp',
                );
            }
            $timestamp = substr($timestamps[0], 2);
            $candidates = array_map(
                fn($part) => substr($part, 3),
                array_filter($parts, fn($part) => str_starts_with($part, 'v1=')),
            );
        } else {
            $timestamp = self::webhookScalarHeader($headers, $w['timestampHeader'], true);
            if ($format === 'standard-webhooks') {
                $prefix = self::webhookScalarHeader($headers, $w['idHeader']) . '.';
                foreach ($signatures as $signature) {
                    foreach (preg_split('/(?:\s+|,\s*(?=v\d+,))/', trim($signature)) as $part) {
                        if (str_starts_with($part, 'v1,')) {
                            $candidates[] = substr($part, 3);
                        }
                    }
                }
            } else {
                foreach ($signatures as $signature) {
                    $candidates = array_merge(
                        $candidates,
                        array_map('trim', explode(',', $signature)),
                    );
                }
            }
        }
        if (!preg_match('/^\d+$/D', $timestamp) || (float) $timestamp > 9007199254740991) {
            self::webhookError(
                'authentication',
                'invalid_timestamp',
                'Webhook timestamp must be an integer Unix timestamp in seconds',
            );
        }
        if (abs(($nowSeconds ?? time()) - (float) $timestamp) > $w['toleranceSeconds']) {
            self::webhookError(
                'authentication',
                'timestamp_out_of_tolerance',
                'Webhook timestamp is outside the allowed tolerance; check the server clock and delivery age',
            );
        }
        $valid = false;
        foreach ($keys as $key) {
            $digest = hash_hmac(
                'sha256',
                $prefix . $timestamp . $w['separator'] . $rawBody,
                $key,
                true,
            );
            foreach ($candidates as $candidate) {
                if ($format === 'standard-webhooks') {
                    if (!preg_match('/^[A-Za-z0-9+\/]{43}=$/D', $candidate)) {
                        continue;
                    }
                    $actual = base64_decode($candidate, true);
                    if ($actual === false || base64_encode($actual) !== $candidate) {
                        continue;
                    }
                } else {
                    if (!preg_match('/^[a-fA-F0-9]{64}$/D', $candidate)) {
                        continue;
                    }
                    $actual = hex2bin($candidate);
                }
                $valid = hash_equals($digest, $actual) || $valid;
            }
        }
        if (!$valid) {
            self::webhookError(
                'authentication',
                'invalid_signature',
                'Invalid webhook signature; check the signing secret and preserve the original request body bytes without reserializing JSON',
            );
        }
        try {
            $event = Codec::parse($rawBody, true);
        } catch (\Throwable $cause) {
            throw new SdkError(
                'protocol',
                'Invalid webhook JSON',
                'response',
                errorCode: 'webhook_invalid_json',
                previous: $cause,
            );
        }
        $eventType = self::field($event, $w['typeField']);
        $schema = is_string($eventType) ? $w['events'][$eventType] ?? null : null;
        $known = false;
        if ($schema) {
            try {
                $decoded = $this->decode($event, $schema, [
                    'mode' => 'response',
                    'path' => 'event',
                ]);
            } catch (SdkError $cause) {
                if ($cause->kind !== 'validation') {
                    throw $cause;
                }
                throw new SdkError(
                    'protocol',
                    'Invalid webhook payload' .
                        (($reason = Codec::validationFailureMessage($cause)) !== null
                            ? ': ' . $reason
                            : ''),
                    'response',
                    previous: $cause,
                );
            }
            try {
                $this->decode($event, $schema, [
                    'mode' => 'match',
                    'direction' => 'response',
                    'path' => 'event',
                    'allowUnknownResponseFields' => true,
                ]);
                $known = true;
            } catch (SdkError $error) {
                if ($error->kind !== 'validation') {
                    throw $error;
                }
            }
            $event = $decoded;
        }
        $event = Codec::plainNumbers($event);
        if (
            $known &&
            is_string($eventType) &&
            isset($w['eventModels'][$eventType]) &&
            is_object($event)
        ) {
            $class = __NAMESPACE__ . '\\' . $w['eventModels'][$eventType];
            $event = new $class((array) $event, $this->options->redactFields);
        }
        return [
            'event' => $event,
            'known' => $known,
        ];
    }
    public function money(string $currency, string $major): array
    {
        $digits = $this->contract['money']['currencies'][$currency] ?? null;
        if ($digits === null) {
            Codec::fail('currency', 'currency is not declared by this provider');
        }
        if (!preg_match('/^-?(0|[1-9]\d*)(\.\d+)?$/D', $major)) {
            Codec::fail('amount', 'expected an exact decimal string');
        }
        $negative = str_starts_with($major, '-');
        [$whole, $fraction] = array_pad(explode('.', ltrim($major, '-')), 2, '');
        if (strlen($fraction) > $digits) {
            Codec::fail(
                'amount',
                'unsupported precision; rounding must be explicit in application code',
            );
        }
        $amount = ltrim($whole . str_pad($fraction, $digits, '0'), '0');
        $amount = $amount === '' ? '0' : $amount;
        return [
            'currency' => $currency,
            'amount' => ($negative && $amount !== '0' ? '-' : '') . $amount,
        ];
    }
}
