[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [BundleArchivedMerchantEventDataObject](../models/BundleArchivedMerchantEventDataObject.md#bundlearchivedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. `object`: [field definitions](../models/BundleArchivedMerchantEventData.md#bundlearchivedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### BundleArchivedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `bundle_id` | Required | string | Stable identifier of the bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Always present. Empty collections are returned as []. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `component_count` | Required | integer | Number of components in the bundle. Format: `int32`. |
| `components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. `components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the bundle shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images attached to this resource, in display order. The first image is primary. `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `is_available_for_sale` | Required | boolean | Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Bundle name shown to buyers. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

### BundleArchivedMerchantEventData.object fields 1.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BundleArchivedMerchantEventData.object fields 1.components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BundleArchivedMerchantEventData.object fields 1.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### BundleArchivedMerchantEventData.object fields 1.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

