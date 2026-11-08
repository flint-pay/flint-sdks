[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryReceiptRequestInput

Record returned stock against consumed inventory reservations. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `lines` | Required | Array of [InventoryReceiptLineRequestInput](../models/InventoryReceiptLineRequestInput.md#inventoryreceiptlinerequestinput) | Received lines, each with the item, receiving Location, quantity, and disposition. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | System the change came from, such as a point-of-sale or warehouse system. The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

