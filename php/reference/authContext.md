[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# authContext

### authContext.get

Returns non-secret metadata for an API key, CLI OAuth access token, workload access token, or partner app token, including its merchant, environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include oauth_session_id, context_id, and the context name. A partner app token reports auth_type=partner_app, the merchant it acts for (Flint-Merchant-Id with an app-level token), the token's mode, the sandbox of the merchant's test grant, the grant's current scopes, and the token's expires_at; it runs every partner app token check, so a missing grant returns 403 environment_grant_required. No additional API scope is required.

`GET /v1/auth-context`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [AuthContext](../models/AuthContext.md#authcontext).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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

