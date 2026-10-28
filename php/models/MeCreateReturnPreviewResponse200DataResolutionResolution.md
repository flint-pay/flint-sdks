[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionResolution

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionResolutionAdjustmentsItem](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionAdjustmentsItem.md#mecreatereturnpreviewresponse200dataresolutionresolutionadjustmentsitem) and [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerPaymentAmountMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerPaymentAmountMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerRefundAmountMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerRefundAmountMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionCreditMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionCreditMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionDeductionMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionDeductionMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem.md#mecreatereturnpreviewresponse200dataresolutionresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementTotalMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementTotalMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReturnedTotalMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReturnedTotalMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

