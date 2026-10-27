[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueRequestInput

When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `invoice_payment_term_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string | merchant_default and customer_default resolve at write time. Reads return the resolved type. Sending payment_terms on a draft snapshots the term current revision again. Values: `"none"`, `"date"`, `"payment_terms"`, `"customer_default"`, `"merchant_default"`. |

### InvoicePaymentDueRequestInput variant 1: `type` = `"none"`

oneOf variant 1: The `none` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"none"`.

### InvoicePaymentDueRequestInput variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`invoice_payment_term_id`)).
- Required: `due_at`.
- Optional: `invoice_payment_term_id`.
- Constraints for `type`: Values: `"date"`.

### InvoicePaymentDueRequestInput variant 3: `type` = `"payment_terms"`

oneOf variant 3: The `payment_terms` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`due_at`)).
- Required: `invoice_payment_term_id`.
- Optional: `due_at`.
- Constraints for `type`: Values: `"payment_terms"`.

### InvoicePaymentDueRequestInput variant 4: `type` = `"customer_default"`

oneOf variant 4: The `customer_default` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"customer_default"`.

### InvoicePaymentDueRequestInput variant 5: `type` = `"merchant_default"`

oneOf variant 5: The `merchant_default` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"merchant_default"`.

