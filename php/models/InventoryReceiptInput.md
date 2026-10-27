[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptInput

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `idempotency_key` | Required | string |  |
| `inventory_receipt_id` | Required | string |  |
| `lines` | Required | Array of [InventoryReceiptLineInput](../models/InventoryReceiptLineInput.md#inventoryreceiptlineinput) |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `return_disposition_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `source_system` | Required | [InventorySourceSystemInput](../models/InventorySourceSystemInput.md#inventorysourcesysteminput) or null |  |

