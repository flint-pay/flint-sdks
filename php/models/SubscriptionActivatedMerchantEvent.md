[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedMerchantEvent

The `subscription.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionActivatedMerchantEventData](../models/SubscriptionActivatedMerchantEventData.md#subscriptionactivatedmerchanteventdata) | `data`: [field definitions](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionActivatedMerchantEventRequest](../models/SubscriptionActivatedMerchantEventRequest.md#subscriptionactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `object`: [field definitions](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object). |

### SubscriptionActivatedMerchantEvent.data fields 1.object

A customer's recurring purchase.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedata).

### SubscriptionActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### SubscriptionActivatedMerchantEvent.data fields 1.object.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

