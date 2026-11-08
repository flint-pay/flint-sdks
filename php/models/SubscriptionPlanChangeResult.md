[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeResult

The subscription is the primary resource and expected_version target; order and order_payment_attempt report immediate billing and are null when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The resolved billing timing for this plan change. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `order` | Required | [Order](../models/Order.md#order) or null | The new period or proration order when billing_starts is now or prorated_now, including a closed unpaid order when payment fails. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero. |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The recorded payment attempt when billing_starts is now or prorated_now, including declines. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero. |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | The subscription after this request, including any scheduled plan change, or the unchanged subscription when payment fails. A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionPlanChangeResultResponse.md#subscriptionplanchangeresultresponsedatasubscription). |

### SubscriptionPlanChangeResult.subscription

Field definitions: [SubscriptionPlanChangeResultResponse.data.subscription](../models/SubscriptionPlanChangeResultResponse.md#subscriptionplanchangeresultresponsedatasubscription).

