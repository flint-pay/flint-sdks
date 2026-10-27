[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueInputDateInput

Request input. Response: [InvoicePaymentDueDate](../models/InvoicePaymentDueDate.md#invoicepaymentduedate).

The `date` variant of `InvoicePaymentDueInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `invoice_payment_term_id` | Optional | string | minLength: `1`. |
| `type` | Required | string | merchant_default and customer_default resolve at write time. Reads return the resolved type. Sending payment_terms on a draft snapshots the term current revision again. Values: `"date"`. |

