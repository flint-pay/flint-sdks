[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationLineInput

One item's location allocation within a reservation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `at_risk_committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `at_risk_held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `bundle_component_id` | Optional | string |  |
| `committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `consumed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `demand_key` | Required | string |  |
| `held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item_id` | Required | string |  |
| `inventory_reservation_line_id` | Required | string |  |
| `location_id` | Required | string |  |
| `order_line_item_id` | Optional | string |  |
| `reallocated_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `released_from_committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `released_from_held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

