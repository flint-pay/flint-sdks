[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleCreatedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [BundleCreatedMerchantEventDataObject](../models/BundleCreatedMerchantEventDataObject.md#bundlecreatedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. `object`: [field definitions](../models/BundleCreatedMerchantEventData.md#bundlecreatedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### BundleCreatedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.

Field definitions: [shared fields](BundleArchivedMerchantEventData.md#bundlearchivedmerchanteventdataobject-fields-1).

### BundleCreatedMerchantEventData.object fields 1.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BundleCreatedMerchantEventData.object fields 1.components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BundleCreatedMerchantEventData.object fields 1.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### BundleCreatedMerchantEventData.object fields 1.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

