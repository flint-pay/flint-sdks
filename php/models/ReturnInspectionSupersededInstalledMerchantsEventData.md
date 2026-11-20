[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionSupersededInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [ReturnInspectionSupersededInstalledMerchantsEventDataObject](../models/ReturnInspectionSupersededInstalledMerchantsEventDataObject.md#returninspectionsupersededinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnInspectionSupersededInstalledMerchantsEventData.md#returninspectionsupersededinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [ReturnInspectionSupersededInstalledMerchantsEventDataPreviousAttributes](../models/ReturnInspectionSupersededInstalledMerchantsEventDataPreviousAttributes.md#returninspectionsupersededinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ReturnInspectionSupersededInstalledMerchantsEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ReturnInspectionSupersededInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspection).

### ReturnInspectionSupersededInstalledMerchantsEventData.object fields 1.generated_dispositions[]

Field definitions: [WebhookSnapshotReturnInspection.generated_dispositions[]](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions).

### ReturnInspectionSupersededInstalledMerchantsEventData.object fields 1.line_items[]

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items).

