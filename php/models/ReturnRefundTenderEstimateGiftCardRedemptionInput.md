[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundTenderEstimateGiftCardRedemptionInput

One original tender and its estimated share of a return refund.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `destination` | Optional | string | Where this share would go. Present on resolution previews. Values: `"original"`, `"new_gift_card"`. |
| `gift_card_id` | Required | string | Original gift card. Present for gift_card_redemption tenders. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `order_id` | Optional | string | The order that collected this tender when refunding an exchange replacement. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Optional | string | Original payment intent. Present for payment_intent tenders. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `tender_type` | Required | string | Original tender that funds this share of the estimate. Values: `"gift_card_redemption"`. |

