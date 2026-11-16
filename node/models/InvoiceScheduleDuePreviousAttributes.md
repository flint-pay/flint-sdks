[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleDuePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. `due_date`: [declared alternatives](../models/InvoiceScheduleDueAtIssuePreviousAttributes.md#invoicescheduledueatissuepreviousattributesdue_date). |
| `type` | Optional | (string or null) | How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. `type`: [declared alternatives](../models/InvoiceScheduleDuePreviousAttributes.md#invoicescheduleduepreviousattributes-variant-1type), [declared alternatives](../models/InvoiceScheduleDuePreviousAttributes.md#invoicescheduleduepreviousattributes-variant-2type), [declared alternatives](../models/InvoiceScheduleDuePreviousAttributes.md#invoicescheduleduepreviousattributes-variant-3type). |

### InvoiceScheduleDuePreviousAttributes variant 1: `type` = `"at_issue"`

anyOf InvoiceScheduleDueAtIssuePreviousAttributes.

- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleDuePreviousAttributes variant 2: `type` = `"date"`

anyOf InvoiceScheduleDueDatePreviousAttributes.

- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleDuePreviousAttributes variant 3: `type` = `"invoice_due_date"`

anyOf InvoiceScheduleDueInvoiceDueDatePreviousAttributes.

- Constraints for `type`: Values: `"invoice_due_date"`.

### InvoiceScheduleDuePreviousAttributes.due_date

Declared alternatives: [InvoiceScheduleDueAtIssuePreviousAttributes.due_date](../models/InvoiceScheduleDueAtIssuePreviousAttributes.md#invoicescheduledueatissuepreviousattributesdue_date).

### InvoiceScheduleDuePreviousAttributes variant 1.type

### InvoiceScheduleDuePreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the entry's due date is set..

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`.

### InvoiceScheduleDuePreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's due date is set. 

### InvoiceScheduleDuePreviousAttributes variant 1.type variant 3, 5

anyOf group 2 variant 1: How the entry's due date is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`.

### InvoiceScheduleDuePreviousAttributes variant 2.type

### InvoiceScheduleDuePreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How the entry's due date is set..

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`.

### InvoiceScheduleDuePreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's due date is set. 

### InvoiceScheduleDuePreviousAttributes variant 2.type variant 3, 5

anyOf group 2 variant 1: How the entry's due date is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"date"`.

### InvoiceScheduleDuePreviousAttributes variant 3.type

### InvoiceScheduleDuePreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How the entry's due date is set..

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`.

### InvoiceScheduleDuePreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's due date is set. 

### InvoiceScheduleDuePreviousAttributes variant 3.type variant 3, 5

anyOf group 2 variant 1: How the entry's due date is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"invoice_due_date"`.

