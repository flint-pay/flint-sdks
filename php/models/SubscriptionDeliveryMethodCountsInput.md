[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodCountsInput

Subscription counts by status for one delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `subscription_counts` | Required | [SubscriptionCountsInput](../models/SubscriptionCountsInput.md#subscriptioncountsinput) | Live subscriptions that use the method, by status. Counts of subscriptions by status: active, past due, and paused. |

