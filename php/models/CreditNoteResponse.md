[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteResponse

A response containing `CreditNote` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreditNote](../models/CreditNote.md#creditnote) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `data`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreditNoteResponse.data

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice, net of reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit available to allocate or refund. Zero on draft and void notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `buyer_tax_identity`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity). |
| `created_at` | Required | string | When the credit note was created. Format: `date-time`. |
| `credit_note_id` | Required | string | Unique identifier of the credit note. |
| `credit_note_number` | Optional | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. null when unset. minLength: `1`. maxLength: `255`. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) | Summary of the source invoice. Returned only with expand=invoice. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. |
| `invoice_id` | Required | string | The invoice this credit note corrects. |
| `issued_at` | Optional | string | When the credit note was issued. Absent on a draft. Format: `date-time`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. |
| `memo` | Required | string or null | Free text shown on the credit note, up to 4096 characters. null when unset. |
| `merchant_id` | Required | string | The merchant that owns the credit note. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `seller_tax_identity`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity). |
| `status` | Required | string | draft while the credit note is editable, issued once it is numbered and frozen, void once retired. Values: `"draft"`, `"issued"`, `"void"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the credit note last changed. Format: `date-time`. |
| `version` | Required | integer | Current credit note version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless it is void. Format: `date-time`. |

### CreditNoteResponse.data.buyer_tax_identity

Identity frozen on the source invoice at issue. Later profile edits do not change this document.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Conditional | string or null | minLength: `1`. maxLength: `255`. |
| `registered_address` | Conditional | [Address](../models/Address.md#address) or null | Replaced as a whole: send every field you want to keep. `registered_address`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1registered_address). |
| `tax_ids` | Conditional | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | maxItems: `20`. `tax_ids[]`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1tax_ids). |

### CreditNoteResponse.data.buyer_tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CreditNoteResponse.data.buyer_tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. 

### CreditNoteResponse.data.buyer_tax_identity variant 1.registered_address

Replaced as a whole: send every field you want to keep.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Conditional | string | City or locality of the address. |
| `country` | Conditional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Conditional | string | Street address, including the building number. |
| `line2` | Conditional | string | Apartment, suite, floor, or other address details. |
| `postal_code` | Conditional | string | Postal or ZIP code of the address. |
| `state` | Conditional | string | State, province, or region of the address. |

### CreditNoteResponse.data.buyer_tax_identity variant 1.registered_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### CreditNoteResponse.data.buyer_tax_identity variant 1.registered_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Replaced as a whole: send every field you want to keep. 

### CreditNoteResponse.data.buyer_tax_identity variant 1.tax_ids[]

A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.

Field definitions: [shared fields](DocumentTaxIDRequestInput.md#documenttaxidrequestinput).

### CreditNoteResponse.data.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

