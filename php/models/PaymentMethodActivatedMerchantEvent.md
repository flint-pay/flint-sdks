[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedMerchantEvent

The `payment_method.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentMethodActivatedMerchantEventData](../models/PaymentMethodActivatedMerchantEventData.md#paymentmethodactivatedmerchanteventdata) | `data`: [field definitions](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_method.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentMethodActivatedMerchantEventRequest](../models/PaymentMethodActivatedMerchantEventRequest.md#paymentmethodactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentMethodActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentMethod](../models/PaymentMethod.md#paymentmethod) | A customer's saved payment details. `object`: [field definitions](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1object). |

### PaymentMethodActivatedMerchantEvent.data fields 1.object

A customer's saved payment details.

Field definitions: [shared fields](PaymentMethod.md#paymentmethod).

