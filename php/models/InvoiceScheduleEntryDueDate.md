[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryDueDate

When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.

The `date` variant of `InvoiceScheduleDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: `date-time`. |
| `type` | Required | string | Values: `"date"`. |

