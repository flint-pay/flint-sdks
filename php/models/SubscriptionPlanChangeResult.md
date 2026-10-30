[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeResult

The result of changing a subscription plan, including the subscription and any order and payment attempt created for immediate billing.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) or null | The new period's order when billing_starts is now, including a canceled order when payment fails. Null for next_renewal. |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The recorded payment attempt when billing_starts is now, including declines. Null for next_renewal. |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedata). |

### SubscriptionPlanChangeResult.subscription

Field definitions: [SubscriptionResponse.data](../models/SubscriptionResponse.md#subscriptionresponsedata).

