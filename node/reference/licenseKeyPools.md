[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# licenseKeyPools

### licenseKeyPools.create

Creates an empty pool.

`POST /v1/license-key-pools`

Signature: `create(params: LicenseKeyPoolsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateLicenseKeyPoolRequestInput](../models/CreateLicenseKeyPoolRequest.md#createlicensekeypoolrequest) | The request body for: Create a license key pool. |

Body model: [CreateLicenseKeyPoolRequestInput](../models/CreateLicenseKeyPoolRequest.md#createlicensekeypoolrequest).

#### licenseKeyPools.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Optional | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | The name of the pool. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `public_validation_enabled` | Optional | boolean | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. Default: `false`. |

#### Response

Returned payload: [LicenseKeyPool](../models/LicenseKeyPool.md#licensekeypool).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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

const result = await client.licenseKeyPools.create({name: "Example software keys"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/licenseKeyPools-create.mjs)

### licenseKeyPools.createKeys

Records the seller's authorization to sell the uploaded keys. Newly added keys fill pending licenses oldest first before increasing available stock. Keys already present in any of your pools in this environment are returned as existing. The response is 201 when any key was added and 200 when all were already present.

`POST /v1/license-key-pools/{license_key_pool_id}/keys`

Signature: `createKeys(license_key_pool_id: InputValue<string>, params: LicenseKeyPoolsCreateKeysParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateLicenseKeyPoolKeysRequestInput](../models/CreateLicenseKeyPoolKeysRequest.md#createlicensekeypoolkeysrequest) | The request body for: Add keys to a license key pool. |

Body model: [CreateLicenseKeyPoolKeysRequestInput](../models/CreateLicenseKeyPoolKeysRequest.md#createlicensekeypoolkeysrequest).

#### licenseKeyPools.createKeys body fields

Field definitions: [shared fields](../models/CreateLicenseKeyPoolKeysRequest.md#createlicensekeypoolkeysrequest).

#### Response

Returned payload: [LicenseKeyPoolAdditions](../models/LicenseKeyPoolAdditions.md#licensekeypooladditions) | [LicenseKeyPoolAdditions](../models/LicenseKeyPoolAdditions.md#licensekeypooladditions).

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

const result = await client.licenseKeyPools.createKeys("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {keys: ["EXAMPLE-LICENSE-KEY-DO-NOT-USE"], seller_authorization_confirmed: true}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/licenseKeyPools-createKeys.mjs)

### licenseKeyPools.delete

Archives the pool and returns its final quantities. A pool cannot be archived while a variant uses it, an order can still receive keys from it, or it has held or pending keys. Available keys are removed only when explicitly requested.

`DELETE /v1/license-key-pools/{license_key_pool_id}`

Signature: `delete(license_key_pool_id: InputValue<string>, params?: LicenseKeyPoolsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `expected_version` | Optional | integer | Refuse the archive if the pool version has changed. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `remove_available_keys` | Optional | boolean | Set to true to remove every available key before archiving. Default: `false`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyPool](../models/LicenseKeyPool.md#licensekeypool).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.licenseKeyPools.delete("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/licenseKeyPools-delete.mjs)

### licenseKeyPools.get

Returns the pool and its current quantities. Archived pools remain readable.

`GET /v1/license-key-pools/{license_key_pool_id}`

Signature:

```typescript
get(license_key_pool_id: InputValue<string>,
 params?: LicenseKeyPoolsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyPool](../models/LicenseKeyPool.md#licensekeypool).

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
const result = await client.licenseKeyPools.get("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {}, {  });
```

[Complete runnable example](../examples/licenseKeyPools-get.mjs)

### licenseKeyPools.list

Lists pools by created_at descending, then license_key_pool_id descending. Include archived in the status filter to see archived pools. Default order: created_at descending, then license_key_pool_id descending.

`GET /v1/license-key-pools`

Signature: `list(params?: LicenseKeyPoolsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyPoolListResponse](../models/LicenseKeyPoolListResponse.md#licensekeypoollistresponse).

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
const result = await client.licenseKeyPools.list({}, {  });
```

[Complete runnable example](../examples/licenseKeyPools-list.mjs)

### licenseKeyPools.listKeys

Lists masked keys by created_at ascending, then license_key_pool_key_id ascending, which gives upload order. Default order: created_at ascending, then license_key_pool_key_id ascending.

`GET /v1/license-key-pools/{license_key_pool_id}/keys`

Signature:

```typescript
listKeys(license_key_pool_id: InputValue<string>,
 params?: LicenseKeyPoolsListKeysParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by one or more pool key statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"available"`, `"held"`, `"issued"`, `"removed"`. Values: `"available"`, `"held"`, `"issued"`, `"removed"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyPoolKeyListResponse](../models/LicenseKeyPoolKeyListResponse.md#licensekeypoolkeylistresponse).

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

Pagination: `listKeysItems`, `listKeysPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.licenseKeyPools.listKeys("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {}, {  });
```

[Complete runnable example](../examples/licenseKeyPools-listKeys.mjs)

### licenseKeyPools.removeKeys

Removes available keys and reports an outcome for each selector in request order. This bulk route replaces per-key deletion so a publisher's recall can select keys by value and remove stock even when other entries have sold or are held.

`POST /v1/license-key-pools/{license_key_pool_id}/keys/remove`

Signature: `removeKeys(license_key_pool_id: InputValue<string>, params: LicenseKeyPoolsRemoveKeysParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [RemoveLicenseKeyPoolKeysRequestInput](../models/RemoveLicenseKeyPoolKeysRequest.md#removelicensekeypoolkeysrequest) | The request body for: Remove keys from a license key pool. |

Body model: [RemoveLicenseKeyPoolKeysRequestInput](../models/RemoveLicenseKeyPoolKeysRequest.md#removelicensekeypoolkeysrequest).

#### licenseKeyPools.removeKeys: Key values



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `keys` | Required | Array of string | Full key values from the recall list, in request order. minItems: `1`. maxItems: `1000`. Items: A full key. After trimming surrounding whitespace, it must have 8 to 255 printable ASCII characters. minLength: `1`. pattern: `^[	      -     　]*[!-~][ -~]{6,253}[!-~][	      -     　]*$`. |

#### licenseKeyPools.removeKeys: Pool key IDs



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_key_ids` | Required | Array of string | Pool key IDs from the masked key list, in request order. minItems: `1`. maxItems: `1000`. Items: minLength: `1`. pattern: `^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |

#### Response

Returned payload: [LicenseKeyPoolRemovals](../models/LicenseKeyPoolRemovals.md#licensekeypoolremovals).

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

const result = await client.licenseKeyPools.removeKeys("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {license_key_pool_key_ids: ["lkpk_01KEZF7C004XWT0EAW2ZQGG93S"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/licenseKeyPools-removeKeys.mjs)

### licenseKeyPools.update

Updates the pool's settings. An empty JSON object returns the current pool. Enabling public validation requires every key that has not been removed to have at least 16 characters.

`PATCH /v1/license-key-pools/{license_key_pool_id}`

Signature: `update(license_key_pool_id: InputValue<string>, params: LicenseKeyPoolsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateLicenseKeyPoolRequestInput](../models/UpdateLicenseKeyPoolRequest.md#updatelicensekeypoolrequest) | The request body for: Update a license key pool. |

Body model: [UpdateLicenseKeyPoolRequestInput](../models/UpdateLicenseKeyPoolRequest.md#updatelicensekeypoolrequest).

#### licenseKeyPools.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `low_stock_threshold` | Optional | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | The name of the pool. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `public_validation_enabled` | Optional | boolean | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. |

#### Response

Returned payload: [LicenseKeyPool](../models/LicenseKeyPool.md#licensekeypool).

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

const result = await client.licenseKeyPools.update("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {expected_version: 1, name: "Example desktop keys"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/licenseKeyPools-update.mjs)

