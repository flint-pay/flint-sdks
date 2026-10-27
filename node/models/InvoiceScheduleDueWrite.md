[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueWrite

When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. |

### InvoiceScheduleDueWrite variant 1: `type` = `"at_issue"`

oneOf variant 1: The `at_issue` variant of `InvoiceScheduleDueWrite`..

- Condition: not (present(`due_at`)).
- Optional: `due_at`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleDueWrite variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoiceScheduleDueWrite`..

- Required: `due_at`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleDueWrite variant 3: `type` = `"invoice_due_date"`

oneOf variant 3: The `invoice_due_date` variant of `InvoiceScheduleDueWrite`..

- Condition: not (present(`due_at`)).
- Optional: `due_at`.
- Constraints for `type`: Values: `"invoice_due_date"`.

