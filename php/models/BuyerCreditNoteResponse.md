[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreditNoteResponse

A response containing `BuyerCreditNote` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCreditNote](../models/BuyerCreditNote.md#buyercreditnote) | Resource, collection, or operation result returned by this request. The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted. `data`: [field definitions](../models/BuyerCreditNoteResponse.md#buyercreditnoteresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerCreditNoteResponse.data

Resource, collection, or operation result returned by this request. The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. `buyer_tax_identity`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity). |
| `credit_note_id` | Required | string | Unique identifier of the credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `credit_note_number` | Required | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `invoice_id` | Required | string | The invoice this credit note corrects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `issued_at` | Required | string | When the credit note was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. `line_items[]`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedataline_items). |
| `memo` | Required | string or null | Free text shown on the credit note. Null when none was set. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. `seller_tax_identity`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity). |
| `status` | Required | string | issued once it is numbered and frozen, voided once withdrawn. Values: `"issued"`, `"voided"`. |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless its status is voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerCreditNoteResponse.data.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### BuyerCreditNoteResponse.data.line_items[]

Field definitions: [CreditNoteResponse.data.line_items[]](../models/CreditNoteResponse.md#creditnoteresponsedataline_items).

### BuyerCreditNoteResponse.data.seller_tax_identity

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity).

### BuyerCreditNoteResponse.data.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### BuyerCreditNoteResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

