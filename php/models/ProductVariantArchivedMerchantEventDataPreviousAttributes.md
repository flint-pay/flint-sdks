[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1effective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | Alternative shapes (see declared variants) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. `gift_card_configuration`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1gift_card_configuration). |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1images). |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1is_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1is_inheriting_product_images). |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedmerchanteventdatapreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1line_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1name). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1position). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1quantity_price_breaks). |
| `release_date` | Optional | string or null or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesrelease_date). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1selected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku). |
| `status` | Optional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1status). |
| `taxable` | Optional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1taxable). |
| `unit_dimensions` | Optional | Alternative shapes (see declared variants) | Per-unit measurement. Omitted when unknown. `unit_dimensions`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1unit_dimensions). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Optional | Alternative shapes (see declared variants) | Per-unit measurement. Omitted when unknown. `unit_weight`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1unit_weight). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `variant_id` | Optional | string or null | Stable identifier of the product variant. `variant_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesvariant_id). |
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

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_reason](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_configuration_reason).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_status](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_configuration_status).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.effective_images](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1effective_images).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.gift_card_configuration

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.gift_card_configuration](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1gift_card_configuration).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.images

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.images](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1images).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_tracking

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_tracking](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_tracking).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_available_for_sale

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_available_for_sale](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1is_available_for_sale).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_inheriting_product_images

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_inheriting_product_images](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1is_inheriting_product_images).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.line_item_tax_category

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.line_item_tax_category](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1line_item_tax_category).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.modifier_set_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the variant. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.name

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.name](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1name).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.position

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.position](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1position).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.quantity_price_breaks

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.quantity_price_breaks](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1quantity_price_breaks).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: (string or null). Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.selected_options](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1selected_options).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.status](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1status).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.taxable

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.taxable](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1taxable).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.unit_dimensions

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1unit_dimensions).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.unit_weight

Declared alternatives: [ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_weight](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1unit_weight).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.variant_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.variant_id variant 1

anyOf variant 1: Stable identifier of the product variant..

- Value shape: string. Stable identifier of the product variant. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product variant. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

