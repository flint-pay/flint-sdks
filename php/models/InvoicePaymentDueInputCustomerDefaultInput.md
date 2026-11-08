[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueInputCustomerDefaultInput

The `customer_default` variant of `InvoicePaymentDueInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Required with date and not accepted with any other type. The date must be today or later when creating or updating a draft. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `invoice_payment_term_id` | Optional | string | The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: `1`. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `type` | Required | string | How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Values: `"customer_default"`. |

