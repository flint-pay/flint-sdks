[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigration

A move of subscribers from one delivery method to another.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failed_count` | Required | integer | Format: `int64`. |
| `failure_reason_counts` | Required | Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount) |  |
| `from_delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `moved_count` | Required | integer | Format: `int64`. |
| `pending_count` | Required | integer | Format: `int64`. |
| `status` | Required | string | Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`. |
| `subscription_delivery_migration_id` | Required | string | Unique identifier for this subscription delivery migration, prefixed `sdmig_`. Example: `"sdmig_01KEZF7C00H8KGVKXANJWJVDH7"`. |
| `subscription_plan_id` | Optional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `to_delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `total_count` | Required | integer | Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

