[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDue

When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: `date-time`. |
| `type` | Required | string | How the entry's due time is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. |

### InvoiceScheduleDue variant 1: `type` = `"at_issue"`

oneOf with type: "at_issue": The `at_issue` variant of `InvoiceScheduleDue`..

- Optional: `due_at`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleDue variant 2: `type` = `"date"`

oneOf with type: "date": The `date` variant of `InvoiceScheduleDue`..

- Required: `due_at`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleDue variant 3: `type` = `"invoice_due_date"`

oneOf with type: "invoice_due_date": The `invoice_due_date` variant of `InvoiceScheduleDue`..

- Optional: `due_at`.
- Constraints for `type`: Values: `"invoice_due_date"`.

