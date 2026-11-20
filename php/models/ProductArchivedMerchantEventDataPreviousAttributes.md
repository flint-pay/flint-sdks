[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer or null | Number of active variants belonging to the product. `active_variant_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesactive_variant_count). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `default_variant` | Optional | [ProductVariantPreviousAttributes](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributes) or null | The product's default variant, when one is set. `default_variant`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant). |
| `default_variant_id` | Optional | string or null | Identifier of the variant chosen as this product's default, when one is set. `default_variant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant_id). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the product shown to buyers. `description`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the product is active and has at least one active variant. `is_available_for_sale`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set_id` | Optional | string or null | ID of the modifier set attached to the product. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Product name shown to buyers. `name`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesname). |
| `option_count` | Optional | integer or null | Number of active options belonging to the product. `option_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoption_count). |
| `options` | Optional | Array of [ProductOptionPreviousAttributes](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributes) or null | Product options and their non-archived values. Empty when the product has no options. `options`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoptions). |
| `price_range` | Optional | [ProductPriceRangePreviousAttributes](../models/ProductPriceRangePreviousAttributes.md#productpricerangepreviousattributes) or null | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. |
| `product_id` | Optional | string or null | Stable identifier of the product. `product_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. `product_type`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesproduct_type). |
| `status` | Optional | string or null | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `variant_count` | Optional | integer or null | Number of non-archived variants belonging to the product. `variant_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesvariant_count). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion). |

### ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count

### ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count variant 1

anyOf variant 1: Number of active variants belonging to the product..

- Value shape: integer. Number of active variants belonging to the product. Number of active variants belonging to the product. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count variant 2

anyOf variant 2.

- Value shape: null. Number of active variants belonging to the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.categories

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.categories](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories).

### ProductArchivedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant

The product's default variant, when one is set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Conditional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode). |
| `compare_at_price_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reference unit price for sale display, in the same currency and strictly greater than unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity price breaks. |
| `created_at` | Conditional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at). |
| `delivery_configuration_reason` | Conditional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Conditional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_status). |
| `delivery_profile_id` | Conditional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_profile_id). |
| `effective_images` | Conditional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeseffective_images). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `gift_card_configuration` | Conditional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Conditional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesimages). |
| `inventory_availability` | Conditional | [ProductVariantInventoryAvailabilityPreviousAttributes](../models/ProductVariantInventoryAvailabilityPreviousAttributes.md#productvariantinventoryavailabilitypreviousattributes) or null | Whether one order line can buy this variant now. Flint uses `settings.inventory.default_routing_source` when it is set. With no default, Flint uses the only active Location with inventory allocation enabled if exactly one exists. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads. Write responses and webhooks omit it. The check holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. Check `is_available_for_sale` for the variant's sale status. Availability has no effect on `version`. Read the variant again after `inventory_level.updated`. |
| `inventory_item_id` | Conditional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_item_id). |
| `inventory_tracking` | Conditional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_tracking). |
| `is_available_for_sale` | Conditional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_available_for_sale). |
| `is_inheriting_product_images` | Conditional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_inheriting_product_images). |
| `license_key_configuration` | Conditional | (object and Alternative shapes (see declared variants) or null) or null | License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. `license_key_configuration`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration). |
| `line_item_tax_category` | Conditional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productarchivedmerchanteventdatapreviousattributesdefault_variant-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesline_item_tax_category). |
| `merchant_id` | Conditional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1merchant_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set` | Conditional | [ModifierSetPreviousAttributes](../models/ModifierSetPreviousAttributes.md#modifiersetpreviousattributes) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. `modifier_set`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set). |
| `modifier_set_id` | Conditional | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set_id). |
| `name` | Conditional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesname). |
| `position` | Conditional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesposition). |
| `product_id` | Conditional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1product_id). |
| `quantity_price_breaks` | Conditional | Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesquantity_price_breaks). |
| `release_date` | Conditional | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1release_date). |
| `selected_options` | Conditional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesselected_options). |
| `sku` | Conditional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku). |
| `status` | Conditional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesstatus). |
| `taxable` | Conditional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributestaxable). |
| `unit_dimensions` | Conditional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Per-unit measurement. Omitted when unknown. |
| `unit_price_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Conditional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Per-unit measurement. Omitted when unknown. |
| `updated_at` | Conditional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1updated_at). |
| `variant_id` | Conditional | string or null | Stable identifier of the product variant. `variant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1variant_id). |
| `version` | Conditional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion). |

