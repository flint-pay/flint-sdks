[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode). |
| `compare_at_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reference unit price for sale display, in the same currency and strictly greater than unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity price breaks. |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesimages). |
| `inventory_availability` | Optional | [ProductVariantInventoryAvailabilityPreviousAttributes](../models/ProductVariantInventoryAvailabilityPreviousAttributes.md#productvariantinventoryavailabilitypreviousattributes) or null | Whether one order line can buy this variant now. Flint uses `settings.inventory.default_routing_source` when it is set. With no default, Flint uses the active Location in the current environment that has had inventory allocation enabled the longest. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads. Write responses and webhooks omit it. The check holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. Check `is_available_for_sale` for the variant's sale status. Availability has no effect on `version`. Read the variant again after `inventory_level.updated`. |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_inheriting_product_images). |
| `license_key_configuration` | Optional | (object and Alternative shapes (see declared variants) or null) or null | License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. `license_key_configuration`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration). |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantpreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set` | Optional | [ModifierSetPreviousAttributes](../models/ModifierSetPreviousAttributes.md#modifiersetpreviousattributes) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. `modifier_set`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set). |
| `modifier_set_id` | Optional | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesname). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesquantity_price_breaks). |
| `release_date` | Optional | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesrelease_date). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku). |
| `status` | Optional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesstatus). |
| `taxable` | Optional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributestaxable). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Per-unit measurement. Omitted when unknown. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Optional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Per-unit measurement. Omitted when unknown. |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `variant_id` | Optional | string or null | Stable identifier of the product variant. `variant_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesvariant_id). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion). |

#### ProductVariantPreviousAttributes line_item_tax_category values

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

### ProductVariantPreviousAttributes.barcode

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.barcode](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode).

### ProductVariantPreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductVariantPreviousAttributes.delivery_configuration_reason

### ProductVariantPreviousAttributes.delivery_configuration_reason variant 1

anyOf variant 1: Reason the variant's delivery configuration needs attention..

- Value shape: string. Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### ProductVariantPreviousAttributes.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the variant's delivery configuration needs attention. 

### ProductVariantPreviousAttributes.delivery_configuration_status

### ProductVariantPreviousAttributes.delivery_configuration_status variant 1

anyOf variant 1: Whether the variant's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductVariantPreviousAttributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the variant's delivery configuration is ready, needs attention, or does not apply. 

### ProductVariantPreviousAttributes.delivery_profile_id

### ProductVariantPreviousAttributes.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantPreviousAttributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantPreviousAttributes.effective_images

### ProductVariantPreviousAttributes.effective_images variant 1

anyOf variant 1: Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantPreviousAttributes.effective_images variant 2

anyOf variant 2.

- Value shape: null. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantPreviousAttributes.effective_images variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1).

### ProductVariantPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductVariantPreviousAttributes.images

### ProductVariantPreviousAttributes.images variant 1

anyOf variant 1: The variant's own images in display order. An empty gallery inherits the product's images..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantPreviousAttributes.images variant 2

anyOf variant 2.

- Value shape: null. The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantPreviousAttributes.images variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1).

### ProductVariantPreviousAttributes.inventory_item_id

### ProductVariantPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantPreviousAttributes.inventory_tracking

### ProductVariantPreviousAttributes.inventory_tracking variant 1

anyOf variant 1: Whether sales of this variant consume an inventory item..

- Value shape: string. Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`.

### ProductVariantPreviousAttributes.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether sales of this variant consume an inventory item. 

### ProductVariantPreviousAttributes.is_available_for_sale

### ProductVariantPreviousAttributes.is_available_for_sale variant 1

anyOf variant 1: Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads..

- Value shape: boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantPreviousAttributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantPreviousAttributes.is_inheriting_product_images

### ProductVariantPreviousAttributes.is_inheriting_product_images variant 1

anyOf variant 1: Whether effective_images comes from the product's gallery because this variant's gallery is empty..

- Value shape: boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantPreviousAttributes.is_inheriting_product_images variant 2

anyOf variant 2.

- Value shape: null. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantPreviousAttributes.license_key_configuration

