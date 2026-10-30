[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedMerchantEvent

The `product_variant.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ProductVariantArchivedMerchantEventData](../models/ProductVariantArchivedMerchantEventData.md#productvariantarchivedmerchanteventdata) | `data`: [field definitions](../models/ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"product_variant.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ProductVariantArchivedMerchantEventRequest](../models/ProductVariantArchivedMerchantEventRequest.md#productvariantarchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ProductVariantArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ProductVariant](../models/ProductVariant.md#productvariant) | A specific purchasable version of a product. `object`: [field definitions](../models/ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1object). |

### ProductVariantArchivedMerchantEvent.data fields 1.object

A specific purchasable version of a product.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_for_sale` | Required | boolean | Whether the variant and its product are both active. |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `delivery_configuration_reason` | Optional | string | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Identifier of the delivery profile assigned to this variant. |
| `effective_images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. `gift_card_configuration`: [field definitions](../models/ProductVariant.md#productvariantgift_card_configuration). |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | The variant's own images in display order. An empty gallery inherits the product's images. |
| `images_inherited` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedmerchanteventdata-fields-1object-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/Bundle.md#bundlemetadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Send null on update to remove it. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. |
| `position` | Required | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this variant belongs to. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Always present. Empty collections are returned as []. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `variant_id` | Required | string | Stable identifier of the product variant. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

#### ProductVariantArchivedMerchantEvent.data fields 1.object line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### ProductVariantArchivedMerchantEvent.data fields 1.object.gift_card_configuration

Field definitions: [ProductVariant.gift_card_configuration](../models/ProductVariant.md#productvariantgift_card_configuration).

### ProductVariantArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

