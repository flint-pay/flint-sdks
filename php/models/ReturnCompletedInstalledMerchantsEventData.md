[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnCompletedInstalledMerchantsEventDataActor](../models/ReturnCompletedInstalledMerchantsEventDataActor.md#returncompletedinstalledmerchantseventdataactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ReturnCompletedInstalledMerchantsEventData.md#returncompletedinstalledmerchantseventdataactor-fields-1). |
| `object` | Required | [ReturnCompletedInstalledMerchantsEventDataObject](../models/ReturnCompletedInstalledMerchantsEventDataObject.md#returncompletedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [ReturnCompletedInstalledMerchantsEventDataPreviousAttributes](../models/ReturnCompletedInstalledMerchantsEventDataPreviousAttributes.md#returncompletedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ReturnCompletedInstalledMerchantsEventData.actor fields 1

Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.

Field definitions: [shared fields](ReturnActorInput.md#returnactorinput).

