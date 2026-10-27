[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerInput

Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Conditional | string |  |
| `type` | Required | string |  |
| `order_id` | Conditional | string | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. |

### InventoryReservationOwnerInput variant 1: `type` = `"merchant"`

oneOf variant 1: The `merchant` variant of `InventoryReservationOwner`..

- Required: `key`.
- Undeclared: `order_id`.
- Constraints for `type`: Values: `"merchant"`.

### InventoryReservationOwnerInput variant 2: `type` = `"order"`

oneOf variant 2: The `order` variant of `InventoryReservationOwner`..

- Optional: `order_id`.
- Undeclared: `key`.
- Constraints for `type`: Values: `"order"`.

