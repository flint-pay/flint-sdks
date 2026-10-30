[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentUpdatedMerchantEvent

The `payment_intent.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentIntentUpdatedMerchantEventData](../models/PaymentIntentUpdatedMerchantEventData.md#paymentintentupdatedmerchanteventdata) | `data`: [field definitions](../models/PaymentIntentUpdatedMerchantEvent.md#paymentintentupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_intent.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentIntentUpdatedMerchantEventRequest](../models/PaymentIntentUpdatedMerchantEventRequest.md#paymentintentupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentIntentUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1).

### PaymentIntentUpdatedMerchantEvent.data fields 1.object

Field definitions: [PaymentIntentCanceledMerchantEvent.data fields 1.object](../models/PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1object).

