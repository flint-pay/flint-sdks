[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedMerchantEvent

The `refund.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [RefundFailedMerchantEventData](../models/RefundFailedMerchantEventData.md#refundfailedmerchanteventdata) | `data`: [field definitions](../models/RefundFailedMerchantEvent.md#refundfailedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"refund.failed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [RefundFailedMerchantEventRequest](../models/RefundFailedMerchantEventRequest.md#refundfailedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### RefundFailedMerchantEvent.data fields 1

Field definitions: [shared fields](RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1).

### RefundFailedMerchantEvent.data fields 1.object

Field definitions: [RefundCreatedMerchantEvent.data fields 1.object](../models/RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1object).

