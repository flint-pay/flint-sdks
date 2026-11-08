[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueDate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Required | string | Format: `date`. Example: `"2026-08-02"`. |
| `type` | Required | string | Values: `"date"`. |

### InvoiceScheduleDueDate variant 1: `type` = `"date"`

anyOf InvoiceScheduleDueDate: Declared schema InvoiceScheduleDueDate. The `date` variant of `InvoiceScheduleDue`..

- Constraints for `due_date`: Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date.
- Constraints for `type`: How the entry's due date is set. Values: `"date"`.

### InvoiceScheduleDueDate variant 2: `type` = `"date"`

anyOf InvoiceScheduleDueWriteDate: Declared schema InvoiceScheduleDueWriteDate. The `date` variant of `InvoiceScheduleDueWrite`..

- Constraints for `due_date`: Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when the invoice is issued. minLength: `1`.
- Constraints for `type`: How the entry's due time is set. Values: `"date"`.

