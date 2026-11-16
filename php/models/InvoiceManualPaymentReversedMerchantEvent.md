[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedMerchantEvent

The `invoice_manual_payment.reversed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InvoiceManualPaymentReversedMerchantEventData](../models/InvoiceManualPaymentReversedMerchantEventData.md#invoicemanualpaymentreversedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceManualPaymentReversedMerchantEvent.md#invoicemanualpaymentreversedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_manual_payment.reversed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceManualPaymentReversedMerchantEventRequest](../models/InvoiceManualPaymentReversedMerchantEventRequest.md#invoicemanualpaymentreversedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InvoiceManualPaymentReversedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoiceManualPaymentCreatedMerchantEvent.md#invoicemanualpaymentcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceManualPaymentReversedMerchantEvent.md#invoicemanualpaymentreversedmerchanteventdata-fields-1previous_attributes). |

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.object

Field definitions: [InvoiceManualPaymentCreatedMerchantEvent.data fields 1.object](../models/InvoiceManualPaymentCreatedMerchantEvent.md#invoicemanualpaymentcreatedmerchanteventdata-fields-1object).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributes).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_id](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesinvoice_id).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.invoice_manual_payment_id

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_manual_payment_id](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesinvoice_manual_payment_id).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.note

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.note](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesnote).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.payment_reference

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.payment_reference](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributespayment_reference).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.received_at

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.received_at](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesreceived_at).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.reversal_note

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversal_note](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesreversal_note).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.reversed_at

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversed_at](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesreversed_at).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.status](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesstatus).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.supported_actions](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributessupported_actions).

