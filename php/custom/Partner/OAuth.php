<?php
declare(strict_types=1);

namespace Flint\Partner;

use Flint\Client;
use Flint\RequestOptions;
use Flint\SdkError;

/**
 * Partner app OAuth helpers for Flint installs: the consent URL with PKCE and state,
 * callback checks, and client-assertion token requests. Handwritten; regeneration
 * keeps it. See https://developers.withflintpay.com/docs/guides/partner-app-installs.
 */
final class OAuth
{
    /** Flint's API origin, which is also the client assertion audience. */
    public const DEFAULT_BASE_URL = 'https://api.withflintpay.com';
    /** RFC 7523 client assertion type for private_key_jwt and workload identity assertions. */
    public const CLIENT_ASSERTION_TYPE = 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer';

    private const AUTHORIZE_OPTIONS = [
        'clientId',
        'redirectUri',
        'mode',
        'scope',
        'sandboxId',
        'merchantId',
        'state',
        'codeVerifier',
        'baseUrl',
    ];

    /** A new RFC 7636 code verifier: 32 random bytes as 43 base64url characters. */
    public static function createCodeVerifier(): string
    {
        return self::base64url(random_bytes(32));
    }

    /** A new unguessable state value: 32 random bytes as 43 base64url characters. */
    public static function createState(): string
    {
        return self::base64url(random_bytes(32));
    }

    /** The S256 code_challenge for a verifier: unpadded base64url SHA-256. */
    public static function codeChallenge(string $codeVerifier): string
    {
        if (!preg_match('/^[A-Za-z0-9._~-]{43,128}$/D', $codeVerifier)) {
            self::fail('codeVerifier', 'codeVerifier must be 43 to 128 characters from A-Z, a-z, 0-9, "-", ".", "_" and "~"');
        }
        return self::base64url(hash('sha256', $codeVerifier, true));
    }

    /**
     * Build the URL that sends a merchant's browser to Flint's install consent screen.
     * No request is made. Store state and codeVerifier with this attempt.
     *
     * @param array{clientId: string, redirectUri: string, mode: 'test'|'live', scope?: string|list<string>, sandboxId?: string, merchantId?: string, state?: string, codeVerifier?: string, baseUrl?: string} $options
     */
    public static function buildAuthorizeUrl(array $options): AuthorizeUrl
    {
        foreach (array_keys($options) as $key) {
            if (!in_array($key, self::AUTHORIZE_OPTIONS, true)) {
                self::fail((string) $key, $key . ' is not an authorize URL option', 'UNKNOWN_FIELD');
            }
        }
        $clientId = self::text($options['clientId'] ?? null, 'clientId');
        $redirectUri = self::text($options['redirectUri'] ?? null, 'redirectUri');
        $parts = parse_url($redirectUri);
        if ($parts === false || !isset($parts['scheme']) || !preg_match('/^[A-Za-z][A-Za-z0-9+.-]*:/', $redirectUri)) {
            self::fail('redirectUri', 'redirectUri must be an absolute URL');
        }
        if (isset($parts['fragment']) || str_contains($redirectUri, '#')) {
            self::fail('redirectUri', 'redirectUri must not include a fragment');
        }
        $mode = $options['mode'] ?? null;
        if ($mode !== 'test' && $mode !== 'live') {
            $mode === null
                ? self::fail('mode', 'mode is required', 'REQUIRED')
                : self::fail('mode', 'mode must be "test" or "live"');
        }
        $sandboxId = self::optional($options, 'sandboxId');
        if ($sandboxId !== null && $mode !== 'test') {
            self::fail('sandboxId', 'sandboxId is allowed only with mode "test"');
        }
        $merchantId = self::optional($options, 'merchantId');
        // Permission IDs, separated by single spaces (never commas). Omit for the defaults.
        $scope = null;
        if (array_key_exists('scope', $options)) {
            $value = $options['scope'];
            if (is_array($value)) {
                if (!$value || !array_is_list($value)) {
                    self::fail('scope', 'scope must list at least one permission ID');
                }
                foreach ($value as $index => $id) {
                    if (!preg_match('/^[^\s,]+$/D', self::text($id, "scope[$index]"))) {
                        self::fail("scope[$index]", 'a permission ID contains no spaces or commas');
                    }
                }
                $scope = implode(' ', $value);
            } else {
                $scope = self::text($value, 'scope');
                foreach (explode(' ', $scope) as $id) {
                    if (!preg_match('/^[^\s,]+$/D', $id)) {
                        self::fail('scope', 'separate permission IDs with single spaces, not commas');
                    }
                }
            }
        }
        $state = self::optional($options, 'state') ?? self::createState();
        $codeVerifier = array_key_exists('codeVerifier', $options)
            ? self::text($options['codeVerifier'], 'codeVerifier')
            : self::createCodeVerifier();
        $query = [
            'response_type' => 'code',
            'client_id' => $clientId,
            'redirect_uri' => $redirectUri,
            'mode' => $mode,
            'state' => $state,
            'scope' => $scope,
            'sandbox_id' => $sandboxId,
            'merchant_id' => $merchantId,
            'code_challenge' => self::codeChallenge($codeVerifier),
            'code_challenge_method' => 'S256',
        ];
        $pairs = [];
        foreach ($query as $name => $value) {
            if ($value !== null) {
                $pairs[] = $name . '=' . rawurlencode($value);
            }
        }
        $base = self::baseUrl($options['baseUrl'] ?? self::DEFAULT_BASE_URL);
        return new AuthorizeUrl($base . '/v1/oauth/authorize?' . implode('&', $pairs), $state, $codeVerifier);
    }

