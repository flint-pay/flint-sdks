[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer or null | Number of active variants belonging to the product. `active_variant_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesactive_variant_count). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `default_variant` | Optional | Alternative shapes (see declared variants) | The product's default variant, when one is set. `default_variant`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant). |
| `default_variant_id` | Optional | string or null | Identifier of the variant chosen as this product's default, when one is set. `default_variant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant_id). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the product shown to buyers. `description`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the product is active and has at least one active variant. `is_available_for_sale`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the product. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Product name shown to buyers. `name`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesname). |
| `option_count` | Optional | integer or null | Number of active options belonging to the product. `option_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoption_count). |
| `options` | Optional | Array of [ProductOptionPreviousAttributes](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributes) or null | Product options and their non-archived values. Empty when the product has no options. `options`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoptions). |
| `price_range` | Optional | Alternative shapes (see declared variants) | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. `price_range`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesprice_range). |
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
| `created_at` | Conditional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at). |
| `delivery_configuration_reason` | Conditional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_configuration_reason). |
| `delivery_configuration_status` | Conditional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_configuration_status). |
| `delivery_profile_id` | Conditional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1delivery_profile_id). |
| `effective_images` | Conditional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1effective_images). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `gift_card_configuration` | Conditional | Alternative shapes (see declared variants) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. `gift_card_configuration`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1gift_card_configuration). |
| `images` | Conditional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1images). |
| `inventory_availability` | Conditional | Alternative shapes (see declared variants) | Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. `inventory_availability`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_availability). |
| `inventory_item_id` | Conditional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_item_id). |
| `inventory_tracking` | Conditional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_tracking). |
| `is_available_for_sale` | Conditional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1is_available_for_sale). |
| `is_inheriting_product_images` | Conditional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1is_inheriting_product_images). |
| `line_item_tax_category` | Conditional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productarchivedmerchanteventdatapreviousattributesdefault_variant-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1line_item_tax_category). |
| `merchant_id` | Conditional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1merchant_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set` | Conditional | Alternative shapes (see declared variants) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. `modifier_set`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set). |
| `modifier_set_id` | Conditional | string or null or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set_id). |
| `name` | Conditional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1name). |
| `position` | Conditional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1position). |
| `product_id` | Conditional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1product_id). |
| `quantity_price_breaks` | Conditional | Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1quantity_price_breaks). |
| `release_date` | Conditional | string or null or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1release_date). |
| `selected_options` | Conditional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1selected_options). |
| `sku` | Conditional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku). |
| `status` | Conditional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1status). |
| `taxable` | Conditional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1taxable). |
| `unit_dimensions` | Conditional | Alternative shapes (see declared variants) | Per-unit measurement. Omitted when unknown. `unit_dimensions`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1unit_dimensions). |
| `unit_price_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Conditional | Alternative shapes (see declared variants) | Per-unit measurement. Omitted when unknown. `unit_weight`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1unit_weight). |
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

- Optional: `barcode`, `created_at`, `delivery_configuration_reason`, `delivery_configuration_status`, `delivery_profile_id`, `effective_images`, `external_reference_id`, `gift_card_configuration`, `images`, `inventory_availability`, `inventory_item_id`, `inventory_tracking`, `is_available_for_sale`, `is_inheriting_product_images`, `line_item_tax_category`, `merchant_id`, `metadata`, `modifier_set`, `modifier_set_id`, `name`, `position`, `product_id`, `quantity_price_breaks`, `release_date`, `selected_options`, `sku`, `status`, `taxable`, `unit_dimensions`, `unit_price_money`, `unit_weight`, `updated_at`, `variant_id`, `version`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 2

anyOf variant 2.

- Undeclared: `barcode`, `created_at`, `delivery_configuration_reason`, `delivery_configuration_status`, `delivery_profile_id`, `effective_images`, `external_reference_id`, `gift_card_configuration`, `images`, `inventory_availability`, `inventory_item_id`, `inventory_tracking`, `is_available_for_sale`, `is_inheriting_product_images`, `line_item_tax_category`, `merchant_id`, `metadata`, `modifier_set`, `modifier_set_id`, `name`, `position`, `product_id`, `quantity_price_breaks`, `release_date`, `selected_options`, `sku`, `status`, `taxable`, `unit_dimensions`, `unit_price_money`, `unit_weight`, `updated_at`, `variant_id`, `version`.
- Value shape: null. The product's default variant, when one is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.barcode

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.barcode](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.created_at

Declared alternatives: [ProductOptionPreviousAttributes.values variant 1.[] fields 1.created_at](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_reason

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_reason variant 1

anyOf variant 1: Reason the variant's delivery configuration needs attention..

- Value shape: string. Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the variant's delivery configuration needs attention. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_status

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_status variant 1

anyOf variant 1: Whether the variant's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the variant's delivery configuration is ready, needs attention, or does not apply. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_profile_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.effective_images

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.effective_images variant 1

anyOf variant 1: Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.effective_images variant 2

anyOf variant 2.

- Value shape: null. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.effective_images variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.gift_card_configuration

Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up.

Field definitions: [shared fields](OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1configuration).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.gift_card_configuration variant 1

anyOf GiftCardProductConfigurationPreviousAttributes.

- Optional: `custom_amount_bounds`, `face_value_money`, `price_mode`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.gift_card_configuration variant 2

anyOf variant 2.

- Undeclared: `custom_amount_bounds`, `face_value_money`, `price_mode`.
- Value shape: null. Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.gift_card_configuration variant 1.custom_amount_bounds

Declared alternatives: [OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.custom_amount_bounds](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1configuration-variant-1custom_amount_bounds).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.gift_card_configuration variant 1.price_mode

Declared alternatives: [OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.price_mode](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1configuration-variant-1price_mode).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.images

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.images variant 1

anyOf variant 1: The variant's own images in display order. An empty gallery inherits the product's images..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.images variant 2

anyOf variant 2.

- Value shape: null. The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.images variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability

Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Conditional | integer or null or null | The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. `available_quantity`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_availability-variant-1available_quantity). |
| `inventory_routing_source` | Conditional | Alternative shapes (see declared variants) or null | The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. `inventory_routing_source`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_availability-variant-1inventory_routing_source). |
| `status` | Conditional | string or null | Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`. `status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1inventory_availability-variant-1status). |

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1

anyOf ProductVariantInventoryAvailabilityPreviousAttributes.

- Optional: `available_quantity`, `inventory_routing_source`, `status`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 2

anyOf variant 2.

- Undeclared: `available_quantity`, `inventory_routing_source`, `status`.
- Value shape: null. Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.available_quantity

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.available_quantity variant 1

anyOf variant 1: The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`..

