[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodCounts

Subscription counts by status for one delivery method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Live subscriptions that use the method, by status. Counts of subscriptions by status: active, past due, and paused. |