License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Conditional | integer or null | Maximum active devices per key. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1activation_limit). |
| `email_delivery_enabled` | Conditional | boolean or null | Whether Flint emails keys to the buyer. Defaults to true. `email_delivery_enabled`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1email_delivery_enabled). |
| `key_prefix` | Conditional | string or null | Prefix shown before each generated key. Null when no prefix is configured. `key_prefix`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1key_prefix). |
| `license_key_pool_id` | Conditional | string or null | Active pool in this merchant and environment. Required when source is pool. `license_key_pool_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1license_key_pool_id). |
| `source` | Conditional | (string or null) | Source of the license keys. Values: `"generated"`, `"pool"`. `source`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1source), [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-2source). |
| `validity_period_days` | Conditional | integer or null | Days from issuance until expiry. Null when keys do not expire. `validity_period_days`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1validity_period_days). |

### ProductVariantPreviousAttributes.license_key_configuration variant 1: `source` = `"generated"`

anyOf variant 1: License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.; anyOf LicenseKeyConfigurationPreviousAttributes; anyOf GeneratedLicenseKeyConfigurationPreviousAttributes.

- Optional: `activation_limit`, `email_delivery_enabled`, `key_prefix`, `license_key_pool_id`, `source`, `validity_period_days`.
- Constraints for `source`: Values: `"generated"`.

### ProductVariantPreviousAttributes.license_key_configuration variant 2: `source` = `"pool"`

anyOf variant 1: License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.; anyOf LicenseKeyConfigurationPreviousAttributes; anyOf PoolLicenseKeyConfigurationPreviousAttributes.

- Optional: `activation_limit`, `email_delivery_enabled`, `key_prefix`, `license_key_pool_id`, `source`, `validity_period_days`.
- Constraints for `source`: Values: `"pool"`.

### ProductVariantPreviousAttributes.license_key_configuration variant 3, 4

anyOf variant 1: License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.; anyOf variant 2; anyOf variant 2.

- Undeclared: `activation_limit`, `email_delivery_enabled`, `key_prefix`, `license_key_pool_id`, `source`, `validity_period_days`.
- Value shape: null. License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.activation_limit

### ProductVariantPreviousAttributes.license_key_configuration variant 1.activation_limit variant 1

anyOf variant 1: Maximum active devices per key. Null when activations are unlimited..

- Value shape: integer. Maximum active devices per key. Null when activations are unlimited. Maximum active devices per key. Null when activations are unlimited. Format: `int32`. minimum: `1`. maximum: `10000`. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.activation_limit variant 2

anyOf variant 2.

- Value shape: null. Maximum active devices per key. Null when activations are unlimited. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.email_delivery_enabled

### ProductVariantPreviousAttributes.license_key_configuration variant 1.email_delivery_enabled variant 1

anyOf variant 1: Whether Flint emails keys to the buyer. Defaults to true..

- Value shape: boolean. Whether Flint emails keys to the buyer. Defaults to true. Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.email_delivery_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint emails keys to the buyer. Defaults to true. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.key_prefix

### ProductVariantPreviousAttributes.license_key_configuration variant 1.key_prefix variant 1

anyOf variant 1: Prefix shown before each generated key. Null when no prefix is configured..

- Value shape: string. Prefix shown before each generated key. Null when no prefix is configured. Prefix shown before each generated key. Null when no prefix is configured. minLength: `2`. maxLength: `8`. pattern: `^[A-Z0-9]{2,8}$`. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.key_prefix variant 2

anyOf variant 2.

- Value shape: null. Prefix shown before each generated key. Null when no prefix is configured. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.license_key_pool_id

### ProductVariantPreviousAttributes.license_key_configuration variant 1.license_key_pool_id variant 1

anyOf variant 1: Active pool in this merchant and environment. Required when source is pool..

- Value shape: string. Active pool in this merchant and environment. Required when source is pool. Active pool in this merchant and environment. Required when source is pool. pattern: `^lkp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. Active pool in this merchant and environment. Required when source is pool. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.source

### ProductVariantPreviousAttributes.license_key_configuration variant 1.source variant 1

anyOf group 1 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`, `"pool"`.

### ProductVariantPreviousAttributes.license_key_configuration variant 1.source variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Source of the license keys. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.source variant 3

anyOf group 2 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`.

