[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePaymentTermsInput

The `payment_terms` variant of `InvoicePaymentDue`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: `date`. Example: `"2026-08-02"`. |
| `invoice_payment_term_id` | Required | string | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `type` | Required | string | How the due date was set. Values: `"payment_terms"`. |

