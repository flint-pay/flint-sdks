[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedInstalledMerchantsEvent

The `product_variant.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"product_variant.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ProductVariantArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookProductVariant](../models/WebhookProductVariant.md#webhookproductvariant) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`. `object`: [field definitions](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributes). |

### ProductVariantArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_configuration_reason` | Optional | string | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `effective_images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. `gift_card_configuration`: [field definitions](../models/ProductVariant.md#productvariantgift_card_configuration). |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | The variant's own images in display order. An empty gallery inherits the product's images. |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `is_available_for_sale` | Required | boolean | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. |
| `is_inheriting_product_images` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedinstalledmerchantseventdataobject-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/Bundle.md#bundlemetadata). |
| `modifier_set_id` | Required | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. |
| `position` | Required | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. `quantity_price_breaks[]`: [field definitions](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantquantity_price_breaks). |
| `release_date` | Required | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Always present. Empty collections are returned as []. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. `unit_dimensions`: [field definitions](../models/ProductVariant.md#productvariantunit_dimensions). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base unit price before quantity price breaks, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/ProductVariant.md#productvariantunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. `unit_weight`: [field definitions](../models/ProductVariant.md#productvariantunit_weight). |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Required | string | Stable identifier of the product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

#### ProductVariantArchivedInstalledMerchantsEvent.data.object line_item_tax_category values

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

### ProductVariantArchivedInstalledMerchantsEvent.data.object.gift_card_configuration

Field definitions: [ProductVariant.gift_card_configuration](../models/ProductVariant.md#productvariantgift_card_configuration).

### ProductVariantArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

### ProductVariantArchivedInstalledMerchantsEvent.data.object.quantity_price_breaks[]

Field definitions: [PaymentLinkAvailableVariant.quantity_price_breaks[]](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantquantity_price_breaks).

### ProductVariantArchivedInstalledMerchantsEvent.data.object.unit_dimensions

Field definitions: [ProductVariant.unit_dimensions](../models/ProductVariant.md#productvariantunit_dimensions).

### ProductVariantArchivedInstalledMerchantsEvent.data.object.unit_price_money

Field definitions: [ProductVariant.unit_price_money](../models/ProductVariant.md#productvariantunit_price_money).

### ProductVariantArchivedInstalledMerchantsEvent.data.object.unit_weight

Field definitions: [ProductVariant.unit_weight](../models/ProductVariant.md#productvariantunit_weight).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesbarcode). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesimages). |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesis_inheriting_product_images). |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedinstalledmerchantseventdataprevious_attributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesname). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesquantity_price_breaks). |
| `release_date` | Optional | string or null or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEvent.md#productvariantarchivedinstalledmerchantseventdataprevious_attributesrelease_date). |
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

#### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes line_item_tax_category values

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

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.barcode

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.barcode](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesbarcode).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_reason

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_reason variant 1

anyOf variant 1: Reason the variant's delivery configuration needs attention..

- Value shape: string. Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the variant's delivery configuration needs attention. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status variant 1

anyOf variant 1: Whether the variant's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the variant's delivery configuration is ready, needs attention, or does not apply. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.effective_images

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.effective_images variant 1

anyOf variant 1: Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.effective_images variant 2

anyOf variant 2.

- Value shape: null. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.images

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.images variant 1

anyOf variant 1: The variant's own images in display order. An empty gallery inherits the product's images..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.images variant 2

anyOf variant 2.

- Value shape: null. The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_tracking

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_tracking variant 1

anyOf variant 1: Whether sales of this variant consume an inventory item..

- Value shape: string. Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`.

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether sales of this variant consume an inventory item. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale variant 1

anyOf variant 1: Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads..

- Value shape: boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_inheriting_product_images

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_inheriting_product_images variant 1

anyOf variant 1: Whether effective_images comes from the product's gallery because this variant's gallery is empty..

- Value shape: boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.is_inheriting_product_images variant 2

anyOf variant 2.

- Value shape: null. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.line_item_tax_category

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.line_item_tax_category variant 1

anyOf variant 1: Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default..

- Value shape: string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the variant. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the variant. `null` when no modifier set is attached. ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.name

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Variant name that distinguishes it from the product's other variants..

- Value shape: string. Variant name that distinguishes it from the product's other variants. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Variant name that distinguishes it from the product's other variants. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.position

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.position variant 1

anyOf variant 1: Display order among the product's variants, starting at zero..

- Value shape: integer. Display order among the product's variants, starting at zero. Display order among the product's variants, starting at zero. Format: `int32`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's variants, starting at zero. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.product_id

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.quantity_price_breaks

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.quantity_price_breaks variant 1

anyOf variant 1: Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks..

- Value shape: Array of [QuantityPriceBreakPreviousAttributes](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributes). Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.quantity_price_breaks variant 2

anyOf variant 2.

- Value shape: null. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.release_date

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: (string or null). Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.selected_options

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.selected_options variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Always present. Empty collections are returned as []. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.sku

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.sku](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributessku).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.status

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Variant lifecycle status. Archived variants remain readable and cannot be edited..

- Value shape: string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Variant lifecycle status. Archived variants remain readable and cannot be edited. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.taxable

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.taxable variant 1

anyOf variant 1: Whether this item is subject to tax..

- Value shape: boolean. Whether this item is subject to tax. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this item is subject to tax. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money

Base unit price before quantity price breaks, in the currency's smallest unit.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Base unit price before quantity price breaks, in the currency's smallest unit. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at).

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.variant_id

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.variant_id variant 1

anyOf variant 1: Stable identifier of the product variant..

- Value shape: string. Stable identifier of the product variant. Stable identifier of the product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product variant. 

### ProductVariantArchivedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.version](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesversion).

### ProductVariantArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

