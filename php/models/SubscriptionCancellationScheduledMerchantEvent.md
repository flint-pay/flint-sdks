[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCancellationScheduledMerchantEvent

The `subscription.cancellation_scheduled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionCancellationScheduledMerchantEventData](../models/SubscriptionCancellationScheduledMerchantEventData.md#subscriptioncancellationscheduledmerchanteventdata) | `data`: [field definitions](../models/SubscriptionCancellationScheduledMerchantEvent.md#subscriptioncancellationscheduledmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.cancellation_scheduled"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionCancellationScheduledMerchantEventRequest](../models/SubscriptionCancellationScheduledMerchantEventRequest.md#subscriptioncancellationscheduledmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionCancellationScheduledMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1).

### SubscriptionCancellationScheduledMerchantEvent.data fields 1.object

Field definitions: [SubscriptionActivatedMerchantEvent.data fields 1.object](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object).

