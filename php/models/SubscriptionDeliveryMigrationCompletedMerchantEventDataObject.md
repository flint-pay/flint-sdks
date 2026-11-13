[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationCompletedMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `failed_count` | Required | integer | Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Format: `int64`. |
| `failure_reason_counts` | Required | Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount) | Failed subscriptions grouped by reason. Empty when none failed. |
| `from_delivery_method_id` | Required | string | ID of the delivery method the subscriptions moved away from. |
| `moved_count` | Required | integer | Subscriptions now using the new method. Format: `int64`. |
| `pending_count` | Required | integer | Subscriptions not yet moved or failed, including ones Flint is retrying. Format: `int64`. |
| `status` | Required | string | Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`. |
| `subscription_delivery_migration_id` | Required | string | Unique identifier for this subscription delivery migration, prefixed `sdmig_`. |
| `subscription_plan_id` | Optional | string | Plan the migration was limited to. Omitted when it covered every plan. |
| `to_delivery_method_id` | Required | string | ID of the delivery method the subscriptions move to. |
| `total_count` | Required | integer | Number of active, paused, and past due subscriptions on the original method when the migration started. Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

