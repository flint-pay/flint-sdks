[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNote

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice, net of reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `allocated_money`: [field definitions](../models/CreditNote.md#creditnoteallocated_money). |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `available_money`: [field definitions](../models/CreditNote.md#creditnoteavailable_money). |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. |
| `created_at` | Required | string | When the credit note was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_note_id` | Required | string | Unique identifier of the credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `credit_note_number` | Optional | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) | Summary of the source invoice. Returned only with expand=invoice. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. |
| `invoice_id` | Required | string | The invoice this credit note corrects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `issued_at` | Optional | string | When the credit note was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. |
| `memo` | Required | string or null | Free text shown on the credit note, up to 4096 characters. `null` when unset. |
| `merchant_id` | Required | string | The merchant that owns the credit note. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `pending_refund_money`: [field definitions](../models/CreditNote.md#creditnotepending_refund_money). |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerCreditNote.md#buyercreditnoterefunded_money). |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. |
| `status` | Required | string | draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`. |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerCreditNote.md#buyercreditnotetotal_money). |
| `updated_at` | Required | string | When the credit note last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current credit note version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless its status is voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CreditNote.allocated_money

Credit applied to the invoice, net of reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreditNote.available_money

Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreditNote.pending_refund_money

Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreditNote.refunded_money

Field definitions: [BuyerCreditNote.refunded_money](../models/BuyerCreditNote.md#buyercreditnoterefunded_money).

### CreditNote.total_money

Field definitions: [BuyerCreditNote.total_money](../models/BuyerCreditNote.md#buyercreditnotetotal_money).

