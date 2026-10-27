[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueNone

The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.

The `none` variant of `InvoicePaymentDue`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_payment_term_id` | Optional | string |  |
| `type` | Required | string | Values: `"none"`. |

