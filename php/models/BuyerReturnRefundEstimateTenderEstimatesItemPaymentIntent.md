[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnRefundEstimateTenderEstimatesItemPaymentIntent

One original tender and its estimated share of a return refund.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [BuyerReturnRefundEstimateTenderEstimatesItemPaymentIntentAmountMoney](../models/BuyerReturnRefundEstimateTenderEstimatesItemPaymentIntentAmountMoney.md#buyerreturnrefundestimatetenderestimatesitempaymentintentamountmoney) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `destination` | Optional | string | Where this share would go. Present on resolution previews. Values: `"original"`, `"new_gift_card"`. |
| `gift_card_id` | Optional | string | Original gift card. Present for gift_card_redemption tenders. |
| `order_id` | Optional | string | The order that collected this tender when refunding an exchange replacement. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_intent_id` | Required | string | Original payment intent. Present for payment_intent tenders. |
| `tender_type` | Required | string | Original tender that funds this share of the estimate. Values: `"payment_intent"`. |