#### ProductArchivedMerchantEventDataPreviousAttributes.default_variant line_item_tax_category values

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

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1

anyOf ProductVariantPreviousAttributes.

- Optional: `barcode`, `compare_at_price_money`, `created_at`, `delivery_configuration_reason`, `delivery_configuration_status`, `delivery_profile_id`, `effective_images`, `external_reference_id`, `gift_card_configuration`, `images`, `inventory_availability`, `inventory_item_id`, `inventory_tracking`, `is_available_for_sale`, `is_inheriting_product_images`, `license_key_configuration`, `line_item_tax_category`, `merchant_id`, `metadata`, `modifier_set`, `modifier_set_id`, `name`, `position`, `product_id`, `quantity_price_breaks`, `release_date`, `selected_options`, `sku`, `status`, `taxable`, `unit_dimensions`, `unit_price_money`, `unit_weight`, `updated_at`, `variant_id`, `version`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 2

anyOf variant 2.

- Undeclared: `barcode`, `compare_at_price_money`, `created_at`, `delivery_configuration_reason`, `delivery_configuration_status`, `delivery_profile_id`, `effective_images`, `external_reference_id`, `gift_card_configuration`, `images`, `inventory_availability`, `inventory_item_id`, `inventory_tracking`, `is_available_for_sale`, `is_inheriting_product_images`, `license_key_configuration`, `line_item_tax_category`, `merchant_id`, `metadata`, `modifier_set`, `modifier_set_id`, `name`, `position`, `product_id`, `quantity_price_breaks`, `release_date`, `selected_options`, `sku`, `status`, `taxable`, `unit_dimensions`, `unit_price_money`, `unit_weight`, `updated_at`, `variant_id`, `version`.
- Value shape: null. The product's default variant, when one is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.barcode

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.barcode](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.created_at

Declared alternatives: [ProductOptionPreviousAttributes.values variant 1.[] fields 1.created_at](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_reason

Declared alternatives: [ProductVariantPreviousAttributes.delivery_configuration_reason](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_reason).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_status

Declared alternatives: [ProductVariantPreviousAttributes.delivery_configuration_status](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_status).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_profile_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.effective_images

Declared alternatives: [ProductVariantPreviousAttributes.effective_images](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeseffective_images).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.images

Declared alternatives: [ProductVariantPreviousAttributes.images](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesimages).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_item_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_tracking

Declared alternatives: [ProductVariantPreviousAttributes.inventory_tracking](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_tracking).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_available_for_sale

Declared alternatives: [ProductVariantPreviousAttributes.is_available_for_sale](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_available_for_sale).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_inheriting_product_images

Declared alternatives: [ProductVariantPreviousAttributes.is_inheriting_product_images](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_inheriting_product_images).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.license_key_configuration

Declared alternatives: [ProductVariantPreviousAttributes.license_key_configuration](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeslicense_key_configuration).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.line_item_tax_category

Declared alternatives: [ProductVariantPreviousAttributes.line_item_tax_category](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesline_item_tax_category).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.merchant_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this resource..

- Value shape: string. Identifier of the merchant that owns this resource. Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this resource. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set

Declared alternatives: [ProductVariantPreviousAttributes.modifier_set](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the variant. `null` when no modifier set is attached..

- Value shape: string. ID of the modifier set attached to the variant. `null` when no modifier set is attached. ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.name

Declared alternatives: [ProductVariantPreviousAttributes.name](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesname).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.position

Declared alternatives: [ProductVariantPreviousAttributes.position](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesposition).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.product_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.quantity_price_breaks

Declared alternatives: [ProductVariantPreviousAttributes.quantity_price_breaks](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesquantity_price_breaks).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.release_date

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: string. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.selected_options

Declared alternatives: [ProductVariantPreviousAttributes.selected_options](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesselected_options).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.status

Declared alternatives: [ProductVariantPreviousAttributes.status](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesstatus).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.taxable

Declared alternatives: [ProductVariantPreviousAttributes.taxable](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributestaxable).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.updated_at

Declared alternatives: [ProductOptionPreviousAttributes.values variant 1.[] fields 1.updated_at](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1updated_at).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.variant_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.variant_id variant 1

anyOf variant 1: Stable identifier of the product variant..

- Value shape: string. Stable identifier of the product variant. Stable identifier of the product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product variant. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id variant 1

anyOf variant 1: Identifier of the variant chosen as this product's default, when one is set..

- Value shape: string. Identifier of the variant chosen as this product's default, when one is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the variant chosen as this product's default, when one is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status

### ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 1

anyOf variant 1: Delivery readiness aggregated across the product's non-archived variants..

- Value shape: string. Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Delivery readiness aggregated across the product's non-archived variants. 

### ProductArchivedMerchantEventDataPreviousAttributes.description

### ProductArchivedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Description of the product shown to buyers..

- Value shape: string. Description of the product shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the product shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductArchivedMerchantEventDataPreviousAttributes.images

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages).

### ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale

### ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 1

anyOf variant 1: Whether the product is active and has at least one active variant..

- Value shape: boolean. Whether the product is active and has at least one active variant. 

### ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the product is active and has at least one active variant. 

### ProductArchivedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id

### ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the product. `null` when no modifier set is attached..

- Value shape: string. ID of the modifier set attached to the product. `null` when no modifier set is attached. 

### ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the product. `null` when no modifier set is attached. 

### ProductArchivedMerchantEventDataPreviousAttributes.name

### ProductArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Product name shown to buyers..

- Value shape: string. Product name shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Product name shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.option_count

### ProductArchivedMerchantEventDataPreviousAttributes.option_count variant 1

anyOf variant 1: Number of active options belonging to the product..

- Value shape: integer. Number of active options belonging to the product. Number of active options belonging to the product. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.option_count variant 2

anyOf variant 2.

- Value shape: null. Number of active options belonging to the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.options

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1

anyOf variant 1: Product options and their non-archived values. Empty when the product has no options..

- Value shape: Array of [ProductOptionPreviousAttributes](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributes). Product options and their non-archived values. Empty when the product has no options. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 2

anyOf variant 2.

- Value shape: null. Product options and their non-archived values. Empty when the product has no options. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Option name, such as Size or Color. `name`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesname). |
| `option_id` | Optional | string or null | Stable identifier of the product option. `option_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoptions-variant-1-fields-1option_id). |
| `position` | Optional | integer or null | Display order among the product's options, starting at zero. `position`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this option belongs to. `product_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoptions-variant-1-fields-1product_id). |
| `status` | Optional | string or null | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1updated_at). |
| `values` | Optional | Array of [ProductOptionValuePreviousAttributes](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributes) or null | Values offered for this option, such as Small, Medium, and Large for Size. `values`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues). |

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.created_at

