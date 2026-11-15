[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# priceLists

### priceLists.create

Creates a merchant-only price list. Currency is immutable. A customer segment can belong to only one unarchived list, including inactive lists.

`POST /v1/price-lists`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreatePriceListRequestInput](../models/CreatePriceListRequestInput.md#createpricelistrequestinput) | Fields for a new price list. |

Body model: [CreatePriceListRequestInput](../models/CreatePriceListRequestInput.md#createpricelistrequestinput).

#### priceLists.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency; currently only USD is supported. Cannot be changed after creation. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `customer_segments` | Optional | Array of string | Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived list, including inactive lists. Omit or send [] for no segment assignments. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name used to identify the price list. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Initial availability. Inactive lists remain assignable but do not provide prices. Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [PriceList](../models/PriceList.md#pricelist).

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

$result = $client->priceLists->create([
  'currency' => 'USD',
  'customer_segments' => [
    'wholesale',
  ],
  'name' => 'Wholesale',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/priceLists-create.php)

### priceLists.createPrices

Atomically adds 1 to 500 variant prices. on_variant_conflict defaults to return_existing; update replaces an existing price and its full schedule. Each addition reports created, existing, or updated. Returns 201 if any price was created, otherwise 200. One changed batch advances the list version once. A list holds up to 10,000 prices.

`POST /v1/price-lists/{price_list_id}/prices`

Signature: `createPrices(string|Model $price_list_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreatePriceListPricesRequestInput](../models/CreatePriceListPricesRequestInput.md#createpricelistpricesrequestinput) | Add or update a batch of variant prices atomically. |

Body model: [CreatePriceListPricesRequestInput](../models/CreatePriceListPricesRequestInput.md#createpricelistpricesrequestinput).

#### priceLists.createPrices body fields

Field definitions: [shared fields](../models/CreatePriceListPricesRequestInput.md#createpricelistpricesrequestinput). Models: [PriceListPriceRequestInput](../models/PriceListPriceRequestInput.md#pricelistpricerequestinput).

#### Response

Returned payload: [CreatePriceListPricesResult](../models/CreatePriceListPricesResult.md#createpricelistpricesresult).

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

$result = $client->priceLists->createPrices('prl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'prices' => [
    (object) [
      'unit_price_money' => (object) [
        'amount' => '800',
        'currency' => 'USD',
      ],
      'variant_id' => 'var_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/priceLists-createPrices.php)

### priceLists.delete

Soft-deletes a price list, releasing its segment assignments, and returns its full snapshot with status archived. A list referenced by customers returns RESOURCE_IN_USE. Repeating DELETE returns the same archived snapshot; a stale expected_version still returns VERSION_CONFLICT.

`DELETE /v1/price-lists/{price_list_id}`

Signature: `delete(string|Model $price_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `expected_version` | Optional | integer | Version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PriceList](../models/PriceList.md#pricelist).

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

$result = $client->priceLists->delete('prl_01KEZF7C00EH39P59GN3XMGS2Q', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/priceLists-delete.php)

### priceLists.deletePrice

Permanently removes this variant price from its list and returns the parent price list with its new count and version. expected_version fences the parent price list. Repeating without the original Idempotency-Key returns RESOURCE_NOT_FOUND.

`DELETE /v1/price-lists/{price_list_id}/prices/{price_list_price_id}`

Signature:

```text
deletePrice(string|
  Model $price_list_id,
 string|
  Model $price_list_price_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `price_list_price_id` | Required | string | Flint price list price id. |
| `expected_version` | Optional | integer | Version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PriceList](../models/PriceList.md#pricelist).

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

$result = $client->priceLists->deletePrice('prl_01KEZF7C00EH39P59GN3XMGS2Q', 'prlp_01KEZF7C007DQ721A29CDR73DN', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/priceLists-deletePrice.php)

### priceLists.get

Returns a price list by ID, including archived lists. Price lists and their segment assignments are merchant-only.

`GET /v1/price-lists/{price_list_id}`

Signature: `get(string|Model $price_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PriceList](../models/PriceList.md#pricelist).

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
$result = $client->priceLists->get('prl_01KEZF7C00EH39P59GN3XMGS2Q', [], new RequestOptions());
```

[Complete runnable example](../examples/priceLists-get.php)

### priceLists.getPrice

Returns a variant price and its complete quantity schedule within this price list.

`GET /v1/price-lists/{price_list_id}/prices/{price_list_price_id}`

Signature: `getPrice(string|Model $price_list_id, string|Model $price_list_price_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `price_list_price_id` | Required | string | Flint price list price id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PriceListPrice](../models/PriceListPrice.md#pricelistprice).

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
$result = $client->priceLists->getPrice('prl_01KEZF7C00EH39P59GN3XMGS2Q', 'prlp_01KEZF7C007DQ721A29CDR73DN', [], new RequestOptions());
```

[Complete runnable example](../examples/priceLists-getPrice.php)

### priceLists.list

Lists price lists. Archived lists are excluded unless the status filter explicitly names archived. Results default to created_at descending, with price_list_id descending as the tiebreak. Default order: created_at descending, then price_list_id descending.

`GET /v1/price-lists`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `customer_segment` | Optional | string | Exact match on a Customer.segment label assigned to this price list. |
| `external_reference_id` | Optional | string | Exact match on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across price list ID, name, and external reference ID. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as prl_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by price_list_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PriceListListResponse](../models/PriceListListResponse.md#pricelistlistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->priceLists->list([], new RequestOptions());
```

[Complete runnable example](../examples/priceLists-list.php)

### priceLists.listPrices

Lists the variant prices in a price list. Filter by variant_id or product_id. Results default to created_at descending, with price_list_price_id descending as the tiebreak. Default order: created_at descending, then price_list_price_id descending.

`GET /v1/price-lists/{price_list_id}/prices`

Signature: `listPrices(string|Model $price_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `variant_id` | Optional | string | Exact match on the priced variant ID. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `product_id` | Optional | string | Exact match on the product owning the priced variant. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by price_list_price_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PriceListPriceListResponse](../models/PriceListPriceListResponse.md#pricelistpricelistresponse).

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

Pagination: `listPricesItems`, `listPricesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->priceLists->listPrices('prl_01KEZF7C00EH39P59GN3XMGS2Q', [], new RequestOptions());
```

[Complete runnable example](../examples/priceLists-listPrices.php)

### priceLists.update

Updates only the fields supplied. Send customer_segments: [] to clear segment assignments. Inactive lists remain assignable but do not provide prices. Send expected_version to reject a stale write. Archived lists cannot be changed.

`PATCH /v1/price-lists/{price_list_id}`

Signature: `update(string|Model $price_list_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePriceListRequestInput](../models/UpdatePriceListRequestInput.md#updatepricelistrequestinput) | Fields to change on an unarchived price list. Omitted fields remain unchanged. minProperties: `1`. |

Body model: [UpdatePriceListRequestInput](../models/UpdatePriceListRequestInput.md#updatepricelistrequestinput).

#### priceLists.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_segments` | Optional | Array of string | Complete set of Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived list, including inactive lists. On PATCH, omission preserves the set and [] clears it. Include expected_version whenever customer_segments is supplied. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `expected_version` | Optional | integer | Aggregate version last read. Required when customer_segments is present. A mismatch returns VERSION_CONFLICT without changing the list. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to keep it unchanged; send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Metadata patch. Omit to keep metadata unchanged; send null to clear all metadata. |
| `name` | Optional | string | Name used to identify the price list. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Set active or inactive. To archive a price list, use DELETE /v1/price-lists/{price_list_id}. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [PriceList](../models/PriceList.md#pricelist).

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

$result = $client->priceLists->update('prl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Wholesale',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/priceLists-update.php)

### priceLists.updatePrice

Updates a variant price or its quantity schedule. Omit quantity_price_breaks to preserve it; send [] to clear it. The resulting complete schedule must remain valid. expected_version fences this child price; an actual change also advances the parent list version once.

`PATCH /v1/price-lists/{price_list_id}/prices/{price_list_price_id}`

Signature: `updatePrice(string|Model $price_list_id, string|Model $price_list_price_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `price_list_id` | Required | string | Flint price list id. |
| `price_list_price_id` | Required | string | Flint price list price id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePriceListPriceRequestInput](../models/UpdatePriceListPriceRequestInput.md#updatepricelistpricerequestinput) | Change one price or its quantity schedule. Omitted fields remain unchanged. minProperties: `1`. |

Body model: [UpdatePriceListPriceRequestInput](../models/UpdatePriceListPriceRequestInput.md#updatepricelistpricerequestinput).

#### priceLists.updatePrice body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version of this child price last read. Required when quantity_price_breaks is present. A mismatch returns VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakRequestInput](../models/QuantityPriceBreakRequestInput.md#quantitypricebreakrequestinput) | Replace the complete quantity schedule. Omit to preserve it; send [] to clear it. The resulting complete schedule must remain valid. Include expected_version whenever quantity_price_breaks is supplied. maxItems: `10`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | New positive base net unit price in the list's currency. The resulting complete schedule must remain valid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [PriceListPrice](../models/PriceListPrice.md#pricelistprice).

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

$result = $client->priceLists->updatePrice('prl_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'prlp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'unit_price_money' => (object) [
    'amount' => '750',
    'currency' => 'USD',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/priceLists-updatePrice.php)

