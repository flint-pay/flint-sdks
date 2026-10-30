[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentSucceededMerchantEvent

The `subscription.payment_succeeded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionPaymentSucceededMerchantEventData](../models/SubscriptionPaymentSucceededMerchantEventData.md#subscriptionpaymentsucceededmerchanteventdata) | `data`: [field definitions](../models/SubscriptionPaymentSucceededMerchantEvent.md#subscriptionpaymentsucceededmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.payment_succeeded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionPaymentSucceededMerchantEventRequest](../models/SubscriptionPaymentSucceededMerchantEventRequest.md#subscriptionpaymentsucceededmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentSucceededMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1).

### SubscriptionPaymentSucceededMerchantEvent.data fields 1.object

Field definitions: [SubscriptionActivatedMerchantEvent.data fields 1.object](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object).

