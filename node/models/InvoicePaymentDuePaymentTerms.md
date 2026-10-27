[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePaymentTerms







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_payment_term_id` | Required | string |  |
| `type` | Required | string | Values: `"payment_terms"`. |

### InvoicePaymentDuePaymentTerms variant 1: `type` = `"payment_terms"`

anyOf variant 1: Declared schema InvoicePaymentDueInputPaymentTerms. The `payment_terms` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`due_at`)).
- Constraints for `due_at`: minLength: `1`.
- Constraints for `invoice_payment_term_id`: minLength: `1`.
- Constraints for `type`: merchant_default and customer_default resolve at write time. Reads return the resolved type. Sending payment_terms on a draft snapshots the term current revision again. Values: `"payment_terms"`.

### InvoicePaymentDuePaymentTerms variant 2: `type` = `"payment_terms"`

anyOf variant 2: Declared schema InvoicePaymentDuePaymentTerms. The `payment_terms` variant of `InvoicePaymentDue`..

- Condition: not (present(`due_at`)).

