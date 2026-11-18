[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# licenseKeyPools

### licenseKeyPools.create

Creates an empty pool.

`POST /v1/license-key-pools`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateLicenseKeyPoolRequestInput](../models/CreateLicenseKeyPoolRequestInput.md#createlicensekeypoolrequestinput) | The request body for: Create a license key pool. |

Body model: [CreateLicenseKeyPoolRequestInput](../models/CreateLicenseKeyPoolRequestInput.md#createlicensekeypoolrequestinput).

#### licenseKeyPools.create body fields

Field definitions: [shared fields](../models/CreateLicenseKeyPoolRequestInput.md#createlicensekeypoolrequestinput). Models: [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->licenseKeyPools->create([
  'name' => 'Example software keys',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyPools-create.php)

### licenseKeyPools.createKeys

Records the seller's authorization to sell the uploaded keys. Newly added keys fill pending licenses oldest first before increasing available stock. Keys already present in any of your pools in this environment are returned as existing. The response is 201 when any key was added and 200 when all were already present.

`POST /v1/license-key-pools/{license_key_pool_id}/keys`

Signature: `createKeys(string|Model $license_key_pool_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateLicenseKeyPoolKeysRequestInput](../models/CreateLicenseKeyPoolKeysRequestInput.md#createlicensekeypoolkeysrequestinput) | The request body for: Add keys to a license key pool. |

Body model: [CreateLicenseKeyPoolKeysRequestInput](../models/CreateLicenseKeyPoolKeysRequestInput.md#createlicensekeypoolkeysrequestinput).

#### licenseKeyPools.createKeys body fields

Field definitions: [shared fields](../models/CreateLicenseKeyPoolKeysRequestInput.md#createlicensekeypoolkeysrequestinput).

#### Response

Returned payload: [LicenseKeyPoolAdditions](../models/LicenseKeyPoolAdditions.md#licensekeypooladditions).

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

$result = $client->licenseKeyPools->createKeys('lkp_01KEZF7C00AQV1X2DPWG2NXS7H', [
  'keys' => [
    'EXAMPLE-LICENSE-KEY-DO-NOT-USE',
  ],
  'seller_authorization_confirmed' => true,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyPools-createKeys.php)

### licenseKeyPools.delete

Archives the pool and returns its final quantities. A pool cannot be archived while a variant uses it, an order can still receive keys from it, or it has held or pending keys. Available keys are removed only when explicitly requested.

`DELETE /v1/license-key-pools/{license_key_pool_id}`

Signature: `delete(string|Model $license_key_pool_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->licenseKeyPools->delete('lkp_01KEZF7C00AQV1X2DPWG2NXS7H', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyPools-delete.php)

### licenseKeyPools.get

Returns the pool and its current quantities. Archived pools remain readable.

`GET /v1/license-key-pools/{license_key_pool_id}`

Signature: `get(string|Model $license_key_pool_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->licenseKeyPools->get('lkp_01KEZF7C00AQV1X2DPWG2NXS7H', [], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeyPools-get.php)

### licenseKeyPools.list

Lists pools by created_at descending, then license_key_pool_id descending. Include archived in the status filter to see archived pools. Default order: created_at descending, then license_key_pool_id descending.

`GET /v1/license-key-pools`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->licenseKeyPools->list([], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeyPools-list.php)

### licenseKeyPools.listKeys

Lists masked keys by created_at ascending, then license_key_pool_key_id ascending, which gives upload order. Default order: created_at ascending, then license_key_pool_key_id ascending.

`GET /v1/license-key-pools/{license_key_pool_id}/keys`

Signature: `listKeys(string|Model $license_key_pool_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->licenseKeyPools->listKeys('lkp_01KEZF7C00AQV1X2DPWG2NXS7H', [], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeyPools-listKeys.php)

### licenseKeyPools.removeKeys

Removes available keys and reports an outcome for each selector in request order. This bulk route replaces per-key deletion so a publisher's recall can select keys by value and remove stock even when other entries have sold or are held.

`POST /v1/license-key-pools/{license_key_pool_id}/keys/remove`

Signature: `removeKeys(string|Model $license_key_pool_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [RemoveLicenseKeyPoolKeysRequestInput](../models/RemoveLicenseKeyPoolKeysRequestInput.md#removelicensekeypoolkeysrequestinput) | The request body for: Remove keys from a license key pool. |

Body model: [RemoveLicenseKeyPoolKeysRequestInput](../models/RemoveLicenseKeyPoolKeysRequestInput.md#removelicensekeypoolkeysrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->licenseKeyPools->removeKeys('lkp_01KEZF7C00AQV1X2DPWG2NXS7H', [
  'license_key_pool_key_ids' => [
    'lkpk_01KEZF7C004XWT0EAW2ZQGG93S',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyPools-removeKeys.php)

### licenseKeyPools.update

Updates the pool's settings. An empty JSON object returns the current pool. Enabling public validation requires every key that has not been removed to have at least 16 characters.

`PATCH /v1/license-key-pools/{license_key_pool_id}`

Signature: `update(string|Model $license_key_pool_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_id` | Required | string | The license key pool ID. Must be a valid ID with prefix lkp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateLicenseKeyPoolRequestInput](../models/UpdateLicenseKeyPoolRequestInput.md#updatelicensekeypoolrequestinput) | The request body for: Update a license key pool. |

Body model: [UpdateLicenseKeyPoolRequestInput](../models/UpdateLicenseKeyPoolRequestInput.md#updatelicensekeypoolrequestinput).

#### licenseKeyPools.update body fields

Field definitions: [shared fields](../models/UpdateLicenseKeyPoolRequestInput.md#updatelicensekeypoolrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->licenseKeyPools->update('lkp_01KEZF7C00AQV1X2DPWG2NXS7H', [
  'expected_version' => 1,
  'name' => 'Example desktop keys',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyPools-update.php)

