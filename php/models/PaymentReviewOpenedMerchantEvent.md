[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewOpenedMerchantEvent

The `payment_review.opened` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentReviewOpenedMerchantEventData](../models/PaymentReviewOpenedMerchantEventData.md#paymentreviewopenedmerchanteventdata) | `data`: [field definitions](../models/PaymentReviewOpenedMerchantEvent.md#paymentreviewopenedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_review.opened"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentReviewOpenedMerchantEventRequest](../models/PaymentReviewOpenedMerchantEventRequest.md#paymentreviewopenedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentReviewOpenedMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1).

### PaymentReviewOpenedMerchantEvent.data fields 1.object

Field definitions: [PaymentReviewClosedMerchantEvent.data fields 1.object](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1object).

