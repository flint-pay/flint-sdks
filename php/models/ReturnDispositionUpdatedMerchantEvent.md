[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionUpdatedMerchantEvent

The `return_disposition.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnDispositionUpdatedMerchantEventData](../models/ReturnDispositionUpdatedMerchantEventData.md#returndispositionupdatedmerchanteventdata) | `data`: [field definitions](../models/ReturnDispositionUpdatedMerchantEvent.md#returndispositionupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_disposition.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnDispositionUpdatedMerchantEventRequest](../models/ReturnDispositionUpdatedMerchantEventRequest.md#returndispositionupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnDispositionUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](ReturnDispositionCreatedMerchantEvent.md#returndispositioncreatedmerchanteventdata-fields-1).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.object

Field definitions: [ReturnDispositionCreatedMerchantEvent.data fields 1.object](../models/ReturnDispositionCreatedMerchantEvent.md#returndispositioncreatedmerchanteventdata-fields-1object).

