[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResult

The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/OrderListResponse.md#orderlistresponsedata). |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null |  |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionListResponse.md#subscriptionlistresponsedata). |

### SubscriptionRenewalResult.order

Field definitions: [OrderListResponse.data[]](../models/OrderListResponse.md#orderlistresponsedata).

### SubscriptionRenewalResult.subscription

Field definitions: [SubscriptionListResponse.data[]](../models/SubscriptionListResponse.md#subscriptionlistresponsedata).

