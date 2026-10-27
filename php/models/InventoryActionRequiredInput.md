[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryActionRequiredInput

Says that an inventory reservation needs action, with the `reason` and the reservation lines affected.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_ids` | Required | Array of string |  |
| `reason` | Required | string | Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`. |

