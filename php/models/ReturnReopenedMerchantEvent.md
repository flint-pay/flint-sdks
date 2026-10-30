[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReopenedMerchantEvent

The `return.reopened` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnReopenedMerchantEventData](../models/ReturnReopenedMerchantEventData.md#returnreopenedmerchanteventdata) | `data`: [field definitions](../models/ReturnReopenedMerchantEvent.md#returnreopenedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return.reopened"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnReopenedMerchantEventRequest](../models/ReturnReopenedMerchantEventRequest.md#returnreopenedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnReopenedMerchantEvent.data fields 1

Field definitions: [shared fields](ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1).

### ReturnReopenedMerchantEvent.data fields 1.object

Field definitions: [ReturnCanceledMerchantEvent.data fields 1.object](../models/ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1object).

