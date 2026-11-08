[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueNone

The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.

The `none` variant of `InvoicePaymentDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: `date`. |
| `invoice_payment_term_id` | Optional | string | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. |
| `type` | Required | string | How the due date was set. Values: `"none"`. |

