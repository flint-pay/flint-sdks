[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerRequest

The owner of a merchant inventory reservation you create: your `key` for what holds the stock.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string | Your stable identifier for what holds the stock, such as a cart ID. One active reservation per key. minLength: `1`. maxLength: `255`. |

