[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryFailedMerchantEvent

The `subscription_payment_retry.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionPaymentRetryFailedMerchantEventData](../models/SubscriptionPaymentRetryFailedMerchantEventData.md#subscriptionpaymentretryfailedmerchanteventdata) | `data`: [field definitions](../models/SubscriptionPaymentRetryFailedMerchantEvent.md#subscriptionpaymentretryfailedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription_payment_retry.failed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionPaymentRetryFailedMerchantEventRequest](../models/SubscriptionPaymentRetryFailedMerchantEventRequest.md#subscriptionpaymentretryfailedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.object

Field definitions: [SubscriptionPaymentRetryCreatedMerchantEvent.data fields 1.object](../models/SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1object).

