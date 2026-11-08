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

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity).

### CreditNoteAllocationResult.credit_note.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### CreditNoteAllocationResult.credit_note_allocation

The allocation that was created or reversed. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

Field definitions: [shared fields](CreditNoteAllocationResponse.md#creditnoteallocationresponsedata).

### CreditNoteAllocationResult.invoice

The invoice with its recomputed outstanding balance and status. A bill issued to a customer.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice).

### CreditNoteAllocationResult.invoice.collection

Declared alternatives: [CollectInvoiceResponse.data.invoice.collection](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection).

### CreditNoteAllocationResult.invoice.customer

Declared alternatives: [CollectInvoiceResponse.data.invoice.customer](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecustomer).

### CreditNoteAllocationResult.invoice.late_fees[]

Field definitions: [CollectInvoiceResponse.data.invoice.late_fees[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees).

### CreditNoteAllocationResult.invoice.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### CreditNoteAllocationResult.invoice.order

Declared alternatives: [CollectInvoiceResponse.data.invoice.order](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceorder).

### CreditNoteAllocationResult.invoice.payment_due

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_due](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due).

### CreditNoteAllocationResult.invoice.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### CreditNoteAllocationResult.invoice.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### CreditNoteAllocationResult.invoice.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### CreditNoteAllocationResult.invoice.snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot).

