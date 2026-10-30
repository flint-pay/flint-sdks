[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPausedMerchantEvent

The `subscription.paused` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionPausedMerchantEventData](../models/SubscriptionPausedMerchantEventData.md#subscriptionpausedmerchanteventdata) | `data`: [field definitions](../models/SubscriptionPausedMerchantEvent.md#subscriptionpausedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.paused"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionPausedMerchantEventRequest](../models/SubscriptionPausedMerchantEventRequest.md#subscriptionpausedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPausedMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1).

### SubscriptionPausedMerchantEvent.data fields 1.object

Field definitions: [SubscriptionActivatedMerchantEvent.data fields 1.object](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object).

