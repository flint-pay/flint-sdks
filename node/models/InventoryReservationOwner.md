[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwner

Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Conditional | string |  |
| `type` | Required | string |  |
| `order_id` | Conditional | string | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. |

### InventoryReservationOwner variant 1: `type` = `"merchant"`

oneOf with type: "merchant": The `merchant` variant of `InventoryReservationOwner`..

- Required: `key`.
- Undeclared: `order_id`.
- Constraints for `type`: Values: `"merchant"`.

### InventoryReservationOwner variant 2: `type` = `"order"`

oneOf with type: "order": The `order` variant of `InventoryReservationOwner`..

- Optional: `order_id`.
- Undeclared: `key`.
- Constraints for `type`: Values: `"order"`.

