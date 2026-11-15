[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundEstimateInput

Estimated refund for the selected eligible quantities. The store's inspection and its final decision can change the refund. Nothing is reserved.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_refund_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Returned total less policy deductions, floored at zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_store_credit_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Net store credit for explicitly selected eligible store-credit quantities after policy deductions, floored per line at zero. Separate from returned_total_money, deduction_money, and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What the buyer paid for these quantities after discounts, including tax. Uses the same allocation as a return resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `store_credit_destination` | Required | string | Store credit is issued as a new gift card by email. Applies to buyer_store_credit_amount_money. Values: `"new_gift_card"`. |
| `tender_estimates` | Required | Array of [ReturnRefundTenderEstimateInput](../models/ReturnRefundTenderEstimateInput.md#returnrefundtenderestimateinput) | Estimated original-payment destinations in refund order. Amounts sum to buyer_refund_amount_money. Empty when the refund amount is zero. |

