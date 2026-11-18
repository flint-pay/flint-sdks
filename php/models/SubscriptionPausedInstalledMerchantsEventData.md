[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPausedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [SubscriptionPausedInstalledMerchantsEventDataObject](../models/SubscriptionPausedInstalledMerchantsEventDataObject.md#subscriptionpausedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [SubscriptionPausedInstalledMerchantsEventDataPreviousAttributes](../models/SubscriptionPausedInstalledMerchantsEventDataPreviousAttributes.md#subscriptionpausedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdataactor). |

### SubscriptionPausedInstalledMerchantsEventData.actor

Field definitions: [ReturnCanceledMerchantEventData.actor](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdataactor).

