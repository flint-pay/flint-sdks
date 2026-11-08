[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryActionRequiredInput

Says that an inventory reservation needs action, with the `reason` and the reservation lines affected.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_ids` | Required | Array of string | IDs of the reservation lines that need action. Items: Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `reason` | Required | string | Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`. |

