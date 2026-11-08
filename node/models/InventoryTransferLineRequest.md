[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLineRequest

One line of an inventory transfer you create: an item and the requested quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string | Condition of the units being moved. Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | ID of the inventory item to move. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

