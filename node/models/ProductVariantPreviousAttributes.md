[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesbarcode). |
| `compare_at_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reference unit price for sale display, in the same currency and strictly greater than unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity price breaks. `compare_at_price_money`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributescompare_at_price_money). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesimages). |
| `inventory_availability` | Optional | [ProductVariantInventoryAvailabilityPreviousAttributes](../models/ProductVariantInventoryAvailabilityPreviousAttributes.md#productvariantinventoryavailabilitypreviousattributes) or null | Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesis_inheriting_product_images). |
| `license_key_configuration` | Optional | ([LicenseKeyConfigurationPreviousAttributes](../models/LicenseKeyConfigurationPreviousAttributes.md#licensekeyconfigurationpreviousattributes) or null) or null | License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantpreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_set` | Optional | [ModifierSetPreviousAttributes](../models/ModifierSetPreviousAttributes.md#modifiersetpreviousattributes) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. |
| `modifier_set_id` | Optional | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesname). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesquantity_price_breaks). |
| `release_date` | Optional | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesrelease_date). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributessku). |
| `status` | Optional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `taxable` | Optional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributestaxable). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Per-unit measurement. Omitted when unknown. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base unit price before quantity price breaks, in the currency's smallest unit. `unit_price_money`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesunit_price_money). |
| `unit_weight` | Optional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Per-unit measurement. Omitted when unknown. |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `variant_id` | Optional | string or null | Stable identifier of the product variant. `variant_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesvariant_id). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesversion). |

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

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.barcode](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesbarcode).

### ProductVariantPreviousAttributes.compare_at_price_money

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.compare_at_price_money](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributescompare_at_price_money).

### ProductVariantPreviousAttributes.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at).

### ProductVariantPreviousAttributes.delivery_configuration_reason

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_reason](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_reason).

### ProductVariantPreviousAttributes.delivery_configuration_status

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_status).

### ProductVariantPreviousAttributes.delivery_profile_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_profile_id).

### ProductVariantPreviousAttributes.effective_images

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.effective_images](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributeseffective_images).

### ProductVariantPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ProductVariantPreviousAttributes.images

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.images](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesimages).

### ProductVariantPreviousAttributes.inventory_item_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesinventory_item_id).

### ProductVariantPreviousAttributes.inventory_tracking

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_tracking](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesinventory_tracking).

### ProductVariantPreviousAttributes.is_available_for_sale

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesis_available_for_sale).

### ProductVariantPreviousAttributes.is_inheriting_product_images

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_inheriting_product_images](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesis_inheriting_product_images).

### ProductVariantPreviousAttributes.line_item_tax_category

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.line_item_tax_category](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesline_item_tax_category).

### ProductVariantPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id).

### ProductVariantPreviousAttributes.metadata

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata).

### ProductVariantPreviousAttributes.modifier_set_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesmodifier_set_id).

### ProductVariantPreviousAttributes.name

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.name](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesname).

### ProductVariantPreviousAttributes.position

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.position](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesposition).

### ProductVariantPreviousAttributes.product_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.product_id](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesproduct_id).

### ProductVariantPreviousAttributes.quantity_price_breaks

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.quantity_price_breaks](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesquantity_price_breaks).

### ProductVariantPreviousAttributes.release_date

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.release_date](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesrelease_date).

### ProductVariantPreviousAttributes.selected_options

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.selected_options](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesselected_options).

### ProductVariantPreviousAttributes.sku

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.sku](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributessku).

### ProductVariantPreviousAttributes.status

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.status](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesstatus).

### ProductVariantPreviousAttributes.taxable

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.taxable](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributestaxable).

### ProductVariantPreviousAttributes.unit_price_money

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesunit_price_money).

### ProductVariantPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at).

### ProductVariantPreviousAttributes.variant_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.variant_id](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesvariant_id).

### ProductVariantPreviousAttributes.version

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.version](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesversion).

