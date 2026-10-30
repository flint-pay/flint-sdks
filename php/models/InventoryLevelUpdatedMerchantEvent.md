[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelUpdatedMerchantEvent

The `inventory_level.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryLevelUpdatedMerchantEventData](../models/InventoryLevelUpdatedMerchantEventData.md#inventorylevelupdatedmerchanteventdata) | `data`: [field definitions](../models/InventoryLevelUpdatedMerchantEvent.md#inventorylevelupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_level.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryLevelUpdatedMerchantEventRequest](../models/InventoryLevelUpdatedMerchantEventRequest.md#inventorylevelupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryLevelUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1).

### InventoryLevelUpdatedMerchantEvent.data fields 1.object

Field definitions: [InventoryLevelShortageDetectedMerchantEvent.data fields 1.object](../models/InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1object).

