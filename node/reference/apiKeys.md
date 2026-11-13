[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# apiKeys

### apiKeys.create

Creates a merchant-bound external API key. A live credential creates a live key, or a test key bound to the sandbox named by sandbox_id. A sandbox-bound credential, such as a test key, creates test keys in its own sandbox only. An onboarding session creates its merchant's first keys here, in its default sandbox. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.

`POST /v1/api-keys`

Signature: `create(params: ApiKeysCreateParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateAPIKeyRequestInput](../models/CreateAPIKeyRequest.md#createapikeyrequest) | The request body for: Create an API key. |

Body model: [CreateAPIKeyRequestInput](../models/CreateAPIKeyRequest.md#createapikeyrequest).

#### apiKeys.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `partner_app_install_id` | Optional | string | Links this key to a connected app's install. Revoking the install or its grant for this key's environment revokes the key. The install must be active and authorized for that environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created by a linked key inherit its link. Each install can have up to 25 linked keys that have not been revoked per environment. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `sandbox_id` | Optional | string | Public ID of the sandbox the new test key is bound to. A live credential or a user session sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound credential, such as a test key, may name only its own sandbox and gets a test key there either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of the merchant's active sandboxes, and an onboarding session must send it: its first key goes to default_sandbox_id. Storage generation IDs are never accepted. minLength: `1`. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKey.md#apikey-scopes--values). |

#### apiKeys.create with `access: "full"`

The `full` variant of `CreateAPIKeyRequest`.

Body model: [CreateAPIKeyRequestFullInput](../models/CreateAPIKeyRequestFull.md#createapikeyrequestfull).

#### apiKeys.create with `access: "read_only"`

The `read_only` variant of `CreateAPIKeyRequest`.

Body model: [CreateAPIKeyRequestReadOnlyInput](../models/CreateAPIKeyRequestReadOnly.md#createapikeyrequestreadonly).

#### apiKeys.create with `access: "restricted"`

The `restricted` variant of `CreateAPIKeyRequest`.

Body model: [CreateAPIKeyRequestRestrictedInput](../models/CreateAPIKeyRequestRestricted.md#createapikeyrequestrestricted).

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.apiKeys.create({access: "restricted", expires_at: "2027-03-17T14:30:00Z", name: "Sandbox orders integration", scopes: ["accounts.api_keys.read", "commerce.orders.read", "commerce.orders.write"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/apiKeys-create.mjs)

### apiKeys.get

Returns external API key metadata. Secrets, internal keys, and demo-session keys are not returned.

`GET /v1/api-keys/{api_key_id}`

Signature: `get(api_key_id: InputValue<string>, params?: ApiKeysGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string | Flint API key ID. |

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.apiKeys.get("key_01KEZF7C008CTC2G5V6J08M6S7", {}, {  });
```

[Complete runnable example](../examples/apiKeys-get.mjs)

### apiKeys.list

Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned. Default order: created_at descending, then api_key_id descending.

`GET /v1/api-keys`

Signature: `list(params?: ApiKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_install_id` | Optional | string | Exact-match filter on partner_app_install_id. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Optional API key status filter. Active keys have no expiration or a future expires_at. Expired keys are not revoked and have expires_at at or before the current time. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"expired"`, `"revoked"`. Values: `"active"`, `"expired"`, `"revoked"`. |
| `created_by_type` | Optional | Array of string or string | Filter by created_by.resource_type. A user filter matches keys a user created directly, not keys their other keys created. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"api_key"`, `"user"`, `"workload_identity"`. Values: `"api_key"`, `"user"`, `"workload_identity"`. |
| `created_by_id` | Optional | string | Filter by created_by.resource_id. The ID prefix (key_, usr_, or wid_) sets the creator type, so created_by_type is optional; when sent, it must be that one type. pattern: `^(key\|usr\|wid)_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by api_key_id. Default: `"created_at"`. Values: `"created_at"`, `"last_used_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [APIKeyListResponse](../models/APIKeyListResponse.md#apikeylistresponse).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.apiKeys.list({}, {  });
```

[Complete runnable example](../examples/apiKeys-list.mjs)

### apiKeys.revoke

Permanently revokes an external API key and returns metadata with status revoked.

`POST /v1/api-keys/{api_key_id}/revoke`

Signature: `revoke(api_key_id: InputValue<string>, params?: ApiKeysRevokeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string | Flint API key ID. |
| `body` | Optional | [ConfigurationVersionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Revoke an API key. |

Body model: [ConfigurationVersionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### apiKeys.revoke body fields

Field definitions: [shared fields](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.apiKeys.revoke("key_01KEZF7C008CTC2G5V6J08M6S7", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/apiKeys-revoke.mjs)

### apiKeys.update

Updates an API key's name, access, scopes, or expires_at. Expired keys can be updated, and a future expires_at reactivates one. A revoked key can't be updated. An API key caller may grant only scopes it holds and can manage only keys whose scopes it holds.

`PATCH /v1/api-keys/{api_key_id}`

Signature: `update(api_key_id: InputValue<string>, params: ApiKeysUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string | Flint API key ID. |
| `body` | Required | [UpdateAPIKeyRequestInput](../models/UpdateAPIKeyRequest.md#updateapikeyrequest) | The request body for: Update an API key. minProperties: `1`. |

Body model: [UpdateAPIKeyRequestInput](../models/UpdateAPIKeyRequest.md#updateapikeyrequest).

#### apiKeys.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKey.md#apikey-scopes--values). |

#### apiKeys.update: Full



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKey.md#apikey-scopes--values). |

#### apiKeys.update: Read only



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"read_only"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKey.md#apikey-scopes--values). |

#### apiKeys.update: Restricted



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"restricted"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKey.md#apikey-scopes--values). |

#### apiKeys.update: No access change



Field definitions: [shared fields](#apikeysupdate-body-fields).

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.apiKeys.update("key_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Reporting key"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/apiKeys-update.mjs)

