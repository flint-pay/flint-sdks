[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundPartiallySucceededMerchantEvent

The `refund.partially_succeeded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [RefundPartiallySucceededMerchantEventData](../models/RefundPartiallySucceededMerchantEventData.md#refundpartiallysucceededmerchanteventdata) | `data`: [field definitions](../models/RefundPartiallySucceededMerchantEvent.md#refundpartiallysucceededmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"refund.partially_succeeded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [RefundPartiallySucceededMerchantEventRequest](../models/RefundPartiallySucceededMerchantEventRequest.md#refundpartiallysucceededmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### RefundPartiallySucceededMerchantEvent.data fields 1

Field definitions: [shared fields](RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1).

### RefundPartiallySucceededMerchantEvent.data fields 1.object

Field definitions: [RefundCreatedMerchantEvent.data fields 1.object](../models/RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1object).

