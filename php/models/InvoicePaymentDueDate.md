[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueDate

The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.

The `date` variant of `InvoicePaymentDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_payment_term_id` | Optional | string |  |
| `type` | Required | string | Values: `"date"`. |

