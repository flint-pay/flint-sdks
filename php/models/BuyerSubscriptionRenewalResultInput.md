[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResultInput

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrderInput](../models/BuyerOrderInput.md#buyerorderinput) | The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttemptInput](../models/BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput) | The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order. |
| `subscription` | Required | [BuyerSubscriptionInput](../models/BuyerSubscriptionInput.md#buyersubscriptioninput) | The subscription after the renewal attempt. A customer's recurring purchase. |

