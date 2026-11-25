[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopListingInput

Public listing details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroupInput](../models/PublicResolvedModifierGroupInput.md#publicresolvedmodifiergroupinput) | Modifier choices for a bundle. |
| `available_variants` | Optional | Array of [PublicCatalogVariantInput](../models/PublicCatalogVariantInput.md#publiccatalogvariantinput) | Available variants priced in the shop currency. |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponentInput](../models/PublicResolvedBundleComponentInput.md#publicresolvedbundlecomponentinput) | Components of a listed bundle. |
| `bundle_id` | Optional | string | Listed bundle ID. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `category_handles` | Required | Array of string | Active category handles for this listing. |
| `compare_at_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Compare-at price for a single variant. Null when the listing has no single variant compare-at price. |
| `description` | Optional | string | Listed item description. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | First listed item image. An image with its URL, size, and alt text. |
| `images` | Required | Array of [ImageInput](../models/ImageInput.md#imageinput) | Listing images in display order. |
| `is_sold_out` | Required | boolean | Whether all sellable choices are sold out. |
| `name` | Required | string | Listed item name. |
| `price_range` | Required | [ProductPriceRangeInput](../models/ProductPriceRangeInput.md#productpricerangeinput) | Current price range in the shop currency. The lowest and highest unit prices across a product's variants. |
| `product_id` | Optional | string | Listed product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_options` | Optional | Array of [PublicCatalogOptionInput](../models/PublicCatalogOptionInput.md#publiccatalogoptioninput) | Product options used by available variants. |
| `requires_selection` | Required | boolean | Whether a variant or required modifier must be selected. |
| `shop_listing_id` | Required | string | Shop listing ID. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Listing type. Values: `"product"`, `"bundle"`. |

