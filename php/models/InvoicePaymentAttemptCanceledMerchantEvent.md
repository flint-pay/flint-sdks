[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptCanceledMerchantEvent

The `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InvoicePaymentAttemptCanceledMerchantEventData](../models/InvoicePaymentAttemptCanceledMerchantEventData.md#invoicepaymentattemptcanceledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_payment_attempt.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoicePaymentAttemptCanceledMerchantEventRequest](../models/InvoicePaymentAttemptCanceledMerchantEventRequest.md#invoicepaymentattemptcanceledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1previous_attributes). |

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InvoicePaymentAttempt.md#invoicepaymentattempt).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.object.last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributes).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.canceled_at](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributescanceled_at).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.cancellation_requested_at

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.cancellation_requested_at](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributescancellation_requested_at).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.checkout_session_id

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.checkout_session_id](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributescheckout_session_id).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.expires_at](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesexpires_at).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_id](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesinvoice_id).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.invoice_payment_attempt_id

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_payment_attempt_id](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesinvoice_payment_attempt_id).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.invoice_schedule_entry_id

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesinvoice_schedule_entry_id).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.payment_intent_id](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributespayment_intent_id).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.rail

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.rail](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesrail).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.settled_at

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.settled_at](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributessettled_at).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.started_at

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.created_at](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescreated_at).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.status](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesstatus).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributessupported_actions).

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.updated_at](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesupdated_at).

