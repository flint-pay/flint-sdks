[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResult

The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order. |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | The subscription after the renewal attempt. A customer's recurring purchase. |

