[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryWriteDepositInput

The `deposit` variant of `InvoiceScheduleEntryWrite`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | [InvoiceScheduleAmountSpecificationInput](../models/InvoiceScheduleAmountSpecificationInput.md#invoicescheduleamountspecificationinput) | How much the entry collects. Deposits and installments use fixed or percentage, and the balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. How much the entry collects. Deposits and installments use fixed or percentage, and the balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1amount_specification). |
| `due` | Required | [InvoiceScheduleDueWriteInput](../models/InvoiceScheduleDueWriteInput.md#invoicescheduleduewriteinput) | When the entry is due. Deposits use at_issue or date, installments use date, and the balance uses invoice_due_date or date. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. When the entry is due. Deposits use at_issue or date, installments use date, and the balance uses invoice_due_date or date. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1due). |
| `invoice_schedule_entry_id` | Optional | string | An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it to add a new entry. minLength: `1`. |
| `kind` | Required | string | The entry's role in the schedule. Values: `"deposit"`. |

### InvoiceScheduleEntryWriteDepositInput.amount_specification

Declared alternatives: [InvoiceScheduleEntryWriteInput variant 1.amount_specification](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1amount_specification).

### InvoiceScheduleEntryWriteDepositInput.due

Declared alternatives: [InvoiceScheduleEntryWriteInput variant 1.due](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1due).

