[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnRefundEstimate

Estimated refund for the selected eligible quantities. The store's inspection and its final decision can change the refund. Nothing is reserved.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Returned total less policy deductions, floored at zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_store_credit_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Net store credit for explicitly selected eligible store-credit quantities after policy deductions, floored per line at zero. Separate from returned_total_money, deduction_money, and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the buyer paid for these quantities after discounts, including tax. Uses the same allocation as a return resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `store_credit_destination` | Required | string | Store credit is issued as a new gift card by email. Applies to buyer_store_credit_amount_money. Values: `"new_gift_card"`. |
| `tender_estimates` | Required | Array of (object and Alternative shapes (see declared variants)) | Estimated original-payment destinations for the payable part of buyer_refund_amount_money, in refund order. Excludes store credit. Empty when no refund is payable. `tender_estimates[]`: [declared alternatives](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1tender_estimates). |

### BuyerReturnRefundEstimate.tender_estimates[]

Declared alternatives: [BuyerReturnPreviewResponse.data.resolution fields 1.tender_estimates[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1tender_estimates).

