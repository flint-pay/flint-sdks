[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesimages). |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesis_inheriting_product_images). |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedmerchanteventdatapreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesname). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesquantity_price_breaks). |
| `release_date` | Optional | string or null or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesrelease_date). |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku). |
| `status` | Optional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesstatus). |
| `taxable` | Optional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributestaxable). |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) or null | Per-unit measurement. Omitted when unknown. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) or null | Per-unit measurement. Omitted when unknown. |
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

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_reason variant 1

anyOf variant 1: Reason the variant's delivery configuration needs attention..

- Value shape: string. Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the variant's delivery configuration needs attention. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 1

anyOf variant 1: Whether the variant's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the variant's delivery configuration is ready, needs attention, or does not apply. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images

### ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images variant 1

anyOf variant 1: Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery..

- Value shape: Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment). Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images variant 2

anyOf variant 2.

- Value shape: null. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images variant 1.[] fields 1

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.images

### ProductVariantArchivedMerchantEventDataPreviousAttributes.images variant 1

anyOf variant 1: The variant's own images in display order. An empty gallery inherits the product's images..

- Value shape: Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment). The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.images variant 2

anyOf variant 2.

- Value shape: null. The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_tracking

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_tracking variant 1

anyOf variant 1: Whether sales of this variant consume an inventory item..

- Value shape: string. Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`.

### ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether sales of this variant consume an inventory item. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_available_for_sale

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 1

anyOf variant 1: Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads..

- Value shape: boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_inheriting_product_images

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_inheriting_product_images variant 1

anyOf variant 1: Whether effective_images comes from the product's gallery because this variant's gallery is empty..

- Value shape: boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.is_inheriting_product_images variant 2

anyOf variant 2.

- Value shape: null. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.line_item_tax_category

### ProductVariantArchivedMerchantEventDataPreviousAttributes.line_item_tax_category variant 1

anyOf variant 1: Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default..

- Value shape: string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ProductVariantArchivedMerchantEventDataPreviousAttributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. 

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

### ProductVariantArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Variant name that distinguishes it from the product's other variants..

- Value shape: string. Variant name that distinguishes it from the product's other variants. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Variant name that distinguishes it from the product's other variants. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.position

### ProductVariantArchivedMerchantEventDataPreviousAttributes.position variant 1

anyOf variant 1: Display order among the product's variants, starting at zero..

- Value shape: integer. Display order among the product's variants, starting at zero. Display order among the product's variants, starting at zero. Format: `int32`. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's variants, starting at zero. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.quantity_price_breaks

### ProductVariantArchivedMerchantEventDataPreviousAttributes.quantity_price_breaks variant 1

anyOf variant 1: Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks..

- Value shape: Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak). Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.quantity_price_breaks variant 2

anyOf variant 2.

- Value shape: null. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: (string or null). Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options

### ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption). Always present. Empty collections are returned as []. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options variant 1.[] fields 1

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductVariantArchivedMerchantEventDataPreviousAttributes.status

### ProductVariantArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Variant lifecycle status. Archived variants remain readable and cannot be edited..

- Value shape: string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductVariantArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Variant lifecycle status. Archived variants remain readable and cannot be edited. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.taxable

### ProductVariantArchivedMerchantEventDataPreviousAttributes.taxable variant 1

anyOf variant 1: Whether this item is subject to tax..

- Value shape: boolean. Whether this item is subject to tax. 

### ProductVariantArchivedMerchantEventDataPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this item is subject to tax. 

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

