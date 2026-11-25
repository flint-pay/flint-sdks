[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopListing

Public listing details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier choices for a bundle. `available_modifiers[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers). |
| `available_variants` | Optional | Array of [PublicCatalogVariant](../models/PublicCatalogVariant.md#publiccatalogvariant) | Available variants priced in the shop currency. `available_variants[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants). |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) | Components of a listed bundle. `bundle_components[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components). |
| `bundle_id` | Optional | string | Listed bundle ID. |
| `category_handles` | Required | Array of string | Active category handles for this listing. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Compare-at price for a single variant. Null when the listing has no single variant compare-at price. |
| `description` | Optional | string | Listed item description. |
| `image` | Optional | [Image](../models/Image.md#image) | First listed item image. An image with its URL, size, and alt text. |
| `images` | Required | Array of [Image](../models/Image.md#image) | Listing images in display order. |
| `is_sold_out` | Required | boolean | Whether all sellable choices are sold out. |
| `name` | Required | string | Listed item name. |
| `price_range` | Required | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current price range in the shop currency. The lowest and highest unit prices across a product's variants. |
| `product_id` | Optional | string | Listed product ID. |
| `product_options` | Optional | Array of [PublicCatalogOption](../models/PublicCatalogOption.md#publiccatalogoption) | Product options used by available variants. `product_options[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options). |
| `requires_selection` | Required | boolean | Whether a variant or required modifier must be selected. |
| `shop_listing_id` | Required | string | Shop listing ID. |
| `type` | Required | string | Listing type. Values: `"product"`, `"bundle"`. |

### PublicShopListing.available_modifiers[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers).

### PublicShopListing.available_variants[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_variants[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants).

### PublicShopListing.bundle_components[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].bundle_components[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components).

### PublicShopListing.product_options[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].product_options[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options).

