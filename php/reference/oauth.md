[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# oauth

### oauth.authorizePartnerInstall

Starts a partner app install in the merchant's browser. Flint validates the request, then redirects to Flint's consent screen, where the merchant signs in, chooses a merchant, and approves or denies the requested permissions. Flint then redirects to redirect_uri with code, state, and mode, or with an OAuth error. Request errors found before consent also redirect with an OAuth error once client_id and redirect_uri are validated. Unknown or inactive clients and missing or unregistered redirect URIs return the Flint error envelope. Flint ignores unrecognized parameters.

`GET /v1/oauth/authorize`

Signature: `authorizePartnerInstall(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `response_type` | Required | string | Values: `"code"`. |
| `client_id` | Required | string |  |
| `redirect_uri` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `code_challenge` | Required | string |  |
| `code_challenge_method` | Required | string | Values: `"S256"`. |
| `scope` | Optional | string |  |
| `sandbox_id` | Optional | string |  |
| `merchant_id` | Optional | string |  |
| `state` | Required | string |  |

#### Response

Response body (inside Result.data): null.

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->oauth->authorizePartnerInstall([
  'response_type' => 'code',
  'client_id' => 'example',
  'redirect_uri' => 'example',
  'mode' => 'test',
  'code_challenge' => 'example',
  'code_challenge_method' => 'S256',
  'state' => 'example',
], new RequestOptions());
```

[Complete runnable example](../examples/oauth-authorizePartnerInstall.php)

### oauth.previewPartnerInstallAuthorization

Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen. Flint ignores unrecognized parameters.

`GET /v1/oauth/authorize/preview`

Signature: `previewPartnerInstallAuthorization(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `response_type` | Optional | string | Values: `"code"`. |
| `client_id` | Required | string |  |
| `redirect_uri` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `code_challenge` | Optional | string |  |
| `code_challenge_method` | Optional | string | Values: `"S256"`. |
| `scope` | Optional | string |  |
| `sandbox_id` | Optional | string |  |
| `state` | Optional | string |  |

#### Response

Returned payload: [PartnerAuthorizePreview](../models/PartnerAuthorizePreview.md#partnerauthorizepreview).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `previewPartnerInstallAuthorizationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

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

