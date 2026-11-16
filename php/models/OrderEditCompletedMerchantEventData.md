[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditCompletedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [OrderEditCompletedMerchantEventDataObject](../models/OrderEditCompletedMerchantEventDataObject.md#ordereditcompletedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`. `object`: [field definitions](../models/OrderEditCompletedMerchantEventData.md#ordereditcompletedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | [OrderEditCompletedMerchantEventDataPreviousAttributes](../models/OrderEditCompletedMerchantEventDataPreviousAttributes.md#ordereditcompletedmerchanteventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### OrderEditCompletedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`.

Field definitions: [shared fields](OrderEditCanceledMerchantEventData.md#ordereditcanceledmerchanteventdataobject-fields-1).

### OrderEditCompletedMerchantEventData.object fields 1.add_line_items[]

Field definitions: [OrderEditResponse.data.add_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataadd_line_items).

### OrderEditCompletedMerchantEventData.object fields 1.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditCompletedMerchantEventData.object fields 1.remove_line_items[]

Field definitions: [OrderEditResponse.data.remove_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items).

