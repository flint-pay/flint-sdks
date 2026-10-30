[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewClosedMerchantEvent

The `payment_review.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentReviewClosedMerchantEventData](../models/PaymentReviewClosedMerchantEventData.md#paymentreviewclosedmerchanteventdata) | `data`: [field definitions](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_review.closed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentReviewClosedMerchantEventRequest](../models/PaymentReviewClosedMerchantEventRequest.md#paymentreviewclosedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentReviewClosedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentReview](../models/PaymentReview.md#paymentreview) | A payment review requiring a merchant decision. `object`: [field definitions](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1object). |

### PaymentReviewClosedMerchantEvent.data fields 1.object

A payment review requiring a merchant decision.

Field definitions: [shared fields](PaymentReview.md#paymentreview).

