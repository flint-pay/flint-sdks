[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundTenderEstimate

One original tender and its estimated share of a return refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/ReturnRefundTenderEstimate.md#returnrefundtenderestimateamount_money). |
| `destination` | Optional | string | Where this share would go. Present on resolution previews. Values: `"original"`, `"new_gift_card"`. |
| `gift_card_id` | Conditional | string | Original gift card. Present for gift_card_redemption tenders. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `order_id` | Optional | string | The order that collected this tender when refunding an exchange replacement. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | Original payment intent. Present for payment_intent tenders. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `tender_type` | Required | string | Original tender that funds this share of the estimate. Values: `"payment_intent"`, `"gift_card_redemption"`. |

### ReturnRefundTenderEstimate variant 1: `tender_type` = `"payment_intent"`

oneOf with tender_type: "payment_intent": One original tender and its estimated share of a return refund..

- Condition: not (present(`gift_card_id`)).
- Required: `payment_intent_id`.
- Optional: `gift_card_id`.
- Constraints for `tender_type`: Values: `"payment_intent"`.

### ReturnRefundTenderEstimate variant 2: `tender_type` = `"gift_card_redemption"`

oneOf with tender_type: "gift_card_redemption": One original tender and its estimated share of a return refund..

- Condition: not (present(`payment_intent_id`)).
- Required: `gift_card_id`.
- Optional: `payment_intent_id`.
- Constraints for `tender_type`: Values: `"gift_card_redemption"`.

### ReturnRefundTenderEstimate.amount_money

Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

