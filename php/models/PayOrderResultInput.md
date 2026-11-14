[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderResultInput

The order is the primary resource and expected_version target; order_payment_attempt records the payment outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | The order after the payment request. Send its `version` as `expected_version` in your next change to the order. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Optional | [OrderPaymentAttemptInput](../models/OrderPaymentAttemptInput.md#orderpaymentattemptinput) | The payment attempt for this request. Read its `status` and `pending_actions` to decide what to do next. An attempt to pay an order. |

