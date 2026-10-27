[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentQuantityLineRequest

One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the given `condition`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string | Condition of the units. Defaults to `sellable`. Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

