[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResult

The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200data). |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null |  |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionsCancelResponse200.md#subscriptionscancelresponse200data). |

### SubscriptionRenewalResult.order

Field definitions: [OrdersApplyDiscountResponse200.data](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200data).

### SubscriptionRenewalResult.subscription

Field definitions: [SubscriptionsCancelResponse200.data](../models/SubscriptionsCancelResponse200.md#subscriptionscancelresponse200data).

