[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# products

### products.create

Creates a product for the authenticated merchant.

`POST /v1/products`

Signature: `create(params: ProductsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateProductRequestInput](../models/CreateProductRequest.md#createproductrequest) | The request body for: Create product. |

Body model: [CreateProductRequestInput](../models/CreateProductRequest.md#createproductrequest).

#### products.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant` | Optional | [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant. |
| `description` | Optional | string | Description of the product shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Optional | Array of [CreateProductOptionRequestInput](../models/CreateProductOptionRequest.md#createproductoptionrequest) | Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: `1`. |
| `product_type` | Required | string | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `variant_mode` | Required | string | Selects the variant mode branch. Values: `"simple"`, `"optioned"`. |
| `variants` | Optional | Array of [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: `1`. maxItems: `100`. Items: The request body for: Create product variant. |

#### products.create with `variant_mode: "simple"`

The `simple` variant of `CreateProductRequest`.

Body model: [CreateProductRequestSimpleInput](../models/CreateProductRequestSimple.md#createproductrequestsimple).

#### products.create with `variant_mode: "optioned"`

The `optioned` variant of `CreateProductRequest`.

Body model: [CreateProductRequestOptionedInput](../models/CreateProductRequestOptioned.md#createproductrequestoptioned).

#### Response

Returned payload: [Product](../models/Product.md#product).

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

const result = await client.products.create({default_variant: {unit_price_money: {amount: "100", currency: "USD"}}, name: "example", product_type: "physical", variant_mode: "simple"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-create.mjs)

### products.createVariant

Create product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`POST /v1/products/{product_id}/variants`

Signature: `createVariant(product_id: InputValue<string>, params: ProductsCreateVariantParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `body` | Required | [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | The request body for: Create product variant. |

Body model: [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest).

#### products.createVariant body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string | Identifier of the delivery profile to assign to this variant. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationRequestInput](../models/GiftCardProductConfigurationRequestInput.md#giftcardproductconfigurationrequestinput) | Only valid for product_type gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode discounted. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inventory_item` | Optional | [InventoryItemCreateRequestInput](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequest) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string | Identifier of an existing inventory item to track for this variant. Send either inventory_item_id or inventory_item. minLength: `1`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category to store. Omit for a digital product to store digital_goods; explicit categories are preserved. For other product types, omission uses the merchant default. Values: [12 declared values](#productscreatevariant-body-line_item_tax_category-values). |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. When omitted in the variants array on product create, defaults to the variant's array index. For default_variant, defaults to zero. When creating a variant separately, defaults to the highest position among the product's variants plus one, or zero for the first variant. Format: `int32`. |
| `selected_options` | Optional | Array of [ProductVariantSelectedOptionRequestInput](../models/ProductVariantSelectedOptionRequest.md#productvariantselectedoptionrequest) | Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the variant is active or inactive. An inactive variant cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/Weight.md#weight) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### products.createVariant body line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

#### Response

Returned payload: [ProductVariant](../models/ProductVariant.md#productvariant).

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

const result = await client.products.createVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {unit_price_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-createVariant.mjs)

### products.delete

Archives a product and returns its final state. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/products/{product_id}`

Signature: `delete(product_id: InputValue<string>, params?: ProductsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `expected_version` | Optional | integer | Optional product version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

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

const result = await client.products.delete("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-delete.mjs)

### products.deleteVariant

Retire product variant. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/products/{product_id}/variants/{variant_id}`

Signature:

```typescript
deleteVariant(product_id: InputValue<string>,
 variant_id: InputValue<string>,
 params?: ProductsDeleteVariantParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `variant_id` | Required | string | Flint product variant ID. |
| `expected_version` | Optional | integer | Optional product variant version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [ProductVariant](../models/ProductVariant.md#productvariant).

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

const result = await client.products.deleteVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", "var_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-deleteVariant.mjs)

### products.get

Returns a single product by ID.

`GET /v1/products/{product_id}`

Signature: `get(product_id: InputValue<string>, params?: ProductsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `expand` | Optional | Array of string or string | Supported expansions: modifier_set. Expand the attached modifier set. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. Items values: `"modifier_set"`. Values: `"modifier_set"`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

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
const result = await client.products.get("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/products-get.mjs)

### products.getOption

Get product option.

`GET /v1/products/{product_id}/options/{option_id}`

Signature:

```typescript
getOption(product_id: InputValue<string>,
 option_id: InputValue<string>,
 params?: ProductsGetOptionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `option_id` | Required | string | Flint product option ID. |

#### Response

Returned payload: [ProductOption](../models/ProductOption.md#productoption).

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
const result = await client.products.getOption("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", "opt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/products-getOption.mjs)

### products.getVariant

Get product variant.

`GET /v1/products/{product_id}/variants/{variant_id}`

Signature:

```typescript
getVariant(product_id: InputValue<string>,
 variant_id: InputValue<string>,
 params?: ProductsGetVariantParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `variant_id` | Required | string | Flint product variant ID. |
| `expand` | Optional | Array of string or string | Supported expansions: modifier_set. Expand the attached modifier set. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. Items values: `"modifier_set"`. Values: `"modifier_set"`. |

#### Response

Returned payload: [ProductVariant](../models/ProductVariant.md#productvariant).

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
const result = await client.products.getVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", "var_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/products-getVariant.mjs)

### products.list

Returns a paginated list of products for the authenticated merchant. Default order: created_at descending, then product_id descending.

`GET /v1/products`

Signature: `list(params?: ProductsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `product_type` | Optional | Array of string or string | Filter by product type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `category_handle` | Optional | string | Filter by category handle. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Full-value match on ProductVariant.sku, case- and accent-insensitive, with no trimming. All exact variant filters must match the same non-archived variant, including inactive variants. matched_variant is the first matching variant by position, then variant_id; exact predicates take precedence over query for this witness. minLength: `1`. maxLength: `100`. |
| `variant_external_reference_id` | Optional | string | Byte-sensitive whole-value match on ProductVariant.external_reference_id, preserving whitespace, casing, and Unicode. All exact variant filters must match the same non-archived variant. matched_variant is one deterministic witness; page the nested variant list to enumerate all matches. minLength: `1`. maxLength: `255`. |
| `inventory_item_id` | Optional | string | Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory item; this does not match or synchronize the inventory item's SKU. On products, all exact variant filters must match the same non-archived variant. pattern: `^invi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string | Search across product ID, external reference ID, name, description, and SKU. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as prod_01. |
| `delivery_profile_id` | Optional | string | Filter products with at least one non-deleted variant assigned to this delivery profile. |
| `delivery_configuration_status` | Optional | Array of string or string | Filter by aggregated delivery readiness across non-deleted variants. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"configured"`, `"action_required"`, `"not_applicable"`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by product_id. Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: modifier_set. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. Items values: `"modifier_set"`. Values: `"modifier_set"`. |

#### Response

Returned payload: [ProductListResponse](../models/ProductListResponse.md#productlistresponse).

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
const result = await client.products.list({}, {  });
```

[Complete runnable example](../examples/products-list.mjs)

### products.listOptions

List product options. Default order: position ascending, then option_id ascending.

`GET /v1/products/{product_id}/options`

Signature:

```typescript
listOptions(product_id: InputValue<string>,
 params?: ProductsListOptionsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |

#### Response

Returned payload: [ProductOptionListResponse](../models/ProductOptionListResponse.md#productoptionlistresponse).

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

Pagination: `listOptionsItems`, `listOptionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.products.listOptions("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/products-listOptions.mjs)

### products.listVariants

List product variants. Default order: position ascending, then variant_id ascending.

`GET /v1/products/{product_id}/variants`

Signature:

```typescript
listVariants(product_id: InputValue<string>,
 params?: ProductsListVariantsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Full-value match on ProductVariant.sku, case- and accent-insensitive, with no trimming. Does not search the inventory item's SKU. minLength: `1`. maxLength: `100`. |
| `inventory_item_id` | Optional | string | Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory item; this does not match or synchronize the inventory item's SKU. On products, all exact variant filters must match the same non-archived variant. pattern: `^invi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string | Search across variant ID, external reference ID, name, SKU, and barcode. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as var_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to position; ties are broken by variant_id. Default: `"position"`. Values: `"position"`, `"created_at"`, `"updated_at"`, `"unit_price_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to asc for position and desc for other sort fields. Default: `"asc"`. Values: `"asc"`, `"desc"`. |
| `delivery_profile_id` | Optional | string | Filter by assigned delivery profile ID. |
| `delivery_configuration_status` | Optional | Array of string or string | Filter by delivery readiness. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"configured"`, `"action_required"`, `"not_applicable"`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: modifier_set. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. Items values: `"modifier_set"`. Values: `"modifier_set"`. |

#### Response

Returned payload: [ProductVariantListResponse](../models/ProductVariantListResponse.md#productvariantlistresponse).

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

Pagination: `listVariantsItems`, `listVariantsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.products.listVariants("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/products-listVariants.mjs)

### products.update

Applies a sparse update to product-parent fields. When category_handles is present, it replaces the full category list; send [] to clear it. Sellable price, SKU, and inventory live on variants. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/products/{product_id}`

Signature: `update(product_id: InputValue<string>, params: ProductsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `body` | Required | [UpdateProductRequestInput](../models/UpdateProductRequest.md#updateproductrequest) | Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. |

Body model: [UpdateProductRequestInput](../models/UpdateProductRequest.md#updateproductrequest).

#### products.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `description` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when options or images is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Optional | Array of [UpdateProductOptionRequestInput](../models/UpdateProductOptionRequest.md#updateproductoptionrequest) | Replaces all product options and values atomically. Include existing option_id and option_value_id values to retain members. Omitted members are archived. Null is not accepted. Items: A product option to keep or add when updating a product, with its name, position, status, and values. |
| `product_type` | Optional | string | Kind of goods or service this product represents. Changing to digital fills variants' unset line_item_tax_category with digital_goods and advances their versions. Explicit categories are preserved. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a containing bundle would become mixed. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

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

const result = await client.products.update("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Weekend admission"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-update.mjs)

### products.updateVariant

Update product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/products/{product_id}/variants/{variant_id}`

Signature:

```typescript
updateVariant(product_id: InputValue<string>,
 variant_id: InputValue<string>,
 params: ProductsUpdateVariantParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Flint product ID. |
| `variant_id` | Required | string | Flint product variant ID. |
| `body` | Required | [UpdateProductVariantRequestInput](../models/UpdateProductVariantRequest.md#updateproductvariantrequest) | Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. |

Body model: [UpdateProductVariantRequestInput](../models/UpdateProductVariantRequest.md#updateproductvariantrequest).

#### products.updateVariant body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when images is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationRequestInput](../models/GiftCardProductConfigurationRequestInput.md#giftcardproductconfigurationrequestinput) | Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | Replaces the authored variant gallery atomically. Send [] to clear it and resume product-image inheritance. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inventory_item` | Optional | [InventoryItemCreateRequestInput](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequest) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string or null | Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: `1`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category to store. Send null to clear it and use the merchant default. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a containing bundle would become mixed. Values: [13 declared values](#productsupdatevariant-body-line_item_tax_category-values). |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `selected_options` | Optional | Array of [ProductVariantSelectedOptionRequestInput](../models/ProductVariantSelectedOptionRequest.md#productvariantselectedoptionrequest) | Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the variant is active or inactive. An inactive variant cannot be sold. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) or null | Replaces the complete object. Send null to clear it. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/Weight.md#weight) or null | Replaces the complete object. Send null to clear it. |

#### products.updateVariant body line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`
- `null`

#### Response

Returned payload: [ProductVariant](../models/ProductVariant.md#productvariant).

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

const result = await client.products.updateVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", "var_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Balcony admission"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-updateVariant.mjs)

