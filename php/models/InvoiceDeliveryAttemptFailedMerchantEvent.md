[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedMerchantEvent

The `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InvoiceDeliveryAttemptFailedMerchantEventData](../models/InvoiceDeliveryAttemptFailedMerchantEventData.md#invoicedeliveryattemptfailedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_delivery_attempt.failed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceDeliveryAttemptFailedMerchantEventRequest](../models/InvoiceDeliveryAttemptFailedMerchantEventRequest.md#invoicedeliveryattemptfailedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1previous_attributes). |

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InvoiceDeliveryAttemptFailedMerchantEventDataObject.md#invoicedeliveryattemptfailedmerchanteventdataobject).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributes).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.cc_emails

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.cc_emails](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescc_emails).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.channel

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.channel](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributeschannel).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.created_at](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescreated_at).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.delivery_type

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.delivery_type](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesdelivery_type).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.failure_reason

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.failure_reason](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesfailure_reason).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.invoice_delivery_attempt_id

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_delivery_attempt_id](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesinvoice_delivery_attempt_id).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_id](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesinvoice_id).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.sent_at

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.sent_at](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributessent_at).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.status](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesstatus).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.suppression_reason

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.suppression_reason](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributessuppression_reason).

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.previous_attributes.to_email

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.to_email](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesto_email).

