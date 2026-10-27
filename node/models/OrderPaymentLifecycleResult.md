[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentLifecycleResult

The result of an order payment action: the updated order, the payment intent, and the payment attempt when one exists.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. |
| `payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | An attempt to pay an order. |
| `payment_intent` | Required | [PaymentIntent](../models/PaymentIntent.md#paymentintent) | One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money always equals the sum of those three. Reconcile revenue from captured_money. |

