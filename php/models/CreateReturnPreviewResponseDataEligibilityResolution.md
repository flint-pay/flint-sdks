[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityResolution

The priced resolution. Present when `mode` is `resolution`.

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem](../models/CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#createreturnpreviewresponsedataeligibilityresolutionadjustmentsitem) and [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment)) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney.md#createreturnpreviewresponsedataeligibilityresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney.md#createreturnpreviewresponsedataeligibilityresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. |
| `credit_adjustment_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionCreditAdjustmentMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionCreditAdjustmentMoney.md#createreturnpreviewresponsedataeligibilityresolutioncreditadjustmentmoney) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney.md#createreturnpreviewresponsedataeligibilityresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem.md#createreturnpreviewresponsedataeligibilityresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `replacement_line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. |
| `returned_total_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney.md#createreturnpreviewresponsedataeligibilityresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

