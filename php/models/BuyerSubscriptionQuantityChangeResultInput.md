[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionQuantityChangeResultInput

The subscription and any immediate prorated billing outcome. A decline leaves the subscription unchanged.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The resolved billing timing for this quantity change. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `order` | Required | [BuyerOrderInput](../models/BuyerOrderInput.md#buyerorderinput) or null | The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttemptInput](../models/BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput) or null | The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. |
| `subscription` | Required | [BuyerSubscriptionInput](../models/BuyerSubscriptionInput.md#buyersubscriptioninput) | The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase. |

