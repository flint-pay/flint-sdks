[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# authContext

### authContext.get

Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant, environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include oauth_session_id, context_id, and the context name. No additional API scope is required.

`GET /v1/auth-context`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [AuthContext](../models/AuthContextInput.md#authcontextinput).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->authContext->get([], new RequestOptions());
```

[Complete runnable example](../examples/authContext-get.php)

