[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationReleasedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [LicenseKeyActivationReleasedInstalledMerchantsEventDataObject](../models/LicenseKeyActivationReleasedInstalledMerchantsEventDataObject.md#licensekeyactivationreleasedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [LicenseKeyActivationReleasedInstalledMerchantsEventDataPreviousAttributes](../models/LicenseKeyActivationReleasedInstalledMerchantsEventDataPreviousAttributes.md#licensekeyactivationreleasedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

