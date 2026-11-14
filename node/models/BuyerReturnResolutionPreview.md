[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnResolutionPreview

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment) | Fees and credits to apply to the resolution, at most 50. |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_payment_amount_money`: [field definitions](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreviewbuyer_payment_amount_money). |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`, minus `deduction_money` and `replacement_total_money`, when that balance is zero or more. For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_refund_amount_money`: [field definitions](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreviewbuyer_refund_amount_money). |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_adjustment_money`: [field definitions](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreviewcredit_adjustment_money). |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Deductions the proposed resolution's adjustments would take, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `deduction_money`: [field definitions](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreviewdeduction_money). |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the replacement items the buyer would receive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `replacement_total_money`: [field definitions](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreviewreplacement_total_money). |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value of the returned units the proposed resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_total_money`: [field definitions](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreviewreturned_total_money). |

### BuyerReturnResolutionPreview.buyer_payment_amount_money

Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerReturnResolutionPreview.buyer_refund_amount_money

Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`, minus `deduction_money` and `replacement_total_money`, when that balance is zero or more. For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerReturnResolutionPreview.credit_adjustment_money

Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerReturnResolutionPreview.deduction_money

Deductions the proposed resolution's adjustments would take, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerReturnResolutionPreview.replacement_total_money

Total of the replacement items the buyer would receive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerReturnResolutionPreview.returned_total_money

Value of the returned units the proposed resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

