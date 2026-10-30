[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentCreatedMerchantEvent

The `payment_intent.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentIntentCreatedMerchantEventData](../models/PaymentIntentCreatedMerchantEventData.md#paymentintentcreatedmerchanteventdata) | `data`: [field definitions](../models/PaymentIntentCreatedMerchantEvent.md#paymentintentcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_intent.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentIntentCreatedMerchantEventRequest](../models/PaymentIntentCreatedMerchantEventRequest.md#paymentintentcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentIntentCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1).

### PaymentIntentCreatedMerchantEvent.data fields 1.object

Field definitions: [PaymentIntentCanceledMerchantEvent.data fields 1.object](../models/PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1object).

