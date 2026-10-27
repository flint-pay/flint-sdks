[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueRequest

When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any other type. Format: `date-time`. minLength: `1`. |
| `invoice_payment_term_id` | Conditional | string | The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`. |
| `type` | Required | string | How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"none"`, `"date"`, `"payment_terms"`, `"customer_default"`, `"merchant_default"`. |

### InvoicePaymentDueRequest variant 1: `type` = `"none"`

oneOf variant 1: The `none` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"none"`.

### InvoicePaymentDueRequest variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`invoice_payment_term_id`)).
- Required: `due_at`.
- Optional: `invoice_payment_term_id`.
- Constraints for `type`: Values: `"date"`.

### InvoicePaymentDueRequest variant 3: `type` = `"payment_terms"`

oneOf variant 3: The `payment_terms` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`due_at`)).
- Required: `invoice_payment_term_id`.
- Optional: `due_at`.
- Constraints for `type`: Values: `"payment_terms"`.

### InvoicePaymentDueRequest variant 4: `type` = `"customer_default"`

oneOf variant 4: The `customer_default` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"customer_default"`.

### InvoicePaymentDueRequest variant 5: `type` = `"merchant_default"`

oneOf variant 5: The `merchant_default` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"merchant_default"`.

