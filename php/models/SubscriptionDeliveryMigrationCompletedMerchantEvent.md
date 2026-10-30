[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationCompletedMerchantEvent

The `subscription_delivery_migration.completed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionDeliveryMigrationCompletedMerchantEventData](../models/SubscriptionDeliveryMigrationCompletedMerchantEventData.md#subscriptiondeliverymigrationcompletedmerchanteventdata) | `data`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedMerchantEvent.md#subscriptiondeliverymigrationcompletedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription_delivery_migration.completed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionDeliveryMigrationCompletedMerchantEventRequest](../models/SubscriptionDeliveryMigrationCompletedMerchantEventRequest.md#subscriptiondeliverymigrationcompletedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigration.md#subscriptiondeliverymigration) | A move of subscribers from one delivery method to another. `object`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedMerchantEvent.md#subscriptiondeliverymigrationcompletedmerchanteventdata-fields-1object). |

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.object

A move of subscribers from one delivery method to another.

Field definitions: [shared fields](SubscriptionDeliveryMigration.md#subscriptiondeliverymigration).

