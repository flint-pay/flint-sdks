[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupArchivedMerchantEvent

The `modifier_group.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ModifierGroupArchivedMerchantEventData](../models/ModifierGroupArchivedMerchantEventData.md#modifiergrouparchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"modifier_group.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ModifierGroupArchivedMerchantEventRequest](../models/ModifierGroupArchivedMerchantEventRequest.md#modifiergrouparchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ModifierGroupArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1previous_attributes). |

### ModifierGroupArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ModifierGroup.md#modifiergroup).

### ModifierGroupArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### ModifierGroupArchivedMerchantEvent.data fields 1.object.modifiers[]

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_groupmodifiers).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributes).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.allow_quantities

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.allow_quantities](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesallow_quantities).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.created_at](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributescreated_at).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.max_quantity

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_quantity](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_quantity).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.max_selected

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_selected](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_selected).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.max_total_quantity

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_total_quantity](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_total_quantity).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmerchant_id).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.min_quantity

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_quantity](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_quantity).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.min_selected

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_selected](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_selected).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.modifier_group_id

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_id](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_id).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.modifier_group_type

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_type](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_type).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.modifiers

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.name](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesname).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.show_on_fulfillment

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_fulfillment](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_fulfillment).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.show_on_receipt

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_receipt](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_receipt).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.status](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesstatus).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.updated_at](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesupdated_at).

### ModifierGroupArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.version](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesversion).

