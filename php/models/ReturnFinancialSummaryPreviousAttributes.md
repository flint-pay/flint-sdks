[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnFinancialSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collected_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Balances collected from the buyer. |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credits added by confirmed, non-canceled resolutions. |
| `deduction_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fees withheld by confirmed, non-canceled resolutions. |
| `due_from_buyer_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. |
| `due_to_buyer_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refund amounts that succeeded. |
| `replacement_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of replacement merchandise on confirmed, non-canceled resolutions. |
| `returned_discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.discount_money across the Return's line items. |
| `returned_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.subtotal_money across the Return's line items. |
| `returned_tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.tax_money across the Return's line items. |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.total_money across the Return's line items. |

