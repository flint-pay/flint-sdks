[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryActionRequired

Says that an inventory reservation needs action, with the `reason` and the reservation lines affected.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_ids` | Required | Array of string | IDs of the reservation lines that need action. |
| `reason` | Required | string | Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`. |

