[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageUpdatedInstalledMerchantsEvent

The `package.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PackageUpdatedInstalledMerchantsEventData](../models/PackageUpdatedInstalledMerchantsEventData.md#packageupdatedinstalledmerchantseventdata) | `data`: [field definitions](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"package.updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PackageUpdatedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](PackageCreatedMerchantEvent.md#packagecreatedmerchanteventdata-fields-1).

### PackageUpdatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [PackageCreatedMerchantEvent.data fields 1.object](../models/PackageCreatedMerchantEvent.md#packagecreatedmerchanteventdata-fields-1object).

### PackageUpdatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

