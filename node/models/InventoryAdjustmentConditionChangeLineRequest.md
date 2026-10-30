[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentConditionChangeLineRequest

One line of an inventory condition change: moves a `quantity` of an item at a Location from one condition to another.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `from_condition` | Optional | string | Condition the units leave. Defaults to `sellable`. Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer | Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `to_condition` | Required | string | Condition the units move to. Must differ from `from_condition`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |

