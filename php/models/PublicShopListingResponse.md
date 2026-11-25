[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopListingResponse

A response containing `PublicShopListing` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PublicShopListing](../models/PublicShopListing.md#publicshoplisting) | Resource, collection, or operation result returned by this request. Public listing details. `data`: [field definitions](../models/PublicShopListingResponse.md#publicshoplistingresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PublicShopListingResponse.data

Resource, collection, or operation result returned by this request. Public listing details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier choices for a bundle. `available_modifiers[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers). |
| `available_variants` | Optional | Array of [PublicCatalogVariant](../models/PublicCatalogVariant.md#publiccatalogvariant) | Available variants priced in the shop currency. `available_variants[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants). |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) | Components of a listed bundle. `bundle_components[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components). |
| `bundle_id` | Optional | string | Listed bundle ID. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `category_handles` | Required | Array of string | Active category handles for this listing. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Compare-at price for a single variant. Null when the listing has no single variant compare-at price. |
| `description` | Optional | string | Listed item description. |
| `image` | Optional | [Image](../models/Image.md#image) | First listed item image. An image with its URL, size, and alt text. |
| `images` | Required | Array of [Image](../models/Image.md#image) | Listing images in display order. |
| `is_sold_out` | Required | boolean | Whether all sellable choices are sold out. |
| `name` | Required | string | Listed item name. |
| `price_range` | Required | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current price range in the shop currency. The lowest and highest unit prices across a product's variants. |
| `product_id` | Optional | string | Listed product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_options` | Optional | Array of [PublicCatalogOption](../models/PublicCatalogOption.md#publiccatalogoption) | Product options used by available variants. `product_options[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options). |
| `requires_selection` | Required | boolean | Whether a variant or required modifier must be selected. |
| `shop_listing_id` | Required | string | Shop listing ID. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Listing type. Values: `"product"`, `"bundle"`. |

### PublicShopListingResponse.data.available_modifiers[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers).

### PublicShopListingResponse.data.available_variants[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_variants[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants).

### PublicShopListingResponse.data.bundle_components[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].bundle_components[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components).

### PublicShopListingResponse.data.product_options[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].product_options[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options).

### PublicShopListingResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

