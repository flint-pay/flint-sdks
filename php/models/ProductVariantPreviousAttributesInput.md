[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesbarcode). |
| `compare_at_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Reference unit price for sale display, in the same currency and strictly greater than unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity price breaks. |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentPreviousAttributesInput](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinput) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationPreviousAttributesInput](../models/GiftCardProductConfigurationPreviousAttributesInput.md#giftcardproductconfigurationpreviousattributesinput) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributesInput](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinput) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesimages). |
| `inventory_availability` | Optional | [ProductVariantInventoryAvailabilityPreviousAttributesInput](../models/ProductVariantInventoryAvailabilityPreviousAttributesInput.md#productvariantinventoryavailabilitypreviousattributesinput) or null | Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesis_inheriting_product_images). |
| `license_key_configuration` | Optional | ([LicenseKeyConfigurationPreviousAttributesInput](../models/LicenseKeyConfigurationPreviousAttributesInput.md#licensekeyconfigurationpreviousattributesinput) or null) or null | License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantpreviousattributesinput-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata stored on this resource. |
| `modifier_set` | Optional | [ModifierSetPreviousAttributesInput](../models/ModifierSetPreviousAttributesInput.md#modifiersetpreviousattributesinput) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. |
| `modifier_set_id` | Optional | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakPreviousAttributesInput](../models/QuantityPriceBreakPreviousAttributesInput.md#quantitypricebreakpreviousattributesinput) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesquantity_price_breaks). |
| `release_date` | Optional | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesrelease_date). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributessku). |
| `status` | Optional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `taxable` | Optional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributestaxable). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributesInput](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinput) or null | Per-unit measurement. Omitted when unknown. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Optional | [WeightPreviousAttributesInput](../models/WeightPreviousAttributesInput.md#weightpreviousattributesinput) or null | Per-unit measurement. Omitted when unknown. |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `variant_id` | Optional | string or null | Stable identifier of the product variant. `variant_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesvariant_id). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion). |

#### ProductVariantPreviousAttributesInput line_item_tax_category values

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

### ProductVariantPreviousAttributesInput.barcode

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.barcode](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesbarcode).

### ProductVariantPreviousAttributesInput.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ProductVariantPreviousAttributesInput.delivery_configuration_reason

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_reason](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_reason).

### ProductVariantPreviousAttributesInput.delivery_configuration_status

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_status).

### ProductVariantPreviousAttributesInput.delivery_profile_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_profile_id](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_profile_id).

### ProductVariantPreviousAttributesInput.effective_images

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.effective_images](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributeseffective_images).

### ProductVariantPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ProductVariantPreviousAttributesInput.images

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.images](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesimages).

### ProductVariantPreviousAttributesInput.inventory_item_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_item_id](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesinventory_item_id).

### ProductVariantPreviousAttributesInput.inventory_tracking

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_tracking](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesinventory_tracking).

### ProductVariantPreviousAttributesInput.is_available_for_sale

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesis_available_for_sale).

### ProductVariantPreviousAttributesInput.is_inheriting_product_images

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_inheriting_product_images](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesis_inheriting_product_images).

### ProductVariantPreviousAttributesInput.line_item_tax_category

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.line_item_tax_category](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesline_item_tax_category).

### ProductVariantPreviousAttributesInput.merchant_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id).

### ProductVariantPreviousAttributesInput.modifier_set_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id).

### ProductVariantPreviousAttributesInput.name

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.name](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesname).

### ProductVariantPreviousAttributesInput.position

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.position](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesposition).

### ProductVariantPreviousAttributesInput.product_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesproduct_id).

### ProductVariantPreviousAttributesInput.quantity_price_breaks

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.quantity_price_breaks](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesquantity_price_breaks).

### ProductVariantPreviousAttributesInput.release_date

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.release_date](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesrelease_date).

### ProductVariantPreviousAttributesInput.selected_options

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.selected_options](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesselected_options).

### ProductVariantPreviousAttributesInput.sku

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.sku](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributessku).

### ProductVariantPreviousAttributesInput.status

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.status](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesstatus).

### ProductVariantPreviousAttributesInput.taxable

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.taxable](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributestaxable).

### ProductVariantPreviousAttributesInput.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ProductVariantPreviousAttributesInput.variant_id

Declared alternatives: [ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_id](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesvariant_id).

### ProductVariantPreviousAttributesInput.version

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.version](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion).

