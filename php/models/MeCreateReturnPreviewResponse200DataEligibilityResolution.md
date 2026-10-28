[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityResolution

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem.md#mecreatereturnpreviewresponse200dataeligibilityresolutionadjustmentsitem) and [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerPaymentAmountMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerPaymentAmountMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerRefundAmountMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerRefundAmountMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionCreditMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionCreditMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionDeductionMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionDeductionMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataEligibilityResolutionLineItemsItem](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionLineItemsItem.md#mecreatereturnpreviewresponse200dataeligibilityresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementTotalMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementTotalMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReturnedTotalMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReturnedTotalMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

