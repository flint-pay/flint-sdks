[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionResolution

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionResolutionAdjustmentsItem](../models/BuyerReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataresolutionresolutionadjustmentsitem) and [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment)) |  |
| `based_on_return_version` | Required | integer | Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionBuyerPaymentAmountMoney.md#buyerreturnpreviewresponsedataresolutionresolutionbuyerpaymentamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionBuyerRefundAmountMoney.md#buyerreturnpreviewresponsedataresolutionresolutionbuyerrefundamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionCreditMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionCreditMoney.md#buyerreturnpreviewresponsedataresolutionresolutioncreditmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionDeductionMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionDeductionMoney.md#buyerreturnpreviewresponsedataresolutionresolutiondeductionmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionResolutionLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionResolutionLineItemsItem.md#buyerreturnpreviewresponsedataresolutionresolutionlineitemsitem) and [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem)) |  |
| `replacement_line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitem) and [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem)) |  |
| `replacement_total_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementTotalMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReturnedTotalMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

