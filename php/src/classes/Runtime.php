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
            throw SdkError::create(
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
            ($contract['retrySemantics'] ?? null) !== 'budgets-2'
        ) {
            throw new \InvalidArgumentException('Unsupported compiled runtime format');
        }
        if (!is_array($contract['operations'] ?? null)) {
            throw new \InvalidArgumentException('Missing compiled operations');
        }
        if (array_key_exists('errors', $contract) && !is_array($contract['errors'])) {
            throw new \InvalidArgumentException('Invalid compiled error settings');
        }
        if (array_key_exists('retry', $contract['errors'] ?? [])) {
            $signal = $contract['errors']['retry'];
            if (
                !is_array($signal) ||
                !is_string($contract['errors']['codePath'] ?? null) ||
                $contract['errors']['codePath'] === '' ||
                !is_string($signal['path'] ?? null) ||
                !preg_match('/^[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*$/D', $signal['path']) ||
                !is_array($signal['retryValues'] ?? null) ||
                !array_is_list($signal['retryValues']) ||
                !$signal['retryValues'] ||
                count(
                    array_filter(
                        $signal['retryValues'],
                        fn($value) => !is_string($value) || trim($value) === '',
                    ),
                ) > 0
            ) {
                throw new \InvalidArgumentException('Invalid compiled error retry signal');
            }
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
        if (array_key_exists('defaultCredentials', $contract)) {
            $d = $contract['defaultCredentials'];
            if (
                !is_array($d) ||
                !is_string($d['mode'] ?? null) ||
                !is_string($d['scheme'] ?? null) ||
                !is_array($d['environment'] ?? null) ||
                !is_array($d['workloadIdentity'] ?? null)
            ) {
                throw new \InvalidArgumentException('Invalid defaultCredentials declaration');
            }
            $schemes = $contract['authentication'][$d['mode']]['schemes'] ?? [];
            $env = $d['environment'];
            $identity = $d['workloadIdentity'];
            if (
                count($schemes) !== 1 ||
                ($schemes[0]['name'] ?? null) !== $d['scheme'] ||
                ($schemes[0]['type'] ?? null) !== 'bearer' ||
                array_diff(array_keys($d), ['mode', 'scheme', 'environment', 'workloadIdentity']) ||
                array_diff(array_keys($env), ['apiKey', 'token']) ||
                array_diff(array_keys($identity), ['tokenPath', 'credentialParameter', 'envPrefix'])
            ) {
                throw new \InvalidArgumentException('Invalid defaultCredentials mode or fields');
            }
            foreach (
                [$env['apiKey'] ?? null, $env['token'] ?? null, $identity['envPrefix'] ?? null]
                as $name
            ) {
                if (!is_string($name) || !preg_match('/^[A-Z_][A-Z0-9_]*$/D', $name)) {
                    throw new \InvalidArgumentException('Invalid defaultCredentials environment');
                }
            }
            if (
                $env['apiKey'] === $env['token'] ||
                !is_string($identity['tokenPath'] ?? null) ||
                !preg_match('~^/(?!/)[A-Za-z0-9/_-]+$~D', $identity['tokenPath']) ||
                !is_string($identity['credentialParameter'] ?? null) ||
                !preg_match('/^[a-z][a-z0-9_]*$/D', $identity['credentialParameter']) ||
                in_array(
                    $identity['credentialParameter'],
                    [
                        'grant_type',
                        'subject_token',
                        'subject_token_type',
                        'requested_token_type',
                        'scope',
                        'client_id',
                        'client_secret',
                        'audience',
                        'resource',
                        'actor_token',
                    ],
                    true,
                )
            ) {
                throw new \InvalidArgumentException('Invalid defaultCredentials exchange settings');
            }
        }
        foreach ($contract['authShortcuts'] ?? [] as $name => $shortcut) {
            $schemes = $contract['authentication'][$shortcut['mode'] ?? '']['schemes'] ?? [];
            if (
                !preg_match('/^[a-z][a-zA-Z0-9]*$/', $name) ||
                ($name !== 'token' &&
                    in_array(strtolower($name), ['ambientcredentials', 'credentialcache', 'baseurl', 'token', 'authmode', 'credentials', 'headers', 'idempotencykey', 'ifmatch', 'timeoutms', 'deadlinems', 'maxattempts', 'signal', 'cancellation', 'maxpages', 'maxitems', 'streamidletimeoutms', 'streamlifetimems', 'allowedorigins', 'allowinsecurehttp', 'transport', 'diagnostics', 'redactfields', 'constructor', 'prototype', '__proto__', 'withdeadline', 'this', 'clientrequestid', 'client_request_id'], true)) ||
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
            if (array_key_exists('autoKeyPrefix', $op['idempotency'] ?? [])) {
                $prefix = $op['idempotency']['autoKeyPrefix'];
                if (!is_string($prefix) || preg_match('/[^\x20-\x7e]|^ /', $prefix)) {
                    throw new \InvalidArgumentException('Invalid compiled automatic key prefix');
                }
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
                (array_key_exists('maxDelayMs', $policy) &&
                    ((!is_int($policy['maxDelayMs']) && !is_float($policy['maxDelayMs'])) ||
                        !is_finite((float) $policy['maxDelayMs']) ||
                        $policy['maxDelayMs'] < 0)) ||
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
                if (
                    array_key_exists('source', $parameter) &&
                    (!in_array($parameter['source'], ['authentication', 'request-option'], true) ||
                        ($parameter['in'] ?? null) !== 'header')
                ) {
                    throw new \InvalidArgumentException('Invalid compiled parameter source');
                }
                if (($parameter['source'] ?? null) === 'request-option') {
                    $plans = json_decode(
                        '{"client_request_id":{"node":"clientRequestId","php":"client_request_id","codec":{"value":{"kind":"string"},"nullable":false,"modelObjectInput":false,"requiredInput":[],"requiredOutput":[],"rejectInput":false,"hiddenOutput":false,"sensitive":false,"checks":{"minLength":1,"maxLength":128,"pattern":"^[\\\\x21-\\\\x7E]+(?![\\\\s\\\\S])"},"phpPattern":"~^[\\\\x21-\\\\x7E]+(?![\\\\s\\\\S])~uD","constraints":true}}}',
                        true,
                        512,
                        JSON_THROW_ON_ERROR,
                    );
                    $option = $plans[$parameter['x-flint-request-option'] ?? ''] ?? null;
                    if (
                        !$option ||
                        ($parameter['required'] ?? false) ||
                        ($parameter['requestOption'] ?? null) !== [
                            'node' => $option['node'],
                            'php' => $option['php'],
                        ] ||
                        $parameter['codec'] != $option['codec']
                    ) {
                        throw new \InvalidArgumentException('Invalid compiled request option');
                    }
                } elseif (
                    isset($parameter['requestOption']) ||
                    isset($parameter['x-flint-request-option'])
                ) {
                    throw new \InvalidArgumentException('Missing compiled request-option source');
                }
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
        if (array_key_exists('jwt', $contract['webhook'] ?? [])) {
            $j = $contract['webhook']['jwt'];
            if (
                !is_array($j) ||
                ($j['algorithm'] ?? null) !== 'ES256' ||
                ($j['scheme'] ?? null) !== 'Bearer' ||
                ($j['bodyHashEncoding'] ?? null) !== 'base64url' ||
                !is_int($j['lifetimeSeconds'] ?? null) ||
                $j['lifetimeSeconds'] < 1 ||
                $j['lifetimeSeconds'] > 3600 ||
                !is_int($j['leewaySeconds'] ?? null) ||
                $j['leewaySeconds'] < 0 ||
                $j['leewaySeconds'] > 60
            ) {
                throw new \InvalidArgumentException('Invalid compiled webhook JWT settings');
            }
            foreach (['header', 'typ', 'issuer', 'jwksPath', 'bodyHashClaim'] as $name) {
                if (
                    !is_string($j[$name] ?? null) ||
                    $j[$name] === '' ||
                    preg_match('/[\s\x00-\x1f\x7f]/', $j[$name])
                ) {
                    throw new \InvalidArgumentException('Invalid compiled webhook JWT ' . $name);
                }
            }
            if (
                !preg_match("/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/D", $j['header']) ||
                ($j['issuer'] !== 'baseUrl' &&
                    (!self::validBaseUrl($j['issuer']) ||
                        !preg_match('/^https:/i', $j['issuer']))) ||
                !preg_match('~^/(?!/)[A-Za-z0-9/._\x7e-]+$~D', $j['jwksPath']) ||
                array_intersect(explode('/', $j['jwksPath']), ['.', '..'])
            ) {
                throw new \InvalidArgumentException('Invalid compiled webhook JWT location');
            }
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
    private function validateHeaderValue(string $value, array $codec, string $path): void
    {
        // Simple headers carry scalars or comma-separated scalar arrays. Keep
        // their spelling and exact numeric tokens while the request codec
        // validates the possible wire interpretations.
        $parseScalar = static fn(string $text): mixed => $text === 'true' || $text === 'false'
            ? $text === 'true'
            : (preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/D', $text)
                ? new ParsedNumber($text)
                : $text);
        $parts = explode(',', $value);
        $failure = null;
        foreach (
            [$value, $parseScalar($value), $parts, array_map($parseScalar, $parts)]
            as $candidate
        ) {
            try {
                $this->decode($candidate, $codec, ['path' => $path]);
                return;
            } catch (SdkError $error) {
                if ($error->kind !== 'validation') {
                    throw $error;
                }
                $failure ??= $error;
            }
        }
        if ($failure !== null) {
            throw $failure;
        }
        throw new \LogicException('Header validation did not evaluate a value');
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
            throw SdkError::create(
                'destination',
                'Invalid destination: embedded credentials and fragments are not allowed',
            );
        }
        $scheme = strtolower($p['scheme'] ?? '');
        if (!in_array($scheme, ['https', 'http'], true)) {
            throw SdkError::create('destination', 'Unsupported destination protocol; use HTTPS');
        }
        if ($scheme === 'http' && !$this->options->allowInsecureHttp) {
            throw SdkError::create(
                'destination',
                'HTTP is disabled; set allowInsecureHttp: true for deliberate local testing',
            );
        }
        if (!in_array(self::origin($url), $this->allowed, true)) {
            throw SdkError::create('destination', 'Destination origin is not in allowedOrigins');
        }
    }
    private static function checkCancel(?Cancellation $c, string $outcome = 'unknown'): void
    {
        if ($c?->isCancelled()) {
            throw SdkError::create(
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
        $op = $this->operation($id);
        $header = strtolower($op['idempotency']['header'] ?? '');
        $key = $header !== '' ? $options?->idempotencyKey : null;
        if ($header !== '' && $key === null) {
            foreach ([$input, $options?->headers ?? []] as $values) {
                foreach ($values as $name => $value) {
                    if (strtolower((string) $name) === $header && $key === null) {
                        $key = $value;
                    }
                }
            }
            if ($key === null && ($op['idempotency']['auto'] ?? false)) {
                $bytes = random_bytes(16);
                $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
                $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
                $hex = bin2hex($bytes);
                $key =
                    ($op['idempotency']['autoKeyPrefix'] ?? '') .
                    substr($hex, 0, 8) .
                    '-' .
                    substr($hex, 8, 4) .
                    '-' .
                    substr($hex, 12, 4) .
                    '-' .
                    substr($hex, 16, 4) .
                    '-' .
                    substr($hex, 20);
            }
        }
        try {
            $effective = $options;
            if (is_string($key)) {
                $effective = new RequestOptions(
                    ...array_replace(get_object_vars($options ?? new RequestOptions()), [
                        'idempotencyKey' => $key,
                    ]),
                );
            }
            return $this->executeRequest($id, $input, $effective, $continuation);
        } catch (SdkError $error) {
            if (is_string($key)) {
                $error->idempotencyKey = $key;
            }
            throw $error;
        }
    }
    private function executeRequest(
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
        $set = function (mixed $name, mixed $value) use (&$headers, $op): void {
            if (
                !is_string($name) ||
                !is_string($value) ||
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
        foreach ($o->headers as $name => $value) {
            $set($name, $value);
        }
        $basePath = rtrim(parse_url($this->baseUrl, PHP_URL_PATH) ?? '', '/');
        if (
            $continuation === null &&
            $basePath !== '' &&
            ($op['path'] === $basePath || str_starts_with($op['path'], $basePath . '/'))
        ) {
            Codec::fail(
                'baseUrl',
                'already includes the operation base path; remove that path from baseUrl',
            );
        }
        $path = $op['path'];
        $query = [];
        foreach ($op['parameters'] as $p) {
            if (($p['source'] ?? null) === 'authentication') {
                if (array_key_exists($p['name'], $input)) {
                    Codec::fail($p['name'], 'supply this header through authentication options');
                }
                continue;
            }
            if (($p['source'] ?? null) === 'request-option') {
                if (array_key_exists($p['name'], $input)) {
                    Codec::fail($p['name'], 'supply this header through request options');
                }
                continue;
            }
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
                    Codec::fail(
                        $p['name'],
                        strtolower($op['idempotency']['header'] ?? '') === strtolower($p['name'])
                            ? $op['resource'] .
                                '.' .
                                $op['method'] .
                                ' requires idempotencyKey; save and reuse the key on retry'
                            : 'required parameter is missing',
                    );
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
        foreach ($op['parameters'] as $p) {
            if (($p['source'] ?? null) !== 'request-option') {
                continue;
            }
            $name = $p['requestOption']['php'];
            $value = $o->{$name};
            $supplied = $headers[strtolower($p['name'])] ?? null;
            if ($value !== null && $supplied !== null && $value !== $supplied) {
                Codec::fail($name, 'conflicting request option and header values');
            }
            $effective = $value ?? $supplied;
            if ($effective !== null) {
                $normalized = $this->decode($effective, $p['codec'], ['path' => $name]);
                $set($p['name'], $normalized);
            }
        }
        $suppliedHeaders = $headers;
        $ambient = $this->contract['defaultCredentials'] ?? null;
        $ambientProvider =
            $ambient && $this->options->ambientCredentials
                ? new AmbientCredentialProvider($ambient, null, $this->baseUrl)
                : null;
        $credentialContext = [
            'baseUrl' => $this->baseUrl,
            'deadline' => $deadline,
            'transport' => $this->options->transport,
            'credentialCache' => $this->options->credentialCache,
            'cancellation' => $o->cancellation,
        ];
        $providers = [];
        $resolveCredential = function (
            #[\SensitiveParameter] $source,
            string $message,
            bool $rejectNewlines = true,
        ) use (&$providers, $credentialContext): string {
            $value = $source;
            if ($source instanceof CredentialProvider || $source instanceof \Closure) {
                try {
                    $credential =
                        $source instanceof CredentialProvider
                            ? ($source instanceof AmbientCredentialProvider
                                ? $source->resolve($credentialContext)
                                : $source->getCredential())
                            : $source();
                    $value = $credential instanceof Credential ? $credential->value : $credential;
                } catch (\Throwable $error) {
                    if (
                        $source instanceof AmbientCredentialProvider &&
                        $error instanceof SdkError
                    ) {
                        throw $error;
                    }
                    // Do not retain provider exceptions, which may include secret values.
                    throw SdkError::create('authentication', 'Credential provider failed');
                }
                if (
                    $source instanceof CredentialProvider &&
                    is_callable([$source, 'invalidate']) &&
                    (!($source instanceof AmbientCredentialProvider) ||
                        $source->canInvalidate($credential))
                ) {
                    $providers[spl_object_id($source)] =
                        $source instanceof AmbientCredentialProvider
                            ? static fn() => $source->invalidate($credential)
                            : static fn() => $source->invalidate();
                }
            }
            if (
                !is_string($value) ||
                $value === '' ||
                ($rejectNewlines && preg_match('/[\r\n]/', $value))
            ) {
                throw SdkError::create('authentication', $message);
            }
            return $value;
        };
        $authenticate = function () use (
            $op,
            $o,
            $set,
            &$headers,
            $suppliedHeaders,
            $resolveCredential,
            &$providers,
            $ambient,
            $ambientProvider,
        ): void {
            $providers = [];
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
                        throw SdkError::create(
                            'authentication',
                            'Use one authentication shortcut or explicit authMode/credentials, not both',
                        );
                    }
                    return $supplied[0] ?? null;
                };
                $authHint = function (array $modes, ?string $scheme = null): string {
                    $shortcuts = [];
                    foreach ($this->contract['authShortcuts'] ?? [] as $name => $value) {
                        if (
                            in_array($value['mode'], $modes, true) &&
                            ($scheme === null || $value['scheme'] === $scheme)
                        ) {
                            $shortcuts[] = $name;
                        }
                    }
                    return $shortcuts
                        ? 'pass ' .
                                implode(' or ', $shortcuts) .
                                ' in ClientOptions or RequestOptions'
                        : ($scheme !== null
                            ? 'pass credentials[' .
                                $modes[0] .
                                '][' .
                                $scheme .
                                '] in ClientOptions or credentials[' .
                                $scheme .
                                '] in RequestOptions, with authMode ' .
                                $modes[0]
                            : 'pass authMode (' .
                                implode(', ', $modes) .
                                ') and credentials in ClientOptions or RequestOptions');
                };
                $clientShortcut = $shortcutAuth($this->options);
                $requestShortcut = $shortcutAuth($o);
                $defaultMode =
                    $this->options->authMode ??
                    ($clientShortcut['mode'] ??
                        ($ambientProvider && in_array($ambient['mode'], $permitted, true)
                            ? $ambient['mode']
                            : null));
                $modeName =
                    $requestShortcut['mode'] ??
                    ($o->authMode ?? ($permitted ? $defaultMode : null));
                if ($modeName === null && $op['authenticated'] && count($permitted) === 1) {
                    $modeName = $permitted[0];
                }
                if ($modeName === null && $op['authenticated']) {
                    throw SdkError::create(
                        'authentication',
                        'Authentication is required; ' . $authHint($permitted),
                    );
                }
                $selected =
                    $modeName === null
                        ? null
                        : $this->contract['authentication'][$modeName] ?? null;
                if (
                    $modeName !== null &&
                    ($selected === null || !in_array($modeName, $permitted, true))
                ) {
                    throw SdkError::create(
                        'authentication',
                        'Authentication mode is not permitted; ' . $authHint($permitted),
                    );
                }
                $expected = [];
                if ($selected !== null) {
                    $credentials =
                        $requestShortcut['credentials'] ??
                        ($o->credentials ??
                            (($clientShortcut['mode'] ?? null) === $modeName
                                ? $clientShortcut['credentials']
                                : $this->options->credentials[$modeName] ?? null));
                    foreach ($selected['schemes'] as $scheme) {
                        $source =
                            $credentials[$scheme['name']] ??
                            ($credentials === null &&
                            $modeName === ($ambient['mode'] ?? null) &&
                            $scheme['name'] === $ambient['scheme']
                                ? $ambientProvider
                                : null);
                        $credential = $resolveCredential(
                            $source,
                            'Missing or invalid credentials; ' .
                                $authHint([$modeName], $scheme['name']),
                        );
                        $expected[strtolower($scheme['header'])] =
                            $scheme['type'] === 'bearer' ? 'Bearer ' . $credential : $credential;
                    }
                }
                foreach ($this->contract['authentication'] as $mode) {
                    foreach ($mode['schemes'] as $scheme) {
                        $name = strtolower($scheme['header']);
                        if (
                            isset($suppliedHeaders[$name]) &&
                            $suppliedHeaders[$name] !== ($expected[$name] ?? null)
                        ) {
                            throw SdkError::create(
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
                    throw SdkError::create(
                        'authentication',
                        'Explicit API credentials are required',
                    );
                }
                $credential = $resolveCredential(
                    $this->options->token,
                    'Explicit API credentials are required',
                    false, // Legacy header validation owns newline rejection.
                );
                $set(
                    $auth['header'],
                    $auth['type'] === 'bearer' ? 'Bearer ' . $credential : $credential,
                );
            }
            if (isset($this->contract['apiVersion'])) {
                $set(
                    $this->contract['apiVersion']['header'],
                    $this->contract['apiVersion']['value'],
                );
            }
            foreach ($op['parameters'] as $p) {
                if (($p['source'] ?? null) !== 'authentication') {
                    continue;
                }
                $value = $headers[strtolower($p['name'])] ?? null;
                if ($value === null) {
                    if ($p['required'] ?? false) {
                        Codec::fail(
                            $p['name'],
                            strtolower($op['idempotency']['header'] ?? '') ===
                            strtolower($p['name'])
                                ? $op['resource'] .
                                    '.' .
                                    $op['method'] .
                                    ' requires idempotencyKey; save and reuse the key on retry'
                                : 'required parameter is missing',
                        );
                    }
                } else {
                    $this->validateHeaderValue($value, $p['codec'], $p['name']);
                }
            }
        };
        if ($o->ifMatch !== null) {
            if (!isset($op['conditional'])) {
                Codec::fail('ifMatch', 'operation does not declare conditional requests');
            }
            $set($op['conditional']['header'], $o->ifMatch);
        }
        $key =
            $o->idempotencyKey ??
            ($headers[strtolower($op['idempotency']['header'] ?? '')] ?? null);
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
        $credentialRetries = 0;
        $mayHaveBeenSent = false;
        for ($attempt = 1; $attempt <= $attempts; $attempt++) {
            self::checkCancel($o->cancellation, $attempt === 1 ? 'not_sent' : 'unknown');
            $remaining = $deadline - self::now();
            if ($remaining <= 0) {
                throw SdkError::create(
                    'deadline',
                    'Overall deadline exceeded',
                    $attempt === 1 ? 'not_sent' : 'unknown',
                );
            }
            $retryAfter = null;
            $meta = null;
            $response = null;
            $diagnosticError = null;
            try {
                $authenticate();
                self::checkCancel($o->cancellation);
                $remaining = $deadline - self::now();
                if ($remaining <= 0) {
                    throw SdkError::create('deadline', 'Overall deadline exceeded');
                }
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
                if ($status > 0) {
                    $mayHaveBeenSent = true;
                }
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
                    ...$o->idempotencyKey !== null ? ['idempotencyKey' => $o->idempotencyKey] : [],
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
                if (isset($rh['retry-after'])) {
                    $retryAfter = self::parseRetryAfter($rh['retry-after']);
                }
                if ($status === 401 && $safe && $credentialRetries === 0 && $providers) {
                    $diagnosticError = 'authentication';
                    if (($response['stream'] ?? null) instanceof ByteStream) {
                        try {
                            $response['stream']->close();
                        } catch (\Throwable) {
                            // The observed 401 remains authoritative if response cleanup fails.
                        }
                    }
                    try {
                        foreach ($providers as $invalidate) {
                            $invalidate();
                        }
                    } catch (\Throwable) {
                        throw SdkError::create(
                            'authentication',
                            'Credential provider invalidation failed',
                            'response',
                            false,
                            $meta,
                        );
                    }
                    $credentialRetries++;
                    $attempts++;
                    continue;
                }
                if (isset($response['failureCode'])) {
                    throw new \RuntimeException(
                        curl_strerror($response['failureCode']),
                        $response['failureCode'],
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
                        throw SdkError::create(
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
                        throw SdkError::create(
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
                    throw SdkError::create(
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
                        throw SdkError::create(
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
                        throw SdkError::create(
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
                        throw SdkError::create(
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
                $signal = $this->contract['errors']['retry'] ?? null;
                $retryValue = $signal !== null ? self::field($data, $signal['path']) : null;
                $diagnosticError = $kind;
                $error = SdkError::create(
                    $kind,
                    // Match JavaScript trim's Unicode whitespace without changing the message.
                    is_string($message) &&
                    is_string($originalMessage) &&
                    preg_match('/[^\p{Z}\x{0009}-\x{000D}\x{FEFF}]/u', $originalMessage)
                        ? $message
                        : "API returned HTTP $status",
                    'response',
                    $safe &&
                        $status !== 401 &&
                        $status !== 412 &&
                        ($signal !== null
                            ? (is_string($retryValue)
                                ? in_array($retryValue, $signal['retryValues'], true)
                                : in_array($status, $policy['statuses'], true))
                            : in_array($status, $policy['statuses'], true) ||
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
                $error->retryAfterMs = $retryAfter;
            } catch (SdkError $error) {
                $diagnosticError = $error->kind;
                throw $error;
            } catch (\Throwable $cause) {
                if (($meta['status'] ?? null) === 401) {
                    $diagnosticError = 'authentication';
                    throw SdkError::create(
                        'authentication',
                        'API returned HTTP 401',
                        'response',
                        false,
                        $meta,
                    );
                }
                $curlCode = isset($response['failureCode'])
                    ? (int) $response['failureCode']
                    : ($this->options->transport === null &&
                    $cause instanceof \RuntimeException &&
                    is_int($cause->getCode())
                        ? $cause->getCode()
                        : 0);
                $expired = self::now() >= $deadline;
                $timedOut = $curlCode === CURLE_OPERATION_TIMEDOUT;
                $notSent =
                    !$mayHaveBeenSent &&
                    !($meta['status'] ?? null) &&
                    in_array(
                        $curlCode,
                        [
                            CURLE_COULDNT_CONNECT,
                            CURLE_COULDNT_RESOLVE_HOST,
                            CURLE_COULDNT_RESOLVE_PROXY,
                        ],
                        true,
                    );
                $mayHaveBeenSent = $mayHaveBeenSent || !$notSent;
                $diagnosticError = $o->cancellation?->isCancelled()
                    ? 'cancelled'
                    : ($expired
                        ? 'deadline'
                        : ($timedOut
                            ? 'timeout'
                            : 'transport'));
                $meta ??= [
                    'status' => null,
                    'headers' => [],
                    'attempts' => $attempt,
                    'durationMs' => self::now() - $start,
                ];
                if (($meta['status'] ?? 0) === 0) {
                    $meta['status'] = null;
                }
                $message = match ($diagnosticError) {
                    'cancelled' => 'Request cancelled; remote outcome is unknown',
                    'deadline' => 'Overall request deadline exceeded; remote outcome is unknown',
                    'timeout' => 'Request attempt timed out; remote outcome is unknown',
                    default => $notSent && $curlCode === CURLE_COULDNT_CONNECT
                        ? 'Connection refused or unavailable; request was not sent'
                        : ($notSent &&
                        in_array(
                            $curlCode,
                            [CURLE_COULDNT_RESOLVE_HOST, CURLE_COULDNT_RESOLVE_PROXY],
                            true,
                        )
                            ? 'DNS lookup failed; request was not sent'
                            : 'Transport failed before a usable response; remote outcome is unknown'),
                };
                $code = match ($diagnosticError) {
                    'deadline' => 'deadline_exceeded',
                    'timeout' => 'request_timeout',
                    default => match ($curlCode) {
                        CURLE_COULDNT_CONNECT => 'ECONNREFUSED',
                        CURLE_COULDNT_RESOLVE_HOST => 'ENOTFOUND',
                        CURLE_COULDNT_RESOLVE_PROXY => 'ENOTFOUND',
                        default => 'transport_failure',
                    },
                };
                $error = SdkError::create(
                    $diagnosticError,
                    $message,
                    $notSent ? 'not_sent' : 'unknown',
                    in_array($diagnosticError, ['transport', 'timeout'], true) &&
                        $safe &&
                        ($meta['status'] ?? null) !== 412 &&
                        $policy['transport'],
                    $meta,
                    $code,
                    [
                        'curlCode' => $curlCode ?: null,
                        'curlError' =>
                            $curlCode > 0 && $curlCode < 100 ? curl_strerror($curlCode) : null,
                    ],
                    previous: $cause,
                );
                $error->retryAfterMs = $retryAfter;
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
            $d = min(
                $policy['baseDelayMs'] * 2 ** ($attempt - $credentialRetries - 1),
                $policy['maxDelayMs'] ?? PHP_FLOAT_MAX,
            );
            $wait = max($retryAfter ?? 0, $d / 2 + ((random_int(0, 1000000) / 1000000) * $d) / 2);
            if (self::now() + $wait >= $deadline) {
                throw $error;
            }
            self::pause((int) ceil($wait), $o->cancellation);
        }
        throw new \LogicException('Unreachable retry state');
    }
    private static function parseRetryAfter(string $instruction): ?float
    {
        $value = trim($instruction, " \t");
        if (preg_match('/^\d+(?:\.\d+)?$/D', $value)) {
            $ms = (float) $value * 1000;
            return is_finite($ms) ? $ms : null;
        }
        if (
            !preg_match(
                '/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [1-9]\d{3} \d{2}:\d{2}:\d{2} GMT$/D',
                $value,
            )
        ) {
            return null;
        }
        $date = \DateTimeImmutable::createFromFormat(
            '!D, d M Y H:i:s \G\M\T',
            $value,
            new \DateTimeZone('UTC'),
        );
        return $date !== false && $date->format('D, d M Y H:i:s \G\M\T') === $value
            ? max(0, $date->getTimestamp() * 1000 - microtime(true) * 1000)
            : null;
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
        $boundedBody = '';
        if (isset($r['maxResponseBytes'])) {
            curl_setopt($ch, CURLOPT_WRITEFUNCTION, static function ($ch, string $chunk) use (
                &$boundedBody,
                $r,
            ): int {
                if (strlen($boundedBody) + strlen($chunk) > $r['maxResponseBytes']) {
                    return 0;
                }
                $boundedBody .= $chunk;
                return strlen($chunk);
            });
        }
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
            'body' => $body === false ? '' : (isset($r['maxResponseBytes']) ? $boundedBody : $body),
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
            throw SdkError::create('destination', 'Invalid continuation URL');
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
        $limit = $o->maxPages ?? 1000;
        $seen = [];
        $emptyPages = 0;
        if ($limit < 1) {
            Codec::fail('maxPages', 'must be positive');
        }
        for ($i = 0; $i < $limit; $i++) {
            self::checkCancel($o->cancellation);
            // Each page owns its request deadline; time spent consuming yields is unbounded.
            $result = $this->request($id, $input, $o, $p['kind'] === 'link' ? $next : null);
            yield $result;
            $previous =
                $p['kind'] === 'link'
                    ? $next ?? $result->meta['url']
                    : $input[$p['parameter']] ?? null;
            if ($previous instanceof ParsedNumber) {
                $previous = $previous->value;
            }
            $next = self::field($result->data, $p['next']);
            if ($next === null || $next === '') {
                return;
            }
            $values = self::field($result->data, $p['items']);
            $emptyPages = is_array($values) && count($values) === 0 ? $emptyPages + 1 : 0;
            if ($emptyPages >= 2) {
                throw SdkError::create(
                    'protocol',
                    'Pagination returned consecutive empty pages with continuations',
                    'response',
                    false,
                    $result->meta,
                    'pagination_empty_pages',
                );
            }
            if ($p['kind'] === 'link' && !is_string($next)) {
                throw SdkError::create('protocol', 'Expected a pagination URL', 'response');
            }
            if ($p['kind'] === 'link') {
                $next = self::resolveLink($next, $result->meta['url']);
            }
            if (
                isset($seen[(string) $next]) ||
                $next === $previous ||
                ($p['kind'] === 'offset' &&
                    $previous !== null &&
                    (string) $next === (string) $previous) ||
                ($p['kind'] === 'link' && $next === $result->meta['url'])
            ) {
                throw SdkError::create(
                    'protocol',
                    'Pagination returned a repeated continuation (cursor cycle)',
                    'response',
                );
            }
            if ($previous !== null) {
                $seen[(string) $previous] = true;
            }
            $seen[(string) $next] = true;
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
                throw SdkError::create(
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
                throw SdkError::create(
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
                throw SdkError::create(
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
        throw SdkError::create($kind, $message, errorCode: 'webhook_' . $code);
    }
    private static function webhookHeaderValues(
        array $headers,
        string $name,
        bool $optional = false,
    ): array {
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
            if ($optional) {
                return [];
            }
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
    /** Per-URL JWKS state: jwks document, parsed keys, fetchedAt, expiresAt, attempt, retryAfter. */
    private static array $webhookKeyStates = [];
    private static array $webhookKeyFlights = [];

    private static function webhookBase64url(mixed $value): ?string
    {
        if (!is_string($value) || !preg_match('/^[A-Za-z0-9_-]+$/D', $value)) {
            return null;
        }
        $decoded = base64_decode(strtr($value, '-_', '+/'), true);
        return $decoded !== false &&
            rtrim(strtr(base64_encode($decoded), '+/', '-_'), '=') === $value
            ? $decoded
            : null;
    }
    /** Index just past the JSON string literal starting at $start in already-valid JSON. */
    private static function webhookJsonStringEnd(string $text, int $start): int
    {
        $index = $start + 1;
        while ($text[$index] !== '"') {
            $index += $text[$index] === '\\' ? 2 : 1;
        }
        return $index + 1;
    }
    /** @return list<string> Raw direct members or elements of already-valid JSON's outer container. */
    private static function webhookJsonItems(string $text): array
    {
        $items = [];
        $depth = 0;
        $start = 0;
        for ($index = 0, $length = strlen($text); $index < $length; $index++) {
            $char = $text[$index];
            if ($char === '"') {
                $index = self::webhookJsonStringEnd($text, $index) - 1;
            } elseif ($char === '{' || $char === '[') {
                if ($depth++ === 0) {
                    $start = $index + 1;
                }
            } elseif (
                ($char === ',' && $depth === 1) ||
                (($char === '}' || $char === ']') && --$depth === 0)
            ) {
                $item = trim(substr($text, $start, $index - $start));
                if ($item !== '') {
                    $items[] = $item;
                }
                $start = $index + 1;
            }
        }
        return $items;
    }
    /**
     * One JSON object with unique direct member names, mapped to raw member text.
     * json_decode() otherwise accepts duplicate members and keeps the last value.
     * @return ?array<string, string>
     */
    private static function webhookJsonObject(string $text): ?array
    {
        try {
            if (!(json_decode($text, false, 512, JSON_THROW_ON_ERROR) instanceof \stdClass)) {
                return null;
            }
        } catch (\JsonException) {
            return null;
        }
        $members = [];
        foreach (self::webhookJsonItems($text) as $item) {
            $end = self::webhookJsonStringEnd($item, 0);
            $name = (string) json_decode(substr($item, 0, $end), false, 512, JSON_THROW_ON_ERROR);
            if (array_key_exists($name, $members)) {
                return null;
            }
            $members[$name] = ltrim(substr($item, strpos($item, ':', $end) + 1));
        }
        return $members;
    }
    private static function webhookJsonString(?array $members, string $name): ?string
    {
        $raw = $members[$name] ?? null;
        if (!is_string($raw) || !str_starts_with($raw, '"')) {
            return null;
        }
        $value = json_decode($raw, false, 512, JSON_THROW_ON_ERROR);
        return is_string($value) ? $value : null;
    }
    private static function webhookJsonInteger(?array $members, string $name): ?int
    {
        $raw = $members[$name] ?? null;
        if (!is_string($raw) || !preg_match('/^-?(?:0|[1-9][0-9]*)$/D', $raw)) {
            return null;
        }
        $value = json_decode($raw, false, 512, JSON_THROW_ON_ERROR);
        return is_int($value) && abs($value) <= 9007199254740991 ? $value : null;
    }
    /**
     * Validate a JWKS document's shape: unique members, a keys array, and a string kid per key.
     * @return list<array{kid: string, members: array<string, string>}>
     */
    private static function webhookJwks(string $document): array
    {
        $keys = self::webhookJsonObject($document)['keys'] ?? null;
        if (!is_string($keys) || !str_starts_with($keys, '[')) {
            throw new \RuntimeException('Invalid JWKS');
        }
        $result = [];
        foreach (self::webhookJsonItems($keys) as $item) {
            $members = self::webhookJsonObject($item);
            $kid = self::webhookJsonString($members, 'kid');
            if ($members === null || $kid === null) {
                throw new \RuntimeException('Invalid JWK');
            }
            $result[] = ['kid' => $kid, 'members' => $members];
        }
        return $result;
    }
    /**
     * Select the PEM key for kid, ignoring other keys including unsupported key types. A duplicate
     * kid makes the trusted set ambiguous; a unique but unusable key fails only the token naming it.
     * @return array{0: 'key'|'unknown'|'duplicate'|'unusable', 1: ?string}
     */
    private static function webhookSelectKey(array $keys, string $kid): array
    {
        $matches = array_values(array_filter($keys, fn($key) => $key['kid'] === $kid));
        if (!$matches) {
            return ['unknown', null];
        }
        if (count($matches) !== 1) {
            return ['duplicate', null];
        }
        $key = $matches[0]['members'];
        $x = self::webhookBase64url(self::webhookJsonString($key, 'x'));
        $y = self::webhookBase64url(self::webhookJsonString($key, 'y'));
        if (
            $x === null ||
            $y === null ||
            strlen($x) !== 32 ||
            strlen($y) !== 32 ||
            self::webhookJsonString($key, 'kty') !== 'EC' ||
            self::webhookJsonString($key, 'crv') !== 'P-256' ||
            (array_key_exists('alg', $key) && self::webhookJsonString($key, 'alg') !== 'ES256') ||
            (array_key_exists('use', $key) && self::webhookJsonString($key, 'use') !== 'sig')
        ) {
            return ['unusable', null];
        }
        $pem =
            "-----BEGIN PUBLIC KEY-----\n" .
            chunk_split(
                base64_encode(
                    hex2bin('3059301306072a8648ce3d020106082a8648ce3d03010703420004') . $x . $y,
                ),
                64,
                "\n",
            ) .
            "-----END PUBLIC KEY-----\n";
        return openssl_pkey_get_public($pem) === false ? ['unusable', null] : ['key', $pem];
    }
    private static function webhookApcu(): bool
    {
        return function_exists('apcu_fetch') && function_exists('apcu_enabled') && \apcu_enabled();
    }
    /**
     * Read the shared JWKS state, ignoring implausible values that could pin a key set or block
     * refreshes: fetchedAt over 60 seconds ahead, more than a 24-hour TTL, or throttles more than
     * two minutes ahead.
     */
    private static function webhookSharedKeyState(?object $cache, string $key): array
    {
        $shared =
            $cache !== null ? $cache->get($key) : (self::webhookApcu() ? \apcu_fetch($key) : null);
        if (!is_array($shared)) {
            return [];
        }
        $now = microtime(true);
        $state = [];
        if (
            is_string($shared['jwks'] ?? null) &&
            is_numeric($shared['fetchedAt'] ?? null) &&
            is_numeric($shared['expiresAt'] ?? null) &&
            $shared['fetchedAt'] <= $now + 60 &&
            $shared['expiresAt'] <= $shared['fetchedAt'] + 86400
        ) {
            $state = [
                'jwks' => $shared['jwks'],
                'fetchedAt' => (float) $shared['fetchedAt'],
                'expiresAt' => (float) $shared['expiresAt'],
            ];
        }
        foreach (['attempt', 'retryAfter'] as $name) {
            if (is_numeric($shared[$name] ?? null) && $shared[$name] <= $now + 120) {
                $state[$name] = (float) $shared[$name];
            }
        }
        return $state;
    }
    /** Shared state uses the PSR-16 cache when supplied, else APCu when enabled, else this process. */
    private static function webhookKeyState(?object $cache, string $url): array
    {
        $state = self::$webhookKeyStates[$url] ?? [];
        try {
            $shared = self::webhookSharedKeyState($cache, hash('sha256', 'webhook-jwks:' . $url));
            if (isset($shared['jwks']) && $shared['fetchedAt'] > ($state['fetchedAt'] ?? 0)) {
                $state =
                    ['keys' => self::webhookJwks($shared['jwks'])] +
                    array_intersect_key($shared, [
                        'jwks' => 0,
                        'fetchedAt' => 0,
                        'expiresAt' => 0,
                    ]) +
                    $state;
            }
            foreach (['attempt', 'retryAfter'] as $name) {
                if (isset($shared[$name])) {
                    $state[$name] = max($shared[$name], $state[$name] ?? 0);
                }
            }
        } catch (\Exception) {
            /* Ignore a malformed or unavailable optional shared cache entry. */
        }
        return self::$webhookKeyStates[$url] = $state;
    }
    private static function webhookStoreKeyState(?object $cache, string $url, array $state): void
    {
        self::$webhookKeyStates[$url] = $state;
        unset($state['keys']);
        $key = hash('sha256', 'webhook-jwks:' . $url);
        try {
            if ($cache === null && !self::webhookApcu()) {
                return;
            }
            // Another worker may have stored a newer set since this one read it; keep that set.
            $shared = self::webhookSharedKeyState($cache, $key);
            if (isset($shared['jwks']) && $shared['fetchedAt'] > ($state['fetchedAt'] ?? 0)) {
                foreach (['attempt', 'retryAfter'] as $name) {
                    $shared[$name] = max($shared[$name] ?? 0, $state[$name] ?? 0);
                }
                $state = $shared;
            }
            if ($cache !== null) {
                $cache->set($key, $state, 86400);
            } else {
                \apcu_store($key, $state, 86400);
            }
        } catch (\Exception) {
            /* A cache outage must not prevent trusted HTTP key retrieval. */
        }
    }
    private static function webhookFetchKeys(string $url, array $options, \Closure $send): array
    {
        if (isset(self::$webhookKeyFlights[$url])) {
            $flight = self::$webhookKeyFlights[$url];
            if (\Fiber::getCurrent() === null) {
                self::webhookError(
                    'transport',
                    'jwks_unavailable',
                    'Reentrant JWKS fetch requires a Fiber scheduler',
                );
            }
            // Like credential exchange waiters, yield a monotonic deadline in milliseconds.
            $deadline = hrtime(true) / 1e6 + 5000;
            while (!$flight->done) {
                if (hrtime(true) / 1e6 >= $deadline) {
                    self::webhookError(
                        'transport',
                        'jwks_unavailable',
                        'Webhook JWKS wait timed out',
                    );
                }
                \Fiber::suspend(['deadline' => $deadline, 'cancellation' => null]);
            }
            if ($flight->error !== null) {
                throw $flight->error;
            }
            return $flight->result;
        }
        $flight = (object) ['done' => false, 'result' => null, 'error' => null];
        self::$webhookKeyFlights[$url] = $flight;
        $cache = $options['cache'] ?? null;
        try {
            // Inside the try, so even an \Error from a cache clears this flight.
            $state = self::webhookKeyState($cache, $url);
            $state['attempt'] = microtime(true);
            self::webhookStoreKeyState($cache, $url, $state);
            $deadline = hrtime(true) / 1e6 + 5000;
            if (isset($options['http_client'])) {
                $request = $options['request_factory']
                    ->createRequest('GET', $url)
                    ->withHeader('Accept', 'application/json');
                $response = $options['http_client']->sendRequest($request);
                $stream = $response->getBody();
                $body = '';
                try {
                    while (true) {
                        if (hrtime(true) / 1e6 >= $deadline) {
                            throw new \RuntimeException('JWKS timeout');
                        }
                        $chunk = $stream->read(min(8192, 256 * 1024 + 1 - strlen($body)));
                        if ($chunk === '') {
                            if ($stream->eof()) {
                                break;
                            }
                            throw new \RuntimeException('JWKS stream stalled');
                        }
                        $body .= $chunk;
                        if (strlen($body) > 256 * 1024) {
                            throw new \RuntimeException('JWKS response too large');
                        }
                    }
                } finally {
                    $stream->close();
                }
                $result = [
                    'status' => $response->getStatusCode(),
                    'headers' => ['cache-control' => $response->getHeaderLine('Cache-Control')],
                    'body' => $body,
                ];
            } else {
                $result = $send([
                    'url' => $url,
                    'method' => 'GET',
                    'headers' => ['accept' => 'application/json'],
                    'body' => null,
                    'timeoutMs' => 5000,
                    'maxResponseBytes' => 256 * 1024,
                    'cancellation' => null,
                ]);
            }
            if (
                hrtime(true) / 1e6 >= $deadline ||
                ($result['status'] ?? null) !== 200 ||
                !empty($result['failureCode']) ||
                !is_string($result['body'] ?? null) ||
                strlen($result['body']) > 256 * 1024
            ) {
                throw new \RuntimeException('JWKS HTTP failure');
            }
            $keys = self::webhookJwks($result['body']);
            $control = '';
            foreach ($result['headers'] ?? [] as $name => $value) {
                if (strtolower($name) === 'cache-control') {
                    $control = is_array($value) ? implode(',', $value) : $value;
                }
            }
            $ttl = preg_match(
                '/(?:^|,)\s*max-age\s*=\s*"?(\d+)"?(?=\s*(?:,|$))/i',
                $control,
                $match,
            )
                ? min(86400, max(300, (float) $match[1]))
                : 900;
            $now = microtime(true);
            $state = [
                'jwks' => $result['body'],
                'keys' => $keys,
                'fetchedAt' => $now,
                'expiresAt' => $now + $ttl,
                'attempt' => $state['attempt'],
                'retryAfter' => 0,
            ];
            self::webhookStoreKeyState($cache, $url, $state);
            return $flight->result = $state;
        } catch (\Exception | \Psr\Http\Client\ClientExceptionInterface) {
            // Serve the last successful set for 24 hours, retrying at most once a minute.
            $state = self::webhookKeyState($cache, $url);
            $now = microtime(true);
            if (isset($state['keys']) && $now - $state['fetchedAt'] <= 86400) {
                $state['retryAfter'] = $now + 60;
                self::webhookStoreKeyState($cache, $url, $state);
                return $flight->result = $state;
            }
            $flight->error = SdkError::create(
                'transport',
                'Webhook JWKS unavailable; respond with 5xx so delivery can retry',
                errorCode: 'webhook_jwks_unavailable',
            );
            throw $flight->error;
        } catch (\Throwable $error) {
            // Programming errors propagate unchanged, to Fiber waiters as well.
            throw ($flight->error = $error);
        } finally {
            $flight->done = true;
            unset(self::$webhookKeyFlights[$url]);
        }
    }
    private static function webhookJwtKey(
        string $url,
        string $kid,
        array $options,
        \Closure $send,
    ): string {
        if (array_key_exists('jwks', $options)) {
            try {
                [$status, $pem] = self::webhookSelectKey(
                    self::webhookJwks(json_encode($options['jwks'], JSON_THROW_ON_ERROR)),
                    $kid,
                );
            } catch (\Exception) {
                [$status, $pem] = ['duplicate', null];
            }
            if ($status === 'duplicate') {
                self::webhookError(
                    'validation',
                    'invalid_input',
                    'Webhook jwks must be a JWKS object with a string kid on every key and unique key IDs',
                );
            }
        } else {
            $cache = $options['cache'] ?? null;
            $state = self::webhookKeyState($cache, $url);
            $now = microtime(true);
            if (
                isset(self::$webhookKeyFlights[$url]) ||
                !isset($state['keys']) ||
                ($state['expiresAt'] <= $now &&
                    ($now >= ($state['retryAfter'] ?? 0) || $now - $state['fetchedAt'] > 86400))
            ) {
                $state = self::webhookFetchKeys($url, $options, $send);
            }
            if (
                !array_filter($state['keys'], fn($key) => $key['kid'] === $kid) &&
                microtime(true) - ($state['attempt'] ?? 0) >= 60
            ) {
                $state = self::webhookFetchKeys($url, $options, $send);
            }
            [$status, $pem] = self::webhookSelectKey($state['keys'], $kid);
            // Like a malformed trusted set, a duplicate kid is a provider fault and retryable.
            if ($status === 'duplicate') {
                self::webhookError(
                    'transport',
                    'jwks_unavailable',
                    'Webhook JWKS unavailable; respond with 5xx so delivery can retry',
                );
            }
        }
        // A token naming an unusable key is invalid, never an outage, so forged tokens cannot cause 5xx.
        if ($status === 'unusable' || $pem === null) {
            self::webhookError(
                'authentication',
                $status === 'unknown' ? 'unknown_key' : 'invalid_token',
                $status === 'unknown' ? 'Webhook signing key is unknown' : 'Invalid webhook JWT',
            );
        }
        return $pem;
    }
    /** @param array<string, mixed> $options @return array<string, mixed> */
    public function verifyWebhookDelivery(mixed $rawBody, mixed $headers, array $options): array
    {
        return self::verifyWebhookDeliveryFromPlan(
            $this->descriptors ?? $this->contract,
            $rawBody,
            $headers,
            $options + ['base_url' => $this->baseUrl],
            $this->options->redactFields,
            fn(array $request): array => $this->options->transport
                ? ($this->options->transport)($request)
                : $this->send($request),
        );
    }
    /** @param array<string, mixed> $options @return array<string, mixed> */
    public static function verifyWebhookDeliveryFromPlan(
        array|Internal\DescriptorSource $source,
        mixed $rawBody,
        mixed $headers,
        array $options,
        array $redactFields = [],
        ?\Closure $send = null,
    ): array {
        $w =
            $source instanceof Internal\DescriptorSource
                ? $source->webhook()
                : $source['webhook'] ?? null;
        if (!$w) {
            Codec::fail('webhook', 'capability is not declared');
        }
        if (
            array_diff(array_keys($options), [
                'endpoint_ids',
                'secrets',
                'jwks',
                'base_url',
                'now_seconds',
                'cache',
                'http_client',
                'request_factory',
            ])
        ) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Unknown webhook verification option',
            );
        }
        $strings = static function (mixed $value): array {
            $values = is_string($value) ? [$value] : $value;
            if (!is_array($values) || !array_is_list($values) || !$values) {
                self::webhookError(
                    'validation',
                    'invalid_input',
                    'Supply a nonempty string or list of strings',
                );
            }
            foreach ($values as $item) {
                if (!is_string($item) || $item === '') {
                    self::webhookError('validation', 'invalid_input', 'Supply nonempty strings');
                }
            }
            return $values;
        };
        $endpointIds = array_key_exists('endpoint_ids', $options)
            ? $strings($options['endpoint_ids'])
            : null;
        if (array_key_exists('secrets', $options)) {
            $strings($options['secrets']);
        }
        if (!$endpointIds && !array_key_exists('secrets', $options)) {
            self::webhookError('validation', 'invalid_input', 'Supply endpoint_ids or secrets');
        }
        foreach (
            [
                'cache' => 'Psr\\SimpleCache\\CacheInterface',
                'http_client' => 'Psr\\Http\\Client\\ClientInterface',
                'request_factory' => 'Psr\\Http\\Message\\RequestFactoryInterface',
            ]
            as $option => $interface
        ) {
            if (
                array_key_exists($option, $options) &&
                (!interface_exists($interface) ||
                    (!is_object($options[$option]) || !is_a($options[$option], $interface)))
            ) {
                self::webhookError(
                    'validation',
                    'invalid_input',
                    'Supply an installed PSR interface implementation for ' . $option,
                );
            }
        }
        if (isset($options['http_client']) !== isset($options['request_factory'])) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Supply http_client with request_factory',
            );
        }
        $now = $options['now_seconds'] ?? time();
        if (
            !is_int($now) ||
            abs($now) >= 100000000000 ||
            (array_key_exists('now_seconds', $options) && $options['now_seconds'] === null)
        ) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Webhook now_seconds must be integer Unix seconds, not milliseconds',
            );
        }
        if (!is_string($rawBody) || !is_array($headers)) {
            self::webhookError(
                'validation',
                'invalid_input',
                'Supply original body bytes and a header map',
            );
        }
        $authorization = self::webhookHeaderValues(
            $headers,
            $w['jwt']['header'] ?? 'authorization',
            true,
        );
        $bearer = array_filter(
            $authorization,
            fn($value) => preg_match('/(?:^|,)[ \t]*Bearer(?:[ \t]|$)/i', trim($value)),
        );
        if (!$bearer || !$endpointIds) {
            if (
                isset($options['secrets']) &&
                ($w['algorithm'] ?? null) === 'hmac-sha256' &&
                self::webhookHeaderValues($headers, $w['header'], true) &&
                (($w['format'] ?? '') === 'timestamped-hex' ||
                    self::webhookHeaderValues($headers, $w['timestampHeader'], true)) &&
                (($w['format'] ?? '') !== 'standard-webhooks' ||
                    self::webhookHeaderValues($headers, $w['idHeader'], true))
            ) {
                return self::verifyWebhookFromPlan(
                    $source,
                    $rawBody,
                    $headers,
                    $options['secrets'],
                    $now,
                    $redactFields,
                ) + ['signing_method' => 'hmac'];
            }
            self::webhookError(
                'authentication',
                'missing_header',
                'Missing webhook signing headers',
            );
        }
        $j = $w['jwt'] ?? null;
        if (!$j) {
            self::webhookError(
                'validation',
                'invalid_input',
                'JWT webhook verification is not declared',
            );
        }
        if (!extension_loaded('openssl')) {
            self::webhookError(
                'validation',
                'invalid_input',
                'ES256 verification requires ext-openssl',
            );
        }
        $issuer = $j['issuer'];
        if ($issuer === 'baseUrl') {
            if (
                !is_string($options['base_url'] ?? null) ||
                (!self::validBaseUrl($options['base_url']) ||
                    !preg_match('/^https?:/i', $options['base_url']))
            ) {
                self::webhookError(
                    'validation',
                    'invalid_input',
                    'Supply a trusted API base_url for JWT verification',
                );
            }
            $issuer = self::origin($options['base_url']);
        }
        $invalid = static fn() => self::webhookError(
            'authentication',
            'invalid_token',
            'Invalid webhook JWT',
        );
        if (
            count($authorization) !== 1 ||
            strlen($authorization[0]) > 16400 ||
            !preg_match(
                '/^Bearer ([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/iD',
                trim($authorization[0]),
                $parts,
            )
        ) {
            $invalid();
        }
        $jsonPart = static function (string $part): ?array {
            $text = self::webhookBase64url($part);
            return $text === null ? null : self::webhookJsonObject($text);
        };
        $jose = $jsonPart($parts[1]);
        $claims = $jsonPart($parts[2]);
        $signature = self::webhookBase64url($parts[3]);
        $kid = self::webhookJsonString($jose, 'kid');
        // Header members are exactly alg, kid and typ; claims are typed as in Flint's reference verifier.
        $jti = self::webhookJsonString($claims, 'jti');
        $aud = self::webhookJsonString($claims, 'aud');
        $iat = self::webhookJsonInteger($claims, 'iat');
        $exp = self::webhookJsonInteger($claims, 'exp');
        $bodyHash = self::webhookJsonString($claims, $j['bodyHashClaim']);
        if (
            $jose === null ||
            count($jose) !== 3 ||
            self::webhookJsonString($jose, 'alg') !== 'ES256' ||
            self::webhookJsonString($jose, 'typ') !== $j['typ'] ||
            $kid === null ||
            $kid === '' ||
            $signature === null ||
            strlen($signature) !== 64 ||
            $claims === null ||
            self::webhookJsonString($claims, 'iss') !== $issuer ||
            $aud === null ||
            $iat === null ||
            $exp === null ||
            $jti === null ||
            trim($jti) === '' ||
            $bodyHash === null ||
            array_key_exists('sub', $claims)
        ) {
            $invalid();
        }
        $send ??= static function (array $request) use ($source, $issuer): array {
            $runtime = new self(
                $source,
                new ClientOptions(
                    baseUrl: $issuer,
                    allowInsecureHttp: str_starts_with($issuer, 'http://'),
                ),
                true,
            );
            try {
                return $runtime->send($request);
            } finally {
                $runtime->close();
            }
        };
        $key = self::webhookJwtKey(rtrim($issuer, '/') . $j['jwksPath'], $kid, $options, $send);
        // JOSE uses fixed-width r||s; OpenSSL expects two signed DER INTEGERs.
        $integers = '';
        foreach ([substr($signature, 0, 32), substr($signature, 32)] as $integer) {
            $integer = ltrim($integer, "\0");
            if ($integer === '' || ord($integer[0]) >= 128) {
                $integer = "\0" . $integer;
            }
            $integers .= "\x02" . chr(strlen($integer)) . $integer;
        }
        $der = "\x30" . chr(strlen($integers)) . $integers;
        if (openssl_verify($parts[1] . '.' . $parts[2], $der, $key, OPENSSL_ALGO_SHA256) !== 1) {
            $invalid();
        }
        if (!in_array($aud, $endpointIds, true)) {
            self::webhookError(
                'authentication',
                'invalid_audience',
                'Webhook JWT audience does not match this endpoint',
            );
        }
        if (
            $iat <= 0 ||
            $exp <= $iat ||
            $exp - $iat > min(300, $j['lifetimeSeconds']) ||
            $iat > $now + $j['leewaySeconds'] ||
            $now >= $exp + $j['leewaySeconds']
        ) {
            self::webhookError(
                'authentication',
                'token_expired',
                'Webhook JWT timestamps are outside the permitted lifetime or leeway',
            );
        }
        $actualHash = self::webhookBase64url($bodyHash);
        if ($actualHash === null || !hash_equals(hash('sha256', $rawBody, true), $actualHash)) {
            self::webhookError(
                'authentication',
                'body_mismatch',
                'Webhook JWT does not match the original body bytes',
            );
        }
        return self::decodeWebhookFromPlan($source, $rawBody, $redactFields) + [
            'signing_method' => 'jwt',
        ];
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
        return self::verifyWebhookFromPlan(
            $this->descriptors ?? $this->contract,
            $rawBody,
            $headers,
            $secrets,
            $nowSeconds,
            $this->options->redactFields,
        );
    }
    /** Verify compiled webhook descriptors without constructing an HTTP runtime. */
    public static function verifyWebhookFromPlan(
        array|Internal\DescriptorSource $source,
        mixed $rawBody,
        mixed $headers,
        mixed $secrets,
        mixed $nowSeconds = null,
        array $redactFields = [],
    ): array {
        $w =
            $source instanceof Internal\DescriptorSource
                ? $source->webhook()
                : $source['webhook'] ?? null;
        if (!$w || ($w['algorithm'] ?? null) !== 'hmac-sha256') {
            Codec::fail('webhook', 'HMAC capability is not declared');
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
        if ((is_int($nowSeconds) || is_float($nowSeconds)) && abs($nowSeconds) >= 100000000000) {
            return self::webhookError(
                'validation',
                'invalid_input',
                'Webhook nowSeconds appears to be milliseconds; divide by 1000 to pass Unix seconds',
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
        return self::decodeWebhookFromPlan($source, $rawBody, $redactFields);
    }
    private static function decodeWebhookFromPlan(
        array|Internal\DescriptorSource $source,
        string $rawBody,
        array $redactFields,
    ): array {
        $w =
            $source instanceof Internal\DescriptorSource
                ? $source->webhook()
                : $source['webhook'] ?? null;
        $decode = static fn(mixed $value, array $codec, array $context): mixed => Codec::execute(
            $value,
            $codec,
            $context + [
                'definitions' =>
                    $source instanceof Internal\DescriptorSource
                        ? $source->definitions()
                        : $source['definitions'] ?? [],
            ],
        );
        try {
            $event = Codec::parse($rawBody, true);
        } catch (\Throwable $cause) {
            throw SdkError::create(
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
                $decoded = $decode($event, $schema, [
                    'mode' => 'response',
                    'path' => 'event',
                ]);
            } catch (SdkError $cause) {
                if ($cause->kind !== 'validation') {
                    throw $cause;
                }
                throw SdkError::create(
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
                $decode($event, $schema, [
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
            $event = new $class((array) $event, $redactFields);
        }
        return [
            'event' => $event,
            'known' => $known,
            ...$known ? [] : ['reason' => $schema ? 'unmatched_envelope' : 'unknown_event'],
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
