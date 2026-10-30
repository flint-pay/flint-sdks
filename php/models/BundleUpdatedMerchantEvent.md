[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleUpdatedMerchantEvent

The `bundle.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [BundleUpdatedMerchantEventData](../models/BundleUpdatedMerchantEventData.md#bundleupdatedmerchanteventdata) | `data`: [field definitions](../models/BundleUpdatedMerchantEvent.md#bundleupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"bundle.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BundleUpdatedMerchantEventRequest](../models/BundleUpdatedMerchantEventRequest.md#bundleupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BundleUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1).

### BundleUpdatedMerchantEvent.data fields 1.object

Field definitions: [BundleArchivedMerchantEvent.data fields 1.object](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1object).

