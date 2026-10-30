[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryCreatedMerchantEvent

The `subscription_payment_retry.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionPaymentRetryCreatedMerchantEventData](../models/SubscriptionPaymentRetryCreatedMerchantEventData.md#subscriptionpaymentretrycreatedmerchanteventdata) | `data`: [field definitions](../models/SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription_payment_retry.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionPaymentRetryCreatedMerchantEventRequest](../models/SubscriptionPaymentRetryCreatedMerchantEventRequest.md#subscriptionpaymentretrycreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentRetryCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry) | An attempt to collect a subscription's overdue payment. `object`: [field definitions](../models/SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1object). |

### SubscriptionPaymentRetryCreatedMerchantEvent.data fields 1.object

An attempt to collect a subscription's overdue payment.

Field definitions: [shared fields](SubscriptionPaymentRetry.md#subscriptionpaymentretry).

