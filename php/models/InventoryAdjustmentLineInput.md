[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentLineInput

One line of an inventory adjustment, with the item, Location, movement written, and the change in on-hand and each non-sellable quantity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `damaged_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item_id` | Required | string |  |
| `inventory_movement_id` | Required | string or null | Movement this line wrote, or `null` when the line changed nothing. |
| `location_id` | Required | string |  |
| `on_hand_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quality_control_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quarantined_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