### ProductVariantPreviousAttributes.license_key_configuration variant 1.validity_period_days

### ProductVariantPreviousAttributes.license_key_configuration variant 1.validity_period_days variant 1

anyOf variant 1: Days from issuance until expiry. Null when keys do not expire..

- Value shape: integer. Days from issuance until expiry. Null when keys do not expire. Days from issuance until expiry. Null when keys do not expire. Format: `int32`. minimum: `1`. maximum: `36500`. 

### ProductVariantPreviousAttributes.license_key_configuration variant 1.validity_period_days variant 2

anyOf variant 2.

- Value shape: null. Days from issuance until expiry. Null when keys do not expire. 

### ProductVariantPreviousAttributes.license_key_configuration variant 2.activation_limit

Declared alternatives: [ProductVariantPreviousAttributes.license_key_configuration variant 1.activation_limit](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1activation_limit).

### ProductVariantPreviousAttributes.license_key_configuration variant 2.email_delivery_enabled

Declared alternatives: [ProductVariantPreviousAttributes.license_key_configuration variant 1.email_delivery_enabled](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1email_delivery_enabled).

### ProductVariantPreviousAttributes.license_key_configuration variant 2.key_prefix

Declared alternatives: [ProductVariantPreviousAttributes.license_key_configuration variant 1.key_prefix](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1key_prefix).

### ProductVariantPreviousAttributes.license_key_configuration variant 2.license_key_pool_id

Declared alternatives: [ProductVariantPreviousAttributes.license_key_configuration variant 1.license_key_pool_id](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1license_key_pool_id).

### ProductVariantPreviousAttributes.license_key_configuration variant 2.source

### ProductVariantPreviousAttributes.license_key_configuration variant 2.source variant 1

anyOf group 1 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`, `"pool"`.

### ProductVariantPreviousAttributes.license_key_configuration variant 2.source variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Source of the license keys. 

### ProductVariantPreviousAttributes.license_key_configuration variant 2.source variant 3

anyOf group 2 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"pool"`.

### ProductVariantPreviousAttributes.license_key_configuration variant 2.validity_period_days

Declared alternatives: [ProductVariantPreviousAttributes.license_key_configuration variant 1.validity_period_days](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration-variant-1validity_period_days).

### ProductVariantPreviousAttributes.line_item_tax_category

### ProductVariantPreviousAttributes.line_item_tax_category variant 1

anyOf variant 1: Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default..

- Value shape: string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ProductVariantPreviousAttributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. 

### ProductVariantPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductVariantPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductVariantPreviousAttributes.modifier_set

Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string or null | When the modifier set was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set-variant-1created_at). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `merchant_id` | Conditional | string or null | Identifier of the merchant that owns this modifier set. `merchant_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set-variant-1merchant_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `modifier_groups` | Conditional | Array of [ModifierSetGroupPreviousAttributes](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributes) or null | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups). |
| `modifier_set_id` | Conditional | string or null | Stable identifier of the modifier set assigned to catalog items. `modifier_set_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set-variant-1modifier_set_id). |
| `name` | Conditional | string or null | Name used to identify this modifier set. `name`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesname). |
| `status` | Conditional | string or null | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Conditional | string or null | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set-variant-1updated_at). |
| `version` | Conditional | integer or null | Version of the modifier set, including the groups it contains. `version`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesversion). |

### ProductVariantPreviousAttributes.modifier_set variant 1

anyOf ModifierSetPreviousAttributes.

- Optional: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `modifier_groups`, `modifier_set_id`, `name`, `status`, `updated_at`, `version`.

### ProductVariantPreviousAttributes.modifier_set variant 2

anyOf variant 2.

- Undeclared: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `modifier_groups`, `modifier_set_id`, `name`, `status`, `updated_at`, `version`.
- Value shape: null. Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. 

### ProductVariantPreviousAttributes.modifier_set variant 1.created_at

### ProductVariantPreviousAttributes.modifier_set variant 1.created_at variant 1

anyOf variant 1: When the modifier set was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier set was created, as an RFC3339 timestamp. When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ProductVariantPreviousAttributes.modifier_set variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set was created, as an RFC3339 timestamp. 

