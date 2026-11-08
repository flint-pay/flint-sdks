[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceReminderRule

One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative values are days before the due date, positive values days after.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `days_from_due` | Required | integer | Calendar days from the due date in the invoice timezone. Negative values send before it, zero sends on it, and positive values send after it. Format: `int32`. minimum: `-90`. maximum: `365`. |

