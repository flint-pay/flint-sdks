[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnFinancialSummaryInput

The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collected_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Balances collected from the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due_from_buyer_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due_to_buyer_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Refund amounts that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `replacement_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of return_value.discount_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of return_value.subtotal_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of return_value.tax_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of return_value.total_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

