[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRefundEstimate

Estimated refund for the selected eligible quantities. The store's inspection and its final decision can change the refund. Nothing is reserved.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Returned total less policy deductions, floored at zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_refund_amount_money`: [field definitions](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatebuyer_refund_amount_money). |
| `buyer_store_credit_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Net store credit for explicitly selected eligible store-credit quantities after policy deductions, floored per line at zero. Separate from returned_total_money, deduction_money, and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_store_credit_amount_money`: [field definitions](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatebuyer_store_credit_amount_money). |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `deduction_money`: [field definitions](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatededuction_money). |
| `refund_shortfall_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Selected refund and store credit value that the original payments cannot fund. Zero when fully payable. The merchandise entitlement is unchanged. Merchant only. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_shortfall_money`: [field definitions](../models/ReturnRefundEstimate.md#returnrefundestimaterefund_shortfall_money). |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the buyer paid for these quantities after discounts, including tax. Uses the same allocation as a return resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_total_money`: [field definitions](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatereturned_total_money). |
| `store_credit_destination` | Required | string | Store credit is issued as a new gift card by email. Applies to buyer_store_credit_amount_money. Values: `"new_gift_card"`. |
| `tender_estimates` | Required | Array of [ReturnRefundTenderEstimate](../models/ReturnRefundTenderEstimate.md#returnrefundtenderestimate) | Estimated original-payment funding in refund order. Amounts sum to buyer_refund_amount_money plus buyer_store_credit_amount_money less refund_shortfall_money. Empty when no value is payable. |

### ReturnRefundEstimate.buyer_refund_amount_money

Field definitions: [BuyerReturnRefundEstimate.buyer_refund_amount_money](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatebuyer_refund_amount_money).

### ReturnRefundEstimate.buyer_store_credit_amount_money

Field definitions: [BuyerReturnRefundEstimate.buyer_store_credit_amount_money](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatebuyer_store_credit_amount_money).

### ReturnRefundEstimate.deduction_money

Field definitions: [BuyerReturnRefundEstimate.deduction_money](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatededuction_money).

### ReturnRefundEstimate.refund_shortfall_money

Selected refund and store credit value that the original payments cannot fund. Zero when fully payable. The merchandise entitlement is unchanged. Merchant only. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnRefundEstimate.returned_total_money

Field definitions: [BuyerReturnRefundEstimate.returned_total_money](../models/BuyerReturnRefundEstimate.md#buyerreturnrefundestimatereturned_total_money).

