[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetrySucceededMerchantEvent

The `subscription_payment_retry.succeeded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionPaymentRetrySucceededMerchantEventData](../models/SubscriptionPaymentRetrySucceededMerchantEventData.md#subscriptionpaymentretrysucceededmerchanteventdata) | `data`: [field definitions](../models/SubscriptionPaymentRetrySucceededMerchantEvent.md#subscriptionpaymentretrysucceededmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription_payment_retry.succeeded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionPaymentRetrySucceededMerchantEventRequest](../models/SubscriptionPaymentRetrySucceededMerchantEventRequest.md#subscriptionpaymentretrysucceededmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentRetrySucceededMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1).

### SubscriptionPaymentRetrySucceededMerchantEvent.data fields 1.object

Field definitions: [SubscriptionPaymentRetryCreatedMerchantEvent.data fields 1.object](../models/SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1object).

