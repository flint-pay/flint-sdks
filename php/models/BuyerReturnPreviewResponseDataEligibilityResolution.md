[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityResolution

The priced resolution. Present when `mode` is `resolution`.

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitem) and [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment)) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_adjustment_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionCreditAdjustmentMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionCreditAdjustmentMoney.md#buyerreturnpreviewresponsedataeligibilityresolutioncreditadjustmentmoney) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney.md#buyerreturnpreviewresponsedataeligibilityresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `replacement_line_items` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. |
| `returned_total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

