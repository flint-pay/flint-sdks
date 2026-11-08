[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueWrite

When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Conditional | string | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when the invoice is issued. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `type` | Required | string | How the entry's due time is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. |

### InvoiceScheduleDueWrite variant 1: `type` = `"at_issue"`

oneOf with type: "at_issue": The `at_issue` variant of `InvoiceScheduleDueWrite`..

- Condition: not (present(`due_date`)).
- Optional: `due_date`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleDueWrite variant 2: `type` = `"date"`

oneOf with type: "date": The `date` variant of `InvoiceScheduleDueWrite`..

- Required: `due_date`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleDueWrite variant 3: `type` = `"invoice_due_date"`

oneOf with type: "invoice_due_date": The `invoice_due_date` variant of `InvoiceScheduleDueWrite`..

- Condition: not (present(`due_date`)).
- Optional: `due_date`.
- Constraints for `type`: Values: `"invoice_due_date"`.

