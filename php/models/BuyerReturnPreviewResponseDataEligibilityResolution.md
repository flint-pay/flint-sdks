[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityResolution

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitem) and [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer | Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionCreditMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionCreditMoney.md#buyerreturnpreviewresponsedataeligibilityresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney.md#buyerreturnpreviewresponsedataeligibilityresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

