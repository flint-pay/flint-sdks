[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceReminderPolicy

Rules for automatic invoice reminders, each sent a set number of days before or after the due date.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rules` | Required | Array of [InvoiceReminderRule](../models/InvoiceReminderRule.md#invoicereminderrule) | maxItems: `20`. |

