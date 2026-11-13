[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteResponse

A response containing `CreditNote` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreditNote](../models/CreditNote.md#creditnote) | Resource, collection, or operation result returned by this request. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `data`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreditNoteResponse.data

Resource, collection, or operation result returned by this request. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice, net of reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. `buyer_tax_identity`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity). |
| `created_at` | Required | string | When the credit note was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_note_id` | Required | string | Unique identifier of the credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `credit_note_number` | Optional | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) | Summary of the source invoice. Returned only with expand=invoice. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. `invoice`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedatainvoice). |
| `invoice_id` | Required | string | The invoice this credit note corrects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `issued_at` | Optional | string | When the credit note was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. `line_items[]`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedataline_items). |
| `memo` | Required | string or null | Free text shown on the credit note, up to 4096 characters. `null` when unset. |
| `merchant_id` | Required | string | The merchant that owns the credit note. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. `seller_tax_identity`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity). |
| `status` | Required | string | draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`. |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the credit note last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current credit note version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless its status is voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CreditNoteResponse.data.buyer_tax_identity

Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity).

### CreditNoteResponse.data.buyer_tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CreditNoteResponse.data.buyer_tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. 

### CreditNoteResponse.data.buyer_tax_identity variant 1.registered_address

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address).

### CreditNoteResponse.data.buyer_tax_identity variant 1.tax_ids[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids).

### CreditNoteResponse.data.invoice

Summary of the source invoice. Returned only with expand=invoice. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_block_status` | Optional | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `created_at` | Optional | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer billed by the invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `invoice_id` | Required | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Absent on a draft. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. |
| `order_id` | Optional | string | The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0 on paid, credited, uncollectible, and voided invoices, and equal to total_money on a draft. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refund_status` | Optional | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The invoice document total, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money on the full invoice. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CreditNoteResponse.data.line_items[]

One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Required | object and Alternative shapes (see declared variants) | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`. `correction`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedataline_itemscorrection). |
| `credit_note_line_item_id` | Required | string | Unique identifier of the credit note line item. Example: `"cnli_01KEZF7C006N101PGMWKNHFD1J"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_line_item_id` | Required | string | The invoice snapshot line this corrects. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. |
| `name` | Required | string | Label of the credited invoice line. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CreditNoteResponse.data.line_items[].correction

The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `quantity` | Conditional | integer | Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Format: `int64`. |
| `type` | Required | string | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`. |

### CreditNoteResponse.data.line_items[].correction variant 1: `type` = `"quantity"`

oneOf with type: "quantity": The `quantity` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`amount_money`)).
- Required: `quantity`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"quantity"`.

### CreditNoteResponse.data.line_items[].correction variant 2: `type` = `"amount"`

oneOf with type: "amount": The `amount` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`quantity`)).
- Required: `amount_money`.
- Optional: `quantity`.
- Constraints for `type`: Values: `"amount"`.

### CreditNoteResponse.data.seller_tax_identity

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity).

### CreditNoteResponse.data.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### CreditNoteResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

