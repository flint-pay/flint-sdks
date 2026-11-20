[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditCompletedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [OrderEditCompletedInstalledMerchantsEventDataObject](../models/OrderEditCompletedInstalledMerchantsEventDataObject.md#ordereditcompletedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`. `object`: [field definitions](../models/OrderEditCompletedInstalledMerchantsEventData.md#ordereditcompletedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [OrderEditCompletedInstalledMerchantsEventDataPreviousAttributes](../models/OrderEditCompletedInstalledMerchantsEventDataPreviousAttributes.md#ordereditcompletedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### OrderEditCompletedInstalledMerchantsEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### OrderEditCompletedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`.

Field definitions: [shared fields](OrderEditCanceledMerchantEventData.md#ordereditcanceledmerchanteventdataobject-fields-1).

### OrderEditCompletedInstalledMerchantsEventData.object fields 1.add_line_items[]

Field definitions: [OrderEditResponse.data.add_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataadd_line_items).

### OrderEditCompletedInstalledMerchantsEventData.object fields 1.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditCompletedInstalledMerchantsEventData.object fields 1.remove_line_items[]

Field definitions: [OrderEditResponse.data.remove_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items).

