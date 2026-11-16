[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueAtIssuePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. `due_date`: [declared alternatives](../models/InvoiceScheduleDueAtIssuePreviousAttributesInput.md#invoicescheduledueatissuepreviousattributesinputdue_date). |
| `type` | Optional | (string or null) | How the entry's due date is set. Values: `"at_issue"`. `type`: [declared alternatives](../models/InvoiceScheduleDueAtIssuePreviousAttributesInput.md#invoicescheduledueatissuepreviousattributesinputtype). |

### InvoiceScheduleDueAtIssuePreviousAttributesInput.due_date

### InvoiceScheduleDueAtIssuePreviousAttributesInput.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date..

- Value shape: string. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceScheduleDueAtIssuePreviousAttributesInput.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. 

### InvoiceScheduleDueAtIssuePreviousAttributesInput.type

### InvoiceScheduleDueAtIssuePreviousAttributesInput.type variant 1, 3

anyOf group 1 variant 1: How the entry's due date is set.; anyOf group 2 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`.

### InvoiceScheduleDueAtIssuePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the entry's due date is set. 

