[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntry

One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | object and Alternative shapes (see declared variants) | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntry.md#invoicescheduleentryamount_specification). |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this entry, minus reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due` | Required | object and Alternative shapes (see declared variants) | When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/InvoiceScheduleEntry.md#invoicescheduleentrydue). |
| `invoice_schedule_entry_id` | Required | string | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. |
| `kind` | Required | string | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this entry, including its unpaid late fee, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this entry, minus reversed payments, including payments toward its late fee. It can exceed total_money when the entry carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The entry's share of the invoice total, resolved from amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### InvoiceScheduleEntry.amount_specification

How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Conditional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. |

### InvoiceScheduleEntry.amount_specification variant 1: `type` = `"fixed"`

oneOf variant 1: The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleEntry.amount_specification variant 2: `type` = `"percentage"`

oneOf variant 2: The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleEntry.amount_specification variant 3: `type` = `"remaining_balance"`

oneOf variant 3: The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (at least one(present(`amount_money`); present(`percent`))).
- Optional: `amount_money`, `percent`.
- Constraints for `type`: Values: `"remaining_balance"`.

### InvoiceScheduleEntry.due

When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.

Field definitions: [shared fields](InvoiceScheduleDueInput.md#invoicescheduledueinput).

### InvoiceScheduleEntry.due variant 1: `type` = `"at_issue"`

oneOf variant 1: The `at_issue` variant of `InvoiceScheduleDue`..

- Optional: `due_at`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleEntry.due variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoiceScheduleDue`..

- Required: `due_at`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleEntry.due variant 3: `type` = `"invoice_due_date"`

oneOf variant 3: The `invoice_due_date` variant of `InvoiceScheduleDue`..

- Optional: `due_at`.
- Constraints for `type`: Values: `"invoice_due_date"`.

