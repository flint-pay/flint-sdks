[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# categories

### categories.create

Creates a reusable category. If handle is omitted, Flint derives it from the name and never changes it on rename.

`POST /v1/categories`

Signature: `create(params: CategoriesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCategoryRequestInput](../models/CreateCategoryRequest.md#createcategoryrequest) | The request body for: Create category. |

Body model: [CreateCategoryRequestInput](../models/CreateCategoryRequest.md#createcategoryrequest).

#### categories.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string | Description of the category. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `handle` | Optional | string | Unique category handle, using lowercase letters, digits, and single hyphens between words. Cannot be changed after creation. minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Category name shown to buyers. minLength: `1`. maxLength: `100`. |

#### Response

Returned payload: [Category](../models/Category.md#category).

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

const result = await client.categories.create({handle: "events", name: "Events"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/categories-create.mjs)

### categories.delete

Permanently deletes an unreferenced category and returns it with status deleted. Deleted categories cannot be retrieved or listed. Remove all product, bundle, promotion, and return configuration references before deleting.

`DELETE /v1/categories/{category_id}`

Signature: `delete(category_id: InputValue<string>, params?: CategoriesDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string | Flint category ID. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Category](../models/Category.md#category).

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

const result = await client.categories.delete("ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/categories-delete.mjs)

### categories.get

Get category.

`GET /v1/categories/{category_id}`

Signature: `get(category_id: InputValue<string>, params?: CategoriesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string | Flint category ID. |

#### Response

Returned payload: [Category](../models/Category.md#category).

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
const result = await client.categories.get("ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/categories-get.mjs)

### categories.list

List categories. Default order: handle ascending; this key uniquely orders the results.

`GET /v1/categories`

Signature: `list(params?: CategoriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `handle` | Optional | string | Exact handle match. Handles are lowercase, so matching is case-sensitive with no normalization; a value that isn't a valid handle returns 400 INVALID_REQUEST. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across category ID, external reference ID, handle, name, and description. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ctg_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to handle; ties are broken by category_id. Default: `"handle"`. Values: `"handle"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to asc. Default: `"asc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [CategoryListResponse](../models/CategoryListResponse.md#categorylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.categories.list({}, {  });
```

[Complete runnable example](../examples/categories-list.mjs)

### categories.update

Update category.

`PATCH /v1/categories/{category_id}`

Signature: `update(category_id: InputValue<string>, params: CategoriesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string | Flint category ID. |
| `body` | Required | [UpdateCategoryRequestInput](../models/UpdateCategoryRequest.md#updatecategoryrequest) | The request body for: Update category. |

Body model: [UpdateCategoryRequestInput](../models/UpdateCategoryRequest.md#updatecategoryrequest).

#### categories.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Category version last read by the caller. Optional for updates. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | Category name shown to buyers. minLength: `1`. maxLength: `100`. |

#### Response

Returned payload: [Category](../models/Category.md#category).

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

const result = await client.categories.update("ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Seasonal products"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/categories-update.mjs)

