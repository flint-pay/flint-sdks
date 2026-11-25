[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Shop

A hosted catalog configured by a merchant.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | Buyer information requested at checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/Shop.md#shopbuyer_fields). |
| `checkout_session_expires_in_seconds` | Required | integer or null | Checkout lifetime in seconds. Null when checkout settings apply. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string or null | Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/Shop.md#shopcustom_text). |
| `delivery_method_ids` | Required | Array of string | An empty array follows checkout settings. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Required | string or null | Shop description. Null when unset. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Null when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `handle` | Required | string or null | Readable address. Null when a handle has not been assigned. |
| `image` | Required | [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | Cover image. Null when unset. |
| `inactive_message` | Required | string or null | Inactive message. Null when unset. |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | Explicit inventory routing. Null when checkout settings apply. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/Shop.md#shoplegal). |
| `listing_count` | Required | integer | The number of listings on the shop, including unavailable entries. Format: `int32`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CancelOrderEditResult.md#cancelordereditresultordermetadata). |
| `name` | Required | string | The title buyers see on the shop. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for the shop. Omitted when the shop has no override. Payment settings for a checkout: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/Shop.md#shoppayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/Shop.md#shoppromotion_config). |
| `redirects` | Required | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Redirects configured for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/Shop.md#shopredirects). |
| `shop_id` | Required | string | Shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. |
| `status` | Required | string | Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/Shop.md#shoptax). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tipping options for the shop. Omitted when the shop has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/Shop.md#shoptip). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string | The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### Shop.buyer_fields

Buyer information requested at checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each field you leave out uses your checkout settings.

Field definitions: [shared fields](CheckoutBuyerFields.md#checkoutbuyerfields).

### Shop.custom_text

Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order summary message and a shipping address label.

Field definitions: [shared fields](CheckoutCustomTextConfig.md#checkoutcustomtextconfig).

### Shop.legal

Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### Shop.metadata

Field definitions: [CancelOrderEditResult.order.metadata](../models/CancelOrderEditResult.md#cancelordereditresultordermetadata).

### Shop.payments

Payment options for the shop. Omitted when the shop has no override. Payment settings for a checkout: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionpayments).

### Shop.promotion_config

Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.

Field definitions: [shared fields](CheckoutPromotionConfig.md#checkoutpromotionconfig).

### Shop.redirects

Redirects configured for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### Shop.tax

Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is collected for a checkout session or payment link.

Field definitions: [shared fields](PaymentLink.md#paymentlinktax).

### Shop.tax.calculation

Field definitions: [CheckoutTaxConfig variant 1.calculation](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-1calculation).

### Shop.tip

Tipping options for the shop. Omitted when the shop has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.

Field definitions: [shared fields](CheckoutTipConfig.md#checkouttipconfig).

### Shop.tip.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### Shop.tip.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