    /**
     * Check a callback against the state you stored, then return its code. Throws
     * AuthorizeCallbackError for a missing or different state (state_mismatch), an
     * OAuth error such as access_denied, or a repeated or missing parameter.
     *
     * @param string $callback The callback URL, its path and query, or the query string.
     * @return array{code: string, mode?: string}
     */
    public static function parseAuthorizeCallback(string $callback, string $state): array
    {
        self::text($state, 'state');
        $query = str_starts_with($callback, '?')
            ? substr($callback, 1)
            : (string) (parse_url($callback, PHP_URL_QUERY) ?? '');
        $params = [];
        foreach ($query === '' ? [] : explode('&', $query) as $pair) {
            [$name, $value] = array_pad(explode('=', $pair, 2), 2, '');
            $name = urldecode($name);
            $params[$name][] = urldecode($value);
        }
        foreach (['state', 'code', 'mode', 'error', 'error_description'] as $name) {
            if (count($params[$name] ?? []) > 1) {
                throw new AuthorizeCallbackError('invalid_request', $name . ' is repeated');
            }
        }
        $received = $params['state'][0] ?? null;
        if ($received === null || !hash_equals(hash('sha256', $state), hash('sha256', $received))) {
            throw new AuthorizeCallbackError('state_mismatch', 'The callback state does not match this authorization attempt');
        }
        if (isset($params['error'])) {
            throw new AuthorizeCallbackError($params['error'][0], $params['error_description'][0] ?? null);
        }
        $code = $params['code'][0] ?? '';
        if ($code === '') {
            throw new AuthorizeCallbackError('invalid_request', 'The callback has no code');
        }
        return isset($params['mode']) ? ['code' => $code, 'mode' => $params['mode'][0]] : ['code' => $code];
    }

    /**
     * The token and revoke form fields for a client assertion: client_id,
     * client_assertion_type and a fresh client_assertion. Works with any grant.
     *
     * @return array{client_id: string, client_assertion_type: string, client_assertion: string}
     */
    public static function clientAuthentication(ClientAssertionProvider $clientAssertion): array
    {
        try {
            $clientId = $clientAssertion->clientId();
            $assertion = $clientAssertion->getAssertion();
        } catch (\Throwable) {
            // Provider failures can include key material or tokens; keep them out of the error.
            throw SdkError::create('configuration', 'Client assertion provider failed', 'not_sent', errorCode: 'credential_provider_failed');
        }
        self::text($clientId, 'clientAssertion.clientId');
        if (strlen($assertion) > 8192 || !preg_match('/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]*$/D', $assertion)) {
            throw SdkError::create('configuration', 'Client assertion provider returned no compact JWT of at most 8192 characters', 'not_sent', errorCode: 'credential_invalid');
        }
        return [
            'client_id' => $clientId,
            'client_assertion_type' => self::CLIENT_ASSERTION_TYPE,
            'client_assertion' => $assertion,
        ];
    }

