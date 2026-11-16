[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedMerchantEvent

The `product_variant.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ProductVariantArchivedMerchantEventData](../models/ProductVariantArchivedMerchantEventData.md#productvariantarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"product_variant.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ProductVariantArchivedMerchantEventRequest](../models/ProductVariantArchivedMerchantEventRequest.md#productvariantarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ProductVariantArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`. `object`: [field definitions](../models/ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1previous_attributes). |

### ProductVariantArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_configuration_reason` | Optional | string | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `effective_images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | The variant's own images in display order. An empty gallery inherits the product's images. `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `is_available_for_sale` | Required | boolean | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. |
| `is_inheriting_product_images` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedmerchanteventdata-fields-1object-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set_id` | Required | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. |
| `position` | Required | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. |
| `release_date` | Required | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Always present. Empty collections are returned as []. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base unit price before quantity price breaks, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Required | string | Stable identifier of the product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

#### ProductVariantArchivedMerchantEvent.data fields 1.object line_item_tax_category values

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

### ProductVariantArchivedMerchantEvent.data fields 1.object.effective_images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductVariantArchivedMerchantEvent.data fields 1.object.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductVariantArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductVariantArchivedMerchantEvent.data fields 1.object.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

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
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedmerchanteventdata-fields-1previous_attributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesline_item_tax_category). |
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

#### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes line_item_tax_category values

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

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.barcode

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.barcode](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.delivery_configuration_reason

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_reason](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_configuration_reason).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.delivery_configuration_status

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_configuration_status).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.delivery_profile_id

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.delivery_profile_id](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesdelivery_profile_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.effective_images

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.effective_images](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributeseffective_images).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.images

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.images](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesimages).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.inventory_item_id

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_item_id](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesinventory_item_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.inventory_tracking

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.inventory_tracking](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesinventory_tracking).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.is_available_for_sale

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.is_available_for_sale](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesis_available_for_sale).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.is_inheriting_product_images

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.is_inheriting_product_images](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesis_inheriting_product_images).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.line_item_tax_category

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.line_item_tax_category](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesline_item_tax_category).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.modifier_set_id

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.modifier_set_id](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesmodifier_set_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.name](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesname).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.position

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.position](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesposition).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.product_id

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.product_id](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesproduct_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.quantity_price_breaks

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.quantity_price_breaks](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesquantity_price_breaks).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.release_date

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.release_date](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesrelease_date).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.selected_options

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.selected_options](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesselected_options).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.sku

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.sku](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.status](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesstatus).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.taxable

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.taxable](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributestaxable).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.variant_id

Declared alternatives: [ProductVariantArchivedMerchantEventDataPreviousAttributes.variant_id](../models/ProductVariantArchivedMerchantEventDataPreviousAttributes.md#productvariantarchivedmerchanteventdatapreviousattributesvariant_id).

### ProductVariantArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

