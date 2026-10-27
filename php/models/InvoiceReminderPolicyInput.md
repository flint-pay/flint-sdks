[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceReminderPolicyInput

Rules for automatic invoice reminders, each sent a set number of days before or after the due date.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rules` | Required | Array of [InvoiceReminderRuleInput](../models/InvoiceReminderRuleInput.md#invoicereminderruleinput) | maxItems: `20`. |

