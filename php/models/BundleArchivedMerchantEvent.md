[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedMerchantEvent

The `bundle.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [BundleArchivedMerchantEventData](../models/BundleArchivedMerchantEventData.md#bundlearchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"bundle.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BundleArchivedMerchantEventRequest](../models/BundleArchivedMerchantEventRequest.md#bundlearchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### BundleArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. `object`: [field definitions](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1previous_attributes). |

### BundleArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.

Field definitions: [shared fields](BundleArchivedMerchantEventData.md#bundlearchivedmerchanteventdataobject-fields-1).

### BundleArchivedMerchantEvent.data fields 1.object.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BundleArchivedMerchantEvent.data fields 1.object.components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BundleArchivedMerchantEvent.data fields 1.object.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### BundleArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributes).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.barcode

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.barcode](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.bundle_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.bundle_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbundle_id).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.categories

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.categories](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.component_count

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.component_count](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponent_count).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.components

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.components](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.delivery_configuration_status

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesdelivery_configuration_status).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.description](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesdescription).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.images

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.is_available_for_sale

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.is_available_for_sale](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesis_available_for_sale).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.modifier_set_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.modifier_set_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmodifier_set_id).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.name](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesname).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.status](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesstatus).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### BundleArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

