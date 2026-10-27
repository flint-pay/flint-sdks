[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryWriteBalance

The `balance` variant of `InvoiceScheduleEntryWrite`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | [InvoiceScheduleAmountSpecification](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecification) | How much the entry collects. Deposits and installments use fixed or percentage, and the balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. How much the entry collects. Deposits and installments use fixed or percentage, and the balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-3amount_specification). |
| `due` | Required | [InvoiceScheduleDueWrite](../models/InvoiceScheduleDueWrite.md#invoicescheduleduewrite) | When the entry is due. Deposits use at_issue or date, installments use date, and the balance uses invoice_due_date or date. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. When the entry is due. Deposits use at_issue or date, installments use date, and the balance uses invoice_due_date or date. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-3due). |
| `invoice_schedule_entry_id` | Optional | string | An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it to add a new entry. minLength: `1`. |
| `kind` | Required | string | The entry's role in the schedule. Values: `"balance"`. |

### InvoiceScheduleEntryWriteBalance.amount_specification

Declared alternatives: [InvoiceScheduleEntryWrite variant 3.amount_specification](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-3amount_specification).

### InvoiceScheduleEntryWriteBalance.due

Declared alternatives: [InvoiceScheduleEntryWrite variant 3.due](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-3due).

