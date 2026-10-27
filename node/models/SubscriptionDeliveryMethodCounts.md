[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodCounts

Subscription counts by status for one delivery method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |

