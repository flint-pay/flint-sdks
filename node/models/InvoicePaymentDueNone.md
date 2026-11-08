[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueNone







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string | Format: `date`. Example: `"2026-08-02"`. |
| `invoice_payment_term_id` | Optional | string | Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `type` | Required | string | Values: `"none"`. |

### InvoicePaymentDueNone variant 1: `type` = `"none"`

anyOf InvoicePaymentDueInputNone: Declared schema InvoicePaymentDueInputNone. The `none` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Constraints for `due_date`: Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Required with date and not accepted with any other type. The date must be today or later when creating or updating a draft. minLength: `1`.
- Constraints for `invoice_payment_term_id`: The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`.
- Constraints for `type`: How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"none"`.

### InvoicePaymentDueNone variant 2: `type` = `"none"`

anyOf InvoicePaymentDueNone: Declared schema InvoicePaymentDueNone. The `none` variant of `InvoicePaymentDue`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Constraints for `due_date`: Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type.
- Constraints for `invoice_payment_term_id`: The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms.
- Constraints for `type`: How the due date was set. Values: `"none"`.

