[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceResult

The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice as it stands after this collection request. Send its `version` as `expected_version` on later invoice writes. A bill issued to a customer. `invoice`: [field definitions](../models/CollectInvoiceResult.md#collectinvoiceresultinvoice). |
| `invoice_payment_attempt` | Required | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | The invoice payment attempt this collect request started or reused. A repeat of the same request returns the existing attempt. Read its `status` to follow the charge. An attempt to collect payment for an invoice. `invoice_payment_attempt`: [field definitions](../models/CollectInvoiceResult.md#collectinvoiceresultinvoice_payment_attempt). |

### CollectInvoiceResult.invoice

The invoice as it stands after this collection request. Send its `version` as `expected_version` on later invoice writes. A bill issued to a customer.

Field definitions: [shared fields](InvoiceResponse.md#invoiceresponsedata).

### CollectInvoiceResult.invoice.collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### CollectInvoiceResult.invoice.customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### CollectInvoiceResult.invoice.late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### CollectInvoiceResult.invoice.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### CollectInvoiceResult.invoice.order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### CollectInvoiceResult.invoice.payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### CollectInvoiceResult.invoice.payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### CollectInvoiceResult.invoice.remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### CollectInvoiceResult.invoice.schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### CollectInvoiceResult.invoice.snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

### CollectInvoiceResult.invoice_payment_attempt

The invoice payment attempt this collect request started or reused. A repeat of the same request returns the existing attempt. Read its `status` to follow the charge. An attempt to collect payment for an invoice.

Field definitions: [shared fields](InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedata).

### CollectInvoiceResult.invoice_payment_attempt.last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

