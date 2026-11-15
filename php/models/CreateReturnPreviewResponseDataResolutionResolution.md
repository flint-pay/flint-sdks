[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataResolutionResolution

The priced resolution. Present when `mode` is `resolution`.

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem](../models/CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.md#createreturnpreviewresponsedataresolutionresolutionadjustmentsitem) and [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment)) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney.md#createreturnpreviewresponsedataresolutionresolutionbuyerpaymentamountmoney) | Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney.md#createreturnpreviewresponsedataresolutionresolutionbuyerrefundamountmoney) | Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`, minus `deduction_money` and `replacement_total_money`, when that balance is zero or more. For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. |
| `credit_adjustment_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionCreditAdjustmentMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionCreditAdjustmentMoney.md#createreturnpreviewresponsedataresolutionresolutioncreditadjustmentmoney) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionDeductionMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionDeductionMoney.md#createreturnpreviewresponsedataresolutionresolutiondeductionmoney) | Deductions the proposed resolution's adjustments would take, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataResolutionResolutionLineItemsItem](../models/CreateReturnPreviewResponseDataResolutionResolutionLineItemsItem.md#createreturnpreviewresponsedataresolutionresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `replacement_line_items` | Required | Array of ([CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementtotalmoney) | Total of the replacement items the buyer would receive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. |
| `returned_total_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney.md#createreturnpreviewresponsedataresolutionresolutionreturnedtotalmoney) | Value of the returned units the proposed resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

