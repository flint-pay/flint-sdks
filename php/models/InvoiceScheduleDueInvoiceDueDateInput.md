[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueInvoiceDueDateInput

The `invoice_due_date` variant of `InvoiceScheduleDue`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: `date`. Example: `"2026-08-02"`. |
| `type` | Required | string | How the entry's due date is set. Values: `"invoice_due_date"`. |

