[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionPreviewInput

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentInput](../models/ReturnResolutionAdjustmentInput.md#returnresolutionadjustmentinput) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`, minus `deduction_money` and `replacement_total_money`, when that balance is zero or more. For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `credit_adjustment_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Deductions the proposed resolution's adjustments would take, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of [ReturnResolutionLineItemInput](../models/ReturnResolutionLineItemInput.md#returnresolutionlineiteminput) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `refund_shortfall_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Buyer refund value that the original payments cannot fund. Zero when fully payable. buyer_refund_amount_money remains the full entitlement. Create and confirm refuse a shortfall with 409 LIMIT_EXCEEDED and maximum_money. Merchant only. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItemInput](../models/ReturnReplacementLineItemInput.md#returnreplacementlineiteminput) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total of the replacement items the buyer would receive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `returned_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value of the returned units the proposed resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tender_estimates` | Required | Array of [ReturnRefundTenderEstimateInput](../models/ReturnRefundTenderEstimateInput.md#returnrefundtenderestimateinput) | Estimated amounts by original tender and refund destination. For a replacement return, order_id identifies the order that collected each tender. Empty when no amount is payable. |

