[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeResultInput

The result of changing a subscription plan, including the subscription and any order and payment attempt created for immediate billing.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) or null | The new period's order when billing_starts is now, including a canceled order when payment fails. Null for next_renewal. |
| `order_payment_attempt` | Required | [OrderPaymentAttemptInput](../models/OrderPaymentAttemptInput.md#orderpaymentattemptinput) or null | The recorded payment attempt when billing_starts is now, including declines. Null for next_renewal. |
| `subscription` | Required | [SubscriptionInput](../models/SubscriptionInput.md#subscriptioninput) | A customer's recurring purchase. |

