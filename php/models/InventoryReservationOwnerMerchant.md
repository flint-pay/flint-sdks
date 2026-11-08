[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerMerchant

Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.

The `merchant` variant of `InventoryReservationOwner`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string | Your identifier for the claim that holds the stock. |
| `type` | Required | string | Who holds the reservation. Values: `"merchant"`. |

