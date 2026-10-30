<?php
declare(strict_types=1);
namespace Flint;
final class AuthContextResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant, environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include oauth_session_id, context_id, and the context name. No additional API scope is required.
     * @param AuthContextGetParams|array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return AuthContext
     */
    public function get(array|Model|null $params = null, ?RequestOptions $options = null): AuthContext { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', $name . " can't be sent: path values belong in positional arguments", 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $name]]); $input[$name] = $value; } return Runtime::responsePayload($this->runtime->request('getAuthContext', $input, $options), ['data']); }
}
