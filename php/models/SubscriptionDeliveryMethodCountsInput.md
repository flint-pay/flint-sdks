[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodCountsInput

Subscription counts by status for one delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `subscription_counts` | Required | [SubscriptionCountsInput](../models/SubscriptionCountsInput.md#subscriptioncountsinput) | Counts of subscriptions by status: active, past due, and paused. |

