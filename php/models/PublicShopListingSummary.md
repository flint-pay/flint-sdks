[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopListingSummary

Summary of a public listing.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | Listed bundle ID. |
| `category_handles` | Required | Array of string | Active category handles for this listing. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Compare-at price for a single variant. Null when the listing has no single variant compare-at price. |
| `image` | Optional | [Image](../models/Image.md#image) | First listed item image. An image with its URL, size, and alt text. |
| `is_sold_out` | Required | boolean | Whether all sellable choices are sold out. |
| `name` | Required | string | Listed item name. |
| `price_range` | Required | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current price range in the shop currency. The lowest and highest unit prices across a product's variants. |
| `product_id` | Optional | string | Listed product ID. |
| `requires_selection` | Required | boolean | Whether a variant or required modifier must be selected. |
| `shop_listing_id` | Required | string | Shop listing ID. |
| `type` | Required | string | Listing type. Values: `"product"`, `"bundle"`. |

