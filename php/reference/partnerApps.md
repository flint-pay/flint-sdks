[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# partnerApps

### partnerApps.acceptPlatformTerms

Records that the authenticated credential accepted the current version of Flint's platform terms for the app: the signed-in user for a Dashboard session, or the API key. Flint also records the time, IP address and user agent. supported_actions lists accept_platform_terms while the current version isn't accepted. Accepting a version the app already accepted returns 409 ACTION_NOT_ALLOWED with reason already_applied. When this meets the app's last platform requirement, platform.status becomes pending_review in the same write and Flint sends partner_app.updated.

`POST /v1/partner-apps/{partner_app_id}/accept-platform-terms`

Signature: `acceptPlatformTerms(string|Model $partner_app_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Required | [AcceptPartnerAppPlatformTermsRequestInput](../models/AcceptPartnerAppPlatformTermsRequestInput.md#acceptpartnerappplatformtermsrequestinput) | The request body for: Accept platform terms. |

Body model: [AcceptPartnerAppPlatformTermsRequestInput](../models/AcceptPartnerAppPlatformTermsRequestInput.md#acceptpartnerappplatformtermsrequestinput).

#### partnerApps.acceptPlatformTerms body fields

Field definitions: [shared fields](../models/AcceptPartnerAppPlatformTermsRequestInput.md#acceptpartnerappplatformtermsrequestinput).

#### Response

Returned payload: [PartnerApp](../models/PartnerApp.md#partnerapp).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->acceptPlatformTerms('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', [
  'expected_version' => 1,
  'platform_terms_version' => '2026-11-01',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-acceptPlatformTerms.php)

### partnerApps.create

Creates a partner app owned by the authenticated merchant. A live API key or a live dashboard session is required.

`POST /v1/partner-apps`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequestInput.md#createpartnerapprequestinput) | The request body for: Create partner app. |

Body model: [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequestInput.md#createpartnerapprequestinput).

#### partnerApps.create body fields

Field definitions: [shared fields](../models/CreatePartnerAppRequestInput.md#createpartnerapprequestinput). Models: [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput), [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput).

#### Response

Returned payload: [PartnerAppWithSecret](../models/PartnerAppWithSecret.md#partnerappwithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->create([
  'name' => 'example',
  'permission_manifest' => [],
  'redirect_uris' => [],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-create.php)

### partnerApps.createCredential

Registers an immutable public key, JWKS URL, or workload identity for client assertion authentication. An app can have at most 20 active credentials. Dashboard callers need fresh identity verification. Replace a credential by creating a new one, then removing the old one.

`POST /v1/partner-apps/{partner_app_id}/credentials`

Signature: `createCredential(string|Model $partner_app_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Required | [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequestInput.md#createpartnerappcredentialrequestinput) | An immutable public key, JWKS URL, or workload identity credential for partner app client authentication. |

Body model: [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequestInput.md#createpartnerappcredentialrequestinput).

#### partnerApps.createCredential with `type: "public_key"`

The `public_key` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialPublicKeyRequestInput](../models/CreatePartnerAppCredentialPublicKeyRequestInput.md#createpartnerappcredentialpublickeyrequestinput).

#### partnerApps.createCredential with `type: "jwks_url"`

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialJWKSURLRequestInput](../models/CreatePartnerAppCredentialJWKSURLRequestInput.md#createpartnerappcredentialjwksurlrequestinput).

#### partnerApps.createCredential with `type: "workload_identity"`

The `workload_identity` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialWorkloadIdentityRequestInput](../models/CreatePartnerAppCredentialWorkloadIdentityRequestInput.md#createpartnerappcredentialworkloadidentityrequestinput).

#### Response

Returned payload: [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->createCredential('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', [
  'name' => 'Production signing key',
  'public_key' => (object) [
    'jwk' => (object) [
      'crv' => 'P-256',
      'kid' => 'production-key',
      'kty' => 'EC',
      'x' => 'axfR8uEsQkf4vOblY6RA8ncDfYEt6zOg9KE5RdiYwpY',
      'y' => 'T-NC4v4af5uO5-tKfA-eFivOM1drMV7Oy7ZAaDe_UfU',
    ],
  ],
  'type' => 'public_key',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-createCredential.php)

### partnerApps.delete

Archives a partner app (soft delete). The app stays readable with status archived; it cannot be installed, exchange tokens, or receive events, and its client ID is never reused. Revoke every active install first; pending installs are revoked with the app. Delete the app’s webhook endpoints separately.

`DELETE /v1/partner-apps/{partner_app_id}`

Signature: `delete(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `expected_version` | Optional | integer | Apply only if the app has this version. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [PartnerApp](../models/PartnerApp.md#partnerapp).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->delete('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-delete.php)

### partnerApps.deleteCredential

Soft-removes the credential and immediately stops its use for client authentication. The credential remains readable. Removing an already removed credential returns it unchanged.

`DELETE /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```text
deleteCredential(string|
  Model $partner_app_id,
 string|
  Model $partner_app_credential_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `partner_app_credential_id` | Required | string | Flint partner app credential ID. |

#### Response

Returned payload: [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->deleteCredential('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', 'pacr_01KEZF7C005RDK44XFG5WF94BB', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-deleteCredential.php)

### partnerApps.get

Returns a single partner app owned by the authenticated merchant.

`GET /v1/partner-apps/{partner_app_id}`

Signature: `get(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |

#### Response

Returned payload: [PartnerApp](../models/PartnerApp.md#partnerapp).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->partnerApps->get('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', [], new RequestOptions());
```

[Complete runnable example](../examples/partnerApps-get.php)

### partnerApps.getCredential

Returns a credential, including a removed credential.

`GET /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```text
getCredential(string|
  Model $partner_app_id,
 string|
  Model $partner_app_credential_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `partner_app_credential_id` | Required | string | Flint partner app credential ID. |

#### Response

Returned payload: [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->partnerApps->getCredential('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', 'pacr_01KEZF7C005RDK44XFG5WF94BB', [], new RequestOptions());
```

[Complete runnable example](../examples/partnerApps-getCredential.php)

### partnerApps.getInstall

Returns a single install for the installing merchant or the partner app owner. For the app’s owner, each active grant that can read the merchant profile carries `merchant_readiness`, the installed merchant’s payments and payouts readiness in that environment.

`GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}`

Signature:

```text
getInstall(string|
  Model $partner_app_id,
 string|
  Model $partner_app_install_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `partner_app_install_id` | Required | string | Flint partner app install ID. |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->partnerApps->getInstall('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', 'pinst_01KEZF7C003HVKZR3GZAW6AFAZ', [], new RequestOptions());
```

[Complete runnable example](../examples/partnerApps-getInstall.php)

### partnerApps.list

Returns partner apps owned by the authenticated merchant. Default order: partner_app_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |

#### Response

Returned payload: [PartnerAppListResponse](../models/PartnerAppListResponse.md#partnerapplistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->partnerApps->list([], new RequestOptions());
```

[Complete runnable example](../examples/partnerApps-list.php)

### partnerApps.listCredentials

Lists active and removed credentials, ordered by partner_app_credential_id ascending. Default order: partner_app_credential_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/credentials`

Signature: `listCredentials(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [PartnerAppCredentialListResponse](../models/PartnerAppCredentialListResponse.md#partnerappcredentiallistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listCredentialsItems`, `listCredentialsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->partnerApps->listCredentials('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', [], new RequestOptions());
```

[Complete runnable example](../examples/partnerApps-listCredentials.php)

### partnerApps.listInstalls

Returns installs for a partner app owned by the authenticated merchant. Each active grant that can read the merchant profile carries `merchant_readiness`: whether the installed merchant can take payments and receive payouts in that environment, and how many requirements are due. Use it to find merchants who still need to finish onboarding without exchanging each install’s token. Default order: partner_app_install_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/installs`

Signature: `listInstalls(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `merchant_id` | Optional | string | Filter by installed merchant ID. |
| `status` | Optional | Array of string or string | Filter by install status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending_exchange"`, `"active"`, `"revoked"`. Values: `"pending_exchange"`, `"active"`, `"revoked"`. |

#### Response

Returned payload: [PartnerAppInstallListResponse](../models/PartnerAppInstallListResponse.md#partnerappinstalllistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listInstallsItems`, `listInstallsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->partnerApps->listInstalls('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', [], new RequestOptions());
```

[Complete runnable example](../examples/partnerApps-listInstalls.php)

### partnerApps.revokeEnvironmentGrant

The installing merchant or partner app owner can revoke a single test or live environment grant for an install. This revokes linked API keys and deletes linked webhook endpoints in that environment. Revoking the last grant also revokes the install and ends its remaining links. Unlinked keys and endpoints keep working.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Signature:

```text
revokeEnvironmentGrant(string|
  Model $partner_app_id,
 string|
  Model $partner_app_install_id,
 string|
  Model $environment_grant_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `partner_app_install_id` | Required | string | Flint partner app install ID. |
| `environment_grant_id` | Required | string | Flint environment grant ID. |

#### Response

Returned payload: [PartnerAppInstallWithEndedAccess](../models/PartnerAppInstallWithEndedAccess.md#partnerappinstallwithendedaccess).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->revokeEnvironmentGrant('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', 'pinst_01KEZF7C003HVKZR3GZAW6AFAZ', 'egrt_01KEZF7C00MQQDDB7YWGXV3MXY', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-revokeEnvironmentGrant.php)

### partnerApps.revokeInstall

The installing merchant or partner app owner can revoke an install and all of its environment grants. This also revokes linked API keys and deletes linked webhook endpoints. Unlinked keys and endpoints keep working. Reinstalling does not restore ended access.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Signature:

```text
revokeInstall(string|
  Model $partner_app_id,
 string|
  Model $partner_app_install_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `partner_app_install_id` | Required | string | Flint partner app install ID. |

#### Response

Returned payload: [PartnerAppInstallWithEndedAccess](../models/PartnerAppInstallWithEndedAccess.md#partnerappinstallwithendedaccess).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->revokeInstall('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', 'pinst_01KEZF7C003HVKZR3GZAW6AFAZ', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-revokeInstall.php)

### partnerApps.rotateSecret

Rotates an existing client secret, returned once. An app without a secret returns 409 ACTION_NOT_ALLOWED with reason secret_not_issued. Issue its first secret with PATCH /v1/partner-apps/{partner_app_id} and client_secret_enabled: true. The previous secret keeps working until previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the previous secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once.

`POST /v1/partner-apps/{partner_app_id}/rotate-secret`

Signature: `rotateSecret(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Optional | [RotatePartnerAppSecretRequestInput](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput) | The request body for: Rotate partner app secret. |

Body model: [RotatePartnerAppSecretRequestInput](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput).

#### partnerApps.rotateSecret body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Rotate only if this matches the app's current version. A mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `expire_previous_secret_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

#### Response

Returned payload: [PartnerAppWithRotatedSecret](../models/PartnerAppWithRotatedSecret.md#partnerappwithrotatedsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->rotateSecret('papp_01KEZF7C00Y8VMXYZ1GNPP3WHV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-rotateSecret.php)

### partnerApps.update

Updates a partner app owned by the authenticated merchant. Send only the fields to change. permission_manifest replaces the whole manifest and requires expected_version. An existing permission can drop scopes but not gain them; removing or narrowing a permission narrows existing environment grants immediately, and tokens issued with the removed scopes stop working. Adding a permission changes no install until the merchant authorizes again. Setting client_secret_enabled to true issues a first secret when secret authentication is disabled; only this response and its same-credential idempotent replay return that secret. Setting false ends current and previous secrets immediately. A Dashboard session needs fresh identity verification to enable secret authentication, including on replay.

`PATCH /v1/partner-apps/{partner_app_id}`

Signature: `update(string|Model $partner_app_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Required | [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequestInput.md#updatepartnerapprequestinput) | The request body for: Update partner app. minProperties: `1`. |

Body model: [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequestInput.md#updatepartnerapprequestinput).

#### partnerApps.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

Fields: [partnerApps.update body fields](#partnerappsupdate-body-fields).

#### partnerApps.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Required | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Required | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Required | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 6



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Optional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 7



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_profile` | Required | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### Response

Returned payload: [PartnerAppWithSecret](../models/PartnerAppWithSecret.md#partnerappwithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->update('papp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Example integration',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/partnerApps-update.php)

