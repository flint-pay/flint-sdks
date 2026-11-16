[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssuedMerchantEvent

The `credit_note.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CreditNoteIssuedMerchantEventData](../models/CreditNoteIssuedMerchantEventData.md#creditnoteissuedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CreditNoteIssuedMerchantEvent.md#creditnoteissuedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"credit_note.issued"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteIssuedMerchantEventRequest](../models/CreditNoteIssuedMerchantEventRequest.md#creditnoteissuedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CreditNoteIssuedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CreditNoteIssuedMerchantEvent.md#creditnoteissuedmerchanteventdata-fields-1previous_attributes). |

### CreditNoteIssuedMerchantEvent.data fields 1.object

Field definitions: [CreditNoteCreatedMerchantEvent.data fields 1.object](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1object).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributes).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.created_at](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescreated_at).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.credit_note_id

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_id](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescredit_note_id).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.credit_note_number

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.credit_note_number](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributescredit_note_number).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.external_reference_id](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesexternal_reference_id).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.invoice_id](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesinvoice_id).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.issued_at

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.issued_at](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesissued_at).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.latest_refund_status

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.latest_refund_status](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributeslatest_refund_status).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.line_items](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesline_items).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.memo

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.memo](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesmemo).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.merchant_id](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesmerchant_id).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.reason

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.reason](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesreason).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.status](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesstatus).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.supported_actions](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributessupported_actions).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.tax_currency_conversions

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.updated_at](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesupdated_at).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.version](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesversion).

### CreditNoteIssuedMerchantEvent.data fields 1.previous_attributes.voided_at

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.voided_at](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesvoided_at).

