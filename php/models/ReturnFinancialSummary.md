[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnFinancialSummary

The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Balances collected from the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due_from_buyer_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due_to_buyer_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refund amounts that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.discount_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.subtotal_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.tax_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.total_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

