[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResult

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) | The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order. |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | The subscription after the renewal attempt. A customer's recurring purchase. |