- Value shape: (integer or null). The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: `int64`. minimum: `0`. maximum: `9999`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.available_quantity variant 2

anyOf variant 2.

- Value shape: null. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source

The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set.

Field definitions: [shared fields](InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source variant 1

anyOf variant 1: The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set.; anyOf InventoryRoutingSourcePreviousAttributes.

- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source variant 2, 3

anyOf variant 1: The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set.; anyOf variant 2; anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source variant 1.inventory_allocation_policy_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_id).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source variant 1.inventory_allocation_policy_revision_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_revision_id).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source variant 1.location_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1location_id).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.inventory_routing_source variant 1.type

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.type](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1type).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.status

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.status variant 1

anyOf variant 1: Whether one order line can buy the variant now..

- Value shape: string. Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_availability variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether one order line can buy the variant now. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_item_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_tracking

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_tracking variant 1

anyOf variant 1: Whether sales of this variant consume an inventory item..

- Value shape: string. Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether sales of this variant consume an inventory item. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_available_for_sale

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_available_for_sale variant 1

anyOf variant 1: Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads..

- Value shape: boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_inheriting_product_images

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_inheriting_product_images variant 1

anyOf variant 1: Whether effective_images comes from the product's gallery because this variant's gallery is empty..

- Value shape: boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.is_inheriting_product_images variant 2

anyOf variant 2.

- Value shape: null. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.line_item_tax_category

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.line_item_tax_category variant 1

anyOf variant 1: Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default..

- Value shape: string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. 

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

Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string or null | When the modifier set was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set-variant-1created_at). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `merchant_id` | Conditional | string or null | Identifier of the merchant that owns this modifier set. `merchant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set-variant-1merchant_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `modifier_groups` | Conditional | Array of [ModifierSetGroupPreviousAttributes](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributes) or null | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups). |
| `modifier_set_id` | Conditional | string or null | Stable identifier of the modifier set assigned to catalog items. `modifier_set_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set-variant-1modifier_set_id). |
| `name` | Conditional | string or null | Name used to identify this modifier set. `name`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesname). |
| `status` | Conditional | string or null | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Conditional | string or null | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant-variant-1modifier_set-variant-1updated_at). |
| `version` | Conditional | integer or null | Version of the modifier set, including the groups it contains. `version`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesversion). |

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1

