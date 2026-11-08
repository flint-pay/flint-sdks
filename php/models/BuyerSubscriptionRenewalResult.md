[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResult

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/BuyerOrderListResponse.md#buyerorderlistresponsedata). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) or null |  |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponsedata). |

### BuyerSubscriptionRenewalResult.order

Field definitions: [BuyerOrderListResponse.data[]](../models/BuyerOrderListResponse.md#buyerorderlistresponsedata).

### BuyerSubscriptionRenewalResult.subscription

Field definitions: [BuyerSubscriptionListResponse.data[]](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponsedata).

