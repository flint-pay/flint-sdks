[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueDate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_payment_term_id` | Optional | string |  |
| `type` | Required | string | Values: `"date"`. |

### InvoicePaymentDueDate variant 1: `type` = `"date"`

anyOf variant 1: Declared schema InvoicePaymentDueDate. The `date` variant of `InvoicePaymentDue`..

- Condition: not (present(`invoice_payment_term_id`)).

### InvoicePaymentDueDate variant 2: `type` = `"date"`

anyOf variant 2: Declared schema InvoicePaymentDueInputDate. The `date` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`invoice_payment_term_id`)).
- Constraints for `due_at`: minLength: `1`.
- Constraints for `invoice_payment_term_id`: minLength: `1`.
- Constraints for `type`: merchant_default and customer_default resolve at write time. Reads return the resolved type. Sending payment_terms on a draft snapshots the term current revision again. Values: `"date"`.

