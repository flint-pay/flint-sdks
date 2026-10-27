[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerOrder

The `order` variant of `InventoryReservationOwner`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. |
| `type` | Required | string | Values: `"order"`. |

