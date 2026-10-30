[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResult

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/BuyerOrderResponse.md#buyerorderresponsedata). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) or null |  |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedata). |

### BuyerSubscriptionRenewalResult.order

Field definitions: [BuyerOrderResponse.data](../models/BuyerOrderResponse.md#buyerorderresponsedata).

### BuyerSubscriptionRenewalResult.subscription

Field definitions: [BuyerSubscriptionResponse.data](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedata).

