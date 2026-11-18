[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallRevokedEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PartnerAppInstallRevokedEventDataObject](../models/PartnerAppInstallRevokedEventDataObject.md#partnerappinstallrevokedeventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `platform_contact`. `object`: [field definitions](../models/PartnerAppInstallRevokedEventData.md#partnerappinstallrevokedeventdataobject-fields-1). |
| `previous_attributes` | Optional | [PartnerAppInstallRevokedEventDataPreviousAttributes](../models/PartnerAppInstallRevokedEventDataPreviousAttributes.md#partnerappinstallrevokedeventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### PartnerAppInstallRevokedEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `platform_contact`.

Field definitions: [shared fields](PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallRevokedEventData.object fields 1.environment_grants[]

Field definitions: [PartnerAppInstallResponse.data.environment_grants[]](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants).

