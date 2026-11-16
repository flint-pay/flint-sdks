[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeArchivedMerchantEvent

The `promotion_code.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PromotionCodeArchivedMerchantEventData](../models/PromotionCodeArchivedMerchantEventData.md#promotioncodearchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PromotionCodeArchivedMerchantEvent.md#promotioncodearchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"promotion_code.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PromotionCodeArchivedMerchantEventRequest](../models/PromotionCodeArchivedMerchantEventRequest.md#promotioncodearchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PromotionCodeArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. `object`: [field definitions](../models/PromotionCodeArchivedMerchantEvent.md#promotioncodearchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PromotionCodeArchivedMerchantEvent.md#promotioncodearchivedmerchanteventdata-fields-1previous_attributes). |

### PromotionCodeArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.

Field definitions: [shared fields](PromotionCodeArchivedMerchantEventData.md#promotioncodearchivedmerchanteventdataobject-fields-1).

### PromotionCodeArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [PromotionResponse.data.codes[].metadata](../models/PromotionResponse.md#promotionresponsedatacodesmetadata).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributes).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.available

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.available](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesavailable).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.code

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.code](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributescode).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.created_at](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributescreated_at).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.customer_id](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributescustomer_id).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.expires_at](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesexpires_at).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.max_uses

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.max_uses](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesmax_uses).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesmerchant_id).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.metadata](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesmetadata).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.promotion_code_id

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_code_id](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributespromotion_code_id).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.promotion_id

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_id](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributespromotion_id).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.status](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesstatus).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.timezone

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.timezone](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributestimezone).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.unavailable_reason

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.unavailable_reason](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesunavailable_reason).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.updated_at](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesupdated_at).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.uses_count

Declared alternatives: [PromotionCodeArchivedMerchantEventDataPreviousAttributes.uses_count](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesuses_count).

### PromotionCodeArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.version](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion).

