[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundTenderEstimateInput

One estimated original-payment destination for a return refund.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Conditional | string | Original gift card. Present for gift_card_redemption tenders. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `payment_intent_id` | Conditional | string | Original payment intent. Present for payment_intent tenders. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `tender_type` | Required | string | Original payment destination receiving this estimated refund: a payment intent or a gift card redemption. Values: `"payment_intent"`, `"gift_card_redemption"`. |

### ReturnRefundTenderEstimateInput variant 1: `tender_type` = `"payment_intent"`

oneOf with tender_type: "payment_intent": One estimated original-payment destination for a return refund..

- Condition: not (present(`gift_card_id`)).
- Required: `payment_intent_id`.
- Optional: `gift_card_id`.
- Constraints for `tender_type`: Values: `"payment_intent"`.

### ReturnRefundTenderEstimateInput variant 2: `tender_type` = `"gift_card_redemption"`

oneOf with tender_type: "gift_card_redemption": One estimated original-payment destination for a return refund..

- Condition: not (present(`payment_intent_id`)).
- Required: `gift_card_id`.
- Optional: `payment_intent_id`.
- Constraints for `tender_type`: Values: `"gift_card_redemption"`.