    /**
     * Exchange an authorization code from the install callback, with a fresh client
     * assertion. Codes expire after 5 minutes and work once.
     *
     * @param array{code: string, redirectUri: string, codeVerifier: string, clientAssertion: ClientAssertionProvider} $params
     */
    public static function exchangeCode(Client $client, #[\SensitiveParameter] array $params, ?RequestOptions $options = null): mixed
    {
        $code = self::text($params['code'] ?? null, 'code');
        $redirectUri = self::text($params['redirectUri'] ?? null, 'redirectUri');
        $verifier = self::text($params['codeVerifier'] ?? null, 'codeVerifier');
        self::codeChallenge($verifier);
        $assertion = $params['clientAssertion'] ?? null;
        if (!$assertion instanceof ClientAssertionProvider) {
            self::fail('clientAssertion', 'clientAssertion must implement ClientAssertionProvider', 'REQUIRED');
        }
        return $client->oauth->exchangeToken([
            'grant_type' => 'authorization_code',
            'code' => $code,
            'redirect_uri' => $redirectUri,
            'code_verifier' => $verifier,
        ] + self::clientAuthentication($assertion), $options);
    }

    /**
     * Revoke a partner token (RFC 7009) with a fresh client assertion.
     *
     * @param array{token: string, tokenTypeHint?: 'access_token'|'refresh_token', clientAssertion: ClientAssertionProvider} $params
     */
    public static function revokeToken(Client $client, #[\SensitiveParameter] array $params, ?RequestOptions $options = null): mixed
    {
        $token = self::text($params['token'] ?? null, 'token');
        $hint = self::optional($params, 'tokenTypeHint');
        $assertion = $params['clientAssertion'] ?? null;
        if (!$assertion instanceof ClientAssertionProvider) {
            self::fail('clientAssertion', 'clientAssertion must implement ClientAssertionProvider', 'REQUIRED');
        }
        return $client->oauth->revokeToken(
            ['token' => $token] + ($hint === null ? [] : ['token_type_hint' => $hint]) + self::clientAuthentication($assertion),
            $options,
        );
    }

    /** @internal */
    public static function fail(string $param, string $message, string $code = 'INVALID_VALUE'): never
    {
        throw SdkError::create('validation', $message, 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => $code, 'param' => $param]]);
    }

    /** @internal */
    public static function text(mixed $value, string $param): string
    {
        if ($value === null || $value === '') {
            self::fail($param, $param . ' is required', 'REQUIRED');
        }
        if (!is_string($value) || preg_match('/[\x00-\x1f\x7f]/', $value)) {
            self::fail($param, $param . ' must be a string without control characters');
        }
        return $value;
    }

    private static function optional(array $options, string $param): ?string
    {
        return array_key_exists($param, $options) ? self::text($options[$param], $param) : null;
    }

    private static function baseUrl(mixed $baseUrl): string
    {
        $parts = parse_url(self::text($baseUrl, 'baseUrl'));
        $scheme = strtolower($parts['scheme'] ?? '');
        $host = strtolower($parts['host'] ?? '');
        $loopback = in_array($host, ['localhost', '127.0.0.1', '[::1]'], true);
        if (
            $parts === false ||
            $host === '' ||
            !($scheme === 'https' || ($scheme === 'http' && $loopback)) ||
            isset($parts['user']) ||
            isset($parts['pass']) ||
            isset($parts['query']) ||
            isset($parts['fragment'])
        ) {
            self::fail('baseUrl', 'baseUrl must be an https URL (or http on loopback) without credentials, query or fragment');
        }
        $port = $parts['port'] ?? null;
        $default = ($scheme === 'https' && $port === 443) || ($scheme === 'http' && $port === 80);
        return $scheme . '://' . $host . ($port === null || $default ? '' : ':' . $port) . rtrim($parts['path'] ?? '', '/');
    }

    private static function base64url(string $bytes): string
    {
        return rtrim(strtr(base64_encode($bytes), '+/', '-_'), '=');
    }
}
