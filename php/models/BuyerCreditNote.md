[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreditNote

The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. |
| `credit_note_id` | Required | string | Unique identifier of the credit note. |
| `credit_note_number` | Required | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `invoice_id` | Required | string | The invoice this credit note corrects. |
| `issued_at` | Required | string | When the credit note was issued. Format: `date-time`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. `line_items[]`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedataline_items). |
| `memo` | Required | string or null | Free text shown on the credit note. Null when none was set. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. |
| `status` | Required | string | issued once it is numbered and frozen, voided once withdrawn. Values: `"issued"`, `"voided"`. |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless its status is voided. Format: `date-time`. |

### BuyerCreditNote.line_items[]

Field definitions: [CreditNoteResponse.data.line_items[]](../models/CreditNoteResponse.md#creditnoteresponsedataline_items).

### BuyerCreditNote.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

