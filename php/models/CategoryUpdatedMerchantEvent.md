[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryUpdatedMerchantEvent

The `category.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CategoryUpdatedMerchantEventData](../models/CategoryUpdatedMerchantEventData.md#categoryupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CategoryUpdatedMerchantEvent.md#categoryupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"category.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CategoryUpdatedMerchantEventRequest](../models/CategoryUpdatedMerchantEventRequest.md#categoryupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CategoryUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CategoryCreatedMerchantEvent.md#categorycreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CategoryUpdatedMerchantEvent.md#categoryupdatedmerchanteventdata-fields-1previous_attributes). |

### CategoryUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### CategoryUpdatedMerchantEvent.data fields 1.object

Field definitions: [CategoryCreatedMerchantEvent.data fields 1.object](../models/CategoryCreatedMerchantEvent.md#categorycreatedmerchanteventdata-fields-1object).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributes).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.assigned_bundle_count

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_bundle_count](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesassigned_bundle_count).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.assigned_product_count

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_product_count](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesassigned_product_count).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.category_id

Declared alternatives: [CategoryReferencePreviousAttributes.category_id](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributescategory_id).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.description](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesdescription).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.handle

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.handle](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributeshandle).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.name](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesname).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.status](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesstatus).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.targeting_reference_count

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.targeting_reference_count](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributestargeting_reference_count).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### CategoryUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.version](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion).

