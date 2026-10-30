[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLostMerchantEvent

The `inventory_transfer.lost` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryTransferLostMerchantEventData](../models/InventoryTransferLostMerchantEventData.md#inventorytransferlostmerchanteventdata) | `data`: [field definitions](../models/InventoryTransferLostMerchantEvent.md#inventorytransferlostmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_transfer.lost"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryTransferLostMerchantEventRequest](../models/InventoryTransferLostMerchantEventRequest.md#inventorytransferlostmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryTransferLostMerchantEvent.data fields 1

Field definitions: [shared fields](InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1).

### InventoryTransferLostMerchantEvent.data fields 1.object

Field definitions: [InventoryTransferClosedMerchantEvent.data fields 1.object](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1object).

