[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDuePaymentTermsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. `due_date`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesdue_date). |
| `invoice_payment_term_id` | Optional | string or null | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. `invoice_payment_term_id`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesinvoice_payment_term_id). |
| `type` | Optional | (string or null) | How the due date was set. Values: `"payment_terms"`. `type`: [declared alternatives](../models/InvoicePaymentDuePaymentTermsPreviousAttributes.md#invoicepaymentduepaymenttermspreviousattributestype). |

### InvoicePaymentDuePaymentTermsPreviousAttributes.due_date

Declared alternatives: [InvoicePaymentDueDatePreviousAttributes.due_date](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesdue_date).

### InvoicePaymentDuePaymentTermsPreviousAttributes.invoice_payment_term_id

Declared alternatives: [InvoicePaymentDueDatePreviousAttributes.invoice_payment_term_id](../models/InvoicePaymentDueDatePreviousAttributes.md#invoicepaymentduedatepreviousattributesinvoice_payment_term_id).

### InvoicePaymentDuePaymentTermsPreviousAttributes.type

### InvoicePaymentDuePaymentTermsPreviousAttributes.type variant 1, 3

anyOf group 1 variant 1: How the due date was set.; anyOf group 2 variant 1.

- Value shape: string. How the due date was set. Values: `"payment_terms"`.

### InvoicePaymentDuePaymentTermsPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the due date was set. 

