[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductResponse

A response containing `Product` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Product](../models/Product.md#product) | The requested product data. An item offered in the merchant's catalog. `data`: [field definitions](../models/ProductResponse.md#productresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ProductResponse.data

The requested product data. An item offered in the merchant's catalog.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer | Number of active variants belonging to the product. Format: `int32`. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Always present. Empty collections are returned as []. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_variant` | Optional | [ProductVariant](../models/ProductVariant.md#productvariant) | The product's default variant, when one is set. A specific purchasable version of a product. `default_variant`: [field definitions](../models/ProductResponse.md#productresponsedatadefault_variant). |
| `default_variant_id` | Optional | string | Identifier of the variant chosen as this product's default, when one is set. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the product shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images attached to this resource, in display order. The first image is primary. `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `is_available_for_sale` | Optional | boolean | Whether the product is active and has at least one active variant. |
| `matched_variant` | Optional | [ProductVariantMatch](../models/ProductVariantMatch.md#productvariantmatch) | On product list rows, the first non-archived variant by position, then variant_id, that matches all exact variant filters. Without exact variant filters, identifies the first variant whose SKU matches query. Omitted when no variant matches; a product name or description match alone does not set it. Page the product's variants to find all matches. A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match. `matched_variant`: [field definitions](../models/ProductResponse.md#productresponsedatamatched_variant). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. `modifier_set`: [declared alternatives](../models/BundleResponse.md#bundleresponsedatamodifier_set). |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Product name shown to buyers. |
| `option_count` | Optional | integer | Number of active options belonging to the product. Format: `int32`. |
| `options` | Required | Array of [ProductOption](../models/ProductOption.md#productoption) | Product options and their non-archived values. Empty when the product has no options. `options[]`: [field definitions](../models/ProductResponse.md#productresponsedataoptions). |
| `price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants. |
| `product_id` | Required | string | Stable identifier of the product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_type` | Required | string | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Required | string | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_count` | Optional | integer | Number of non-archived variants belonging to the product. Format: `int32`. |
| `variants` | Optional | Array of [ProductVariant](../models/ProductVariant.md#productvariant) | The product's complete non-archived variants, ordered by `position` and then `variant_id`. Present when `expand=variants` is requested, and on the `POST /v1/products` response. An archived product returns an empty array. `variants[]`: [field definitions](../models/ProductResponse.md#productresponsedatavariants). |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

### ProductResponse.data.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### ProductResponse.data.default_variant

The product's default variant, when one is set. A specific purchasable version of a product.

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
| `inventory_availability` | Optional | [ProductVariantInventoryAvailability](../models/ProductVariantInventoryAvailability.md#productvariantinventoryavailability) | Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. Stock availability of a variant for one order line, computed when the variant is read. `inventory_availability`: [field definitions](../models/ProductResponse.md#productresponsedatadefault_variantinventory_availability). |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `is_available_for_sale` | Required | boolean | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. |
| `is_inheriting_product_images` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productresponsedatadefault_variant-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. `modifier_set`: [declared alternatives](../models/ProductResponse.md#productresponsedatadefault_variantmodifier_set). |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
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

#### ProductResponse.data.default_variant line_item_tax_category values

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

### ProductResponse.data.default_variant.effective_images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductResponse.data.default_variant.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductResponse.data.default_variant.inventory_availability

Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. Stock availability of a variant for one order line, computed when the variant is read.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: `int64`. minimum: `0`. maximum: `9999`. |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. `inventory_routing_source`: [declared alternatives](../models/ProductResponse.md#productresponsedatadefault_variantinventory_availabilityinventory_routing_source). |
| `status` | Required | string | Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`. |

### ProductResponse.data.default_variant.inventory_availability.inventory_routing_source

The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Conditional | string | ID of the allocation policy that routes demand. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Conditional | string | ID of the allocation policy revision that routes demand. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `location_id` | Conditional | string | ID of the fixed Location that serves all demand. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Conditional | string | How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

### ProductResponse.data.default_variant.inventory_availability.inventory_routing_source variant 1

anyOf InventoryRoutingSource: Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision..

- Required: `type`.
- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`.

### ProductResponse.data.default_variant.inventory_availability.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. 

### ProductResponse.data.default_variant.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductResponse.data.default_variant.modifier_set

Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`.

Field definitions: [shared fields](BundleResponse.md#bundleresponsedatamodifier_set).

### ProductResponse.data.default_variant.modifier_set variant 1

anyOf ModifierSet: A reusable collection of customization groups..

- Required: `modifier_groups`, `modifier_set_id`, `name`, `status`, `version`.
- Optional: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `updated_at`.

### ProductResponse.data.default_variant.modifier_set variant 2

anyOf variant 2.

- Undeclared: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `modifier_groups`, `modifier_set_id`, `name`, `status`, `updated_at`, `version`.
- Value shape: null. Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. 

### ProductResponse.data.default_variant.modifier_set variant 1.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### ProductResponse.data.default_variant.modifier_set variant 1.modifier_groups[]

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groups).

### ProductResponse.data.default_variant.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### ProductResponse.data.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductResponse.data.matched_variant

On product list rows, the first non-archived variant by position, then variant_id, that matches all exact variant filters. Without exact variant filters, identifies the first variant whose SKU matches query. Omitted when no variant matches; a product name or description match alone does not set it. Page the product's variants to find all matches. A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match.

Field definitions: [shared fields](ProductVariantMatchInput.md#productvariantmatchinput).

### ProductResponse.data.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductResponse.data.modifier_set

Declared alternatives: [BundleResponse.data.modifier_set](../models/BundleResponse.md#bundleresponsedatamodifier_set).

### ProductResponse.data.options[]

A choice that defines a product's variants.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `name` | Required | string | Option name, such as Size or Color. |
| `option_id` | Required | string | Stable identifier of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. |
| `position` | Required | integer | Display order among the product's options, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this option belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `status` | Required | string | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `values` | Optional | Array of [ProductOptionValue](../models/ProductOptionValue.md#productoptionvalue) | Values offered for this option, such as Small, Medium, and Large for Size. `values[]`: [field definitions](../models/ProductResponse.md#productresponsedataoptionsvalues). |

### ProductResponse.data.options[].metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductResponse.data.options[].values[]

One value of a product option, such as a size or color.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `option_value_id` | Required | string | Stable identifier of the option value. Example: `"optv_01KEZF7C0078SVZ1T7PVRXQK7F"`. |
| `position` | Required | integer | Display order among the option's values, starting at zero. Format: `int32`. |
| `status` | Optional | string | Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value` | Required | string | Option value shown to buyers, such as Medium. |

### ProductResponse.data.options[].values[].metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductResponse.data.variants[]

A specific purchasable version of a product.

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
| `inventory_availability` | Optional | [ProductVariantInventoryAvailability](../models/ProductVariantInventoryAvailability.md#productvariantinventoryavailability) | Whether one order line can buy this variant now, evaluated at read time against `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is outside `version` and sends no event of its own: read the variant again after `inventory_level.updated`. Stock availability of a variant for one order line, computed when the variant is read. `inventory_availability`: [field definitions](../models/ProductResponse.md#productresponsedatadefault_variantinventory_availability). |
| `inventory_item_id` | Optional | string | The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_tracking` | Required | string | Whether sales of this variant consume an inventory item. Values: `"not_tracked"`, `"tracked"`. |
| `is_available_for_sale` | Required | boolean | Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. |
| `is_inheriting_product_images` | Required | boolean | Whether effective_images comes from the product's gallery because this variant's gallery is empty. |
| `line_item_tax_category` | Optional | string | Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Values: [12 declared values](#productresponsedatavariants-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. `modifier_set`: [declared alternatives](../models/ProductResponse.md#productresponsedatadefault_variantmodifier_set). |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
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

#### ProductResponse.data.variants[] line_item_tax_category values

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

### ProductResponse.data.variants[].effective_images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductResponse.data.variants[].images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductResponse.data.variants[].inventory_availability

Field definitions: [ProductResponse.data.default_variant.inventory_availability](../models/ProductResponse.md#productresponsedatadefault_variantinventory_availability).

### ProductResponse.data.variants[].metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductResponse.data.variants[].modifier_set

Declared alternatives: [ProductResponse.data.default_variant.modifier_set](../models/ProductResponse.md#productresponsedatadefault_variantmodifier_set).

### ProductResponse.data.variants[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### ProductResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

