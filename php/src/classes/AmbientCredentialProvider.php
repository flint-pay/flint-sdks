<?php
declare(strict_types=1);
namespace Flint;
/** Lazy built-in provider. Transport injection is privileged and sees exchange credentials. */
final class AmbientCredentialProvider implements CredentialProvider
{
    private static array $tokens = [];
    private static array $active = [];
    private ?Credential $lastCredential = null;
    private ?\WeakMap $invalidations = null;
    public function __construct(
        private readonly array $config,
        private readonly ?array $identity = null,
        private readonly ?string $baseUrl = null,
    ) {}
    public function __debugInfo(): array
    {
        return ['credentials' => '[REDACTED]'];
    }
    public function canInvalidate(?Credential $credential = null): bool
    {
        $credential ??= $this->lastCredential;
        return $credential !== null && isset($this->invalidations[$credential]);
    }
    public function invalidate(?Credential $credential = null): void
    {
        $credential ??= $this->lastCredential;
        if ($credential !== null && isset($this->invalidations[$credential])) {
            $this->invalidations[$credential]();
        }
    }
    public function getCredential(): Credential
    {
        return $this->resolve([]);
    }
    public function resolve(#[\SensitiveParameter] array $context): Credential
    {
        $prefix = $this->config['workloadIdentity']['envPrefix'];
        $read = static function (string $suffix) use ($prefix): ?string {
            $value = getenv($prefix . '_' . $suffix);
            return $value === false || $value === '' ? null : $value;
        };
        $id = $this->identity['workloadIdentityId'] ?? $read('WORKLOAD_IDENTITY_ID');
        $source = $this->identity['source'] ?? ($read('OIDC_SOURCE') ?? 'auto');
        $subject = '';
        $responseTokens = [];
        $claims = [];
        $environment = $this->config['environment'];
        $clean = static function (#[\SensitiveParameter] $value) use (
            &$subject,
            &$responseTokens,
            $environment,
        ): string {
            $text = is_string($value)
                ? $value
                : (json_encode($value, JSON_INVALID_UTF8_SUBSTITUTE) ?:
                '');
            foreach (
                [
                    $subject,
                    ...$responseTokens,
                    getenv($environment['apiKey']),
                    getenv($environment['token']),
                    getenv('ACTIONS_ID_TOKEN_REQUEST_TOKEN'),
                ]
                as $secret
            ) {
                if (is_string($secret) && $secret !== '') {
                    $text = str_replace([$secret, rawurlencode($secret)], '[REDACTED]', $text);
                }
            }
            return substr(
                preg_replace(
                    '/eyJ[A-Za-z0-9_-]*\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/',
                    '[REDACTED]',
                    $text,
                ),
                0,
                2048,
            );
        };
        $fail = static function (
            string $reason,
            #[\SensitiveParameter] string $description = '',
        ) use (&$source, $id, &$claims, $clean): never {
            $details = [
                'reason' => $reason,
                'source' => $clean($source),
                'workloadIdentityId' => $clean($id ?? ''),
                'iss' => $clean($claims['iss'] ?? null),
                'sub' => $clean($claims['sub'] ?? null),
                'aud' => $clean($claims['aud'] ?? null),
                'error_description' => $clean($description),
            ];
            throw SdkError::create(
                'authentication',
                $clean(json_encode($details)),
                'not_sent',
                false,
                null,
                $reason,
                $details,
            );
        };
        if ($this->identity === null) {
            $apiKey = getenv($environment['apiKey']);
            $token = getenv($environment['token']);
            if ($apiKey !== false && $apiKey !== '' && $token !== false && $token !== '') {
                $fail(
                    'ambiguous_credentials',
                    'Set only one of ' . $environment['apiKey'] . ' and ' . $environment['token'],
                );
            }
            if ($apiKey !== false && $apiKey !== '') {
                $this->lastCredential = null;
                return new Credential($apiKey);
            }
            if ($token !== false && $token !== '') {
                $this->lastCredential = null;
                return new Credential($token);
            }
            if ($id === null || $id === '') {
                $fail(
                    'no_credentials',
                    'Set ' .
                        $environment['apiKey'] .
                        ', ' .
                        $environment['token'] .
                        ', or ' .
                        $prefix .
                        '_WORKLOAD_IDENTITY_ID with ' .
                        $prefix .
                        '_OIDC_TOKEN or ' .
                        $prefix .
                        '_OIDC_TOKEN_FILE, or GitHub Actions permissions: id-token: write',
                );
            }
        }
        if (!is_string($id) || $id === '' || preg_match('/[\r\n]/', $id)) {
            $fail('source_unavailable', 'A workload identity ID is required');
        }
        $base = $context['baseUrl'] ?? $this->baseUrl;
        if (!$base) {
            $fail('source_unavailable', 'Pass this provider to a client with a base URL');
        }
        $parts = parse_url($base);
        $scheme = strtolower($parts['scheme'] ?? '');
        $host = strtolower($parts['host'] ?? '');
        if (
            $scheme !== 'https' &&
            !($scheme === 'http' && in_array($host, ['localhost', '127.0.0.1', '[::1]'], true))
        ) {
            $fail('exchange_unavailable', 'Token exchange requires HTTPS or loopback');
        }
        $port = $parts['port'] ?? null;
        $origin =
            $scheme .
            '://' .
            $host .
            ($port !== null &&
            !(($scheme === 'http' && $port === 80) || ($scheme === 'https' && $port === 443))
                ? ':' . $port
                : '');
        $audience = $this->identity['audience'] ?? ($read('OIDC_AUDIENCE') ?? $origin);
        $scope = $this->identity['scope'] ?? $read('OIDC_SCOPE');
        $file = $read('OIDC_TOKEN_FILE');
        if ($source === 'auto') {
            $source = $read('OIDC_TOKEN')
                ? 'token'
                : ($file
                    ? 'token_file'
                    : (getenv('GITHUB_ACTIONS') === 'true'
                        ? 'github_actions'
                        : 'none'));
        }
        if (!in_array($source, ['token', 'token_file', 'github_actions'], true)) {
            $fail('source_unavailable', 'Supported sources: token, token_file, github_actions');
        }
        $githubUrl = getenv('ACTIONS_ID_TOKEN_REQUEST_URL');
        $githubToken = getenv('ACTIONS_ID_TOKEN_REQUEST_TOKEN');
        if ($source === 'github_actions' && (!$githubUrl || !$githubToken)) {
            $fail('source_unavailable', 'GitHub Actions requires permissions: id-token: write');
        }
        $sourceKey =
            $source === 'token'
                ? hash('sha256', $read('OIDC_TOKEN') ?? '')
                : ($source === 'github_actions'
                    ? hash('sha256', json_encode([$githubUrl, $githubToken]))
                    : $file);
        $key = hash(
            'sha256',
            json_encode([
                $origin,
                $this->config['workloadIdentity']['tokenPath'],
                $this->config['workloadIdentity']['credentialParameter'],
                $prefix,
                $id,
                $audience,
                $scope ?? '',
                $source,
                $sourceKey,
            ]),
        );
        $cache = $context['credentialCache'] ?? null;
        $cached = self::$tokens[$key] ?? $cache?->get($key);
        if (
            !is_array($cached) ||
            !is_string($cached['value'] ?? null) ||
            !is_numeric($cached['expiresAt'] ?? null) ||
            !is_numeric($cached['lifetime'] ?? null)
        ) {
            $cached = null;
        }
        // Each resolution retains its own partition and rejected-token comparison.
        $credential = function (array $entry) use ($key, $cache): Credential {
            $result = new Credential(
                $entry['value'],
                new \DateTimeImmutable('@' . (int) $entry['expiresAt']),
            );
            $this->invalidations ??= new \WeakMap();
            $this->invalidations[$result] = static function () use ($key, $cache, $entry): void {
                if ((self::$tokens[$key]['value'] ?? null) === $entry['value']) {
                    unset(self::$tokens[$key]);
                    $cache?->delete($key);
                }
            };
            return $this->lastCredential = $result;
        };
        $remaining = $cached ? $cached['expiresAt'] - microtime(true) : 0;
        if ($cached && $remaining > 30 && $remaining >= max(60, $cached['lifetime'] * 0.2)) {
            self::$tokens[$key] = $cached;
            return $credential($cached);
        }
        // Yield each waiter's own wake conditions so schedulers can resume it independently.
        $deadline = $context['deadline'] ?? hrtime(true) / 1e6 + 30000;
        $checkWaiter = static function () use ($context, $deadline): void {
            if (($context['cancellation'] ?? null)?->isCancelled()) {
                throw SdkError::create('cancelled', 'Request cancelled', 'not_sent');
            }
            if (hrtime(true) / 1e6 >= $deadline) {
                throw SdkError::create('deadline', 'Overall deadline exceeded', 'not_sent');
            }
        };
        if (isset(self::$active[$key])) {
            $flight = self::$active[$key];
            if (\Fiber::getCurrent() === null) {
                $fail('exchange_unavailable', 'Reentrant token exchange without a Fiber scheduler');
            }
            while (true) {
                $checkWaiter();
                if ($flight->done) {
                    break;
                }
                \Fiber::suspend([
                    'deadline' => $deadline,
                    'cancellation' => $context['cancellation'] ?? null,
                ]);
            }
            if ($flight->error !== null) {
                throw $flight->error;
            }
            return $credential($flight->result);
        }
        $flight = (object) ['done' => false, 'result' => null, 'error' => null];
        self::$active[$key] = $flight;
        try {
            if ($source === 'github_actions') {
                $endpoint = parse_url($githubUrl);
                if (
                    $endpoint === false ||
                    isset($endpoint['user']) ||
                    isset($endpoint['pass']) ||
                    isset($endpoint['fragment']) ||
                    !(
                        ($endpoint['scheme'] ?? '') === 'https' ||
                        (($endpoint['scheme'] ?? '') === 'http' &&
                            in_array(
                                $endpoint['host'] ?? '',
                                ['localhost', '127.0.0.1', '[::1]'],
                                true,
                            ))
                    )
                ) {
                    $fail(
                        'source_unavailable',
                        'GitHub Actions identity endpoint requires HTTPS or loopback',
                    );
                }
                parse_str($endpoint['query'] ?? '', $query);
                $query['audience'] = $audience;
                $endpointUrl =
                    explode('?', $githubUrl, 2)[0] .
                    '?' .
                    http_build_query($query, '', '&', PHP_QUERY_RFC3986);
                $remaining = $deadline - hrtime(true) / 1e6;
                if ($remaining <= 0 || ($context['cancellation'] ?? null)?->isCancelled()) {
                    $fail(
                        'subject_token_request_failed',
                        'GitHub Actions identity request deadline exceeded or cancelled',
                    );
                }
                $request = [
                    'url' => $endpointUrl,
                    'method' => 'GET',
                    'headers' => [
                        'authorization' => 'Bearer ' . $githubToken,
                        'accept' => 'application/json',
                    ],
                    'body' => '',
                    'timeoutMs' => max(1, (int) ceil($remaining)),
                    'cancellation' => $context['cancellation'] ?? null,
                ];
                try {
                    $response = isset($context['transport'])
                        ? $context['transport']($request)
                        : self::send($request);
                } catch (\Throwable) {
                    $fail('subject_token_request_failed', 'GitHub Actions identity request failed');
                }
                if (($response['failureCode'] ?? null) || $response['status'] !== 200) {
                    $fail(
                        'subject_token_request_failed',
                        'GitHub Actions identity request failed; check permissions: id-token: write',
                    );
                }
                $payload = json_decode($response['body'] ?? '', true);
                if (!is_array($payload) || !is_string($payload['value'] ?? null)) {
                    $fail(
                        'subject_token_request_failed',
                        'Invalid GitHub Actions identity response',
                    );
                }
                $subject = $payload['value'];
            } elseif ($source === 'token') {
                $subject = $read('OIDC_TOKEN') ?? '';
            } else {
                $value = $file ? @file_get_contents($file) : '';
                if ($value === false) {
                    $fail('subject_token_request_failed', 'Cannot read the configured token file');
                }
                $subject = trim($value);
            }
            if ($subject === '') {
                $fail('source_unavailable', 'The selected token source is empty');
            }
            $jwt = explode('.', $subject);
            if (
                count($jwt) !== 3 ||
                count(
                    array_filter($jwt, static fn($p) => preg_match('/^[A-Za-z0-9_-]+$/D', $p)),
                ) !== 3
            ) {
                $fail('audience_mismatch', 'Subject token must be a JWT with aud and exp');
            }
            $payload = base64_decode(strtr($jwt[1], '-_', '+/'), true);
            $claims = $payload === false ? null : json_decode($payload, true);
            if (!is_array($claims)) {
                $claims = [];
                $fail('audience_mismatch', 'Subject token must be a JWT with aud and exp');
            }
            $aud = $claims['aud'] ?? null;
            $exp = $claims['exp'] ?? null;
            if (
                !($aud === $audience || (is_array($aud) && in_array($audience, $aud, true))) ||
                !(is_int($exp) || is_float($exp)) ||
                !is_finite((float) $exp) ||
                $exp <= microtime(true)
            ) {
                $fail('audience_mismatch', 'Subject token audience differs or expiry has passed');
            }
            $form = [
                'grant_type' => 'urn:ietf:params:oauth:grant-type:token-exchange',
                'subject_token' => $subject,
                'subject_token_type' => 'urn:ietf:params:oauth:token-type:jwt',
                'requested_token_type' => 'urn:ietf:params:oauth:token-type:access_token',
                $this->config['workloadIdentity']['credentialParameter'] => $id,
            ];
            if ($scope !== null) {
                $form['scope'] = $scope;
            }
            for ($attempt = 0; $attempt < 3; $attempt++) {
                $remaining = $deadline - hrtime(true) / 1e6;
                if ($remaining <= 0 || ($context['cancellation'] ?? null)?->isCancelled()) {
                    $fail('exchange_unavailable', 'Exchange deadline exceeded or cancelled');
                }
                $request = [
                    'url' => $origin . $this->config['workloadIdentity']['tokenPath'],
                    'method' => 'POST',
                    'headers' => [
                        'content-type' => 'application/x-www-form-urlencoded',
                        'accept' => 'application/json',
                    ],
                    'body' => http_build_query($form, '', '&', PHP_QUERY_RFC3986),
                    'timeoutMs' => max(1, (int) ceil($remaining)),
                    'cancellation' => $context['cancellation'] ?? null,
                ];
                try {
                    $response = isset($context['transport'])
                        ? $context['transport']($request)
                        : self::send($request);
                } catch (\Throwable) {
                    $fail('exchange_unavailable', 'Token exchange transport failed');
                }
                if ($response['failureCode'] ?? null) {
                    $fail('exchange_unavailable', 'Token exchange transport failed');
                }
                $status = $response['status'];
                $body = json_decode($response['body'] ?? '', true);
                foreach (is_array($body) ? $body : [] as $name => $value) {
                    if (
                        ($name === 'token' || str_ends_with((string) $name, '_token')) &&
                        is_string($value) &&
                        $value !== ''
                    ) {
                        $responseTokens[] = $value;
                    }
                }
                $description =
                    is_array($body) && is_string($body['error_description'] ?? null)
                        ? $body['error_description']
                        : '';
                if ($status === 429 || $status >= 500) {
                    $headers = array_change_key_case($response['headers'] ?? [], CASE_LOWER);
                    $instruction = $headers['retry-after'] ?? null;
                    $wait =
                        $instruction !== null
                            ? (is_numeric($instruction)
                                ? (float) $instruction * 1000
                                : ((strtotime($instruction) ?: 0) - microtime(true)) * 1000)
                            : 100 * 2 ** $attempt;
                    $wait = max(0, $wait);
                    if ($attempt === 2 || hrtime(true) / 1e6 + $wait >= $deadline) {
                        $fail('exchange_unavailable', $description);
                    }
                    $until = hrtime(true) / 1e6 + $wait;
                    do {
                        if (($context['cancellation'] ?? null)?->isCancelled()) {
                            $fail('exchange_unavailable', 'Exchange cancelled');
                        }
                        $left = $until - hrtime(true) / 1e6;
                        if ($left > 0) {
                            usleep((int) min(50000, ceil($left * 1000)));
                        }
                    } while ($left > 0);
                    continue;
                }
                if ($status !== 200) {
                    $fail('exchange_rejected', $description);
                }
                if (
                    !is_array($body) ||
                    !is_string($body['access_token'] ?? null) ||
                    $body['access_token'] === '' ||
                    preg_match('/[\r\n]/', $body['access_token']) ||
                    ($body['token_type'] ?? null) !== 'Bearer' ||
                    ($body['issued_token_type'] ?? null) !==
                        'urn:ietf:params:oauth:token-type:access_token' ||
                    !(
                        is_int($body['expires_in'] ?? null) || is_float($body['expires_in'] ?? null)
                    ) ||
                    !is_finite((float) $body['expires_in']) ||
                    $body['expires_in'] <= 30 ||
                    (isset($body['scope']) && !is_string($body['scope']))
                ) {
                    $fail('exchange_rejected', 'Invalid token exchange response');
                }
                $lifetime = min($body['expires_in'], $exp - microtime(true));
                if ($lifetime <= 30) {
                    $fail('exchange_rejected', 'Exchanged token has at most 30 seconds remaining');
                }
                $entry = [
                    'value' => $body['access_token'],
                    'expiresAt' => microtime(true) + $lifetime,
                    'lifetime' => $lifetime,
                ];
                self::$tokens[$key] = $entry;
                $cache?->set($key, $entry, max(1, (int) floor($lifetime - 30)));
                $flight->result = $entry;
                return $credential($entry);
            }
            $fail('exchange_unavailable');
        } catch (\Throwable $caught) {
            $error =
                $caught instanceof SdkError
                    ? $caught
                    : SdkError::create(
                        'authentication',
                        'Token exchange failed',
                        'not_sent',
                        false,
                        null,
                        'exchange_unavailable',
                    );
            if (
                $cached &&
                $cached['expiresAt'] - microtime(true) > 30 &&
                $error->errorCode === 'exchange_unavailable'
            ) {
                $flight->result = $cached;
                return $credential($cached);
            }
            $flight->error = $error;
            throw $error;
        } finally {
            $flight->done = true;
            unset(self::$active[$key]);
        }
    }
    private static function send(#[\SensitiveParameter] array $request): array
    {
        $ch = curl_init();
        $headers = [];
        try {
            curl_setopt_array($ch, [
                CURLOPT_URL => $request['url'],
                CURLOPT_CUSTOMREQUEST => $request['method'],
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => false,
                CURLOPT_TIMEOUT_MS => $request['timeoutMs'],
                CURLOPT_HTTPHEADER => array_map(
                    static fn($name, $value) => $name . ': ' . $value,
                    array_keys($request['headers']),
                    $request['headers'],
                ),
                CURLOPT_NOPROGRESS => false,
                CURLOPT_XFERINFOFUNCTION => static fn() => $request['cancellation']?->isCancelled()
                    ? 1
                    : 0,
                CURLOPT_HEADERFUNCTION => static function ($ch, string $line) use (&$headers): int {
                    if (str_starts_with($line, 'HTTP/')) {
                        $headers = [];
                    } elseif (str_contains($line, ':')) {
                        [$name, $value] = explode(':', $line, 2);
                        $headers[strtolower(trim($name))] = trim($value);
                    }
                    return strlen($line);
                },
            ]);
            if ($request['method'] === 'GET') {
                curl_setopt($ch, CURLOPT_PROXY, '');
            }
            if ($request['method'] === 'POST') {
                curl_setopt($ch, CURLOPT_POSTFIELDS, $request['body']);
            }
            $body = curl_exec($ch);
            return [
                'status' => curl_getinfo($ch, CURLINFO_RESPONSE_CODE),
                'headers' => $headers,
                'body' => $body === false ? '' : $body,
                'failureCode' => $body === false ? curl_errno($ch) : null,
            ];
        } finally {
            curl_close($ch);
        }
    }
}
