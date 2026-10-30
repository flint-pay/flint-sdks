[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTrialEndingMerchantEvent

The `subscription.trial_ending` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionTrialEndingMerchantEventData](../models/SubscriptionTrialEndingMerchantEventData.md#subscriptiontrialendingmerchanteventdata) | `data`: [field definitions](../models/SubscriptionTrialEndingMerchantEvent.md#subscriptiontrialendingmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.trial_ending"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionTrialEndingMerchantEventRequest](../models/SubscriptionTrialEndingMerchantEventRequest.md#subscriptiontrialendingmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionTrialEndingMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1).

### SubscriptionTrialEndingMerchantEvent.data fields 1.object

Field definitions: [SubscriptionActivatedMerchantEvent.data fields 1.object](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object).

