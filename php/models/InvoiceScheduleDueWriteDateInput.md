[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueWriteDateInput

The `date` variant of `InvoiceScheduleDueWrite`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | How the entry's due time is set. Values: `"date"`. |

