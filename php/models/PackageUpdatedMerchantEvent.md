[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageUpdatedMerchantEvent

The `package.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PackageUpdatedMerchantEventData](../models/PackageUpdatedMerchantEventData.md#packageupdatedmerchanteventdata) | `data`: [field definitions](../models/PackageUpdatedMerchantEvent.md#packageupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"package.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PackageUpdatedMerchantEventRequest](../models/PackageUpdatedMerchantEventRequest.md#packageupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PackageUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](PackageCreatedMerchantEvent.md#packagecreatedmerchanteventdata-fields-1).

### PackageUpdatedMerchantEvent.data fields 1.object

Field definitions: [PackageCreatedMerchantEvent.data fields 1.object](../models/PackageCreatedMerchantEvent.md#packagecreatedmerchanteventdata-fields-1object).

