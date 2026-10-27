[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnFinancialSummary

The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Balances collected from the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `collected_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummarycollected_money). |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummarycredit_money). |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `deduction_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummarydeduction_money). |
| `due_from_buyer_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `due_from_buyer_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummarydue_from_buyer_money). |
| `due_to_buyer_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `due_to_buyer_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummarydue_to_buyer_money). |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refund amounts that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummaryrefunded_money). |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `replacement_total_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummaryreplacement_total_money). |
| `returned_discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.discount_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_discount_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummaryreturned_discount_money). |
| `returned_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.subtotal_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_subtotal_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummaryreturned_subtotal_money). |
| `returned_tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.tax_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_tax_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummaryreturned_tax_money). |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of return_value.total_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_total_money`: [field definitions](../models/ReturnFinancialSummary.md#returnfinancialsummaryreturned_total_money). |

### ReturnFinancialSummary.collected_money

Balances collected from the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.credit_money

Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.deduction_money

Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.due_from_buyer_money

Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.due_to_buyer_money

Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.refunded_money

Refund amounts that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.replacement_total_money

Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.returned_discount_money

Sum of return_value.discount_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.returned_subtotal_money

Sum of return_value.subtotal_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.returned_tax_money

Sum of return_value.tax_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnFinancialSummary.returned_total_money

Sum of return_value.total_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

