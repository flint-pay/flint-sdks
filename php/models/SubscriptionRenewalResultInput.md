[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResultInput

The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Required | [OrderPaymentAttemptInput](../models/OrderPaymentAttemptInput.md#orderpaymentattemptinput) or null |  |
| `subscription` | Required | [SubscriptionInput](../models/SubscriptionInput.md#subscriptioninput) | A customer's recurring purchase. |

