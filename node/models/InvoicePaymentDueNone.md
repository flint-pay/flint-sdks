[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueNone







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_payment_term_id` | Optional | string |  |
| `type` | Required | string | Values: `"none"`. |

### InvoicePaymentDueNone variant 1: `type` = `"none"`

anyOf variant 1: Declared schema InvoicePaymentDueInputNone. The `none` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).
- Constraints for `due_at`: minLength: `1`.
- Constraints for `invoice_payment_term_id`: minLength: `1`.
- Constraints for `type`: merchant_default and customer_default resolve at write time. Reads return the resolved type. Sending payment_terms on a draft snapshots the term current revision again. Values: `"none"`.

### InvoicePaymentDueNone variant 2: `type` = `"none"`

anyOf variant 2: Declared schema InvoicePaymentDueNone. The `none` variant of `InvoicePaymentDue`..

- Condition: not (at least one(present(`due_at`); present(`invoice_payment_term_id`))).

