[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentRequiresCaptureMerchantEvent

The `payment_intent.requires_capture` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentIntentRequiresCaptureMerchantEventData](../models/PaymentIntentRequiresCaptureMerchantEventData.md#paymentintentrequirescapturemerchanteventdata) | `data`: [field definitions](../models/PaymentIntentRequiresCaptureMerchantEvent.md#paymentintentrequirescapturemerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_intent.requires_capture"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentIntentRequiresCaptureMerchantEventRequest](../models/PaymentIntentRequiresCaptureMerchantEventRequest.md#paymentintentrequirescapturemerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentIntentRequiresCaptureMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1).

### PaymentIntentRequiresCaptureMerchantEvent.data fields 1.object

Field definitions: [PaymentIntentCanceledMerchantEvent.data fields 1.object](../models/PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1object).

