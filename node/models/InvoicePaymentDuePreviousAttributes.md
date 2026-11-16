[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. `due_date`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesdue_date). |
| `invoice_payment_term_id` | Optional | string or null | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. `invoice_payment_term_id`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesinvoice_payment_term_id). |
| `type` | Optional | (string or null) | How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`. `type`: [declared alternatives](../models/InvoicePaymentDuePreviousAttributes.md#invoicepaymentduepreviousattributes-variant-1type), [declared alternatives](../models/InvoicePaymentDuePreviousAttributes.md#invoicepaymentduepreviousattributes-variant-2type), [declared alternatives](../models/InvoicePaymentDuePreviousAttributes.md#invoicepaymentduepreviousattributes-variant-3type). |

### InvoicePaymentDuePreviousAttributes variant 1: `type` = `"none"`

anyOf InvoicePaymentDueNonePreviousAttributes.

- Constraints for `type`: Values: `"none"`.

### InvoicePaymentDuePreviousAttributes variant 2: `type` = `"date"`

anyOf InvoicePaymentDueDatePreviousAttributes.

- Constraints for `type`: Values: `"date"`.

### InvoicePaymentDuePreviousAttributes variant 3: `type` = `"payment_terms"`

anyOf InvoicePaymentDuePaymentTermsPreviousAttributes.

- Constraints for `type`: Values: `"payment_terms"`.

### InvoicePaymentDuePreviousAttributes.due_date

Declared alternatives: [InvoicePaymentDueDatePreviousAttributes.due_date](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesdue_date).

### InvoicePaymentDuePreviousAttributes.invoice_payment_term_id

Declared alternatives: [InvoicePaymentDueDatePreviousAttributes.invoice_payment_term_id](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesinvoice_payment_term_id).

### InvoicePaymentDuePreviousAttributes variant 1.type

### InvoicePaymentDuePreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoicePaymentDuePreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoicePaymentDuePreviousAttributes variant 1.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"none"`.

### InvoicePaymentDuePreviousAttributes variant 2.type

### InvoicePaymentDuePreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoicePaymentDuePreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoicePaymentDuePreviousAttributes variant 2.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"date"`.

### InvoicePaymentDuePreviousAttributes variant 3.type

### InvoicePaymentDuePreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoicePaymentDuePreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoicePaymentDuePreviousAttributes variant 3.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"payment_terms"`.

