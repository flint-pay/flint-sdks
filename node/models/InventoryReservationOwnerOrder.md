[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerOrder

The `order` variant of `InventoryReservationOwner`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `type` | Required | string | Who holds the reservation. Values: `"order"`. |

