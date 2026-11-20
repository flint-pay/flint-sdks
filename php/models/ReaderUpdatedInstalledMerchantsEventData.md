[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderUpdatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [ReaderUpdatedInstalledMerchantsEventDataObject](../models/ReaderUpdatedInstalledMerchantsEventDataObject.md#readerupdatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`. `object`: [field definitions](../models/ReaderUpdatedInstalledMerchantsEventData.md#readerupdatedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [ReaderUpdatedInstalledMerchantsEventDataPreviousAttributes](../models/ReaderUpdatedInstalledMerchantsEventDataPreviousAttributes.md#readerupdatedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ReaderUpdatedInstalledMerchantsEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ReaderUpdatedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`.

Field definitions: [shared fields](ReaderArchivedMerchantEventData.md#readerarchivedmerchanteventdataobject-fields-1).

### ReaderUpdatedInstalledMerchantsEventData.object fields 1.connectivity

Field definitions: [ReaderResponse.data.connectivity](../models/ReaderResponse.md#readerresponsedataconnectivity).

### ReaderUpdatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [ReaderResponse.data.metadata](../models/ReaderResponse.md#readerresponsedatametadata).

