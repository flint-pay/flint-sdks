[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryItemRequest

The request body for: Create inventory item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Optional | [InventoryBackorderPolicyRequest](../models/InventoryBackorderPolicyRequest.md#inventorybackorderpolicyrequest) | Backorder settings to apply to this inventory item. Patch object: fields you send are applied, fields you omit are unchanged. minProperties: `1`. `backorder`: [field definitions](../models/CreateInventoryItemRequest.md#createinventoryitemrequestbackorder). |
| `barcode` | Optional | string | Optional searchable barcode. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Required | string | Merchant-facing inventory item name. minLength: `1`. |
| `sku` | Optional | string | Optional searchable stock-keeping unit. minLength: `1`. |
| `status` | Optional | string | Status the inventory item starts in. Defaults to `active`. Default: `"active"`. Values: `"active"`, `"inactive"`. |

### CreateInventoryItemRequest.backorder

Backorder settings to apply to this inventory item. Patch object: fields you send are applied, fields you omit are unchanged. minProperties: `1`.

Field definitions: [shared fields](CreateInventoryBackorderPolicyRequestInput.md#createinventorybackorderpolicyrequestinput).

### CreateInventoryItemRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

