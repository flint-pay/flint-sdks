[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductUpdatedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [ProductUpdatedMerchantEventDataObject](../models/ProductUpdatedMerchantEventDataObject.md#productupdatedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`. `object`: [field definitions](../models/ProductUpdatedMerchantEventData.md#productupdatedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ProductUpdatedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.

Field definitions: [shared fields](ProductArchivedMerchantEventData.md#productarchivedmerchanteventdataobject-fields-1).

### ProductUpdatedMerchantEventData.object fields 1.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### ProductUpdatedMerchantEventData.object fields 1.default_variant

Field definitions: [ProductResponse.data.default_variant](../models/ProductResponse.md#productresponsedatadefault_variant).

### ProductUpdatedMerchantEventData.object fields 1.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductUpdatedMerchantEventData.object fields 1.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductUpdatedMerchantEventData.object fields 1.options[]

Field definitions: [ProductResponse.data.options[]](../models/ProductResponse.md#productresponsedataoptions).

