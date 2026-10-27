[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryWriteDeposit

The `deposit` variant of `InvoiceScheduleEntryWrite`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | [InvoiceScheduleAmountSpecification](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecification) | How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1amount_specification). |
| `due` | Required | [InvoiceScheduleDueWrite](../models/InvoiceScheduleDueWrite.md#invoicescheduleduewrite) | When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1due). |
| `invoice_schedule_entry_id` | Optional | string | minLength: `1`. |
| `kind` | Required | string | Values: `"deposit"`. |

### InvoiceScheduleEntryWriteDeposit.amount_specification

Declared alternatives: [InvoiceScheduleEntryWrite variant 1.amount_specification](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1amount_specification).

### InvoiceScheduleEntryWriteDeposit.due

Declared alternatives: [InvoiceScheduleEntryWrite variant 1.due](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1due).

