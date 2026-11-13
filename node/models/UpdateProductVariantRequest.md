[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateProductVariantRequest

Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string or null | Omit to preserve the assignment. Send null to clear it. Clearing a digital or service variant restores not_applicable with no delivery requirement and never selects a default. Assigned profiles must be required/manual with allowed_types exactly [digital] or [service], matching the product type. Existing order delivery snapshots do not change. minLength: `1`. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when images is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. `gift_card_configuration`: [field definitions](../models/UpdateProductVariantRequest.md#updateproductvariantrequestgift_card_configuration). |
| `images` | Optional | Array of [ImageRequest](../models/ImageRequest.md#imagerequest) | Replaces the authored variant gallery atomically. Send [] to clear it and resume product-image inheritance. minItems: `0`. maxItems: `8`. |
| `inventory_item` | Optional | [InventoryItemCreateRequest](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequest) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string or null | Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category to store. Send null to clear it and use the merchant default. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a containing bundle would become mixed. Values: [13 declared values](#updateproductvariantrequest-line_item_tax_category-values). |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Complete array of up to 10 quantity price breaks. Replaces the whole array; [] clears it and omission preserves it on update. Minimum quantities start at 2 and strictly increase. Unit prices strictly decrease from the base unit price and use its currency. Gift card variants reject a nonempty array. null is invalid. Include expected_version on update to reject a concurrent variant change. maxItems: `10`. `quantity_price_breaks[]`: [field definitions](../models/PriceListPriceRequest.md#pricelistpricerequestquantity_price_breaks). |
| `release_date` | Optional | string or null | Calendar release date in YYYY-MM-DD format. Omit to preserve it; send null to clear it. Existing order line dates do not change. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `selected_options` | Optional | Array of [ProductVariantSelectedOptionRequest](../models/ProductVariantSelectedOptionRequest.md#productvariantselectedoptionrequest) | Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the variant is active or inactive. An inactive variant cannot be sold. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) or null | Replaces the complete object. Send null to clear it. `unit_dimensions`: [declared alternatives](../models/UpdateProductVariantRequest.md#updateproductvariantrequestunit_dimensions). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base unit price in the currency's smallest unit. It applies below the first quantity price break. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/ProductVariantRequest.md#productvariantrequestunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) or null | Replaces the complete object. Send null to clear it. `unit_weight`: [declared alternatives](../models/UpdateProductVariantRequest.md#updateproductvariantrequestunit_weight). |

#### UpdateProductVariantRequest line_item_tax_category values

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
- `null`

### UpdateProductVariantRequest.gift_card_configuration

Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.

Field definitions: [shared fields](ProductVariantRequest.md#productvariantrequestgift_card_configuration).

### UpdateProductVariantRequest.gift_card_configuration.custom_amount_bounds

Field definitions: [GiftCardProductConfiguration variant 2.custom_amount_bounds](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-2custom_amount_bounds).

### UpdateProductVariantRequest.gift_card_configuration.face_value_money

Field definitions: [GiftCardProductConfiguration.face_value_money](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationface_value_money).

### UpdateProductVariantRequest.quantity_price_breaks[]

Field definitions: [PriceListPriceRequest.quantity_price_breaks[]](../models/PriceListPriceRequest.md#pricelistpricerequestquantity_price_breaks).

### UpdateProductVariantRequest.unit_dimensions

Replaces the complete object. Send null to clear it.

Field definitions: [shared fields](UpdatePackageRequest.md#updatepackagerequestdimensions).

### UpdateProductVariantRequest.unit_dimensions variant 1

anyOf DimensionsRequest: Package or item dimensions as `length`, `width`, and `height` in the given `unit`..

- Required: `height`, `length`, `unit`, `width`.

### UpdateProductVariantRequest.unit_dimensions variant 2

anyOf variant 2.

- Undeclared: `height`, `length`, `unit`, `width`.
- Value shape: null. Replaces the complete object. Send null to clear it. 

### UpdateProductVariantRequest.unit_price_money

Field definitions: [ProductVariantRequest.unit_price_money](../models/ProductVariantRequest.md#productvariantrequestunit_price_money).

### UpdateProductVariantRequest.unit_weight

Replaces the complete object. Send null to clear it.

Field definitions: [shared fields](UpdatePackageRequest.md#updatepackagerequestweight).

### UpdateProductVariantRequest.unit_weight variant 1

anyOf WeightRequest: A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration..

- Required: `unit`, `value`.

### UpdateProductVariantRequest.unit_weight variant 2

anyOf variant 2.

- Undeclared: `unit`, `value`.
- Value shape: null. Replaces the complete object. Send null to clear it. 

