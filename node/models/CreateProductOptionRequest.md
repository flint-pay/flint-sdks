[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateProductOptionRequest

A product option to create with a product, such as size, with its values, position, and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `existing_variant_value` | Optional | string | Value of this option given to every active variant that has no active value for it after this request, such as when you add an option to a product that already has active variants. It must match one of this option's active `values`, ignoring case and surrounding whitespace. Not stored; the variants keep the value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Required | string | Option name, such as Size or Color. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's options, starting at zero. Defaults to the option's array index when omitted. Format: `int32`. minimum: `0`. |
| `status` | Optional | string | Whether the option is active or inactive. Active variants must select an active value for every active option. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `values` | Optional | Array of [CreateProductOptionValueRequest](../models/CreateProductOptionValueRequest.md#createproductoptionvaluerequest) | Values offered for this option, such as Small, Medium, and Large for Size. |

### CreateProductOptionRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

