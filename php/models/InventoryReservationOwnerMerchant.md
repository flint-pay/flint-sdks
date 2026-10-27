[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerMerchant

Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.

The `merchant` variant of `InventoryReservationOwner`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string |  |
| `type` | Required | string | Values: `"merchant"`. |

