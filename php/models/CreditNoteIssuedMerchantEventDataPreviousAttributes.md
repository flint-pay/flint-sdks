[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssuedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit applied to the invoice, net of reversed allocations. |
| `available_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. |
| `buyer_tax_identity` | Optional | Alternative shapes (see declared variants) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. `buyer_tax_identity`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity). |
| `created_at` | Optional | string or null | When the credit note was created. `created_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescreated_at). |
| `credit_note_id` | Optional | string or null | Unique identifier of the credit note. `credit_note_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescredit_note_id). |
| `credit_note_number` | Optional | string or null | Assigned at issue and stable from then on. Absent while the credit note is a draft. `credit_note_number`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescredit_note_number). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. `null` when unset. `external_reference_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesexternal_reference_id). |
| `invoice` | Optional | Alternative shapes (see declared variants) | Summary of the source invoice. Returned only with expand=invoice. `invoice`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesinvoice). |
| `invoice_id` | Optional | string or null | The invoice this credit note corrects. `invoice_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesinvoice_id). |
| `issued_at` | Optional | string or null | When the credit note was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesissued_at). |
| `latest_refund_status` | Optional | string or null | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `latest_refund_status`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributeslatest_refund_status). |
| `line_items` | Optional | Array of [CreditNoteLineItemPreviousAttributes](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributes) or null | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. `line_items`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesline_items). |
| `memo` | Optional | string or null or null | Free text shown on the credit note, up to 4096 characters. `null` when unset. `memo`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesmemo). |
| `merchant_id` | Optional | string or null | The merchant that owns the credit note. `merchant_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesmerchant_id). |
| `pending_refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. |
| `reason` | Optional | string or null | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. `reason`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesreason). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit consumed by linked refunds that succeeded. |
| `seller_tax_identity` | Optional | Alternative shapes (see declared variants) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. `seller_tax_identity`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesseller_tax_identity). |
| `status` | Optional | string or null | draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`. `status`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`. `supported_actions`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributessupported_actions). |
| `tax_currency_conversions` | Optional | Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes) or null | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. `tax_currency_conversions`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The face value of the credit note, the sum of its lines. |
| `updated_at` | Optional | string or null | When the credit note last changed. `updated_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Current credit note version. Send this as expected_version when updating the draft. `version`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesversion). |
| `voided_at` | Optional | string or null | When the credit note was voided. Absent unless its status is voided. `voided_at`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesvoided_at). |

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity

Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Conditional | string or null or null | The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. `legal_name`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1legal_name). |
| `registered_address` | Conditional | Alternative shapes (see declared variants) or null | The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. `registered_address`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1registered_address). |
| `tax_ids` | Conditional | Array of object or null | Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. `tax_ids`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids). |

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1

anyOf variant 1: Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes.; anyOf TaxIdentityPreviousAttributes.

- Optional: `legal_name`, `registered_address`, `tax_ids`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 2, 3

anyOf variant 1: Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes.; anyOf variant 2; anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.legal_name

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.legal_name variant 1

anyOf variant 1: The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set..

- Value shape: (string or null). The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: `1`. maxLength: `255`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.legal_name variant 2

anyOf variant 2.

- Value shape: null. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address

The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1

anyOf variant 1: The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set.; anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 2, 3

anyOf variant 1: The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set.; anyOf variant 2; anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1

anyOf variant 1: Tax IDs printed on invoices and credit notes, in display order. Empty when none are set..

- Value shape: Array of object. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: `20`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 2

anyOf variant 2.

- Value shape: null. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Two-letter ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids-variant-1-fields-1country). |
| `document_tax_id` | Optional | string or null | Server-generated identity of an existing entry. Omit when adding an entry. `document_tax_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids-variant-1-fields-1document_tax_id). |
| `identifier_type` | Optional | string or null | Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. `identifier_type`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids-variant-1-fields-1identifier_type). |
| `region` | Optional | string or null | State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. `region`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids-variant-1-fields-1region). |
| `value` | Optional | string or null | Full identifier printed on documents. Not verified by Flint. `value`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids-variant-1-fields-1value). |

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.country

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.country variant 1

anyOf variant 1: Two-letter ISO 3166-1 alpha-2 country code..

- Value shape: string. Two-letter ISO 3166-1 alpha-2 country code. Two-letter ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.country variant 2

anyOf variant 2.

- Value shape: null. Two-letter ISO 3166-1 alpha-2 country code. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.document_tax_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.document_tax_id variant 1

anyOf variant 1: Server-generated identity of an existing entry. Omit when adding an entry..

- Value shape: string. Server-generated identity of an existing entry. Omit when adding an entry. Server-generated identity of an existing entry. Omit when adding an entry. minLength: `1`. pattern: `^dti_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dti_01KEZF7C00NS1FDK30F1BE6HPH"`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.document_tax_id variant 2

anyOf variant 2.

- Value shape: null. Server-generated identity of an existing entry. Omit when adding an entry. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.identifier_type

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.identifier_type variant 1

