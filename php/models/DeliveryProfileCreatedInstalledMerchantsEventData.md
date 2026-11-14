[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileCreatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [DeliveryProfileCreatedInstalledMerchantsEventDataObject](../models/DeliveryProfileCreatedInstalledMerchantsEventDataObject.md#deliveryprofilecreatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`. `object`: [field definitions](../models/DeliveryProfileCreatedInstalledMerchantsEventData.md#deliveryprofilecreatedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### DeliveryProfileCreatedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.

Field definitions: [shared fields](DeliveryProfileArchivedMerchantEventData.md#deliveryprofilearchivedmerchanteventdataobject-fields-1).

### DeliveryProfileCreatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

