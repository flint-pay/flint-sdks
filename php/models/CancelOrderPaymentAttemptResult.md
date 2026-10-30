[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderPaymentAttemptResult

The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/OrderResponse.md#orderresponsedata). |
| `order_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | An attempt to pay an order. |

### CancelOrderPaymentAttemptResult.order

Field definitions: [OrderResponse.data](../models/OrderResponse.md#orderresponsedata).

