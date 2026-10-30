[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# bundles

### bundles.create

Create bundle.

`POST /v1/bundles`

Signature: `create(params: BundlesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateBundleRequestInput](../models/CreateBundleRequest.md#createbundlerequest) | The request body for: Create bundle. |

Body model: [CreateBundleRequestInput](../models/CreateBundleRequest.md#createbundlerequest).

#### bundles.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `components` | Optional | Array of [CreateBundleComponentRequestInput](../models/CreateBundleComponentRequest.md#createbundlecomponentrequest) | Variants included in the bundle and their quantities. All must share taxable and line_item_tax_category; an unset category equals only another unset category. Components are compared with the first input component, with a NOT_ALLOWED detail at each differing components[index].variant_id. Required when status is active; send status: inactive to create a draft without components. Items: A component to include when creating a bundle: a variant, its quantity and position, and an optional delivery profile override. |
| `description` | Optional | string | Description of the bundle shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Bundle name shown to buyers. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the bundle is active or inactive. Defaults to active; an active bundle requires components. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [Bundle](../models/Bundle.md#bundle).

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
| 504 | ServerError |

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

const result = await client.bundles.create({name: "example", unit_price_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/bundles-create.mjs)

### bundles.delete

Archives a bundle and returns its final state. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/bundles/{bundle_id}`

Signature: `delete(bundle_id: InputValue<string>, params?: BundlesDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | Flint bundle ID. |
| `expected_version` | Optional | integer | Optional bundle version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Bundle](../models/Bundle.md#bundle).

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

const result = await client.bundles.delete("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/bundles-delete.mjs)

### bundles.get

Get bundle.

`GET /v1/bundles/{bundle_id}`

Signature: `get(bundle_id: InputValue<string>, params?: BundlesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | Flint bundle ID. |
| `expand` | Optional | Array of string or string | Supported expansions: modifier_set. Expand the attached modifier set. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. Items values: `"modifier_set"`. Values: `"modifier_set"`. |

#### Response

Returned payload: [Bundle](../models/Bundle.md#bundle).

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
const result = await client.bundles.get("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/bundles-get.mjs)

### bundles.list

List bundles. Default order: created_at descending, then bundle_id descending.

`GET /v1/bundles`

Signature: `list(params?: BundlesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Filter by exact SKU. maxLength: `100`. |
| `query` | Optional | string | Search across bundle ID, external reference ID, name, description, SKU, and barcode. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as bun_01. |
| `category_handle` | Optional | string | Filter by category handle. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by bundle_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `delivery_profile_id` | Optional | string | Filter bundles with at least one component assigned to this delivery profile. |
| `delivery_configuration_status` | Optional | Array of string or string | Filter by aggregated delivery readiness across bundle components. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"configured"`, `"action_required"`, `"not_applicable"`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: modifier_set. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. Items values: `"modifier_set"`. Values: `"modifier_set"`. |

#### Response

Returned payload: [BundleListResponse](../models/BundleListResponse.md#bundlelistresponse).

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
const result = await client.bundles.list({}, {  });
```

[Complete runnable example](../examples/bundles-list.mjs)

### bundles.listComponents

List bundle components. Default order: position ascending, then bundle_component_id ascending.

`GET /v1/bundles/{bundle_id}/components`

Signature:

```typescript
listComponents(bundle_id: InputValue<string>,
 params?: BundlesListComponentsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | Flint bundle ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `delivery_profile_id` | Optional | string | Filter by assigned delivery profile ID. |
| `delivery_configuration_status` | Optional | Array of string or string | Filter by delivery readiness. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"configured"`, `"action_required"`, `"not_applicable"`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |

#### Response

Returned payload: [BundleComponentListResponse](../models/BundleComponentListResponse.md#bundlecomponentlistresponse).

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

Pagination: `listComponentsItems`, `listComponentsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.bundles.listComponents("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/bundles-listComponents.mjs)

### bundles.update

Update bundle. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/bundles/{bundle_id}`

Signature: `update(bundle_id: InputValue<string>, params: BundlesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | Flint bundle ID. |
| `body` | Required | [UpdateBundleRequestInput](../models/UpdateBundleRequest.md#updatebundlerequest) | Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. |

Body model: [UpdateBundleRequestInput](../models/UpdateBundleRequest.md#updatebundlerequest).

#### bundles.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `components` | Optional | Array of [UpdateBundleComponentRequestInput](../models/UpdateBundleComponentRequest.md#updatebundlecomponentrequest) | Replaces all bundle components atomically. Include an existing bundle_component_id to retain a member. Omitted members are removed. All must share taxable and line_item_tax_category; an unset category equals only another unset category. Components are compared with the first input component, with a NOT_ALLOWED detail at each differing components[index].variant_id. Null is not accepted. Items: A component to keep or add when updating a bundle, with its variant, quantity, position, and delivery profile. |
| `description` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when components or images is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string | Bundle name shown to buyers. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the bundle is active or inactive. An inactive bundle cannot be sold. Values: `"active"`, `"inactive"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [Bundle](../models/Bundle.md#bundle).

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
| 504 | ServerError |

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

const result = await client.bundles.update("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Weekend admission pass"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/bundles-update.mjs)

