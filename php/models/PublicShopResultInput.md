[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopResultInput

Public shop and resolution context.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `categories` | Required | Array of [PublicShopCategoryInput](../models/PublicShopCategoryInput.md#publicshopcategoryinput) | Active categories of the returned listings, sorted by name. |
| `checkout_start_due_at` | Required | string | Deadline for starting checkout. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_theme` | Optional | [CheckoutThemeInput](../models/CheckoutThemeInput.md#checkoutthemeinput) | Merchant checkout theme. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `legal` | Optional | [CheckoutLegalConfigInput](../models/CheckoutLegalConfigInput.md#checkoutlegalconfiginput) | Checkout policy links and terms acceptance settings. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `listings` | Required | Array of [PublicShopListingSummaryInput](../models/PublicShopListingSummaryInput.md#publicshoplistingsummaryinput) | Sellable listings in display order. |
| `merchant_icon` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Merchant icon. An image with its URL, size, and alt text. |
| `merchant_logo` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Merchant logo. An image with its URL, size, and alt text. |
| `merchant_name` | Optional | string | Merchant display name. |
| `merchant_support` | Optional | [CheckoutMerchantSupportInput](../models/CheckoutMerchantSupportInput.md#checkoutmerchantsupportinput) | Merchant support contact information. The merchant's support contact. Each field is omitted when the merchant has not set it. |
| `resolution_context` | Required | string | Private context for starting checkout from this shop. |
| `resolution_context_expires_at` | Required | string | Resolution context expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `shop` | Required | [PublicShopInput](../models/PublicShopInput.md#publicshopinput) | Shop details. Buyer-facing shop. |
| `show_flint_mark` | Required | boolean | Whether the hosted shop shows the Flint mark. |

