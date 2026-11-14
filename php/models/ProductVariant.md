[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariant

A specific purchasable version of a product.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `delivery_configuration_reason` | Optional | string | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. |
| `effective_images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | The variant's own images in display order. An empty gallery inherits the product's images. `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `inventory_availability` | Optional | [ProductVariantInventoryAvailability](../models/ProductVariantInventoryAvailability.md#productvariantinventoryavailability) | Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. Stock availability of a variant for one order line, computed when the variant is read. `inventory_availability`: [field definitions](../models/ProductResponse.md#productresponsedatadefault_variantinventory_availability). |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `is_available_for_sale` | Required | boolean | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. |
| `is_inheriting_product_images` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariant-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. |
| `position` | Required | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this variant belongs to. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. |
| `release_date` | Required | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Always present. Empty collections are returned as []. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base unit price before quantity price breaks, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `variant_id` | Required | string | Stable identifier of the product variant. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

#### ProductVariant line_item_tax_category values

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

### ProductVariant.effective_images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductVariant.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductVariant.inventory_availability

Field definitions: [ProductResponse.data.default_variant.inventory_availability](../models/ProductResponse.md#productresponsedatadefault_variantinventory_availability).

### ProductVariant.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductVariant.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

