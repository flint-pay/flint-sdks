[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentQuantityLineRequest

One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the given `condition`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string | Condition of the units. Defaults to `sellable`. Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `location_id` | Required | string | ID of the Location that holds the stock. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `quantity` | Required | integer | Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

