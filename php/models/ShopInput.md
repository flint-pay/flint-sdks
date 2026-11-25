[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopInput

A hosted catalog configured by a merchant.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | Buyer information requested at checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Required | integer or null | Checkout lifetime in seconds. Null when checkout settings apply. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string or null | Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `custom_text` | Optional | [CheckoutCustomTextConfigInput](../models/CheckoutCustomTextConfigInput.md#checkoutcustomtextconfiginput) | Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order summary message and a shipping address label. |
| `delivery_method_ids` | Required | Array of string | An empty array follows checkout settings. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Required | string or null | Shop description. Null when unset. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Null when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `handle` | Required | string or null | Readable address. Null when a handle has not been assigned. |
| `image` | Required | [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) or null | Cover image. Null when unset. |
| `inactive_message` | Required | string or null | Inactive message. Null when unset. |
| `inventory_routing_source` | Required | [InventoryRoutingSourceInput](../models/InventoryRoutingSourceInput.md#inventoryroutingsourceinput) or null | Explicit inventory routing. Null when checkout settings apply. |
| `legal` | Optional | [CheckoutLegalConfigInput](../models/CheckoutLegalConfigInput.md#checkoutlegalconfiginput) | Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `listing_count` | Required | integer | The number of listings on the shop, including unavailable entries. Format: `int32`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | The title buyers see on the shop. |
| `payments` | Optional | [CheckoutPaymentConfigInput](../models/CheckoutPaymentConfigInput.md#checkoutpaymentconfiginput) | Payment options for the shop. Omitted when the shop has no override. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Required | [CheckoutRedirectsInput](../models/CheckoutRedirectsInput.md#checkoutredirectsinput) | Redirects configured for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. |
| `shop_id` | Required | string | Shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. |
| `status` | Required | string | Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is collected for a checkout session or payment link. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tipping options for the shop. Omitted when the shop has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string | The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

