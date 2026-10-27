[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePaymentTerms







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | Format: `date-time`. |
| `invoice_payment_term_id` | Required | string |  |
| `type` | Required | string | Values: `"payment_terms"`. |

### InvoicePaymentDuePaymentTerms variant 1: `type` = `"payment_terms"`

anyOf variant 1: Declared schema InvoicePaymentDueInputPaymentTerms. The `payment_terms` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`due_at`)).
- Constraints for `due_at`: When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any other type. minLength: `1`.
- Constraints for `invoice_payment_term_id`: The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`.
- Constraints for `type`: How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"payment_terms"`.

### InvoicePaymentDuePaymentTerms variant 2: `type` = `"payment_terms"`

anyOf variant 2: Declared schema InvoicePaymentDuePaymentTerms. The `payment_terms` variant of `InvoicePaymentDue`..

- Condition: not (present(`due_at`)).
- Constraints for `due_at`: The due date set with type date. Present only with date. The top-level due_at is the effective due date for every type.
- Constraints for `invoice_payment_term_id`: The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms.
- Constraints for `type`: How the due date was set. Values: `"payment_terms"`.

