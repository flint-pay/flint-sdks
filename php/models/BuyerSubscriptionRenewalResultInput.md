[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResultInput

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrderInput](../models/BuyerOrderInput.md#buyerorderinput) | A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttemptInput](../models/BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput) or null |  |
| `subscription` | Required | [BuyerSubscriptionInput](../models/BuyerSubscriptionInput.md#buyersubscriptioninput) | A customer's recurring purchase. |

