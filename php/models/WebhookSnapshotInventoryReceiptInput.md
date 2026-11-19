[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookSnapshotInventoryReceiptInput

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inventory_receipt_id` | Required | string | Unique identifier for this inventory receipt, prefixed `invrec_`. Example: `"invrec_01KEZF7C00JXXCYA06SH8RCM2N"`. |
| `lines` | Required | Array of [InventoryReceiptLineInput](../models/InventoryReceiptLineInput.md#inventoryreceiptlineinput) | Received lines, each with the item, receiving Location, quantity, and disposition. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `return_disposition_id` | Optional | string | ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_id` | Optional | string | ID of the Return these units came back on. Absent when the receipt isn't linked to a Return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `source_system` | Required | [InventorySourceSystemInput](../models/InventorySourceSystemInput.md#inventorysourcesysteminput) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |

