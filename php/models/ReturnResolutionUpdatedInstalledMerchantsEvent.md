[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionUpdatedInstalledMerchantsEvent

The `return_resolution.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnResolutionUpdatedInstalledMerchantsEventData](../models/ReturnResolutionUpdatedInstalledMerchantsEventData.md#returnresolutionupdatedinstalledmerchantseventdata) | `data`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEvent.md#returnresolutionupdatedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_resolution.updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnResolutionUpdatedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [ReturnResolutionCreatedMerchantEvent.data fields 1.object](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object).

### ReturnResolutionUpdatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

