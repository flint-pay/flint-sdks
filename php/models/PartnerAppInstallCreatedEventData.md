[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallCreatedEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [PartnerAppInstallCreatedEventDataObject](../models/PartnerAppInstallCreatedEventDataObject.md#partnerappinstallcreatedeventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `platform_contact`. `object`: [field definitions](../models/PartnerAppInstallCreatedEventData.md#partnerappinstallcreatedeventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### PartnerAppInstallCreatedEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PartnerAppInstallCreatedEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `platform_contact`.

Field definitions: [shared fields](PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallCreatedEventData.object fields 1.environment_grants[]

Field definitions: [PartnerAppInstallResponse.data.environment_grants[]](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants).

