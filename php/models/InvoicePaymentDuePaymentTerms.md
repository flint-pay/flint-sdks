[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePaymentTerms

The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.

The `payment_terms` variant of `InvoicePaymentDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_payment_term_id` | Required | string |  |
| `type` | Required | string | Values: `"payment_terms"`. |

