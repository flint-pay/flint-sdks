[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueInputDateInput

Request input. Response: [InvoicePaymentDueDate](../models/InvoicePaymentDueDate.md#invoicepaymentduedate).

The `date` variant of `InvoicePaymentDueInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any other type. Format: `date-time`. minLength: `1`. |
| `invoice_payment_term_id` | Optional | string | The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`. |
| `type` | Required | string | How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"date"`. |

