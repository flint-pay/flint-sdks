[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResultInput

The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Required | [OrderPaymentAttemptInput](../models/OrderPaymentAttemptInput.md#orderpaymentattemptinput) | The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order. |
| `subscription` | Required | [SubscriptionInput](../models/SubscriptionInput.md#subscriptioninput) | The subscription after the renewal attempt. A customer's recurring purchase. |