### ProductVariantPreviousAttributes.modifier_set variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ProductVariantPreviousAttributes.modifier_set variant 1.merchant_id

### ProductVariantPreviousAttributes.modifier_set variant 1.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier set..

- Value shape: string. Identifier of the merchant that owns this modifier set. Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ProductVariantPreviousAttributes.modifier_set variant 1.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier set. 

### ProductVariantPreviousAttributes.modifier_set variant 1.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ProductVariantPreviousAttributes.modifier_set variant 1.modifier_groups

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups).

### ProductVariantPreviousAttributes.modifier_set variant 1.modifier_set_id

### ProductVariantPreviousAttributes.modifier_set variant 1.modifier_set_id variant 1

anyOf variant 1: Stable identifier of the modifier set assigned to catalog items..

- Value shape: string. Stable identifier of the modifier set assigned to catalog items. Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductVariantPreviousAttributes.modifier_set variant 1.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier set assigned to catalog items. 

### ProductVariantPreviousAttributes.modifier_set variant 1.name

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.name](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesname).

### ProductVariantPreviousAttributes.modifier_set variant 1.status

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.status](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesstatus).

### ProductVariantPreviousAttributes.modifier_set variant 1.updated_at

### ProductVariantPreviousAttributes.modifier_set variant 1.updated_at variant 1

anyOf variant 1: When the modifier set or any group it contains last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ProductVariantPreviousAttributes.modifier_set variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. 

### ProductVariantPreviousAttributes.modifier_set variant 1.version

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.version](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesversion).

### ProductVariantPreviousAttributes.modifier_set_id

### ProductVariantPreviousAttributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the variant. `null` when no modifier set is attached..

- Value shape: string. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductVariantPreviousAttributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductVariantPreviousAttributes.name

### ProductVariantPreviousAttributes.name variant 1

anyOf variant 1: Variant name that distinguishes it from the product's other variants..

- Value shape: string. Variant name that distinguishes it from the product's other variants. 

### ProductVariantPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Variant name that distinguishes it from the product's other variants. 

### ProductVariantPreviousAttributes.position

### ProductVariantPreviousAttributes.position variant 1

anyOf variant 1: Display order among the product's variants, starting at zero..

- Value shape: integer. Display order among the product's variants, starting at zero. Display order among the product's variants, starting at zero. Format: `int32`. 

### ProductVariantPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's variants, starting at zero. 

### ProductVariantPreviousAttributes.product_id

### ProductVariantPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. 

### ProductVariantPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductVariantPreviousAttributes.quantity_price_breaks

### ProductVariantPreviousAttributes.quantity_price_breaks variant 1

anyOf variant 1: Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks..

- Value shape: Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes). Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. 

### ProductVariantPreviousAttributes.quantity_price_breaks variant 2

anyOf variant 2.

- Value shape: null. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. 

### ProductVariantPreviousAttributes.release_date

### ProductVariantPreviousAttributes.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: string. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. 

### ProductVariantPreviousAttributes.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductVariantPreviousAttributes.selected_options

### ProductVariantPreviousAttributes.selected_options variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Always present. Empty collections are returned as []. 

### ProductVariantPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### ProductVariantPreviousAttributes.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options-variant-1-fields-1).

### ProductVariantPreviousAttributes.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductVariantPreviousAttributes.status

### ProductVariantPreviousAttributes.status variant 1

anyOf variant 1: Variant lifecycle status. Archived variants remain readable and cannot be edited..

- Value shape: string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductVariantPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Variant lifecycle status. Archived variants remain readable and cannot be edited. 

### ProductVariantPreviousAttributes.taxable

### ProductVariantPreviousAttributes.taxable variant 1

anyOf variant 1: Whether this item is subject to tax..

- Value shape: boolean. Whether this item is subject to tax. 

### ProductVariantPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this item is subject to tax. 

### ProductVariantPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductVariantPreviousAttributes.variant_id

### ProductVariantPreviousAttributes.variant_id variant 1

anyOf variant 1: Stable identifier of the product variant..

- Value shape: string. Stable identifier of the product variant. 

### ProductVariantPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product variant. 

### ProductVariantPreviousAttributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

