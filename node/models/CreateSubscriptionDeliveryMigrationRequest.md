[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionDeliveryMigrationRequest

The request body for: Move subscribers to another delivery method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `from_delivery_method_id` | Required | string | minLength: `1`. |
| `subscription_plan_id` | Optional | string | Limit the migration to this plan's live subscriptions. minLength: `1`. |
| `to_delivery_method_id` | Required | string | minLength: `1`. |

