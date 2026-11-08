[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueRequest

When an invoice is due, used when creating or updating an invoice: no due date, a calendar date, payment terms, or a default.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Conditional | string | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Required with date and not accepted with any other type. The date must be today or later when creating or updating a draft. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `invoice_payment_term_id` | Conditional | string | The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `type` | Required | string | How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"none"`, `"date"`, `"payment_terms"`, `"customer_default"`, `"merchant_default"`. |

### InvoicePaymentDueRequest variant 1: `type` = `"none"`

oneOf with type: "none": The `none` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Optional: `due_date`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"none"`.

### InvoicePaymentDueRequest variant 2: `type` = `"date"`

oneOf with type: "date": The `date` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`invoice_payment_term_id`)).
- Required: `due_date`.
- Optional: `invoice_payment_term_id`.
- Constraints for `type`: Values: `"date"`.

### InvoicePaymentDueRequest variant 3: `type` = `"payment_terms"`

oneOf with type: "payment_terms": The `payment_terms` variant of `InvoicePaymentDueInput`..

- Condition: not (present(`due_date`)).
- Required: `invoice_payment_term_id`.
- Optional: `due_date`.
- Constraints for `type`: Values: `"payment_terms"`.

### InvoicePaymentDueRequest variant 4: `type` = `"customer_default"`

oneOf with type: "customer_default": The `customer_default` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Optional: `due_date`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"customer_default"`.

### InvoicePaymentDueRequest variant 5: `type` = `"merchant_default"`

oneOf with type: "merchant_default": The `merchant_default` variant of `InvoicePaymentDueInput`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Optional: `due_date`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"merchant_default"`.

