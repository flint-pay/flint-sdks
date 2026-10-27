[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueDate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | Format: `date-time`. |
| `type` | Required | string | How the entry's due time is set. Values: `"date"`. |

### InvoiceScheduleDueDate variant 1: `type` = `"date"`

anyOf variant 1: Declared schema InvoiceScheduleDueDate. The `date` variant of `InvoiceScheduleDue`..

- Constraints for `due_at`: When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`.

### InvoiceScheduleDueDate variant 2: `type` = `"date"`

anyOf variant 2: Declared schema InvoiceScheduleDueWriteDate. The `date` variant of `InvoiceScheduleDueWrite`..

- Constraints for `due_at`: When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. minLength: `1`.

