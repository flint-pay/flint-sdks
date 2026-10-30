[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferReceivedMerchantEvent

The `inventory_transfer.received` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryTransferReceivedMerchantEventData](../models/InventoryTransferReceivedMerchantEventData.md#inventorytransferreceivedmerchanteventdata) | `data`: [field definitions](../models/InventoryTransferReceivedMerchantEvent.md#inventorytransferreceivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_transfer.received"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryTransferReceivedMerchantEventRequest](../models/InventoryTransferReceivedMerchantEventRequest.md#inventorytransferreceivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryTransferReceivedMerchantEvent.data fields 1

Field definitions: [shared fields](InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1).

### InventoryTransferReceivedMerchantEvent.data fields 1.object

Field definitions: [InventoryTransferClosedMerchantEvent.data fields 1.object](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1object).

