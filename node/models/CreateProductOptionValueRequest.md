[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateProductOptionValueRequest

One value of a product option to create, such as a specific size, with its position and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `position` | Optional | integer | Display order among the option's values, starting at zero. Defaults to the value's array index when omitted. Format: `int32`. minimum: `0`. |
| `status` | Optional | string | Whether the value is active or inactive. Active variants cannot newly select an inactive value. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `value` | Required | string | Option value shown to buyers, such as Medium. minLength: `1`. maxLength: `255`. |

### CreateProductOptionValueRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

