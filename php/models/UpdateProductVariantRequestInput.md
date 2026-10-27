[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateProductVariantRequestInput

Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when images is present. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationInput](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinput) | Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | Replaces the authored variant gallery atomically. Send [] to clear it and resume product-image inheritance. minItems: `0`. maxItems: `8`. |
| `inventory_item` | Optional | [InventoryItemCreateRequestInput](../models/InventoryItemCreateRequestInput.md#inventoryitemcreaterequestinput) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string or null | Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: `1`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Send null to clear it. Values: [13 declared values](#updateproductvariantrequestinput-line_item_tax_category-values). |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. Format: `int32`. |
| `selected_options` | Optional | Array of [ProductVariantSelectedOptionRequestInput](../models/ProductVariantSelectedOptionRequestInput.md#productvariantselectedoptionrequestinput) | Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the variant is active or inactive. An inactive variant cannot be sold. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) or null | Replaces the complete object. Send null to clear it. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) or null | Replaces the complete object. Send null to clear it. |

#### UpdateProductVariantRequestInput line_item_tax_category values

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

