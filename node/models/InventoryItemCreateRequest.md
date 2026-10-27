[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemCreateRequest

Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to the new inventory item. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata for the new inventory item. Map values: minLength: `1`. |
| `name` | Required | string | Name of the inventory item to create for this variant. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Stock keeping unit assigned to the new inventory item. minLength: `1`. maxLength: `255`. |

