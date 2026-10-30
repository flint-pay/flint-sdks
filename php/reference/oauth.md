[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# oauth

### oauth.previewPartnerInstallAuthorization

Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen. This route takes no credential. Flint ignores an Authorization header, except that a partner install access token is refused with 401. Flint ignores unrecognized parameters.

`GET /v1/oauth/authorize/preview`

Signature: `previewPartnerInstallAuthorization(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `response_type` | Optional | string | OAuth response type. Must be code. Values: `"code"`. |
| `client_id` | Required | string | Partner app client ID. |
| `redirect_uri` | Required | string | Registered redirect URI for the partner app. |
| `mode` | Required | string | Install mode. Values: `"test"`, `"live"`. |
| `code_challenge` | Optional | string | Base64url-encoded SHA-256 hash of your code_verifier, without padding (RFC 7636). |
| `code_challenge_method` | Optional | string | PKCE challenge method. Values: `"S256"`. |
| `scope` | Optional | string | Space-separated permission IDs from your app's permission manifest. Omit to request default_requested_permissions. Required permissions are always granted. |
| `sandbox_id` | Optional | string | Optional active merchant sandbox ID, accepted only with mode=test. When omitted in test mode, Flint uses the merchant's default sandbox. |
| `state` | Optional | string | Opaque state value returned to the partner callback. |

#### Response

Returned payload: [PartnerAuthorizePreview](../models/PartnerAuthorizePreview.md#partnerauthorizepreview).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->oauth->previewPartnerInstallAuthorization([
  'client_id' => 'example',
  'redirect_uri' => 'example',
  'mode' => 'test',
], new RequestOptions());
```

[Complete runnable example](../examples/oauth-previewPartnerInstallAuthorization.php)

