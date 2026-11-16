[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantArchivedInstalledMerchantsEventInput

The `product_variant.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"product_variant.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ProductVariantArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookProductVariantInput](../models/WebhookProductVariantInput.md#webhookproductvariantinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`. `object`: [field definitions](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributes). |

### ProductVariantArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_configuration_reason` | Optional | string | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `effective_images` | Required | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationInput](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinput) | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Required | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | The variant's own images in display order. An empty gallery inherits the product's images. |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `is_available_for_sale` | Required | boolean | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. |
| `is_inheriting_product_images` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedinstalledmerchantseventinputdataobject-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `modifier_set_id` | Required | string or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. |
| `position` | Required | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreakInput](../models/QuantityPriceBreakInput.md#quantitypricebreakinput) | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. |
| `release_date` | Required | string or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) | Always present. Empty collections are returned as []. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Base unit price before quantity price breaks, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Required | string | Stable identifier of the product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

#### ProductVariantArchivedInstalledMerchantsEventInput.data.object line_item_tax_category values

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

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesbarcode). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `delivery_configuration_reason` | Optional | string or null | Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. `delivery_profile_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_profile_id). |
| `effective_images` | Optional | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) or null | Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. `effective_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributeseffective_images). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationInput](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinput) or null | Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. |
| `images` | Optional | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) or null | The variant's own images in display order. An empty gallery inherits the product's images. `images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesimages). |
| `inventory_item_id` | Optional | string or null | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. `inventory_item_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesinventory_item_id). |
| `inventory_tracking` | Optional | string or null | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesinventory_tracking). |
| `is_available_for_sale` | Optional | boolean or null | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. `is_available_for_sale`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesis_available_for_sale). |
| `is_inheriting_product_images` | Optional | boolean or null | Whether effective_images comes from the product's gallery because this variant's gallery is empty. `is_inheriting_product_images`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesis_inheriting_product_images). |
| `line_item_tax_category` | Optional | string or null | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productvariantarchivedinstalledmerchantseventinputdataprevious_attributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesline_item_tax_category). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Caller-owned metadata stored on this resource. |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the variant. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Variant name that distinguishes it from the product's other variants. `name`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `position` | Optional | integer or null | Display order among the product's variants, starting at zero. `position`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this variant belongs to. `product_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesproduct_id). |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakInput](../models/QuantityPriceBreakInput.md#quantitypricebreakinput) or null | Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. `quantity_price_breaks`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesquantity_price_breaks). |
| `release_date` | Optional | string or null or null | Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. `release_date`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesrelease_date). |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) or null | Always present. Empty collections are returned as []. `selected_options`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributessku). |
| `status` | Optional | string or null | Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `taxable` | Optional | boolean or null | Whether this item is subject to tax. `taxable`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributestaxable). |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) or null | Per-unit measurement. Omitted when unknown. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Base unit price before quantity price breaks, in the currency's smallest unit. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) or null | Per-unit measurement. Omitted when unknown. |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `variant_id` | Optional | string or null | Stable identifier of the product variant. `variant_id`: [declared alternatives](../models/ProductVariantArchivedInstalledMerchantsEventInput.md#productvariantarchivedinstalledmerchantseventinputdataprevious_attributesvariant_id). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion). |

#### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes line_item_tax_category values

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

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.barcode

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.barcode](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesbarcode).

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_reason

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_reason variant 1

anyOf variant 1: Reason the variant's delivery configuration needs attention..

- Value shape: string. Reason the variant's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the variant's delivery configuration needs attention. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status variant 1

anyOf variant 1: Whether the variant's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the variant's delivery configuration is ready, needs attention, or does not apply. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_profile_id

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_profile_id variant 1

anyOf variant 1: Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply..

- Value shape: string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.effective_images

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.effective_images variant 1

anyOf variant 1: Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery..

- Value shape: Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput). Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.effective_images variant 2

anyOf variant 2.

- Value shape: null. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.images

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.images variant 1

anyOf variant 1: The variant's own images in display order. An empty gallery inherits the product's images..

- Value shape: Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput). The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.images variant 2

anyOf variant 2.

- Value shape: null. The variant's own images in display order. An empty gallery inherits the product's images. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_item_id

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_item_id variant 1

anyOf variant 1: The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item..

- Value shape: string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_tracking

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_tracking variant 1

anyOf variant 1: Whether sales of this variant consume an inventory item..

- Value shape: string. Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`.

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether sales of this variant consume an inventory item. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale variant 1

anyOf variant 1: Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads..

- Value shape: boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_inheriting_product_images

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_inheriting_product_images variant 1

anyOf variant 1: Whether effective_images comes from the product's gallery because this variant's gallery is empty..

- Value shape: boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.is_inheriting_product_images variant 2

anyOf variant 2.

- Value shape: null. Whether effective_images comes from the product's gallery because this variant's gallery is empty. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.line_item_tax_category

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.line_item_tax_category variant 1

anyOf variant 1: Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default..

- Value shape: string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id).

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the variant. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the variant. `null` when no modifier set is attached. ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Variant name that distinguishes it from the product's other variants..

- Value shape: string. Variant name that distinguishes it from the product's other variants. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Variant name that distinguishes it from the product's other variants. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.position

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.position variant 1

anyOf variant 1: Display order among the product's variants, starting at zero..

- Value shape: integer. Display order among the product's variants, starting at zero. Display order among the product's variants, starting at zero. Format: `int32`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's variants, starting at zero. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id variant 1

anyOf variant 1: Identifier of the product this variant belongs to..

- Value shape: string. Identifier of the product this variant belongs to. Identifier of the product this variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this variant belongs to. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.quantity_price_breaks

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.quantity_price_breaks variant 1

anyOf variant 1: Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks..

- Value shape: Array of [QuantityPriceBreakInput](../models/QuantityPriceBreakInput.md#quantitypricebreakinput). Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: `10`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.quantity_price_breaks variant 2

anyOf variant 2.

- Value shape: null. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.release_date

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.release_date variant 1

anyOf variant 1: Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date..

- Value shape: (string or null). Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: `date`. Example: `"2026-08-02"`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.release_date variant 2

anyOf variant 2.

- Value shape: null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.selected_options

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.selected_options variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput). Always present. Empty collections are returned as []. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.sku

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.sku](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributessku).

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Variant lifecycle status. Archived variants remain readable and cannot be edited..

- Value shape: string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Variant lifecycle status. Archived variants remain readable and cannot be edited. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.taxable

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.taxable variant 1

anyOf variant 1: Whether this item is subject to tax..

- Value shape: boolean. Whether this item is subject to tax. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this item is subject to tax. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_id

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_id variant 1

anyOf variant 1: Stable identifier of the product variant..

- Value shape: string. Stable identifier of the product variant. Stable identifier of the product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product variant. 

### ProductVariantArchivedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.version](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion).

### ProductVariantArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

