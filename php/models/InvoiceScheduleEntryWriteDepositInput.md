[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryWriteDepositInput

The `deposit` variant of `InvoiceScheduleEntryWrite`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | [InvoiceScheduleAmountSpecificationInput](../models/InvoiceScheduleAmountSpecificationInput.md#invoicescheduleamountspecificationinput) | How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1amount_specification). |
| `due` | Required | [InvoiceScheduleDueWriteInput](../models/InvoiceScheduleDueWriteInput.md#invoicescheduleduewriteinput) | When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1due). |
| `invoice_schedule_entry_id` | Optional | string | minLength: `1`. |
| `kind` | Required | string | Values: `"deposit"`. |

### InvoiceScheduleEntryWriteDepositInput.amount_specification

Declared alternatives: [InvoiceScheduleEntryWriteInput variant 1.amount_specification](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1amount_specification).

### InvoiceScheduleEntryWriteDepositInput.due

Declared alternatives: [InvoiceScheduleEntryWriteInput variant 1.due](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput-variant-1due).

