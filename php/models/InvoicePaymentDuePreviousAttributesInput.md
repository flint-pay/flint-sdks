[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. `due_date`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputdue_date). |
| `invoice_payment_term_id` | Optional | string or null | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. `invoice_payment_term_id`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputinvoice_payment_term_id). |
| `type` | Optional | (string or null) | How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`. `type`: [declared alternatives](../models/InvoicePaymentDuePreviousAttributesInput.md#invoicepaymentduepreviousattributesinput-variant-1type), [declared alternatives](../models/InvoicePaymentDuePreviousAttributesInput.md#invoicepaymentduepreviousattributesinput-variant-2type), [declared alternatives](../models/InvoicePaymentDuePreviousAttributesInput.md#invoicepaymentduepreviousattributesinput-variant-3type). |

### InvoicePaymentDuePreviousAttributesInput variant 1: `type` = `"none"`

anyOf InvoicePaymentDueNonePreviousAttributes.

- Constraints for `type`: Values: `"none"`.

### InvoicePaymentDuePreviousAttributesInput variant 2: `type` = `"date"`

anyOf InvoicePaymentDueDatePreviousAttributes.

- Constraints for `type`: Values: `"date"`.

### InvoicePaymentDuePreviousAttributesInput variant 3: `type` = `"payment_terms"`

anyOf InvoicePaymentDuePaymentTermsPreviousAttributes.

- Constraints for `type`: Values: `"payment_terms"`.

### InvoicePaymentDuePreviousAttributesInput.due_date

Declared alternatives: [InvoicePaymentDueDatePreviousAttributesInput.due_date](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputdue_date).

### InvoicePaymentDuePreviousAttributesInput.invoice_payment_term_id

Declared alternatives: [InvoicePaymentDueDatePreviousAttributesInput.invoice_payment_term_id](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputinvoice_payment_term_id).

### InvoicePaymentDuePreviousAttributesInput variant 1.type

### InvoicePaymentDuePreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoicePaymentDuePreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoicePaymentDuePreviousAttributesInput variant 1.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"none"`.

### InvoicePaymentDuePreviousAttributesInput variant 2.type

### InvoicePaymentDuePreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoicePaymentDuePreviousAttributesInput variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoicePaymentDuePreviousAttributesInput variant 2.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"date"`.

### InvoicePaymentDuePreviousAttributesInput variant 3.type

### InvoicePaymentDuePreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoicePaymentDuePreviousAttributesInput variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoicePaymentDuePreviousAttributesInput variant 3.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"payment_terms"`.

