[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderResult







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/PayOrderResponse.md#payorderresponse-variant-1dataorder), [field definitions](../models/PayOrderResponse.md#payorderresponse-variant-2dataorder). |
| `order_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | An attempt to pay an order. |

### PayOrderResult variant 1

anyOf variant 1: Declared schema CancelOrderPaymentAttemptResult. The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt..

- Constraints for `order`: The order after the cancellation. Send its `version` as `expected_version` in your next change to the order.
- Constraints for `order_payment_attempt`: The payment attempt after the cancellation request. Read its `status` for the outcome.

### PayOrderResult variant 2

anyOf variant 2: Declared schema PayOrderResult. The order is the primary resource and expected_version target; order_payment_attempt records the payment outcome..

- Constraints for `order`: The order after the payment request. Send its `version` as `expected_version` in your next change to the order.
- Constraints for `order_payment_attempt`: The payment attempt for this request. Read its `status` and `pending_actions` to decide what to do next.

### PayOrderResult variant 1.order

Field definitions: [PayOrderResponse variant 1.data.order](../models/PayOrderResponse.md#payorderresponse-variant-1dataorder).

### PayOrderResult variant 2.order

Field definitions: [PayOrderResponse variant 2.data.order](../models/PayOrderResponse.md#payorderresponse-variant-2dataorder).

