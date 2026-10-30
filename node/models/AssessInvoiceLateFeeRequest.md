[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AssessInvoiceLateFeeRequest

The request body for: Assess an invoice late fee.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_schedule_entry_id` | Optional | string | Required on an invoice with a payment schedule, where it names the entry whose outstanding balance and due date the fee is based on. Omit it on an invoice without a schedule. minLength: `1`. |

