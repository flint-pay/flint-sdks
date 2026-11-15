[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigration

A move of subscribers from one delivery method to another.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failed_count` | Required | integer | Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Format: `int64`. |
| `failure_reason_counts` | Required | Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount) | Failed subscriptions grouped by reason. Empty when none failed. |
| `from_delivery_method_id` | Required | string | ID of the delivery method the subscriptions moved away from. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `moved_count` | Required | integer | Subscriptions now using the new method. Format: `int64`. |
| `pending_count` | Required | integer | Subscriptions not yet moved or failed, including ones Flint is retrying. Format: `int64`. |
| `status` | Required | string | Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`. |
| `subscription_delivery_migration_id` | Required | string | Unique identifier for this subscription delivery migration, prefixed `sdmig_`. Example: `"sdmig_01KEZF7C00H8KGVKXANJWJVDH7"`. |
| `subscription_plan_id` | Optional | string | Plan the migration was limited to. Omitted when it covered every plan. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `to_delivery_method_id` | Required | string | ID of the delivery method the subscriptions move to. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `total_count` | Required | integer | Number of active, paused, and past due subscriptions on the original method when the migration started. Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

