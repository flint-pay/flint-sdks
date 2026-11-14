[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionResolution

The priced resolution. Present when `mode` is `resolution`.

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionResolutionAdjustmentsItem](../models/BuyerReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataresolutionresolutionadjustmentsitem) and [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment)) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney.md#buyerreturnpreviewresponsedataresolutionresolutionbuyerpaymentamountmoney) | Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney.md#buyerreturnpreviewresponsedataresolutionresolutionbuyerrefundamountmoney) | Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`, minus `deduction_money` and `replacement_total_money`, when that balance is zero or more. For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_adjustment_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionCreditAdjustmentMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionCreditAdjustmentMoney.md#buyerreturnpreviewresponsedataresolutionresolutioncreditadjustmentmoney) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionDeductionMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionDeductionMoney.md#buyerreturnpreviewresponsedataresolutionresolutiondeductionmoney) | Deductions the proposed resolution's adjustments would take, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionResolutionLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionResolutionLineItemsItem.md#buyerreturnpreviewresponsedataresolutionresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `replacement_line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementtotalmoney) | Total of the replacement items the buyer would receive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. |
| `returned_total_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreturnedtotalmoney) | Value of the returned units the proposed resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

