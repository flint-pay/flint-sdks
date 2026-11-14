[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderArchivedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [ReaderArchivedInstalledMerchantsEventDataObject](../models/ReaderArchivedInstalledMerchantsEventDataObject.md#readerarchivedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`. `object`: [field definitions](../models/ReaderArchivedInstalledMerchantsEventData.md#readerarchivedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ReaderArchivedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`.

Field definitions: [shared fields](ReaderArchivedMerchantEventData.md#readerarchivedmerchanteventdataobject-fields-1).

### ReaderArchivedInstalledMerchantsEventData.object fields 1.connectivity

Field definitions: [ReaderResponse.data.connectivity](../models/ReaderResponse.md#readerresponsedataconnectivity).

### ReaderArchivedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [ReaderResponse.data.metadata](../models/ReaderResponse.md#readerresponsedatametadata).

