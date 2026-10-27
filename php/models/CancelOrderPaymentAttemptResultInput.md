[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderPaymentAttemptResultInput

The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Optional | [OrderPaymentAttemptInput](../models/OrderPaymentAttemptInput.md#orderpaymentattemptinput) | An attempt to pay an order. |

