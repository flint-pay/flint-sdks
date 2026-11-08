[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueWriteAtIssue

The `at_issue` variant of `InvoiceScheduleDueWrite`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when the invoice is issued. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `type` | Required | string | How the entry's due time is set. Values: `"at_issue"`. |

