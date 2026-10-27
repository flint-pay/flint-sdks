[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueInput

When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: `date-time`. |
| `type` | Required | string | Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. |

### InvoiceScheduleDueInput variant 1: `type` = `"at_issue"`

oneOf variant 1: The `at_issue` variant of `InvoiceScheduleDue`..

- Optional: `due_at`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleDueInput variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoiceScheduleDue`..

- Required: `due_at`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleDueInput variant 3: `type` = `"invoice_due_date"`

oneOf variant 3: The `invoice_due_date` variant of `InvoiceScheduleDue`..

- Optional: `due_at`.
- Constraints for `type`: Values: `"invoice_due_date"`.

