[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedInstalledMerchantsEvent

The `inventory_count.applied` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEvent.md#inventorycountappliedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"inventory_count.applied"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryCountAppliedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryCount](../models/InventoryCount.md#inventorycount) | A physical count used to reconcile stock. `object`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEvent.md#inventorycountappliedinstalledmerchantseventdataobject). |

### InventoryCountAppliedInstalledMerchantsEvent.data.object

A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCount.md#inventorycount).

### InventoryCountAppliedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

