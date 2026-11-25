[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShopResult

Public shop and resolution context.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `categories` | Required | Array of [PublicShopCategory](../models/PublicShopCategory.md#publicshopcategory) | Active categories of the returned listings, sorted by name. |
| `checkout_start_due_at` | Required | string | Deadline for starting checkout. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | Merchant checkout theme. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Checkout policy links and terms acceptance settings. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/PublicShopResult.md#publicshopresultlegal). |
| `listings` | Required | Array of [PublicShopListingSummary](../models/PublicShopListingSummary.md#publicshoplistingsummary) | Sellable listings in display order. |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | Merchant icon. An image with its URL, size, and alt text. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | Merchant logo. An image with its URL, size, and alt text. |
| `merchant_name` | Optional | string | Merchant display name. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | Merchant support contact information. The merchant's support contact. Each field is omitted when the merchant has not set it. |
| `resolution_context` | Required | string | Private context for starting checkout from this shop. |
| `resolution_context_expires_at` | Required | string | Resolution context expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `shop` | Required | [PublicShop](../models/PublicShop.md#publicshop) | Shop details. Buyer-facing shop. |
| `show_flint_mark` | Required | boolean | Whether the hosted shop shows the Flint mark. |

### PublicShopResult.legal

Checkout policy links and terms acceptance settings. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionlegal).

