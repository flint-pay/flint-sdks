[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueDate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | Format: `date-time`. |
| `invoice_payment_term_id` | Optional | string |  |
| `type` | Required | string | Values: `"date"`. |

### InvoicePaymentDueDate variant 1: `type` = `"date"`

anyOf variant 1: Declared schema InvoicePaymentDueDate. The `date` variant of `InvoicePaymentDue`..

- Condition: not (present(`invoice_payment_term_id`)).
- Constraints for `due_at`: The due date set with type date. Present only with date. The top-level due_at is the effective due date for every type.
- Constraints for `invoice_payment_term_id`: The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms.
- Constraints for `type`: How the due date was set. Values: `"date"`.

### InvoicePaymentDueDate variant 2: `type` = `"date"`

anyOf variant 2: Declared schema InvoicePaymentDueInputDate. The `date` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`invoice_payment_term_id`)).
- Constraints for `due_at`: When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any other type. minLength: `1`.
- Constraints for `invoice_payment_term_id`: The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`.
- Constraints for `type`: How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"date"`.

