[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResult

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/MeGetOrderResponse200.md#megetorderresponse200data). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) or null |  |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200data). |

### BuyerSubscriptionRenewalResult.order

Field definitions: [MeGetOrderResponse200.data](../models/MeGetOrderResponse200.md#megetorderresponse200data).

### BuyerSubscriptionRenewalResult.subscription

Field definitions: [MeCancelSubscriptionResponse200.data](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200data).

