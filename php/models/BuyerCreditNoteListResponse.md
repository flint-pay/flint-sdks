[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreditNoteListResponse

A page of `BuyerCreditNote` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerCreditNote](../models/BuyerCreditNote.md#buyercreditnote) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerCreditNoteListResponse.md#buyercreditnotelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerCreditNoteListResponse.data[]

The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted.

Field definitions: [shared fields](BuyerCreditNoteResponse.md#buyercreditnoteresponsedata).

### BuyerCreditNoteListResponse.data[].buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### BuyerCreditNoteListResponse.data[].line_items[]

Field definitions: [CreditNoteResponse.data.line_items[]](../models/CreditNoteResponse.md#creditnoteresponsedataline_items).

### BuyerCreditNoteListResponse.data[].seller_tax_identity

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity).

### BuyerCreditNoteListResponse.data[].tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### BuyerCreditNoteListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

