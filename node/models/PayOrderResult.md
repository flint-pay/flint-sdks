[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderResult

Declared schema CancelOrderPaymentAttemptResult: The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt.

Declared schema PayOrderResult: The order is the primary resource and expected_version target; order_payment_attempt records the payment outcome.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | An attempt to pay an order. |

