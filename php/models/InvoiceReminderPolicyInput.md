[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceReminderPolicyInput

Rules for automatic invoice reminders, each sent a set number of days before or after the due date.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rules` | Required | Array of [InvoiceReminderRuleInput](../models/InvoiceReminderRuleInput.md#invoicereminderruleinput) | Reminder dates relative to the invoice due date. At most 20 rules; [] disables scheduled reminders. maxItems: `20`. |

