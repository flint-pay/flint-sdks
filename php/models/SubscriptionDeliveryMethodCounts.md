[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodCounts

Subscription counts by status for one delivery method.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Live subscriptions that use the method, by status. Delivery usage counts by stored status, with separate subsets for active subscriptions that are canceling or on billing hold. |

