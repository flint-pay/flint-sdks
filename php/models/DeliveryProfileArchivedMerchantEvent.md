[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileArchivedMerchantEvent

The `delivery_profile.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [DeliveryProfileArchivedMerchantEventData](../models/DeliveryProfileArchivedMerchantEventData.md#deliveryprofilearchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryProfileArchivedMerchantEvent.md#deliveryprofilearchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_profile.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryProfileArchivedMerchantEventRequest](../models/DeliveryProfileArchivedMerchantEventRequest.md#deliveryprofilearchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### DeliveryProfileArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`. `object`: [field definitions](../models/DeliveryProfileArchivedMerchantEvent.md#deliveryprofilearchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryProfileArchivedMerchantEvent.md#deliveryprofilearchivedmerchanteventdata-fields-1previous_attributes). |

### DeliveryProfileArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.

Field definitions: [shared fields](DeliveryProfileArchivedMerchantEventData.md#deliveryprofilearchivedmerchanteventdataobject-fields-1).

### DeliveryProfileArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributes).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.configuration

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.created_at](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributescreated_at).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.current_delivery_profile_revision_id

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.current_delivery_profile_revision_id](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributescurrent_delivery_profile_revision_id).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.delivery_profile_id

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.delivery_profile_id](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesdelivery_profile_id).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.is_default

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.is_default](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesis_default).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.name](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesname).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.status](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesstatus).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.updated_at](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesupdated_at).

### DeliveryProfileArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [DeliveryProfileArchivedMerchantEventDataPreviousAttributes.version](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesversion).

