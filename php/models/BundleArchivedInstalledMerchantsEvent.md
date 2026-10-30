[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedInstalledMerchantsEvent

The `bundle.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [BundleArchivedInstalledMerchantsEventData](../models/BundleArchivedInstalledMerchantsEventData.md#bundlearchivedinstalledmerchantseventdata) | `data`: [field definitions](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"bundle.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BundleArchivedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1).

### BundleArchivedInstalledMerchantsEvent.data fields 1.object

Field definitions: [BundleArchivedMerchantEvent.data fields 1.object](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1object).

### BundleArchivedInstalledMerchantsEvent.source

The source of a partner webhook event, selected by type.

Field definitions: [shared fields](WebhookEventSourceInstalledMerchants.md#webhookeventsourceinstalledmerchants).

### BundleArchivedInstalledMerchantsEvent.source variant 1: `type` = `"installed_merchants"`

oneOf with type: "installed_merchants": The installed_merchants source of a partner webhook event..

No additional constraints.

