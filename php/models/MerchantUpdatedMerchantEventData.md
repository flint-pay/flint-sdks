[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantUpdatedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [MerchantUpdatedMerchantEventDataObject](../models/MerchantUpdatedMerchantEventDataObject.md#merchantupdatedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`. `object`: [field definitions](../models/MerchantUpdatedMerchantEventData.md#merchantupdatedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### MerchantUpdatedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`.

Field definitions: [shared fields](MerchantResponse.md#merchantresponsedata).

### MerchantUpdatedMerchantEventData.object fields 1.address

Field definitions: [MerchantResponse.data.address](../models/MerchantResponse.md#merchantresponsedataaddress).

### MerchantUpdatedMerchantEventData.object fields 1.icon

Field definitions: [MerchantResponse.data.icon](../models/MerchantResponse.md#merchantresponsedataicon).

### MerchantUpdatedMerchantEventData.object fields 1.logo

Field definitions: [MerchantResponse.data.logo](../models/MerchantResponse.md#merchantresponsedatalogo).

### MerchantUpdatedMerchantEventData.object fields 1.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### MerchantUpdatedMerchantEventData.object fields 1.readiness

Field definitions: [MerchantResponse.data.readiness](../models/MerchantResponse.md#merchantresponsedatareadiness).

