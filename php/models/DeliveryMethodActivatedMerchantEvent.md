[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedMerchantEvent

The `delivery_method.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [DeliveryMethodActivatedMerchantEventData](../models/DeliveryMethodActivatedMerchantEventData.md#deliverymethodactivatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_method.activated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryMethodActivatedMerchantEventRequest](../models/DeliveryMethodActivatedMerchantEventRequest.md#deliverymethodactivatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### DeliveryMethodActivatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1previous_attributes). |

### DeliveryMethodActivatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliveryMethod.md#deliverymethod).

### DeliveryMethodActivatedMerchantEvent.data fields 1.object.configuration

Field definitions: [DeliveryMethodResponse.data.configuration](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfiguration).

### DeliveryMethodActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributes).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.configuration

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.created_at](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributescreated_at).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.current_delivery_method_revision_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.current_delivery_method_revision_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributescurrent_delivery_method_revision_id).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.delivery_method_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_method_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_method_id).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.delivery_revocation_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_revocation_id).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.description](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdescription).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.display_position

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.display_position](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdisplay_position).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.name](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesname).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.recommendation_priority

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.recommendation_priority](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesrecommendation_priority).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.status](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesstatus).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.subscription_counts

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributessubscription_counts).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.type](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributestype).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.updated_at](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesupdated_at).

### DeliveryMethodActivatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.version](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesversion).

