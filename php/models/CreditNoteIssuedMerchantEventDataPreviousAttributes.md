[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssuedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Credit applied to the invoice, net of reversed allocations. |
| `available_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. |
| `buyer_tax_identity` | Optional | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. |
| `created_at` | Optional | string or null | When the credit note was created. `created_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescreated_at). |
| `credit_note_id` | Optional | string or null | Unique identifier of the credit note. `credit_note_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescredit_note_id). |
| `credit_note_number` | Optional | string or null | Assigned at issue and stable from then on. Absent while the credit note is a draft. `credit_note_number`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescredit_note_number). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. `null` when unset. `external_reference_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesexternal_reference_id). |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | Summary of the source invoice. Returned only with expand=invoice. |
| `invoice_id` | Optional | string or null | The invoice this credit note corrects. `invoice_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesinvoice_id). |
| `issued_at` | Optional | string or null | When the credit note was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesissued_at). |
| `latest_refund_status` | Optional | string or null | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `latest_refund_status`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributeslatest_refund_status). |
| `line_items` | Optional | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) or null | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. `line_items`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesline_items). |
| `memo` | Optional | string or null or null | Free text shown on the credit note, up to 4096 characters. `null` when unset. `memo`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesmemo). |
| `merchant_id` | Optional | string or null | The merchant that owns the credit note. `merchant_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesmerchant_id). |
| `pending_refund_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. |
| `reason` | Optional | string or null | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. `reason`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesreason). |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Credit consumed by linked refunds that succeeded. |
| `seller_tax_identity` | Optional | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. |
| `status` | Optional | string or null | draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`. `status`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`. `supported_actions`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributessupported_actions). |
| `tax_currency_conversions` | Optional | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) or null | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. `tax_currency_conversions`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions). |
| `total_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The face value of the credit note, the sum of its lines. |
| `updated_at` | Optional | string or null | When the credit note last changed. `updated_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Current credit note version. Send this as expected_version when updating the draft. `version`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesversion). |
| `voided_at` | Optional | string or null | When the credit note was voided. Absent unless its status is voided. `voided_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesvoided_at). |

### CreditNoteIssuedMerchantEventDataPreviousAttributes.created_at

### CreditNoteIssuedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the credit note was created..

- Value shape: string. When the credit note was created. When the credit note was created. Format: `date-time`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note was created. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_id variant 1

anyOf variant 1: Unique identifier of the credit note..

- Value shape: string. Unique identifier of the credit note. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the credit note. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_number

### CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_number variant 1

anyOf variant 1: Assigned at issue and stable from then on. Absent while the credit note is a draft..

- Value shape: string. Assigned at issue and stable from then on. Absent while the credit note is a draft. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_number variant 2

anyOf variant 2.

- Value shape: null. Assigned at issue and stable from then on. Absent while the credit note is a draft. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.external_reference_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when unset..

- Value shape: (string or null). Caller-owned identifier for this resource in an external system. `null` when unset. Caller-owned identifier for this resource in an external system. `null` when unset. minLength: `1`. maxLength: `255`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when unset. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: The invoice this credit note corrects..

- Value shape: string. The invoice this credit note corrects. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this credit note corrects. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.issued_at

### CreditNoteIssuedMerchantEventDataPreviousAttributes.issued_at variant 1

anyOf variant 1: When the credit note was issued. Absent on a draft..

- Value shape: string. When the credit note was issued. Absent on a draft. When the credit note was issued. Absent on a draft. Format: `date-time`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.issued_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note was issued. Absent on a draft. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.latest_refund_status

### CreditNoteIssuedMerchantEventDataPreviousAttributes.latest_refund_status variant 1

anyOf variant 1: Status of the most recent refund linked to this credit note. Absent when no refund has been requested..

- Value shape: string. Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.latest_refund_status variant 2

anyOf variant 2.

- Value shape: null. Status of the most recent refund linked to this credit note. Absent when no refund has been requested. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit..

- Value shape: Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem). Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [CreditNoteResponse.data.line_items[]](../models/CreditNoteResponse.md#creditnoteresponsedataline_items).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.memo

### CreditNoteIssuedMerchantEventDataPreviousAttributes.memo variant 1

anyOf variant 1: Free text shown on the credit note, up to 4096 characters. `null` when unset..

- Value shape: (string or null). Free text shown on the credit note, up to 4096 characters. `null` when unset. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.memo variant 2

anyOf variant 2.

- Value shape: null. Free text shown on the credit note, up to 4096 characters. `null` when unset. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.merchant_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: The merchant that owns the credit note..

- Value shape: string. The merchant that owns the credit note. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant that owns the credit note. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.reason

### CreditNoteIssuedMerchantEventDataPreviousAttributes.reason variant 1

anyOf variant 1: Why the invoice is being corrected. Shown on the credit note document..

- Value shape: string. Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the invoice is being corrected. Shown on the credit note document. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.status

### CreditNoteIssuedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn..

- Value shape: string. draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.supported_actions

### CreditNoteIssuedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1

anyOf variant 1: The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures..

- Value shape: Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion). The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 2

anyOf variant 2.

- Value shape: null. The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1

Field definitions: [CreditNoteResponse.data.tax_currency_conversions[]](../models/CreditNoteResponse.md#creditnoteresponsedatatax_currency_conversions).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.updated_at

### CreditNoteIssuedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the credit note last changed..

- Value shape: string. When the credit note last changed. When the credit note last changed. Format: `date-time`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note last changed. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.version

### CreditNoteIssuedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Current credit note version. Send this as expected_version when updating the draft..

- Value shape: integer. Current credit note version. Send this as expected_version when updating the draft. Current credit note version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current credit note version. Send this as expected_version when updating the draft. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.voided_at

### CreditNoteIssuedMerchantEventDataPreviousAttributes.voided_at variant 1

anyOf variant 1: When the credit note was voided. Absent unless its status is voided..

- Value shape: string. When the credit note was voided. Absent unless its status is voided. When the credit note was voided. Absent unless its status is voided. Format: `date-time`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.voided_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note was voided. Absent unless its status is voided. 