Declared alternatives: [ProductOptionPreviousAttributes.values variant 1.[] fields 1.created_at](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at).

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.name

Declared alternatives: [ProductOptionPreviousAttributes.name](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesname).

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.option_id

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.option_id variant 1

anyOf variant 1: Stable identifier of the product option..

- Value shape: string. Stable identifier of the product option. Stable identifier of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.option_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product option. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.position

Declared alternatives: [ProductOptionPreviousAttributes.position](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesposition).

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.product_id

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.product_id variant 1

anyOf variant 1: Identifier of the product this option belongs to..

- Value shape: string. Identifier of the product this option belongs to. Identifier of the product this option belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this option belongs to. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.status

Declared alternatives: [ProductOptionPreviousAttributes.status](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesstatus).

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.updated_at

Declared alternatives: [ProductOptionPreviousAttributes.values variant 1.[] fields 1.updated_at](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1updated_at).

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1.values

Declared alternatives: [ProductOptionPreviousAttributes.values](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues).

### ProductArchivedMerchantEventDataPreviousAttributes.product_id

### ProductArchivedMerchantEventDataPreviousAttributes.product_id variant 1

anyOf variant 1: Stable identifier of the product..

- Value shape: string. Stable identifier of the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.product_type

### ProductArchivedMerchantEventDataPreviousAttributes.product_type variant 1

anyOf variant 1: Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved..

- Value shape: string. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`.

### ProductArchivedMerchantEventDataPreviousAttributes.product_type variant 2

anyOf variant 2.

- Value shape: null. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. 

### ProductArchivedMerchantEventDataPreviousAttributes.status

### ProductArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Product lifecycle status. Archived products remain readable and cannot be edited..

- Value shape: string. Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Product lifecycle status. Archived products remain readable and cannot be edited. 

### ProductArchivedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductArchivedMerchantEventDataPreviousAttributes.variant_count

### ProductArchivedMerchantEventDataPreviousAttributes.variant_count variant 1

anyOf variant 1: Number of non-archived variants belonging to the product..

- Value shape: integer. Number of non-archived variants belonging to the product. Number of non-archived variants belonging to the product. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.variant_count variant 2

anyOf variant 2.

- Value shape: null. Number of non-archived variants belonging to the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

