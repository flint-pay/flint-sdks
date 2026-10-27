[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# products

### products.create

Creates a product for the authenticated merchant.

`POST /v1/products`

Signature: `create(params: (InputValue<CreateProductRequestInput>) & { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateProductRequestInput](../models/CreateProductRequest.md#createproductrequest) | The request body for: Create product. |

Body model: [CreateProductRequestInput](../models/CreateProductRequest.md#createproductrequest).

#### products.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant` | Optional | [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant. |
| `description` | Optional | string | Description of the product shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Optional | Array of [CreateProductOptionRequestInput](../models/CreateProductOptionRequest.md#createproductoptionrequest) | Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: `1`. |
| `product_type` | Required | string | Kind of goods or service this product represents. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `variants` | Optional | Array of [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: `1`. maxItems: `100`. |

#### products.create body oneOf variant 1



#### products.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant` | Required | [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant. |
| `description` | Optional | string | Description of the product shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Optional | Array of [CreateProductOptionRequestInput](../models/CreateProductOptionRequest.md#createproductoptionrequest) | Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: `1`. |
| `product_type` | Required | string | Kind of goods or service this product represents. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `variants` | Optional | Array of [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: `1`. maxItems: `100`. |

#### products.create body oneOf variant 2



#### products.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant` | Optional | [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant. |
| `description` | Optional | string | Description of the product shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Required | Array of [CreateProductOptionRequestInput](../models/CreateProductOptionRequest.md#createproductoptionrequest) | Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: `1`. |
| `product_type` | Required | string | Kind of goods or service this product represents. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `variants` | Required | Array of [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: `1`. maxItems: `100`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.products.create({default_variant: {unit_price_money: {amount: "100", currency: "USD"}}, name: "example", product_type: "physical"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-create.mjs)

### products.createVariant

Create product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`POST /v1/products/{product_id}/variants`

Signature:

```typescript
createVariant(product_id: InputValue<string>,
 params: (InputValue<ProductVariantRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest) | The request body for: Create product variant. |

Body model: [ProductVariantRequestInput](../models/ProductVariantRequest.md#productvariantrequest).

#### products.createVariant body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string | Identifier of the delivery profile to assign to this variant. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationInput](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Only valid for product_type gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode discounted. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `inventory_item` | Optional | [InventoryItemCreateRequestInput](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequest) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string | Identifier of an existing inventory item to track for this variant. Send either inventory_item_id or inventory_item. minLength: `1`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#productscreatevariant-body-line_item_tax_category-values). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
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

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createVariantWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.products.createVariant("example", {unit_price_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-createVariant.mjs)

### products.deleteVariant

Retire product variant. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/products/{product_id}/variants/{variant_id}`

Signature:

```typescript
deleteVariant(product_id: InputValue<string>,
 variant_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `variant_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [ProductVariant](../models/ProductVariant.md#productvariant).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteVariantWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.products.deleteVariant("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-deleteVariant.mjs)

### products.get

Returns a single product by ID.

`GET /v1/products/{product_id}`

Signature:

```typescript
get(product_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"modifier_set">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"modifier_set"`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.products.get("example", {}, {  });
```

[Complete runnable example](../examples/products-get.mjs)

### products.getOption

Get product option.

`GET /v1/products/{product_id}/options/{option_id}`

Signature:

```typescript
getOption(product_id: InputValue<string>,
 option_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `option_id` | Required | string |  |

#### Response

Returned payload: [ProductOption](../models/ProductOption.md#productoption).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getOptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.products.getOption("example", "example", {}, {  });
```

[Complete runnable example](../examples/products-getOption.mjs)

### products.getVariant

Get product variant.

`GET /v1/products/{product_id}/variants/{variant_id}`

Signature:

```typescript
getVariant(product_id: InputValue<string>,
 variant_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"modifier_set">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `variant_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"modifier_set"`. |

#### Response

Returned payload: [ProductVariant](../models/ProductVariant.md#productvariant).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getVariantWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.products.getVariant("example", "example", {}, {  });
```

[Complete runnable example](../examples/products-getVariant.mjs)

### products.list

Returns a paginated list of products for the authenticated merchant.

`GET /v1/products`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
  "category_handle"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "sku"?: InputValue<string>;
  "variant_external_reference_id"?: InputValue<string>;
  "inventory_item_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "delivery_profile_id"?: InputValue<string>;
  "delivery_configuration_status"?: InputValue<Array<"configured" |
    "action_required" |
    "not_applicable">>;
  "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"modifier_set">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `product_type` | Optional | Array of string | minItems: `1`. Items values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `category_handle` | Optional | string | maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | minLength: `1`. maxLength: `100`. |
| `variant_external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `inventory_item_id` | Optional | string | pattern: `^invi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string |  |
| `delivery_profile_id` | Optional | string |  |
| `delivery_configuration_status` | Optional | Array of string | minItems: `1`. Items values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"modifier_set"`. |

#### Response

Returned payload: [ProductListResponse](../models/ProductListResponse.md#productlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.products.list({}, {  });
```

[Complete runnable example](../examples/products-list.mjs)

### products.listOptions

List product options.

`GET /v1/products/{product_id}/options`

Signature:

```typescript
listOptions(product_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |

#### Response

Returned payload: [ProductOptionListResponse](../models/ProductOptionListResponse.md#productoptionlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listOptionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listOptionsItems`, `listOptionsPages`, `listOptionsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.products.listOptions("example", {}, {  });
```

[Complete runnable example](../examples/products-listOptions.mjs)

### products.listVariants

List product variants.

`GET /v1/products/{product_id}/variants`

Signature:

```typescript
listVariants(product_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
  "external_reference_id"?: InputValue<string>;
  "sku"?: InputValue<string>;
  "inventory_item_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "delivery_profile_id"?: InputValue<string>;
  "delivery_configuration_status"?: InputValue<Array<"configured" |
    "action_required" |
    "not_applicable">>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"modifier_set">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | minLength: `1`. maxLength: `100`. |
| `inventory_item_id` | Optional | string | pattern: `^invi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"position"`. Values: `"position"`, `"created_at"`, `"updated_at"`, `"unit_price_money"`. |
| `sort_direction` | Optional | string | Default: `"asc"`. Values: `"asc"`, `"desc"`. |
| `delivery_profile_id` | Optional | string |  |
| `delivery_configuration_status` | Optional | Array of string | minItems: `1`. Items values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"modifier_set"`. |

#### Response

Returned payload: [ProductVariantListResponse](../models/ProductVariantListResponse.md#productvariantlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listVariantsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listVariantsItems`, `listVariantsPages`, `listVariantsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.products.listVariants("example", {}, {  });
```

[Complete runnable example](../examples/products-listVariants.mjs)

### products.remove

Archives a product and returns its final state. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/products/{product_id}`

Signature:

```typescript
remove(product_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.products.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-remove.mjs)

### products.update

Applies a sparse update to product-parent fields. When category_handles is present, it replaces the full category list; send [] to clear it. Sellable price, SKU, and inventory live on variants. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/products/{product_id}`

Signature:

```typescript
update(product_id: InputValue<string>,
 params: (InputValue<UpdateProductRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateProductRequestInput](../models/UpdateProductRequest.md#updateproductrequest) | Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. |

Body model: [UpdateProductRequestInput](../models/UpdateProductRequest.md#updateproductrequest).

#### products.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `description` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when options or images is present. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Optional | Array of [UpdateProductOptionRequestInput](../models/UpdateProductOptionRequest.md#updateproductoptionrequest) | Replaces all product options and values atomically. Include existing option_id and option_value_id values to retain members. Omitted members are archived. Null is not accepted. |
| `product_type` | Optional | string | Kind of goods or service this product represents. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [Product](../models/Product.md#product).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.products.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-update.mjs)

### products.updateVariant

Update product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/products/{product_id}/variants/{variant_id}`

Signature:

```typescript
updateVariant(product_id: InputValue<string>,
 variant_id: InputValue<string>,
 params: (InputValue<UpdateProductVariantRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `variant_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateProductVariantRequestInput](../models/UpdateProductVariantRequest.md#updateproductvariantrequest) | Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. |

Body model: [UpdateProductVariantRequestInput](../models/UpdateProductVariantRequest.md#updateproductvariantrequest).

#### products.updateVariant body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when images is present. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationInput](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequest.md#imagerequest) | Replaces the authored variant gallery atomically. Send [] to clear it and resume product-image inheritance. minItems: `0`. maxItems: `8`. |
| `inventory_item` | Optional | [InventoryItemCreateRequestInput](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequest) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string or null | Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: `1`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Send null to clear it. Values: [13 declared values](#productsupdatevariant-body-line_item_tax_category-values). |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
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

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateVariantWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.products.updateVariant("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/products-updateVariant.mjs)

