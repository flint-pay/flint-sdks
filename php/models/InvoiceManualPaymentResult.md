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

Field definitions: [shared fields](InvoiceResponse.md#invoiceresponsedata).

### InvoiceManualPaymentResult.invoice.collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### InvoiceManualPaymentResult.invoice.customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### InvoiceManualPaymentResult.invoice.late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### InvoiceManualPaymentResult.invoice.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### InvoiceManualPaymentResult.invoice.order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### InvoiceManualPaymentResult.invoice.payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### InvoiceManualPaymentResult.invoice.payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### InvoiceManualPaymentResult.invoice.remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### InvoiceManualPaymentResult.invoice.schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### InvoiceManualPaymentResult.invoice.snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

### InvoiceManualPaymentResult.invoice_manual_payment

The offline payment recorded or reversed by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.

Field definitions: [shared fields](InvoiceManualPaymentResponse.md#invoicemanualpaymentresponsedata).

