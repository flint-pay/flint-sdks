[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemCreateRequest

Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to the new inventory item. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata for the new inventory item. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequestmetadata). |
| `name` | Required | string | Name of the inventory item to create for this variant. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Stock keeping unit assigned to the new inventory item. minLength: `1`. maxLength: `255`. |

### InventoryItemCreateRequest.metadata

Value shape: Map of string. Caller-owned metadata for the new inventory item. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. 

