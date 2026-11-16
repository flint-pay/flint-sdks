[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssuedInstalledMerchantsEventInput

The `credit_note.issued` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"credit_note.issued"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CreditNoteIssuedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CreditNoteCreatedInstalledMerchantsEventInput.md#creditnotecreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributes). |

### CreditNoteIssuedInstalledMerchantsEventInput.data.object

Field definitions: [CreditNoteCreatedInstalledMerchantsEventInput.data.object](../models/CreditNoteCreatedInstalledMerchantsEventInput.md#creditnotecreatedinstalledmerchantseventinputdataobject).

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit applied to the invoice, net of reversed allocations. |
| `available_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. |
| `buyer_tax_identity` | Optional | [TaxIdentityPreviousAttributesInput](../models/TaxIdentityPreviousAttributesInput.md#taxidentitypreviousattributesinput) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. |
| `created_at` | Optional | string or null | When the credit note was created. `created_at`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `credit_note_id` | Optional | string or null | Unique identifier of the credit note. `credit_note_id`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributescredit_note_id). |
| `credit_note_number` | Optional | string or null | Assigned at issue and stable from then on. Absent while the credit note is a draft. `credit_note_number`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributescredit_note_number). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `null` when unset. `external_reference_id`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `invoice` | Optional | [ExpandedInvoiceSummaryPreviousAttributesInput](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinput) or null | Summary of the source invoice. Returned only with expand=invoice. |
| `invoice_id` | Optional | string or null | The invoice this credit note corrects. `invoice_id`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `issued_at` | Optional | string or null | When the credit note was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesissued_at). |
| `latest_refund_status` | Optional | string or null | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `latest_refund_status`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributeslatest_refund_status). |
| `line_items` | Optional | Array of [CreditNoteLineItemPreviousAttributesInput](../models/CreditNoteLineItemPreviousAttributesInput.md#creditnotelineitempreviousattributesinput) or null | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. `line_items`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `memo` | Optional | string or null | Free text shown on the credit note, up to 4096 characters. `null` when unset. `memo`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesmemo). |
| `merchant_id` | Optional | string or null | The merchant that owns the credit note. `merchant_id`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `pending_refund_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. |
| `reason` | Optional | string or null | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. `reason`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesreason). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit consumed by linked refunds that succeeded. |
| `seller_tax_identity` | Optional | [TaxIdentityPreviousAttributesInput](../models/TaxIdentityPreviousAttributesInput.md#taxidentitypreviousattributesinput) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. |
| `status` | Optional | string or null | draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`. `status`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`. `supported_actions`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `tax_currency_conversions` | Optional | Array of [TaxCurrencyConversionPreviousAttributesInput](../models/TaxCurrencyConversionPreviousAttributesInput.md#taxcurrencyconversionpreviousattributesinput) or null | The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. `tax_currency_conversions`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributestax_currency_conversions). |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The face value of the credit note, the sum of its lines. |
| `updated_at` | Optional | string or null | When the credit note last changed. `updated_at`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Current credit note version. Send this as expected_version when updating the draft. `version`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesversion). |
| `voided_at` | Optional | string or null | When the credit note was voided. Absent unless its status is voided. `voided_at`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesvoided_at). |

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.created_at

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the credit note was created..

- Value shape: string. When the credit note was created. When the credit note was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note was created. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id variant 1

anyOf variant 1: Unique identifier of the credit note..

- Value shape: string. Unique identifier of the credit note. Unique identifier of the credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the credit note. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.credit_note_number

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.credit_note_number variant 1

anyOf variant 1: Assigned at issue and stable from then on. Absent while the credit note is a draft..

- Value shape: string. Assigned at issue and stable from then on. Absent while the credit note is a draft. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.credit_note_number variant 2

anyOf variant 2.

- Value shape: null. Assigned at issue and stable from then on. Absent while the credit note is a draft. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when unset..

- Value shape: string. Caller-owned identifier for this resource in an external system. `null` when unset. Caller-owned identifier for this resource in an external system. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when unset. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice this credit note corrects..

- Value shape: string. The invoice this credit note corrects. The invoice this credit note corrects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this credit note corrects. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.issued_at

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.issued_at variant 1

anyOf variant 1: When the credit note was issued. Absent on a draft..

- Value shape: string. When the credit note was issued. Absent on a draft. When the credit note was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.issued_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note was issued. Absent on a draft. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.latest_refund_status

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.latest_refund_status variant 1

anyOf variant 1: Status of the most recent refund linked to this credit note. Absent when no refund has been requested..

- Value shape: string. Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`.

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.latest_refund_status variant 2

anyOf variant 2.

- Value shape: null. Status of the most recent refund linked to this credit note. Absent when no refund has been requested. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.line_items

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit..

- Value shape: Array of [CreditNoteLineItemPreviousAttributesInput](../models/CreditNoteLineItemPreviousAttributesInput.md#creditnotelineitempreviousattributesinput). Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.memo

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.memo variant 1

anyOf variant 1: Free text shown on the credit note, up to 4096 characters. `null` when unset..

- Value shape: string. Free text shown on the credit note, up to 4096 characters. `null` when unset. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.memo variant 2

anyOf variant 2.

- Value shape: null. Free text shown on the credit note, up to 4096 characters. `null` when unset. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: The merchant that owns the credit note..

- Value shape: string. The merchant that owns the credit note. The merchant that owns the credit note. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant that owns the credit note. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.reason

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.reason variant 1

anyOf variant 1: Why the invoice is being corrected. Shown on the credit note document..

- Value shape: string. Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`.

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the invoice is being corrected. Shown on the credit note document. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.status

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn..

- Value shape: string. draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Values: `"draft"`, `"issued"`, `"voided"`.

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"issue"`, `"void"`.

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.tax_currency_conversions

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.tax_currency_conversions variant 1

anyOf variant 1: The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures..

- Value shape: Array of [TaxCurrencyConversionPreviousAttributesInput](../models/TaxCurrencyConversionPreviousAttributesInput.md#taxcurrencyconversionpreviousattributesinput). The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.tax_currency_conversions variant 2

anyOf variant 2.

- Value shape: null. The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the credit note last changed..

- Value shape: string. When the credit note last changed. When the credit note last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note last changed. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.version

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Current credit note version. Send this as expected_version when updating the draft..

- Value shape: integer. Current credit note version. Send this as expected_version when updating the draft. Current credit note version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current credit note version. Send this as expected_version when updating the draft. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.voided_at

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.voided_at variant 1

anyOf variant 1: When the credit note was voided. Absent unless its status is voided..

- Value shape: string. When the credit note was voided. Absent unless its status is voided. When the credit note was voided. Absent unless its status is voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.voided_at variant 2

anyOf variant 2.

- Value shape: null. When the credit note was voided. Absent unless its status is voided. 

### CreditNoteIssuedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

