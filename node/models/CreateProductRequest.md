[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateProductRequest

The request body for: Create product.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant` | Conditional | [ProductVariantRequest](../models/ProductVariantRequest.md#productvariantrequest) | The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant. |
| `description` | Optional | string | Description of the product shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequest](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Conditional | Array of [CreateProductOptionRequest](../models/CreateProductOptionRequest.md#createproductoptionrequest) | Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: `1`. |
| `product_type` | Required | string | Kind of goods or service this product represents. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `variant_mode` | Required | string | Selects the variant mode branch. Values: `"simple"`, `"optioned"`. |
| `variants` | Conditional | Array of [ProductVariantRequest](../models/ProductVariantRequest.md#productvariantrequest) | Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: `1`. maxItems: `100`. |

### CreateProductRequest variant 1: `variant_mode` = `"simple"`

oneOf variant 1: The `simple` variant of `CreateProductRequest`..

- Condition: not (at least one(present(`options`); present(`variants`))).
- Required: `default_variant`.
- Optional: `options`, `variants`.
- Constraints for `variant_mode`: Values: `"simple"`.

### CreateProductRequest variant 2: `variant_mode` = `"optioned"`

oneOf variant 2: The `optioned` variant of `CreateProductRequest`..

- Condition: not (at least one(present(`default_variant`))).
- Required: `options`, `variants`.
- Optional: `default_variant`.
- Constraints for `variant_mode`: Values: `"optioned"`.

### CreateProductRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

