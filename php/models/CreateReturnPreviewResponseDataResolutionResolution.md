[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataResolutionResolution

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem](../models/CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.md#createreturnpreviewresponsedataresolutionresolutionadjustmentsitem) and [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer | Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney.md#createreturnpreviewresponsedataresolutionresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney.md#createreturnpreviewresponsedataresolutionresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `credit_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionCreditMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionCreditMoney.md#createreturnpreviewresponsedataresolutionresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionDeductionMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionDeductionMoney.md#createreturnpreviewresponsedataresolutionresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataResolutionResolutionLineItemsItem](../models/CreateReturnPreviewResponseDataResolutionResolutionLineItemsItem.md#createreturnpreviewresponsedataresolutionresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney.md#createreturnpreviewresponsedataresolutionresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

