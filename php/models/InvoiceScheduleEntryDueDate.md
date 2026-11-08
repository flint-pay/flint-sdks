[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryDueDate

When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.

The `date` variant of `InvoiceScheduleDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Required | string | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: `date`. |
| `type` | Required | string | How the entry's due date is set. Values: `"date"`. |

