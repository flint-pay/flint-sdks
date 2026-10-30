[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelShortageDetectedMerchantEvent

The `inventory_level.shortage_detected` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryLevelShortageDetectedMerchantEventData](../models/InventoryLevelShortageDetectedMerchantEventData.md#inventorylevelshortagedetectedmerchanteventdata) | `data`: [field definitions](../models/InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_level.shortage_detected"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryLevelShortageDetectedMerchantEventRequest](../models/InventoryLevelShortageDetectedMerchantEventRequest.md#inventorylevelshortagedetectedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryLevelShortageDetectedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | The quantity state of one inventory item at one Location. `object`: [field definitions](../models/InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1object). |

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.object

The quantity state of one inventory item at one Location.

Field definitions: [shared fields](InventoryLevel.md#inventorylevel).

