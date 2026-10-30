[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletedMerchantEvent

The `return.completed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnCompletedMerchantEventData](../models/ReturnCompletedMerchantEventData.md#returncompletedmerchanteventdata) | `data`: [field definitions](../models/ReturnCompletedMerchantEvent.md#returncompletedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return.completed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnCompletedMerchantEventRequest](../models/ReturnCompletedMerchantEventRequest.md#returncompletedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnCompletedMerchantEvent.data fields 1

Field definitions: [shared fields](ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1).

### ReturnCompletedMerchantEvent.data fields 1.object

Field definitions: [ReturnCanceledMerchantEvent.data fields 1.object](../models/ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1object).

