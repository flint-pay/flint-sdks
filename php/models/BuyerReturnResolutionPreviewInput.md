[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnResolutionPreviewInput

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [BuyerReturnResolutionAdjustmentInput](../models/BuyerReturnResolutionAdjustmentInput.md#buyerreturnresolutionadjustmentinput) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_adjustment_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of [ReturnResolutionLineItemInput](../models/ReturnResolutionLineItemInput.md#returnresolutionlineiteminput) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItemInput](../models/ReturnReplacementLineItemInput.md#returnreplacementlineiteminput) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `returned_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

