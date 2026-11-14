[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundEstimateTenderEstimatesItemGiftCardRedemption

One estimated original-payment destination for a return refund.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [ReturnRefundEstimateTenderEstimatesItemGiftCardRedemptionAmountMoney](../models/ReturnRefundEstimateTenderEstimatesItemGiftCardRedemptionAmountMoney.md#returnrefundestimatetenderestimatesitemgiftcardredemptionamountmoney) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | Original gift card. Present for gift_card_redemption tenders. |
| `payment_intent_id` | Optional | string | Original payment intent. Present for payment_intent tenders. |
| `tender_type` | Required | string | Original payment destination receiving this estimated refund: a payment intent or a gift card redemption. Values: `"gift_card_redemption"`. |

