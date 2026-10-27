[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentConditionChangeLineRequestInput

One line of an inventory condition change: moves a `quantity` of an item at a Location from one condition to another.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `from_condition` | Optional | string | Condition the units leave. Defaults to `sellable`. Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `to_condition` | Required | string | Condition the units move to. Must differ from `from_condition`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |

