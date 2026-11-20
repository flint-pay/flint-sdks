[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedMerchantEvent

The `product.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ProductArchivedMerchantEventData](../models/ProductArchivedMerchantEventData.md#productarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"product.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ProductArchivedMerchantEventRequest](../models/ProductArchivedMerchantEventRequest.md#productarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ProductArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`. `object`: [field definitions](../models/ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1previous_attributes). |

### ProductArchivedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ProductArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.

Field definitions: [shared fields](ProductArchivedMerchantEventData.md#productarchivedmerchanteventdataobject-fields-1).

### ProductArchivedMerchantEvent.data fields 1.object.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### ProductArchivedMerchantEvent.data fields 1.object.default_variant

Field definitions: [ProductResponse.data.default_variant](../models/ProductResponse.md#productresponsedatadefault_variant).

### ProductArchivedMerchantEvent.data fields 1.object.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductArchivedMerchantEvent.data fields 1.object.options[]

Field definitions: [ProductResponse.data.options[]](../models/ProductResponse.md#productresponsedataoptions).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributes).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.active_variant_count

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesactive_variant_count).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.categories

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.categories](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.default_variant

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.default_variant_id

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant_id).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.delivery_configuration_status

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdelivery_configuration_status).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.description](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdescription).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.images

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.is_available_for_sale

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesis_available_for_sale).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.modifier_set_id

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesmodifier_set_id).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.name](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesname).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.option_count

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.option_count](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoption_count).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.options

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.options](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoptions).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.product_id

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.product_id](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesproduct_id).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.product_type

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.product_type](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesproduct_type).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.status](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesstatus).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.variant_count

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.variant_count](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesvariant_count).

### ProductArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

