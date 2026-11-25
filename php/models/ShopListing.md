[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListing

An owned member of a shop.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | The listed bundle. Omitted when the listing uses a product. |
| `is_catalog_item_unavailable` | Required | boolean | Whether the catalog item is unavailable in the shop currency. |
| `product_id` | Optional | string | The listed product. Omitted when the listing uses a bundle. |
| `resolved_name` | Optional | string | Current name from the catalog. |
| `resolved_price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current prices in the shop currency. Omitted when unavailable. The lowest and highest unit prices across a product's variants. |
| `shop_id` | Required | string | Owning shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `shop_listing_id` | Required | string | Permanent ID for this catalog item on the shop. pattern: `^shl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Required | string | The catalog item this listing sells. Values: `"product"`, `"bundle"`. |

