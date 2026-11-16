[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesimages). |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_inheriting_product_images). |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedmerchanteventdatapreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
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

#### ProductVariantArchivedMerchantEventDataPreviousAttributes line_item_tax_category values

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

### ProductVariantArchivedMerchantEventDataPreviousAttributes.barcode

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.barcode](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_reason

Declared alternatives: [ProductVariantPreviousAttributes.delivery_configuration_reason](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_reason).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status

Declared alternatives: [ProductVariantPreviousAttributes.delivery_configuration_status](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_configuration_status).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id

Declared alternatives: [ProductVariantPreviousAttributes.delivery_profile_id](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesdelivery_profile_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images

Declared alternatives: [ProductVariantPreviousAttributes.effective_images](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributeseffective_images).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.images

Declared alternatives: [ProductVariantPreviousAttributes.images](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesimages).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id

Declared alternatives: [ProductVariantPreviousAttributes.inventory_item_id](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_item_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_tracking

Declared alternatives: [ProductVariantPreviousAttributes.inventory_tracking](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesinventory_tracking).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_available_for_sale

Declared alternatives: [ProductVariantPreviousAttributes.is_available_for_sale](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_available_for_sale).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_inheriting_product_images

Declared alternatives: [ProductVariantPreviousAttributes.is_inheriting_product_images](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesis_inheriting_product_images).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.line_item_tax_category

Declared alternatives: [ProductVariantPreviousAttributes.line_item_tax_category](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesline_item_tax_category).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.modifier_set_id

Declared alternatives: [ProductVariantPreviousAttributes.modifier_set_id](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesmodifier_set_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.name

Declared alternatives: [ProductVariantPreviousAttributes.name](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesname).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.position

Declared alternatives: [ProductVariantPreviousAttributes.position](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesposition).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id

Declared alternatives: [ProductVariantPreviousAttributes.product_id](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesproduct_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.quantity_price_breaks

Declared alternatives: [ProductVariantPreviousAttributes.quantity_price_breaks](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesquantity_price_breaks).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date

Declared alternatives: [ProductVariantPreviousAttributes.release_date](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesrelease_date).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options

Declared alternatives: [ProductVariantPreviousAttributes.selected_options](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesselected_options).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ProductVariantPreviousAttributes.status](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesstatus).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.taxable

Declared alternatives: [ProductVariantPreviousAttributes.taxable](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributestaxable).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.variant_id

Declared alternatives: [ProductVariantPreviousAttributes.variant_id](../models/ProductVariantPreviousAttributes.md#productvariantpreviousattributesvariant_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

