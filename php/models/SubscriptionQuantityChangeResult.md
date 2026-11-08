[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionQuantityChangeResult

The subscription and any immediate prorated billing outcome. A decline leaves the subscription unchanged.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The resolved billing timing for this quantity change. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `order` | Required | [Order](../models/Order.md#order) or null | The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionQuantityChangeResultResponse.md#subscriptionquantitychangeresultresponsedatasubscription). |

### SubscriptionQuantityChangeResult.subscription

Field definitions: [SubscriptionQuantityChangeResultResponse.data.subscription](../models/SubscriptionQuantityChangeResultResponse.md#subscriptionquantitychangeresultresponsedatasubscription).

