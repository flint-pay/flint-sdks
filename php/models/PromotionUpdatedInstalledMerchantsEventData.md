[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionUpdatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PromotionUpdatedInstalledMerchantsEventDataObject](../models/PromotionUpdatedInstalledMerchantsEventDataObject.md#promotionupdatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`. `object`: [field definitions](../models/PromotionUpdatedInstalledMerchantsEventData.md#promotionupdatedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### PromotionUpdatedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`.

Field definitions: [shared fields](PromotionArchivedMerchantEventData.md#promotionarchivedmerchanteventdataobject-fields-1).

### PromotionUpdatedInstalledMerchantsEventData.object fields 1.application_method

Declared alternatives: [PromotionResponse.data.application_method](../models/PromotionResponse.md#promotionresponsedataapplication_method).

### PromotionUpdatedInstalledMerchantsEventData.object fields 1.eligibility_rules

Declared alternatives: [PromotionResponse.data.codes[].promotion.eligibility_rules](../models/PromotionResponse.md#promotionresponsedatacodespromotioneligibility_rules).

### PromotionUpdatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [PromotionResponse.data.codes[].promotion.metadata](../models/PromotionResponse.md#promotionresponsedatacodespromotionmetadata).

### PromotionUpdatedInstalledMerchantsEventData.object fields 1.schedule

Field definitions: [PromotionResponse.data.codes[].promotion.schedule](../models/PromotionResponse.md#promotionresponsedatacodespromotionschedule).

