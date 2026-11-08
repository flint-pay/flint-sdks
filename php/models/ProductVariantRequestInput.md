[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantRequestInput

The request body for: Create product variant.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `delivery_profile_id` | Optional | string | Delivery profile to assign. Digital and service products require requirement required, resolution_mode manual, and allowed_types exactly [digital] or [service], matching the product type. Omit it to leave delivery not_applicable with no delivery requirement; digital and service products never use a default. Physical products retain their default profile behavior. Fees and gift cards reject profiles. minLength: `1`. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_configuration` | Optional | [GiftCardProductConfigurationRequestInput](../models/GiftCardProductConfigurationRequestInput.md#giftcardproductconfigurationrequestinput) | Only valid for product_type gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode discounted. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `inventory_item` | Optional | [InventoryItemCreateRequestInput](../models/InventoryItemCreateRequestInput.md#inventoryitemcreaterequestinput) | New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata. |
| `inventory_item_id` | Optional | string | Identifier of an existing inventory item to track for this variant. Send either inventory_item_id or inventory_item. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category to store. Omit for a digital product to store digital_goods; explicit categories are preserved. For other product types, omission uses the merchant default. Values: [12 declared values](#productvariantrequestinput-line_item_tax_category-values). |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Optional | string | Variant name that distinguishes it from the product's other variants. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's variants, starting at zero. When omitted in the variants array on product create, defaults to the variant's array index. For default_variant, defaults to zero. When creating a variant separately, defaults to the highest position among the product's variants plus one, or zero for the first variant. Format: `int32`. |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakRequestInput](../models/QuantityPriceBreakRequestInput.md#quantitypricebreakrequestinput) | Up to 10 quantity price breaks. Omit the field or send [] for none. Each minimum_quantity is at least 2 and strictly increases. Each unit price is positive, strictly decreases from the previous price starting with the base unit price, and uses the base price's currency. Gift card variants reject a nonempty array. null is invalid. maxItems: `10`. |
| `release_date` | Optional | string or null | Calendar release date in YYYY-MM-DD format. Omit or send null for no release date. Lines created before this date in the merchant timezone are pre-orders. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `selected_options` | Optional | Array of [ProductVariantSelectedOptionRequestInput](../models/ProductVariantSelectedOptionRequestInput.md#productvariantselectedoptionrequestinput) | Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the variant is active or inactive. An inactive variant cannot be sold. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_dimensions` | Optional | [DimensionsRequestInput](../models/DimensionsRequestInput.md#dimensionsrequestinput) | Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Base unit price in the currency's smallest unit. It applies below the first quantity price break. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightRequestInput](../models/WeightRequestInput.md#weightrequestinput) | Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### ProductVariantRequestInput line_item_tax_category values

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

