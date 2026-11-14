[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundEstimate

Estimated refund for the selected eligible quantities. The store's inspection and its final decision can change the refund. Nothing is reserved.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Returned total less policy deductions, floored at zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_store_credit_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Net store credit for explicitly selected eligible store-credit quantities after policy deductions, floored per line at zero. Separate from returned_total_money, deduction_money, and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the buyer paid for these quantities after discounts, including tax. Uses the same allocation as a return resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `store_credit_destination` | Required | string | Store credit is issued as a new gift card by email. Applies to buyer_store_credit_amount_money. Values: `"new_gift_card"`. |
| `tender_estimates` | Required | Array of (object and Alternative shapes (see declared variants)) | Estimated original-payment destinations in refund order. Amounts sum to buyer_refund_amount_money. Empty when the refund amount is zero. `tender_estimates[]`: [declared alternatives](../models/ReturnRefundEstimate.md#returnrefundestimatetender_estimates). |

### ReturnRefundEstimate.tender_estimates[]

One estimated original-payment destination for a return refund.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Conditional | string | Original gift card. Present for gift_card_redemption tenders. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `payment_intent_id` | Conditional | string | Original payment intent. Present for payment_intent tenders. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `tender_type` | Required | string | Original payment destination receiving this estimated refund: a payment intent or a gift card redemption. Values: `"payment_intent"`, `"gift_card_redemption"`. |

### ReturnRefundEstimate.tender_estimates[] variant 1: `tender_type` = `"payment_intent"`

oneOf with tender_type: "payment_intent": One estimated original-payment destination for a return refund..

- Condition: not (present(`gift_card_id`)).
- Required: `payment_intent_id`.
- Optional: `gift_card_id`.
- Constraints for `tender_type`: Values: `"payment_intent"`.

### ReturnRefundEstimate.tender_estimates[] variant 2: `tender_type` = `"gift_card_redemption"`

oneOf with tender_type: "gift_card_redemption": One estimated original-payment destination for a return refund..

- Condition: not (present(`payment_intent_id`)).
- Required: `gift_card_id`.
- Optional: `payment_intent_id`.
- Constraints for `tender_type`: Values: `"gift_card_redemption"`.

