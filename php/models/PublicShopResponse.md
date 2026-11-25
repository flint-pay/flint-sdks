[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopResponse

A response containing `PublicShopResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PublicShopResult](../models/PublicShopResult.md#publicshopresult) | Resource, collection, or operation result returned by this request. Public shop and resolution context. `data`: [field definitions](../models/PublicShopResponse.md#publicshopresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PublicShopResponse.data

Resource, collection, or operation result returned by this request. Public shop and resolution context.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `categories` | Required | Array of [PublicShopCategory](../models/PublicShopCategory.md#publicshopcategory) | Active categories of the returned listings, sorted by name. `categories[]`: [field definitions](../models/PublicShopResponse.md#publicshopresponsedatacategories). |
| `checkout_start_due_at` | Required | string | Deadline for starting checkout. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | Merchant checkout theme. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) | Checkout policy links and terms acceptance settings. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `listings` | Required | Array of [PublicShopListingSummary](../models/PublicShopListingSummary.md#publicshoplistingsummary) | Sellable listings in display order. `listings[]`: [field definitions](../models/PublicShopResponse.md#publicshopresponsedatalistings). |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | Merchant icon. An image with its URL, size, and alt text. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | Merchant logo. An image with its URL, size, and alt text. |
| `merchant_name` | Optional | string | Merchant display name. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | Merchant support contact information. The merchant's support contact. Each field is omitted when the merchant has not set it. `merchant_support`: [field definitions](../models/PublicShopResponse.md#publicshopresponsedatamerchant_support). |
| `resolution_context` | Required | string | Private context for starting checkout from this shop. |
| `resolution_context_expires_at` | Required | string | Resolution context expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `shop` | Required | [PublicShop](../models/PublicShop.md#publicshop) | Shop details. Buyer-facing shop. `shop`: [field definitions](../models/PublicShopResponse.md#publicshopresponsedatashop). |
| `show_flint_mark` | Required | boolean | Whether the hosted shop shows the Flint mark. |

### PublicShopResponse.data.categories[]

Category shown on the shop.

Field definitions: [shared fields](PublicShopCategoryInput.md#publicshopcategoryinput).

### PublicShopResponse.data.listings[]

Summary of a public listing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | Listed bundle ID. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `category_handles` | Required | Array of string | Active category handles for this listing. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Compare-at price for a single variant. Null when the listing has no single variant compare-at price. |
| `image` | Optional | [Image](../models/Image.md#image) | First listed item image. An image with its URL, size, and alt text. |
| `is_sold_out` | Required | boolean | Whether all sellable choices are sold out. |
| `name` | Required | string | Listed item name. |
| `price_range` | Required | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current price range in the shop currency. The lowest and highest unit prices across a product's variants. |
| `product_id` | Optional | string | Listed product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `requires_selection` | Required | boolean | Whether a variant or required modifier must be selected. |
| `shop_listing_id` | Required | string | Shop listing ID. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Listing type. Values: `"product"`, `"bundle"`. |

### PublicShopResponse.data.merchant_support

Merchant support contact information. The merchant's support contact. Each field is omitted when the merchant has not set it.

Field definitions: [shared fields](CheckoutMerchantSupportInput.md#checkoutmerchantsupportinput).

### PublicShopResponse.data.shop

Shop details. Buyer-facing shop.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string or null | Shop currency. Null when the shop has no listings. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Shop description. |
| `image` | Optional | [Image](../models/Image.md#image) | Shop cover image. An image with its URL, size, and alt text. |
| `inactive_message` | Optional | string | Message shown when the shop is closed. |
| `name` | Required | string | Shop name. |
| `shop_id` | Required | string | Shop ID. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. |
| `status` | Required | string | Shop status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `url` | Required | string | Hosted shop URL. |
| `version` | Required | integer | Shop version. Format: `int64`. |

### PublicShopResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

