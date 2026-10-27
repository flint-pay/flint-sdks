[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntry

One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | [InvoiceScheduleAmountSpecification](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecification) | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this entry, minus reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/InvoiceScheduleEntry.md#invoicescheduleentrycredit_money). |
| `due` | Required | [InvoiceScheduleDue](../models/InvoiceScheduleDue.md#invoicescheduledue) | When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date. |
| `invoice_schedule_entry_id` | Required | string | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. |
| `kind` | Required | string | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this entry, including its unpaid late fee, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/InvoiceScheduleEntry.md#invoicescheduleentryoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this entry, minus reversed payments, including payments toward its late fee. It can exceed total_money when the entry carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/InvoiceScheduleEntry.md#invoicescheduleentrypaid_money). |
| `status` | Required | string | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The entry's share of the invoice total, resolved from amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/InvoiceScheduleEntry.md#invoicescheduleentrytotal_money). |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/InvoiceScheduleEntry.md#invoicescheduleentrywritten_off_money). |

### InvoiceScheduleEntry.credit_money

Credit note credit allocated to this entry, minus reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceScheduleEntry.outstanding_money

What is still owed on this entry, including its unpaid late fee, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceScheduleEntry.paid_money

Payments applied to this entry, minus reversed payments, including payments toward its late fee. It can exceed total_money when the entry carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceScheduleEntry.total_money

The entry's share of the invoice total, resolved from amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceScheduleEntry.written_off_money

The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

