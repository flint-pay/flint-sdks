[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelShortageDetectedInstalledMerchantsEvent

The `inventory_level.shortage_detected` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"inventory_level.shortage_detected"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | The quantity state of one inventory item at one Location. `object`: [field definitions](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataobject). |

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.object

The quantity state of one inventory item at one Location.

Field definitions: [shared fields](InventoryLevel.md#inventorylevel).

### InventoryLevelShortageDetectedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

