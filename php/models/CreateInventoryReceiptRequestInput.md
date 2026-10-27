[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryReceiptRequestInput

The request body for: Create inventory receipt.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryReceiptLineRequestInput](../models/InventoryReceiptLineRequestInput.md#inventoryreceiptlinerequestinput) |  |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

