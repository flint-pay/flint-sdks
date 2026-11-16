[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDueDatePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. `due_date`: [declared alternatives](../models/InvoiceScheduleDueAtIssuePreviousAttributesInput.md#invoicescheduledueatissuepreviousattributesinputdue_date). |
| `type` | Optional | (string or null) | How the entry's due date is set. Values: `"date"`. `type`: [declared alternatives](../models/InvoiceScheduleDueDatePreviousAttributesInput.md#invoicescheduleduedatepreviousattributesinputtype). |

### InvoiceScheduleDueDatePreviousAttributesInput.due_date

Declared alternatives: [InvoiceScheduleDueAtIssuePreviousAttributesInput.due_date](../models/InvoiceScheduleDueAtIssuePreviousAttributesInput.md#invoicescheduledueatissuepreviousattributesinputdue_date).

### InvoiceScheduleDueDatePreviousAttributesInput.type

### InvoiceScheduleDueDatePreviousAttributesInput.type variant 1, 3

anyOf group 1 variant 1: How the entry's due date is set.; anyOf group 2 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"date"`.

### InvoiceScheduleDueDatePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the entry's due date is set. 

