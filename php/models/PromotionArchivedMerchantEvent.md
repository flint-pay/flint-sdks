[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedMerchantEvent

The `promotion.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PromotionArchivedMerchantEventData](../models/PromotionArchivedMerchantEventData.md#promotionarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"promotion.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PromotionArchivedMerchantEventRequest](../models/PromotionArchivedMerchantEventRequest.md#promotionarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PromotionArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`. `object`: [field definitions](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1previous_attributes). |

### PromotionArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`.

Field definitions: [shared fields](PromotionArchivedMerchantEventData.md#promotionarchivedmerchanteventdataobject-fields-1).

### PromotionArchivedMerchantEvent.data fields 1.object.application_method

Declared alternatives: [PromotionResponse.data.application_method](../models/PromotionResponse.md#promotionresponsedataapplication_method).

### PromotionArchivedMerchantEvent.data fields 1.object.eligibility_rules

Declared alternatives: [PromotionResponse.data.codes[].promotion.eligibility_rules](../models/PromotionResponse.md#promotionresponsedatacodespromotioneligibility_rules).

### PromotionArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [PromotionResponse.data.codes[].promotion.metadata](../models/PromotionResponse.md#promotionresponsedatacodespromotionmetadata).

### PromotionArchivedMerchantEvent.data fields 1.object.schedule

Field definitions: [PromotionResponse.data.codes[].promotion.schedule](../models/PromotionResponse.md#promotionresponsedatacodespromotionschedule).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributes).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.application_method

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.available

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.available](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesavailable).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.codes_summary

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.codes_summary](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributescodes_summary).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.combines_with

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.combines_with](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributescombines_with).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.created_at](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributescreated_at).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.description](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdescription).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.discount_class

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.discount_class](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdiscount_class).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.display_name

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.display_name](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdisplay_name).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.eligibility_rules

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributeseligibility_rules).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.exclusivity

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.exclusivity](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesexclusivity).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.max_uses

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.max_uses](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmax_uses).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.max_uses_per_customer

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.max_uses_per_customer](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmax_uses_per_customer).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmerchant_id).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.metadata](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmetadata).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.name](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesname).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.promotion_id

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.promotion_id](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributespromotion_id).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.redemption_type

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.redemption_type](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesredemption_type).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.schedule

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.schedule](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesschedule).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.status](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesstatus).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.unavailable_reason

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.unavailable_reason](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesunavailable_reason).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.updated_at](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesupdated_at).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.uses_count

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.uses_count](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesuses_count).

### PromotionArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.version](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion).

