[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferReturnedMerchantEvent

The `inventory_transfer.returned` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryTransferReturnedMerchantEventData](../models/InventoryTransferReturnedMerchantEventData.md#inventorytransferreturnedmerchanteventdata) | `data`: [field definitions](../models/InventoryTransferReturnedMerchantEvent.md#inventorytransferreturnedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_transfer.returned"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryTransferReturnedMerchantEventRequest](../models/InventoryTransferReturnedMerchantEventRequest.md#inventorytransferreturnedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryTransferReturnedMerchantEvent.data fields 1

Field definitions: [shared fields](InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1).

### InventoryTransferReturnedMerchantEvent.data fields 1.object

Field definitions: [InventoryTransferClosedMerchantEvent.data fields 1.object](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1object).

