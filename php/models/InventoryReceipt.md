[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceipt

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_receipt_id` | Required | string | Unique identifier for this inventory receipt, prefixed `invrec_`. |
| `lines` | Required | Array of [InventoryReceiptLine](../models/InventoryReceiptLine.md#inventoryreceiptline) | Received lines, each with the item, receiving Location, quantity, and disposition. `lines[]`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `return_disposition_id` | Optional | string | ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. |
| `return_id` | Optional | string | ID of the Return these units came back on. Absent when the receipt isn't linked to a Return. |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |

### InventoryReceipt.lines[]

Field definitions: [InventoryReceiptResponse.data.lines[]](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines).

