[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopListing

Public listing details.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier choices for a bundle. |
| `available_variants` | Optional | Array of [PublicCatalogVariant](../models/PublicCatalogVariant.md#publiccatalogvariant) | Available variants priced in the shop currency. |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) | Components of a listed bundle. |
| `bundle_id` | Optional | string | Listed bundle ID. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `category_handles` | Required | Array of string | Active category handles for this listing. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Compare-at price for a single variant. Null when the listing has no single variant compare-at price. `compare_at_price_money`: [declared alternatives](../models/PublicShopListing.md#publicshoplistingcompare_at_price_money). |
| `description` | Optional | string | Listed item description. |
| `image` | Optional | [Image](../models/Image.md#image) | First listed item image. An image with its URL, size, and alt text. |
| `images` | Required | Array of [Image](../models/Image.md#image) | Listing images in display order. |
| `is_sold_out` | Required | boolean | Whether all sellable choices are sold out. |
| `name` | Required | string | Listed item name. |
| `price_range` | Required | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current price range in the shop currency. The lowest and highest unit prices across a product's variants. |
| `product_id` | Optional | string | Listed product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_options` | Optional | Array of [PublicCatalogOption](../models/PublicCatalogOption.md#publiccatalogoption) | Product options used by available variants. |
| `requires_selection` | Required | boolean | Whether a variant or required modifier must be selected. |
| `shop_listing_id` | Required | string | Shop listing ID. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Listing type. Values: `"product"`, `"bundle"`. |

### PublicShopListing.compare_at_price_money

Compare-at price for a single variant. Null when the listing has no single variant compare-at price.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PublicShopListing.compare_at_price_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PublicShopListing.compare_at_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Compare-at price for a single variant. Null when the listing has no single variant compare-at price. 

