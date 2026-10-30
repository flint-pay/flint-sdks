[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityResolution

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem](../models/CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#createreturnpreviewresponsedataeligibilityresolutionadjustmentsitem) and [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer | Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney.md#createreturnpreviewresponsedataeligibilityresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney.md#createreturnpreviewresponsedataeligibilityresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `credit_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionCreditMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionCreditMoney.md#createreturnpreviewresponsedataeligibilityresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney.md#createreturnpreviewresponsedataeligibilityresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem.md#createreturnpreviewresponsedataeligibilityresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney.md#createreturnpreviewresponsedataeligibilityresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

