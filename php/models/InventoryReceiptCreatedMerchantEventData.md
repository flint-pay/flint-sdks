[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptCreatedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InventoryReceiptCreatedMerchantEventDataObject](../models/InventoryReceiptCreatedMerchantEventDataObject.md#inventoryreceiptcreatedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryReceiptCreatedMerchantEventData.md#inventoryreceiptcreatedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### InventoryReceiptCreatedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InventoryReceipt.md#inventoryreceipt).

### InventoryReceiptCreatedMerchantEventData.object fields 1.lines[]

Field definitions: [InventoryReceiptResponse.data.lines[]](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines).

