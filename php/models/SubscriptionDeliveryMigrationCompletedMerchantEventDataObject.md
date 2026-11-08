[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationCompletedMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `failed_count` | Required | integer | Format: `int64`. |
| `failure_reason_counts` | Required | Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount) |  |
| `from_delivery_method_id` | Required | string |  |
| `moved_count` | Required | integer | Format: `int64`. |
| `pending_count` | Required | integer | Format: `int64`. |
| `status` | Required | string | Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`. |
| `subscription_delivery_migration_id` | Required | string | Unique identifier for this subscription delivery migration, prefixed `sdmig_`. |
| `subscription_plan_id` | Optional | string |  |
| `to_delivery_method_id` | Required | string |  |
| `total_count` | Required | integer | Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

