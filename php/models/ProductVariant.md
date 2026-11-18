[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariant

A specific purchasable version of a product.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Reference unit price for sale display, in the same currency and strictly greater than unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity price breaks. |
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
| `license_key_configuration` | Required | object and Alternative shapes (see declared variants) or null | License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. `license_key_configuration`: [declared alternatives](../models/ProductVariant.md#productvariantlicense_key_configuration). |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariant-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. |
| `modifier_set_id` | Required | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. |
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

### ProductVariant.license_key_configuration

License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Conditional | integer or null | Maximum active devices per key. Null when activations are unlimited. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `email_delivery_enabled` | Conditional | boolean | Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. |
| `key_prefix` | Conditional | string or null | Prefix shown before each generated key. Null when no prefix is configured. minLength: `2`. maxLength: `8`. pattern: `^[A-Z0-9]{2,8}$`. |
| `license_key_pool_id` | Conditional | string | Active pool in this merchant and environment. Required when source is pool. pattern: `^lkp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `source` | Conditional | string | Source of the license keys. Values: `"generated"`, `"pool"`. |
| `validity_period_days` | Conditional | integer or null | Days from issuance until expiry. Null when keys do not expire. Format: `int32`. minimum: `1`. maximum: `36500`. |

### ProductVariant.license_key_configuration variant 1: `source` = `"generated"`

anyOf LicenseKeyConfiguration: License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix.; oneOf with source: "generated": License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix..

- Required: `activation_limit`, `email_delivery_enabled`, `key_prefix`, `source`, `validity_period_days`.
- Optional: `license_key_pool_id`.
- Constraints for `source`: Values: `"generated"`.

### ProductVariant.license_key_configuration variant 2: `source` = `"pool"`

anyOf LicenseKeyConfiguration: License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix.; oneOf with source: "pool": License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix..

- Required: `activation_limit`, `email_delivery_enabled`, `license_key_pool_id`, `source`, `validity_period_days`.
- Optional: `key_prefix`.
- Constraints for `source`: Values: `"pool"`.

### ProductVariant.license_key_configuration variant 3

anyOf variant 2.

- Undeclared: `activation_limit`, `email_delivery_enabled`, `key_prefix`, `license_key_pool_id`, `source`, `validity_period_days`.
- Value shape: null. License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. 

### ProductVariant.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductVariant.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

