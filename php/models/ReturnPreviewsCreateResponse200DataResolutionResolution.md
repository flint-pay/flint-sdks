[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataResolutionResolution

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionResolutionAdjustmentsItem](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionAdjustmentsItem.md#returnpreviewscreateresponse200dataresolutionresolutionadjustmentsitem) and [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionBuyerPaymentAmountMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionBuyerPaymentAmountMoney.md#returnpreviewscreateresponse200dataresolutionresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionBuyerRefundAmountMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionBuyerRefundAmountMoney.md#returnpreviewscreateresponse200dataresolutionresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `credit_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionCreditMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionCreditMoney.md#returnpreviewscreateresponse200dataresolutionresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionDeductionMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionDeductionMoney.md#returnpreviewscreateresponse200dataresolutionresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionResolutionLineItemsItem](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionLineItemsItem.md#returnpreviewscreateresponse200dataresolutionresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItem](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItem.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementTotalMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementTotalMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReturnedTotalMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReturnedTotalMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

