[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateProductVariantRequest

Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when images is present. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) | Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. `gift_card_configuration`: [field definitions](../models/UpdateProductVariantRequest.md#updateproductvariantrequestgift_card_configuration). |
| `images` | Optional | Array of [ImageRequest](../models/ImageRequest.md#imagerequest) | Replaces the authored variant gallery atomically. Send [] to clear it and resume product-image inheritance. minItems: `0`. maxItems: `8`. |
| `inventory_item` | Optional | [InventoryItemCreateRequest](../models/InventoryItemCreateRequest.md#inventoryitemcreaterequest) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string or null | Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: `1`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Send null to clear it. Values: [13 declared values](#updateproductvariantrequest-line_item_tax_category-values). |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `selected_options` | Optional | Array of [ProductVariantSelectedOptionRequest](../models/ProductVariantSelectedOptionRequest.md#productvariantselectedoptionrequest) | Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the variant is active or inactive. An inactive variant cannot be sold. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) or null | Replaces the complete object. Send null to clear it. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/Bundle.md#bundleunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) or null | Replaces the complete object. Send null to clear it. |

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

### UpdateProductVariantRequest.unit_price_money

Field definitions: [Bundle.unit_price_money](../models/Bundle.md#bundleunit_price_money).