anyOf variant 1: Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`.; anyOf ModifierSetPreviousAttributes.

- Optional: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `modifier_groups`, `modifier_set_id`, `name`, `status`, `updated_at`, `version`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 2, 3

anyOf variant 1: Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`.; anyOf variant 2; anyOf variant 2.

- Undeclared: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `modifier_groups`, `modifier_set_id`, `name`, `status`, `updated_at`, `version`.
- Value shape: null. Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.created_at

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.created_at variant 1

anyOf variant 1: When the modifier set was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier set was created, as an RFC3339 timestamp. When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set was created, as an RFC3339 timestamp. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.merchant_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier set..

- Value shape: string. Identifier of the merchant that owns this modifier set. Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier set. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.modifier_groups

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.modifier_set_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.modifier_set_id variant 1

anyOf variant 1: Stable identifier of the modifier set assigned to catalog items..

- Value shape: string. Stable identifier of the modifier set assigned to catalog items. Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier set assigned to catalog items. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.name

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.name](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesname).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.status

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.status](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesstatus).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.updated_at

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.updated_at variant 1

anyOf variant 1: When the modifier set or any group it contains last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set variant 1.version

Declared alternatives: [ModifierSetArchivedMerchantEventDataPreviousAttributes.version](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesversion).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the variant. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the variant. `null` when no modifier set is attached. ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.name

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.name variant 1

anyOf variant 1: Variant name that distinguishes it from the product's other variants..

- Value shape: string. Variant name that distinguishes it from the product's other variants. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Variant name that distinguishes it from the product's other variants. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.position

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.position variant 1

anyOf variant 1: Display order among the product's variants, starting at zero..

- Value shape: integer. Display order among the product's variants, starting at zero. Display order among the product's variants, starting at zero. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's variants, starting at zero. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.product_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.quantity_price_breaks

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.quantity_price_breaks variant 1

anyOf variant 1: Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks..

- Value shape: Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes). Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.quantity_price_breaks variant 2

anyOf variant 2.

- Value shape: null. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.release_date

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: (string or null). Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.selected_options

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.selected_options variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Always present. Empty collections are returned as []. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.selected_options variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentPreviousAttributes.variant variant 1.selected_options variant 1.[] fields 1](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant-variant-1selected_options-variant-1-fields-1).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.status

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.status variant 1

anyOf variant 1: Variant lifecycle status. Archived variants remain readable and cannot be edited..

- Value shape: string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Variant lifecycle status. Archived variants remain readable and cannot be edited. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.taxable

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.taxable variant 1

anyOf variant 1: Whether this item is subject to tax..

- Value shape: boolean. Whether this item is subject to tax. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this item is subject to tax. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions

Per-unit measurement. Omitted when unknown.

Field definitions: [shared fields](OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions variant 1

anyOf DimensionsPreviousAttributes.

- Optional: `height`, `length`, `unit`, `width`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions variant 2

anyOf variant 2.

- Undeclared: `height`, `length`, `unit`, `width`.
- Value shape: null. Per-unit measurement. Omitted when unknown. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions variant 1.height

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions variant 1.height](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions variant 1.length

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions variant 1.height](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions variant 1.unit

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions variant 1.unit](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1unit).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_dimensions variant 1.width

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions variant 1.height](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_weight

Per-unit measurement. Omitted when unknown.

Field definitions: [shared fields](OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_weight variant 1

anyOf WeightPreviousAttributes.

- Optional: `unit`, `value`.

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_weight variant 2

anyOf variant 2.

- Undeclared: `unit`, `value`.
- Value shape: null. Per-unit measurement. Omitted when unknown. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_weight variant 1.unit

Declared alternatives: [OrderLineItemPreviousAttributes.unit_weight variant 1.unit](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight-variant-1unit).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant variant 1.unit_weight variant 1.value

Declared alternatives: [OrderLineItemPreviousAttributes.unit_weight variant 1.value](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight-variant-1value).

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

- Value shape: (string or null). ID of the modifier set attached to the product. `null` when no modifier set is attached. 

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

### ProductArchivedMerchantEventDataPreviousAttributes.price_range

Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ.

Field definitions: [shared fields](PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1resolved_price_range).

### ProductArchivedMerchantEventDataPreviousAttributes.price_range variant 1

anyOf ProductPriceRangePreviousAttributes.

- Optional: `max_unit_price_money`, `min_unit_price_money`.

### ProductArchivedMerchantEventDataPreviousAttributes.price_range variant 2

anyOf variant 2.

- Undeclared: `max_unit_price_money`, `min_unit_price_money`.
- Value shape: null. Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. 

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

