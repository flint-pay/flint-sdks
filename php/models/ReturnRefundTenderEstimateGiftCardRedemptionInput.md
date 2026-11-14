[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundTenderEstimateGiftCardRedemptionInput

One estimated original-payment destination for a return refund.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | Original gift card. Present for gift_card_redemption tenders. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `payment_intent_id` | Optional | string | Original payment intent. Present for payment_intent tenders. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `tender_type` | Required | string | Original payment destination receiving this estimated refund: a payment intent or a gift card redemption. Values: `"gift_card_redemption"`. |

