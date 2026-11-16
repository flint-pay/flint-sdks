[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentDueDatePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. `due_date`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputdue_date). |
| `invoice_payment_term_id` | Optional | string or null | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. `invoice_payment_term_id`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputinvoice_payment_term_id). |
| `type` | Optional | (string or null) | How the due date was set. Values: `"date"`. `type`: [declared alternatives](../models/InvoicePaymentDueDatePreviousAttributesInput.md#invoicepaymentduedatepreviousattributesinputtype). |

### InvoicePaymentDueDatePreviousAttributesInput.due_date

### InvoicePaymentDueDatePreviousAttributesInput.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type..

- Value shape: string. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: `date`. Example: `"2026-08-02"`. 

### InvoicePaymentDueDatePreviousAttributesInput.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. 

### InvoicePaymentDueDatePreviousAttributesInput.invoice_payment_term_id

### InvoicePaymentDueDatePreviousAttributesInput.invoice_payment_term_id variant 1

anyOf variant 1: The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms..

- Value shape: string. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. 

### InvoicePaymentDueDatePreviousAttributesInput.invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. 

### InvoicePaymentDueDatePreviousAttributesInput.type

### InvoicePaymentDueDatePreviousAttributesInput.type variant 1, 3

anyOf group 1 variant 1: How the due date was set.; anyOf group 2 variant 1.

- Value shape: string. How the due date was set. Values: `"date"`.

### InvoicePaymentDueDatePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the due date was set. 

