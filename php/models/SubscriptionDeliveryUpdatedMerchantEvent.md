[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryUpdatedMerchantEvent

The `subscription.delivery_updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionDeliveryUpdatedMerchantEventData](../models/SubscriptionDeliveryUpdatedMerchantEventData.md#subscriptiondeliveryupdatedmerchanteventdata) | `data`: [field definitions](../models/SubscriptionDeliveryUpdatedMerchantEvent.md#subscriptiondeliveryupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.delivery_updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionDeliveryUpdatedMerchantEventRequest](../models/SubscriptionDeliveryUpdatedMerchantEventRequest.md#subscriptiondeliveryupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionDeliveryUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1).

### SubscriptionDeliveryUpdatedMerchantEvent.data fields 1.object

Field definitions: [SubscriptionActivatedMerchantEvent.data fields 1.object](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object).

