[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# partnerApps

### partnerApps.create

Creates a partner app owned by the authenticated merchant. A live API key or a live dashboard session is required.

`POST /v1/partner-apps`

Signature: `create(params: PartnerAppsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequest.md#createpartnerapprequest) | The request body for: Create partner app. |

Body model: [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequest.md#createpartnerapprequest).

#### partnerApps.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version for requests the app makes with its install tokens that send no Flint-Version header. Defaults to the version of this request and can't be newer than it. minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | IDs of the permissions requested when an authorization request sends no scope. Each must be in permission_manifest. Defaults to every permission that isn't optional. Items: minLength: `1`. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen. minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Permissions the app can request from merchants. At least one is required. Each lists the Flint scopes it grants. |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. At least one is required. Items: minLength: `1`. |

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.create({default_requested_permissions: ["manage_orders"], name: "Acme Commerce Plugin", permission_manifest: [{description: "Read and update Flint orders for installed merchants.", permission_id: "manage_orders", required_scopes: ["commerce.orders.read", "commerce.orders.write"], title: "Manage orders"}, {description: "Read and update customer records for installed merchants.", optional: true, permission_id: "manage_customers", required_scopes: ["customers.read", "customers.write"], title: "Manage customers"}, {description: "Read product, variant, bundle, and SKU lookup catalog records.", optional: true, permission_id: "read_catalog", required_scopes: ["commerce.products.read", "commerce.bundles.read", "commerce.catalog.read"], title: "Read catalog"}, {description: "Create and update bundle catalog records for installed merchants.", optional: true, permission_id: "manage_bundles", required_scopes: ["commerce.bundles.write"], title: "Manage bundles"}], redirect_uris: ["https://plugins.acme.com/flint/oauth/callback", "http://localhost:3000/flint/oauth/callback"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-create.mjs)

### partnerApps.createCredential

Registers an immutable public key, JWKS URL, or workload identity for client assertion authentication. An app can have at most 20 active credentials. Dashboard callers need fresh identity verification. Replace a credential by creating a new one, then removing the old one.

`POST /v1/partner-apps/{partner_app_id}/credentials`

Signature: `createCredential(partner_app_id: InputValue<string>, params: PartnerAppsCreateCredentialParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Required | [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequest.md#createpartnerappcredentialrequest) | An immutable public key, JWKS URL, or workload identity credential for partner app client authentication. |

Body model: [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequest.md#createpartnerappcredentialrequest).

#### partnerApps.createCredential with `type: "public_key"`

The `public_key` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialPublicKeyRequestInput](../models/CreatePartnerAppCredentialPublicKeyRequest.md#createpartnerappcredentialpublickeyrequest).

#### partnerApps.createCredential with `type: "jwks_url"`

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialJWKSURLRequestInput](../models/CreatePartnerAppCredentialJWKSURLRequest.md#createpartnerappcredentialjwksurlrequest).

#### partnerApps.createCredential with `type: "workload_identity"`

The `workload_identity` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialWorkloadIdentityRequestInput](../models/CreatePartnerAppCredentialWorkloadIdentityRequest.md#createpartnerappcredentialworkloadidentityrequest).

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.createCredential("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Production signing key", public_key: {jwk: {crv: "P-256", kid: "production-key", kty: "EC", x: "axfR8uEsQkf4vOblY6RA8ncDfYEt6zOg9KE5RdiYwpY", y: "T-NC4v4af5uO5-tKfA-eFivOM1drMV7Oy7ZAaDe_UfU"}}, type: "public_key"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-createCredential.mjs)

### partnerApps.delete

Archives a partner app (soft delete). The app stays readable with status archived; it cannot be installed, exchange tokens, or receive events, and its client ID is never reused. Revoke every active install first; pending installs are revoked with the app. Delete the app’s webhook endpoints separately.

`DELETE /v1/partner-apps/{partner_app_id}`

Signature: `delete(partner_app_id: InputValue<string>, params?: PartnerAppsDeleteParams, options?: RequestOptions<"merchant">)`

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.delete("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-delete.mjs)

### partnerApps.deleteCredential

Soft-removes the credential and immediately stops its use for client authentication. The credential remains readable. Removing an already removed credential returns it unchanged.

`DELETE /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```typescript
deleteCredential(partner_app_id: InputValue<string>,
 partner_app_credential_id: InputValue<string>,
 params?: PartnerAppsDeleteCredentialParams,
 options?: RequestOptions<"merchant">)
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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.deleteCredential("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pacr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-deleteCredential.mjs)

### partnerApps.get

Returns a single partner app owned by the authenticated merchant.

`GET /v1/partner-apps/{partner_app_id}`

Signature: `get(partner_app_id: InputValue<string>, params?: PartnerAppsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.partnerApps.get("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/partnerApps-get.mjs)

### partnerApps.getCredential

Returns a credential, including a removed credential.

`GET /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```typescript
getCredential(partner_app_id: InputValue<string>,
 partner_app_credential_id: InputValue<string>,
 params?: PartnerAppsGetCredentialParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
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

```typescript
const result = await client.partnerApps.getCredential("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pacr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/partnerApps-getCredential.mjs)

### partnerApps.getInstall

Returns a single install for the installing merchant or the partner app owner.

`GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}`

Signature:

```typescript
getInstall(partner_app_id: InputValue<string>,
 partner_app_install_id: InputValue<string>,
 params?: PartnerAppsGetInstallParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
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

```typescript
const result = await client.partnerApps.getInstall("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/partnerApps-getInstall.mjs)

### partnerApps.list

Returns partner apps owned by the authenticated merchant. Default order: partner_app_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps`

Signature: `list(params?: PartnerAppsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |

#### Response

Returned payload: [PartnerAppListResponse](../models/PartnerAppListResponse.md#partnerapplistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```typescript
const result = await client.partnerApps.list({}, {  });
```

[Complete runnable example](../examples/partnerApps-list.mjs)

### partnerApps.listCredentials

Lists active and removed credentials, ordered by partner_app_credential_id ascending. Default order: partner_app_credential_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/credentials`

Signature:

```typescript
listCredentials(partner_app_id: InputValue<string>,
 params?: PartnerAppsListCredentialsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [PartnerAppCredentialListResponse](../models/PartnerAppCredentialListResponse.md#partnerappcredentiallistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```typescript
const result = await client.partnerApps.listCredentials("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/partnerApps-listCredentials.mjs)

### partnerApps.listInstalls

Returns installs for a partner app owned by the authenticated merchant. Default order: partner_app_install_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/installs`

Signature:

```typescript
listInstalls(partner_app_id: InputValue<string>,
 params?: PartnerAppsListInstallsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `merchant_id` | Optional | string | Filter by installed merchant ID. |
| `status` | Optional | Array of string or string | Filter by install status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending_exchange"`, `"active"`, `"revoked"`. Values: `"pending_exchange"`, `"active"`, `"revoked"`. |

#### Response

Returned payload: [PartnerAppInstallListResponse](../models/PartnerAppInstallListResponse.md#partnerappinstalllistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```typescript
const result = await client.partnerApps.listInstalls("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/partnerApps-listInstalls.mjs)

### partnerApps.revokeEnvironmentGrant

The installing merchant or partner app owner can revoke a single test or live environment grant for an install.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Signature:

```typescript
revokeEnvironmentGrant(partner_app_id: InputValue<string>,
 partner_app_install_id: InputValue<string>,
 environment_grant_id: InputValue<string>,
 params?: PartnerAppsRevokeEnvironmentGrantParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `partner_app_install_id` | Required | string | Flint partner app install ID. |
| `environment_grant_id` | Required | string | Flint environment grant ID. |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.revokeEnvironmentGrant("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", "egrt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-revokeEnvironmentGrant.mjs)

### partnerApps.revokeInstall

The installing merchant or partner app owner can revoke an install and all of its environment grants.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Signature:

```typescript
revokeInstall(partner_app_id: InputValue<string>,
 partner_app_install_id: InputValue<string>,
 params?: PartnerAppsRevokeInstallParams,
 options?: RequestOptions<"merchant">)
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
| 409 | ConflictError |
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.revokeInstall("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-revokeInstall.mjs)

### partnerApps.rotateSecret

Issues a new client secret, returned once. The previous secret keeps working until previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the previous secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once.

`POST /v1/partner-apps/{partner_app_id}/rotate-secret`

Signature: `rotateSecret(partner_app_id: InputValue<string>, params?: PartnerAppsRotateSecretParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Optional | [RotatePartnerAppSecretRequestInput](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput) | The request body for: Rotate partner app secret. |

Body model: [RotatePartnerAppSecretRequestInput](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput).

#### partnerApps.rotateSecret body fields

Field definitions: [shared fields](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput).

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.rotateSecret("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-rotateSecret.mjs)

### partnerApps.update

Updates a partner app owned by the authenticated merchant. Send only the fields to change. permission_manifest replaces the whole manifest and requires expected_version. An existing permission can drop scopes but not gain them; removing or narrowing a permission narrows existing environment grants immediately, and tokens issued with the removed scopes stop working. Adding a permission changes no install until the merchant authorizes again.

`PATCH /v1/partner-apps/{partner_app_id}`

Signature: `update(partner_app_id: InputValue<string>, params: PartnerAppsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string | Flint partner app ID. |
| `body` | Required | [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequest.md#updatepartnerapprequest) | The request body for: Update partner app. minProperties: `1`. |

Body model: [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequest.md#updatepartnerapprequest).

#### partnerApps.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

Fields: [partnerApps.update body fields](#partnerappsupdate-body-fields).

#### partnerApps.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Required | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Required | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Required | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### partnerApps.update: variant 6



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.update("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Example integration"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/partnerApps-update.mjs)

