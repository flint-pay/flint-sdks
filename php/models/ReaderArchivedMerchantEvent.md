[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderArchivedMerchantEvent

The `reader.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReaderArchivedMerchantEventData](../models/ReaderArchivedMerchantEventData.md#readerarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReaderArchivedMerchantEvent.md#readerarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"reader.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReaderArchivedMerchantEventRequest](../models/ReaderArchivedMerchantEventRequest.md#readerarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReaderArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`. `object`: [field definitions](../models/ReaderArchivedMerchantEvent.md#readerarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReaderArchivedMerchantEvent.md#readerarchivedmerchanteventdata-fields-1previous_attributes). |

### ReaderArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`.

Field definitions: [shared fields](ReaderArchivedMerchantEventData.md#readerarchivedmerchanteventdataobject-fields-1).

### ReaderArchivedMerchantEvent.data fields 1.object.connectivity

Field definitions: [ReaderResponse.data.connectivity](../models/ReaderResponse.md#readerresponsedataconnectivity).

### ReaderArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [ReaderResponse.data.metadata](../models/ReaderResponse.md#readerresponsedatametadata).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributes).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.created_at](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributescreated_at).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.device_id

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.device_id](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesdevice_id).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.is_simulated

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.is_simulated](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesis_simulated).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.location_id

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.location_id](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributeslocation_id).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.metadata](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesmetadata).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.model

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.model](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesmodel).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.name](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesname).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.reader_id

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.reader_id](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesreader_id).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.serial_number

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.serial_number](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesserial_number).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.status](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesstatus).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.type](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributestype).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ReaderArchivedMerchantEventDataPreviousAttributes.updated_at](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesupdated_at).

### ReaderArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

