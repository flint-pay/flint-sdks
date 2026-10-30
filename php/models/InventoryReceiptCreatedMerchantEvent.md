[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptCreatedMerchantEvent

The `inventory_receipt.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryReceiptCreatedMerchantEventData](../models/InventoryReceiptCreatedMerchantEventData.md#inventoryreceiptcreatedmerchanteventdata) | `data`: [field definitions](../models/InventoryReceiptCreatedMerchantEvent.md#inventoryreceiptcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_receipt.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryReceiptCreatedMerchantEventRequest](../models/InventoryReceiptCreatedMerchantEventRequest.md#inventoryreceiptcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryReceiptCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. `object`: [field definitions](../models/InventoryReceiptCreatedMerchantEvent.md#inventoryreceiptcreatedmerchanteventdata-fields-1object). |

### InventoryReceiptCreatedMerchantEvent.data fields 1.object

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them.

Field definitions: [shared fields](InventoryReceipt.md#inventoryreceipt).

