[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# authContext

### authContext.get

Returns non-secret metadata for the credential that sent the request, as one object per credential type selected by auth_type. API keys, CLI logins, workload identities, partner apps, and onboarding sessions are accepted. No scope is required.

`GET /v1/auth-context`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [AuthContextResponseDataApiKey](../models/AuthContextResponseDataApiKey.md#authcontextresponsedataapikey)|[AuthContextResponseDataCliLogin](../models/AuthContextResponseDataCliLogin.md#authcontextresponsedataclilogin)|[AuthContextResponseDataWorkloadIdentity](../models/AuthContextResponseDataWorkloadIdentity.md#authcontextresponsedataworkloadidentity)|[AuthContextResponseDataPartnerApp](../models/AuthContextResponseDataPartnerApp.md#authcontextresponsedatapartnerapp)|[AuthContextResponseDataOnboardingSession](../models/AuthContextResponseDataOnboardingSession.md#authcontextresponsedataonboardingsession)|Model.

##### Response variant 1

Non-secret metadata for the calling credential, selected by auth_type.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Access level; scoped tokens always have restricted access. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Required | string | ID of the API key. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"api_key"`. |
| `can_manage_api_keys` | Optional | boolean | Whether the onboarding user's role permits managing API keys. |
| `context_id` | Optional | string | ID of the selected CLI context. |
| `expires_at` | Optional | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. |
| `fresh_verification_expires_at` | Optional | string | Time fresh identity verification expires; it may be in the past. Format: `date-time`. |
| `merchant_id` | Required | string | Merchant the credential acts for. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | Name of the key, CLI context, or workload identity. |
| `oauth_grant_id` | Optional | string | ID of the CLI login grant. |
| `oauth_session_id` | Optional | string | ID of the CLI session. |
| `organization_id` | Optional | string | Organization selected by the key's access scope, when available. |
| `partner_app_id` | Optional | string | ID of the partner app. |
| `partner_app_install_id` | Required | string or null | ID of the partner app install. Null when the API key is not linked to an install. |
| `sandbox_id` | Optional | string | Sandbox the credential is bound to, present only in test mode. |
| `scopes` | Required | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |
| `user_id` | Optional | string | User the session acts for. |
| `workload_identity_id` | Optional | string | ID of the workload identity. |

##### Response variant 2

Non-secret metadata for the calling credential, selected by auth_type.

Field definitions: [shared fields](../models/AuthContextResponseDataCliLogin.md#authcontextresponsedataclilogin).

##### Response variant 3

Non-secret metadata for the calling credential, selected by auth_type.

Field definitions: [shared fields](../models/AuthContextResponseDataWorkloadIdentity.md#authcontextresponsedataworkloadidentity).

##### Response variant 4

Non-secret metadata for the calling credential, selected by auth_type.

Field definitions: [shared fields](../models/AuthContextResponseDataPartnerApp.md#authcontextresponsedatapartnerapp).

##### Response variant 5

Non-secret metadata for the calling credential, selected by auth_type.

Field definitions: [shared fields](../models/AuthContextResponseDataOnboardingSession.md#authcontextresponsedataonboardingsession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->authContext->get([], new RequestOptions());
```

[Complete runnable example](../examples/authContext-get.php)

