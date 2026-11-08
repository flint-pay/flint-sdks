[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueCreditNoteResult

The issued credit note, its invoice after issue, and the linked allocation or refund when requested.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note` | Required | [CreditNote](../models/CreditNote.md#creditnote) | The issued credit note. Its version is the target of expected_version. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `credit_note`: [field definitions](../models/IssueCreditNoteResult.md#issuecreditnoteresultcredit_note). |
| `credit_note_allocation` | Optional | [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | The linked allocation, present when allocation was requested. Its idempotency_key is the issue request's Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. `credit_note_allocation`: [field definitions](../models/IssueCreditNoteResult.md#issuecreditnoteresultcredit_note_allocation). |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice state after the credit note was issued. A bill issued to a customer. `invoice`: [field definitions](../models/IssueCreditNoteResult.md#issuecreditnoteresultinvoice). |
| `refund` | Optional | [Refund](../models/Refund.md#refund) | The linked refund, present when refund was requested. A pending refund has been accepted but has not completed. Money returned against a collected payment. `refund`: [field definitions](../models/IssueCreditNoteResult.md#issuecreditnoteresultrefund). |

### IssueCreditNoteResult.credit_note

The issued credit note. Its version is the target of expected_version. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### IssueCreditNoteResult.credit_note.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### IssueCreditNoteResult.credit_note.invoice

Field definitions: [CreditNoteResponse.data.invoice](../models/CreditNoteResponse.md#creditnoteresponsedatainvoice).

### IssueCreditNoteResult.credit_note.line_items[]

Field definitions: [CreditNoteResponse.data.line_items[]](../models/CreditNoteResponse.md#creditnoteresponsedataline_items).

### IssueCreditNoteResult.credit_note.seller_tax_identity

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity).

### IssueCreditNoteResult.credit_note.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### IssueCreditNoteResult.credit_note_allocation

The linked allocation, present when allocation was requested. Its idempotency_key is the issue request's Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

Field definitions: [shared fields](CreditNoteAllocationResponse.md#creditnoteallocationresponsedata).

### IssueCreditNoteResult.invoice

The invoice state after the credit note was issued. A bill issued to a customer.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice).

### IssueCreditNoteResult.invoice.collection

Declared alternatives: [CollectInvoiceResponse.data.invoice.collection](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection).

### IssueCreditNoteResult.invoice.customer

Declared alternatives: [CollectInvoiceResponse.data.invoice.customer](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecustomer).

### IssueCreditNoteResult.invoice.late_fees[]

Field definitions: [CollectInvoiceResponse.data.invoice.late_fees[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees).

### IssueCreditNoteResult.invoice.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### IssueCreditNoteResult.invoice.order

Declared alternatives: [CollectInvoiceResponse.data.invoice.order](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceorder).

### IssueCreditNoteResult.invoice.payment_due

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_due](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due).

### IssueCreditNoteResult.invoice.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### IssueCreditNoteResult.invoice.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### IssueCreditNoteResult.invoice.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### IssueCreditNoteResult.invoice.snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot).

### IssueCreditNoteResult.refund

The linked refund, present when refund was requested. A pending refund has been accepted but has not completed. Money returned against a collected payment.

Field definitions: [shared fields](CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds).

### IssueCreditNoteResult.refund.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### IssueCreditNoteResult.refund.line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### IssueCreditNoteResult.refund.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### IssueCreditNoteResult.refund.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### IssueCreditNoteResult.refund.payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### IssueCreditNoteResult.refund.payment_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].payment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds).

### IssueCreditNoteResult.refund.tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### IssueCreditNoteResult.refund.tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### IssueCreditNoteResult.refund.unissued_gift_card_recoveries[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].unissued_gift_card_recoveries[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsunissued_gift_card_recoveries).

