[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationResult

The allocation, the credit note with its new available_money, and the recomputed invoice.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note` | Required | [CreditNote](../models/CreditNote.md#creditnote) | The credit note with its recomputed available_money and allocated_money. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `credit_note`: [field definitions](../models/CreditNoteAllocationResult.md#creditnoteallocationresultcredit_note). |
| `credit_note_allocation` | Required | [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | The allocation that was created or reversed. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. `credit_note_allocation`: [field definitions](../models/CreditNoteAllocationResult.md#creditnoteallocationresultcredit_note_allocation). |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice with its recomputed outstanding balance and status. A bill issued to a customer. `invoice`: [field definitions](../models/CreditNoteAllocationResult.md#creditnoteallocationresultinvoice). |

### CreditNoteAllocationResult.credit_note

The credit note with its recomputed available_money and allocated_money. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteAllocationResult.credit_note.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteAllocationResult.credit_note.invoice

Field definitions: [CreditNoteResponse.data.invoice](../models/CreditNoteResponse.md#creditnoteresponsedatainvoice).

### CreditNoteAllocationResult.credit_note.line_items[]

Field definitions: [CreditNoteResponse.data.line_items[]](../models/CreditNoteResponse.md#creditnoteresponsedataline_items).

### CreditNoteAllocationResult.credit_note.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.seller_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedataseller_tax_identity).

### CreditNoteAllocationResult.credit_note.tax_currency_conversions[]

Field definitions: [CreditNoteResponse.data.tax_currency_conversions[]](../models/CreditNoteResponse.md#creditnoteresponsedatatax_currency_conversions).

### CreditNoteAllocationResult.credit_note_allocation

The allocation that was created or reversed. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

Field definitions: [shared fields](CreditNoteAllocationResponse.md#creditnoteallocationresponsedata).

### CreditNoteAllocationResult.invoice

The invoice with its recomputed outstanding balance and status. A bill issued to a customer.

Field definitions: [shared fields](InvoiceResponse.md#invoiceresponsedata).

### CreditNoteAllocationResult.invoice.collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### CreditNoteAllocationResult.invoice.customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### CreditNoteAllocationResult.invoice.late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### CreditNoteAllocationResult.invoice.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### CreditNoteAllocationResult.invoice.order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### CreditNoteAllocationResult.invoice.payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### CreditNoteAllocationResult.invoice.payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### CreditNoteAllocationResult.invoice.platform_fee_rule

Field definitions: [InvoiceResponse.data.platform_fee_rule](../models/InvoiceResponse.md#invoiceresponsedataplatform_fee_rule).

### CreditNoteAllocationResult.invoice.remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### CreditNoteAllocationResult.invoice.schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### CreditNoteAllocationResult.invoice.snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

