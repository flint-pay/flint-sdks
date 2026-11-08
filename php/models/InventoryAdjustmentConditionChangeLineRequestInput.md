[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentConditionChangeLineRequestInput

One line of an inventory condition change: moves a `quantity` of an item at a Location from one condition to another.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `from_condition` | Optional | string | Condition the units leave. Defaults to `sellable`. Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `location_id` | Required | string | ID of the Location that holds the stock. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `quantity` | Required | integer | Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `to_condition` | Required | string | Condition the units move to. Must differ from `from_condition`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |

