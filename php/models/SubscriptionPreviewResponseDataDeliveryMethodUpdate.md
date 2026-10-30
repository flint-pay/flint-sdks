[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponseDataDeliveryMethodUpdate

How a delivery method change affects subscriptions: current counts and how many would no longer be eligible.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `mode` | Required | string | Values: `"delivery_method_update"`. |
| `no_longer_eligible_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |

