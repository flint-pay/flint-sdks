[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResult

The recorded or reversed payment and the updated invoice. expected_invoice_version on create and expected_version on reversal fence the invoice; use the returned invoice version for the next write.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice with balances and supported_actions after this request. A bill issued to a customer. `invoice`: [field definitions](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresultinvoice). |
| `invoice_manual_payment` | Required | [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment) | The offline payment recorded or reversed by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. `invoice_manual_payment`: [field definitions](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresultinvoice_manual_payment). |

### InvoiceManualPaymentResult.invoice

The invoice with balances and supported_actions after this request. A bill issued to a customer.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice).

### InvoiceManualPaymentResult.invoice.collection

Declared alternatives: [CollectInvoiceResponse.data.invoice.collection](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection).

### InvoiceManualPaymentResult.invoice.customer

Declared alternatives: [CollectInvoiceResponse.data.invoice.customer](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecustomer).

### InvoiceManualPaymentResult.invoice.late_fees[]

Field definitions: [CollectInvoiceResponse.data.invoice.late_fees[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees).

### InvoiceManualPaymentResult.invoice.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InvoiceManualPaymentResult.invoice.order

Declared alternatives: [CollectInvoiceResponse.data.invoice.order](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceorder).

### InvoiceManualPaymentResult.invoice.payment_due

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_due](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due).

### InvoiceManualPaymentResult.invoice.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### InvoiceManualPaymentResult.invoice.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### InvoiceManualPaymentResult.invoice.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### InvoiceManualPaymentResult.invoice.snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot).

### InvoiceManualPaymentResult.invoice_manual_payment

The offline payment recorded or reversed by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.

Field definitions: [shared fields](InvoiceManualPaymentResponse.md#invoicemanualpaymentresponsedata).

