[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicCatalogVariant

A variant that can be sold now, with its current price, options, image, modifiers, and advisory stock state.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier groups available for this variant's effective modifier set. Omitted when the variant has none. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Current catalog reference unit price for sale display. Null when no variant compare-at price is set. Does not affect the amount charged. `compare_at_price_money`: [declared alternatives](../models/PublicCatalogVariant.md#publiccatalogvariantcompare_at_price_money). |
| `image` | Optional | [Image](../models/Image.md#image) | Effective primary variant image, inherited from the product when the variant has none. Omitted when neither has an image. An image with its URL, size, and alt text. |
| `is_sold_out` | Required | boolean | True when the starting quantity of a tracked variant cannot be supplied. For a variant that needs a delivery quote, the configured inventory routing source must supply that quantity for at least one offered delivery method. For a variant that needs no quote, stock alone decides. Shipping can use remaining backorder capacity. Pickup requires physical stock. Uses the minimum quantity when the buyer can adjust the quantity. Always false for untracked variants. Availability is advisory. Reads and checkout resolution do not hold stock or expose stock counts. |
| `name` | Required | string | Order line name for this variant: the product name plus the variant label. |
| `product_id` | Required | string | Identifier of the product the offered variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Default quantity breaks for this variant. Use the largest `minimum_quantity` at or below the quantity on the order line. An empty array uses the base price. `quantity_price_breaks[]`: [field definitions](../models/PriceListPrice.md#pricelistpricequantity_price_breaks). |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The variant's product option values, in product option position order. Empty when the product has no options. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/PublicCatalogVariant.md#publiccatalogvariantunit_price_money). |
| `variant_id` | Required | string | ID of the offered product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicCatalogVariant.compare_at_price_money

Current catalog reference unit price for sale display. Null when no variant compare-at price is set. Does not affect the amount charged.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PublicCatalogVariant.compare_at_price_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PublicCatalogVariant.compare_at_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Current catalog reference unit price for sale display. Null when no variant compare-at price is set. Does not affect the amount charged. 

### PublicCatalogVariant.quantity_price_breaks[]

Field definitions: [PriceListPrice.quantity_price_breaks[]](../models/PriceListPrice.md#pricelistpricequantity_price_breaks).

### PublicCatalogVariant.unit_price_money

Current catalog base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

