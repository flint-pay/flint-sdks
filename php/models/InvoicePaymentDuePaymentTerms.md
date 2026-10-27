[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePaymentTerms

The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.

The `payment_terms` variant of `InvoicePaymentDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | The due date set with type date. Present only with date. The top-level due_at is the effective due date for every type. Format: `date-time`. |
| `invoice_payment_term_id` | Required | string | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. |
| `type` | Required | string | How the due date was set. Values: `"payment_terms"`. |