anyOf variant 1: Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary..

- Value shape: string. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: `1`. maxLength: `64`. pattern: `^[a-z][a-z0-9_]*$`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.identifier_type variant 2

anyOf variant 2.

- Value shape: null. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.region

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.region variant 1

anyOf variant 1: State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country..

- Value shape: string. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. minLength: `1`. maxLength: `64`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.region variant 2

anyOf variant 2.

- Value shape: null. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.value

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.value variant 1

anyOf variant 1: Full identifier printed on documents. Not verified by Flint..

- Value shape: string. Full identifier printed on documents. Not verified by Flint. Full identifier printed on documents. Not verified by Flint. minLength: `1`. maxLength: `255`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids variant 1.[] fields 1.value variant 2

anyOf variant 2.

- Value shape: null. Full identifier printed on documents. Not verified by Flint. 

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

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice

Summary of the source invoice. Returned only with expand=invoice.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1

anyOf ExpandedInvoiceSummaryPreviousAttributes.

- Optional: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 2

anyOf variant 2.

- Undeclared: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Summary of the source invoice. Returned only with expand=invoice. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1collection_block_status).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.created_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.created_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1created_at).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.customer_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.customer_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1customer_id).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.due_date

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.due_date](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1due_date).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1invoice_id).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_number

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_number](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1invoice_number).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1is_overdue).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.order_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1order_id).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.pricing_amounts

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.pricing_amounts](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1pricing_amounts).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1refund_status).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.settlement_amounts

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.settlement_amounts](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1settlement_amounts).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1status).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1supported_actions).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice variant 1.updated_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.updated_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1updated_at).

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

- Value shape: Array of [CreditNoteLineItemPreviousAttributes](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributes). Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Optional | object and Alternative shapes (see declared variants) or null | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. `correction`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection). |
| `credit_note_line_item_id` | Optional | string or null | Unique identifier of the credit note line item. `credit_note_line_item_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesline_items-variant-1-fields-1credit_note_line_item_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. |
| `invoice_line_item_id` | Optional | string or null | The invoice snapshot line this corrects. `invoice_line_item_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesline_items-variant-1-fields-1invoice_line_item_id). |
| `name` | Optional | string or null | Label of the credited invoice line. `name`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesname). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. |

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.correction

Declared alternatives: [CreditNoteLineItemPreviousAttributes.correction](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.credit_note_line_item_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.credit_note_line_item_id variant 1

anyOf variant 1: Unique identifier of the credit note line item..

- Value shape: string. Unique identifier of the credit note line item. Unique identifier of the credit note line item. Example: `"cnli_01KEZF7C006N101PGMWKNHFD1J"`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.credit_note_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the credit note line item. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.invoice_line_item_id

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.invoice_line_item_id variant 1

anyOf variant 1: The invoice snapshot line this corrects..

- Value shape: string. The invoice snapshot line this corrects. The invoice snapshot line this corrects. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The invoice snapshot line this corrects. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [CreditNoteLineItemPreviousAttributes.name](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesname).

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

### CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity

Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured.

Field definitions: [shared fields](#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity variant 1

anyOf variant 1: Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured.; anyOf TaxIdentityPreviousAttributes.

- Optional: `legal_name`, `registered_address`, `tax_ids`.

### CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity variant 2, 3

anyOf variant 1: Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured.; anyOf variant 2; anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity variant 1.legal_name

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.legal_name](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1legal_name).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity variant 1.registered_address

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1registered_address).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity variant 1.tax_ids

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids).

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

- Value shape: Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes). The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 2

anyOf variant 2.

- Value shape: null. The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. `currency`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions-variant-1-fields-1currency). |
| `exchange_rate` | Optional | number or null | Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. `exchange_rate`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesexchange_rate). |
| `rate_date` | Optional | string or null | The ECB reference day, or the first day of the month an HMRC rate covers. `rate_date`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions-variant-1-fields-1rate_date). |
| `rate_source` | Optional | string or null | Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`. `rate_source`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesrate_source). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. |
| `taxable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the VAT was charged on, converted the same way. |

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.currency

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.currency variant 1

anyOf variant 1: ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK..

- Value shape: string. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.exchange_rate

Declared alternatives: [TaxCurrencyConversionPreviousAttributes.exchange_rate](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesexchange_rate).

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.rate_date

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.rate_date variant 1

anyOf variant 1: The ECB reference day, or the first day of the month an HMRC rate covers..

- Value shape: string. The ECB reference day, or the first day of the month an HMRC rate covers. The ECB reference day, or the first day of the month an HMRC rate covers. Format: `date`. Example: `"2026-08-02"`. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.rate_date variant 2

anyOf variant 2.

- Value shape: null. The ECB reference day, or the first day of the month an HMRC rate covers. 

### CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1.rate_source

Declared alternatives: [TaxCurrencyConversionPreviousAttributes.rate_source](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesrate_source).

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

