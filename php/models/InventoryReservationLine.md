[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationLine

One item's location allocation within a reservation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `at_risk_committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `at_risk_held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `backordered_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `bundle_component_id` | Optional | string | ID of the bundle component this line covers. Absent when the line isn't for a bundle component. |
| `committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `consumed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `demand_key` | Required | string | Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. |
| `held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item_id` | Required | string | ID of the inventory item to reserve. |
| `inventory_reservation_line_id` | Required | string | Unique identifier for this inventory reservation line, prefixed `invrln_`. |
| `location_id` | Required | string | ID of the Location the stock is allocated from. |
| `order_id` | Optional | string | Order that owns this record or its referenced line item and charge. |
| `order_line_item_id` | Optional | string | ID of the order line item this line covers. Absent unless an order holds the reservation. |
| `reallocated_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `released_from_backordered_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `released_from_committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `released_from_held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

