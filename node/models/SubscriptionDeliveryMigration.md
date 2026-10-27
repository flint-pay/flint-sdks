[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigration

A move of subscribers from one delivery method to another.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `failed_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `failure_reason_counts` | Required | Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount) |  |
| `from_delivery_method_id` | Required | string |  |
| `moved_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `pending_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `status` | Required | string | Values: `"pending"`, `"running"`, `"completed"`. |
| `subscription_delivery_migration_id` | Required | string |  |
| `subscription_plan_id` | Optional | string |  |
| `to_delivery_method_id` | Required | string |  |
| `total_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

