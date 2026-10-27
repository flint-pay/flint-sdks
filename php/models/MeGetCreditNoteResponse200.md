[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeGetCreditNoteResponse200

A response containing `BuyerCreditNote` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCreditNote](../models/BuyerCreditNote.md#buyercreditnote) | The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted. `data`: [field definitions](../models/MeGetCreditNoteResponse200.md#megetcreditnoteresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeGetCreditNoteResponse200.data

The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `buyer_tax_identity`: [declared alternatives](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity). |
| `credit_note_id` | Required | string | Unique identifier of the credit note. |
| `credit_note_number` | Required | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `invoice_id` | Required | string | The invoice this credit note corrects. |
| `issued_at` | Required | string | When the credit note was issued. Format: `date-time`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. |
| `memo` | Required | string or null | Free text shown on the credit note. Null when none was set. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `seller_tax_identity`: [declared alternatives](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity). |
| `status` | Required | string | draft while the credit note is editable, issued once it is numbered and frozen, void once retired. Values: `"issued"`, `"void"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless it is void. Format: `date-time`. |

### MeGetCreditNoteResponse200.data.buyer_tax_identity

Declared alternatives: [CreditNotesCreateResponse201.data.buyer_tax_identity](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity).

### MeGetCreditNoteResponse200.data.seller_tax_identity

Declared alternatives: [CreditNotesCreateResponse201.data.buyer_tax_identity](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity).

