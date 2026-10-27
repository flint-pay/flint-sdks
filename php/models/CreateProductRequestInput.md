[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateProductRequestInput

The request body for: Create product.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant` | Conditional | [ProductVariantRequestInput](../models/ProductVariantRequestInput.md#productvariantrequestinput) | The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant. |
| `description` | Optional | string | Description of the product shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Conditional | Array of [CreateProductOptionRequestInput](../models/CreateProductOptionRequestInput.md#createproductoptionrequestinput) | Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: `1`. |
| `product_type` | Required | string | Kind of goods or service this product represents. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `variants` | Conditional | Array of [ProductVariantRequestInput](../models/ProductVariantRequestInput.md#productvariantrequestinput) | Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: `1`. maxItems: `100`. |

### CreateProductRequestInput variant 1

oneOf variant 1.

- Condition: not (at least one(present(`options`); present(`variants`))).
- Required: `default_variant`.
- Optional: `options`, `variants`.

### CreateProductRequestInput variant 2

oneOf variant 2.

- Condition: not (at least one(present(`default_variant`))).
- Required: `options`, `variants`.
- Optional: `default_variant`.

