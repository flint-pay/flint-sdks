[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCycleSkippedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [SubscriptionCycleSkippedInstalledMerchantsEventDataActor](../models/SubscriptionCycleSkippedInstalledMerchantsEventDataActor.md#subscriptioncycleskippedinstalledmerchantseventdataactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/SubscriptionCycleSkippedInstalledMerchantsEventData.md#subscriptioncycleskippedinstalledmerchantseventdataactor-fields-1). |
| `object` | Required | [SubscriptionCycleSkippedInstalledMerchantsEventDataObject](../models/SubscriptionCycleSkippedInstalledMerchantsEventDataObject.md#subscriptioncycleskippedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [SubscriptionCycleSkippedInstalledMerchantsEventDataPreviousAttributes](../models/SubscriptionCycleSkippedInstalledMerchantsEventDataPreviousAttributes.md#subscriptioncycleskippedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### SubscriptionCycleSkippedInstalledMerchantsEventData.actor fields 1

Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.

Field definitions: [shared fields](ReturnActorInput.md#returnactorinput).

