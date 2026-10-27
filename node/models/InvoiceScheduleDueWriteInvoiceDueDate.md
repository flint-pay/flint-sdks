[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueWriteInvoiceDueDate

The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | Values: `"invoice_due_date"`. |

