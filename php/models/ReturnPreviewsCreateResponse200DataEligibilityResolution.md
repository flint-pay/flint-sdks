[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibilityResolution

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([ReturnPreviewsCreateResponse200DataEligibilityResolutionAdjustmentsItem](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionAdjustmentsItem.md#returnpreviewscreateresponse200dataeligibilityresolutionadjustmentsitem) and [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerPaymentAmountMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerPaymentAmountMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerRefundAmountMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerRefundAmountMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `credit_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionCreditMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionCreditMoney.md#returnpreviewscreateresponse200dataeligibilityresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionDeductionMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionDeductionMoney.md#returnpreviewscreateresponse200dataeligibilityresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataEligibilityResolutionLineItemsItem](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionLineItemsItem.md#returnpreviewscreateresponse200dataeligibilityresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementTotalMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementTotalMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReturnedTotalMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReturnedTotalMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

