[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [ProductArchivedMerchantEventDataObject](../models/ProductArchivedMerchantEventDataObject.md#productarchivedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`. `object`: [field definitions](../models/ProductArchivedMerchantEventData.md#productarchivedmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ProductArchivedMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer | Number of active variants belonging to the product. Format: `int32`. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Always present. Empty collections are returned as []. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_variant` | Optional | [ProductVariant](../models/ProductVariant.md#productvariant) | The product's default variant, when one is set. A specific purchasable version of a product. `default_variant`: [field definitions](../models/ProductResponse.md#productresponsedatadefault_variant). |
| `default_variant_id` | Optional | string | Identifier of the variant chosen as this product's default, when one is set. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the product shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images attached to this resource, in display order. The first image is primary. `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `is_available_for_sale` | Optional | boolean | Whether the product is active and has at least one active variant. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Product name shown to buyers. |
| `option_count` | Optional | integer | Number of active options belonging to the product. Format: `int32`. |
| `options` | Required | Array of [ProductOption](../models/ProductOption.md#productoption) | Product options and their non-archived values. Empty when the product has no options. `options[]`: [field definitions](../models/ProductResponse.md#productresponsedataoptions). |
| `price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants. |
| `product_id` | Required | string | Stable identifier of the product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_type` | Required | string | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Required | string | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_count` | Optional | integer | Number of non-archived variants belonging to the product. Format: `int32`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

### ProductArchivedMerchantEventData.object fields 1.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### ProductArchivedMerchantEventData.object fields 1.default_variant

Field definitions: [ProductResponse.data.default_variant](../models/ProductResponse.md#productresponsedatadefault_variant).

### ProductArchivedMerchantEventData.object fields 1.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductArchivedMerchantEventData.object fields 1.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductArchivedMerchantEventData.object fields 1.options[]

Field definitions: [ProductResponse.data.options[]](../models/ProductResponse.md#productresponsedataoptions).

