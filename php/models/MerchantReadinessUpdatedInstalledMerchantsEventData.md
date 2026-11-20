[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [MerchantReadinessUpdatedInstalledMerchantsEventDataObject](../models/MerchantReadinessUpdatedInstalledMerchantsEventDataObject.md#merchantreadinessupdatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`. `object`: [field definitions](../models/MerchantReadinessUpdatedInstalledMerchantsEventData.md#merchantreadinessupdatedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [MerchantReadinessUpdatedInstalledMerchantsEventDataPreviousAttributes](../models/MerchantReadinessUpdatedInstalledMerchantsEventDataPreviousAttributes.md#merchantreadinessupdatedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### MerchantReadinessUpdatedInstalledMerchantsEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### MerchantReadinessUpdatedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`.

Field definitions: [shared fields](MerchantReadinessUpdatedMerchantEventData.md#merchantreadinessupdatedmerchanteventdataobject-fields-1).

### MerchantReadinessUpdatedInstalledMerchantsEventData.object fields 1.address

Field definitions: [MerchantResponse.data.address](../models/MerchantResponse.md#merchantresponsedataaddress).

### MerchantReadinessUpdatedInstalledMerchantsEventData.object fields 1.icon

Field definitions: [MerchantResponse.data.icon](../models/MerchantResponse.md#merchantresponsedataicon).

### MerchantReadinessUpdatedInstalledMerchantsEventData.object fields 1.logo

Field definitions: [MerchantResponse.data.logo](../models/MerchantResponse.md#merchantresponsedatalogo).

### MerchantReadinessUpdatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### MerchantReadinessUpdatedInstalledMerchantsEventData.object fields 1.readiness

Field definitions: [MerchantResponse.data.readiness](../models/MerchantResponse.md#merchantresponsedatareadiness).

