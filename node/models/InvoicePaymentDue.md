[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDue

The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | The due date set with type date. Present only with date. The top-level due_at is the effective due date for every type. Format: `date-time`. |
| `invoice_payment_term_id` | Conditional | string | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. |
| `type` | Required | string | How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`. |

### InvoicePaymentDue variant 1: `type` = `"none"`

oneOf variant 1: The `none` variant of `InvoicePaymentDue`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Optional: `due_at`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"none"`.

### InvoicePaymentDue variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoicePaymentDue`..

- Condition: not (present(`invoice_payment_term_id`)).
- Required: `due_at`.
- Optional: `invoice_payment_term_id`.
- Constraints for `type`: Values: `"date"`.

### InvoicePaymentDue variant 3: `type` = `"payment_terms"`

oneOf variant 3: The `payment_terms` variant of `InvoicePaymentDue`..

- Condition: not (present(`due_at`)).
- Required: `invoice_payment_term_id`.
- Optional: `due_at`.
- Constraints for `type`: Values: `"payment_terms"`.

