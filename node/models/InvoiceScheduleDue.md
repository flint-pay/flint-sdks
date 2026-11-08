[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDue

When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Conditional | string | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: `date`. Example: `"2026-08-02"`. |
| `type` | Required | string | How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. |

### InvoiceScheduleDue variant 1: `type` = `"at_issue"`

oneOf with type: "at_issue": The `at_issue` variant of `InvoiceScheduleDue`..

- Optional: `due_date`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleDue variant 2: `type` = `"date"`

oneOf with type: "date": The `date` variant of `InvoiceScheduleDue`..

- Required: `due_date`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleDue variant 3: `type` = `"invoice_due_date"`

oneOf with type: "invoice_due_date": The `invoice_due_date` variant of `InvoiceScheduleDue`..

- Optional: `due_date`.
- Constraints for `type`: Values: `"invoice_due_date"`.

