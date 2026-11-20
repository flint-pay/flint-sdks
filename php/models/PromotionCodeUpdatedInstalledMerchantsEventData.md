[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeUpdatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [PromotionCodeUpdatedInstalledMerchantsEventDataObject](../models/PromotionCodeUpdatedInstalledMerchantsEventDataObject.md#promotioncodeupdatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. `object`: [field definitions](../models/PromotionCodeUpdatedInstalledMerchantsEventData.md#promotioncodeupdatedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [PromotionCodeUpdatedInstalledMerchantsEventDataPreviousAttributes](../models/PromotionCodeUpdatedInstalledMerchantsEventDataPreviousAttributes.md#promotioncodeupdatedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### PromotionCodeUpdatedInstalledMerchantsEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PromotionCodeUpdatedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.

Field definitions: [shared fields](PromotionCodeArchivedMerchantEventData.md#promotioncodearchivedmerchanteventdataobject-fields-1).

### PromotionCodeUpdatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [PromotionResponse.data.codes[].metadata](../models/PromotionResponse.md#promotionresponsedatacodesmetadata).

