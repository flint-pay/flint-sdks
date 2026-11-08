[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationLineInput

One item's location allocation within a reservation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `at_risk_committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `at_risk_held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `backordered_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `bundle_component_id` | Optional | string | ID of the bundle component this line covers. Absent when the line isn't for a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `consumed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `demand_key` | Required | string | Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. |
| `held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item_id` | Required | string | ID of the inventory item to reserve. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_reservation_line_id` | Required | string | Unique identifier for this inventory reservation line, prefixed `invrln_`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `location_id` | Required | string | ID of the Location the stock is allocated from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `order_line_item_id` | Optional | string | ID of the order line item this line covers. Absent unless an order holds the reservation. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `reallocated_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `released_from_backordered_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `released_from_committed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `released_from_held_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

