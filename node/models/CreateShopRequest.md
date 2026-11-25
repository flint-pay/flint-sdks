[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateShopRequest

The request body for: Create shop.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section. `buyer_fields`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Send null to clear it. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section. `custom_text`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestcustom_text). |
| `delivery_method_ids` | Optional | Array of string | The complete selection. Send an empty array to follow checkout settings. maxItems: `25`. uniqueItems: `true`. Items: Delivery method ID. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string or null | Shop description. Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `image` | Optional | [ImageRequest](../models/ImageRequest.md#imagerequest) or null | Replaced as a whole: send every field you want to keep. Cover image. Send null to remove every value you set in this section. |
| `inactive_message` | Optional | string or null | Inactive message. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) or null | Replaced as a whole: send every field you want to keep. Inventory routing. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section. `legal`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestlegal). |
| `listings` | Optional | Array of [ShopListingRequest](../models/ShopListingRequest.md#shoplistingrequest) | The complete ordered collection of owned listings. maxItems: `250`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `name` | Required | string | Shop name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section. `payments`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section. `promotion_config`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section. `redirects`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestredirects). |
| `status` | Optional | string | Initial shop availability. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section. `tax`: [declared alternatives](../models/CreateShopRequest.md#createshoprequesttax). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section. `tip`: [declared alternatives](../models/CreateShopRequest.md#createshoprequesttip). |

### CreateShopRequest.buyer_fields

Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Conditional | boolean | Whether checkout offers address suggestions while the buyer enters an address. |
| `require_billing_address` | Conditional | boolean | Whether checkout requires the buyer's billing address. |
| `require_email` | Conditional | boolean | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. |
| `require_phone` | Conditional | boolean | Whether checkout requires the buyer's phone number. |

### CreateShopRequest.buyer_fields variant 1

anyOf CheckoutBuyerFieldsRequest: What checkout asks the buyer for. Each field you leave out uses your checkout settings..

- Optional: `address_autocomplete_enabled`, `require_billing_address`, `require_email`, `require_phone`.

### CreateShopRequest.buyer_fields variant 2

anyOf variant 2.

- Undeclared: `address_autocomplete_enabled`, `require_billing_address`, `require_email`, `require_phone`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section. 

### CreateShopRequest.custom_text

Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Conditional | string | Message shown near the order summary in checkout. minLength: `1`. |
| `shipping_address_label` | Conditional | string | Label shown for the shipping address in checkout. minLength: `1`. |

### CreateShopRequest.custom_text variant 1

anyOf CheckoutCustomTextWriteConfig: Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label..

- Optional: `order_summary_message`, `shipping_address_label`.

### CreateShopRequest.custom_text variant 2

anyOf variant 2.

- Undeclared: `order_summary_message`, `shipping_address_label`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section. 

### CreateShopRequest.legal

Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Conditional | string | An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: `1`. |
| `refund_policy_url` | Conditional | string | An `https://` URL of your refund policy, linked in checkout. minLength: `1`. |
| `require_terms_of_service` | Conditional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Conditional | string | An `https://` URL of your shipping policy, linked in checkout. minLength: `1`. |
| `terms_of_service_url` | Conditional | string | An `https://` URL of your terms of service, linked in checkout. minLength: `1`. |

### CreateShopRequest.legal variant 1

anyOf CheckoutLegalConfigRequest: Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract..

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### CreateShopRequest.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section. 

### CreateShopRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateShopRequest.payments

Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Conditional | Array of string | Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Conditional | string | A note shown to the buyer with the payment options. minLength: `1`. |

### CreateShopRequest.payments variant 1

anyOf CheckoutPaymentConfigRequest: Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment..

- Optional: `enabled_payment_options`, `payment_note`.

### CreateShopRequest.payments variant 2

anyOf variant 2.

- Undeclared: `enabled_payment_options`, `payment_note`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section. 

### CreateShopRequest.promotion_config

Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Conditional | boolean | Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. |
| `codes_enabled` | Conditional | boolean or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. |

### CreateShopRequest.promotion_config variant 1

anyOf CheckoutPromotionConfigRequest: Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes..

- Optional: `automatic_enabled`, `codes_enabled`.

### CreateShopRequest.promotion_config variant 2

anyOf variant 2.

- Undeclared: `automatic_enabled`, `codes_enabled`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section. 

### CreateShopRequest.redirects

Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Conditional | string | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `expired_url` | Conditional | string | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `success_url` | Conditional | string | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

### CreateShopRequest.redirects variant 1

anyOf CheckoutRedirectsRequest: Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url..

- Optional: `cancel_url`, `expired_url`, `success_url`.

### CreateShopRequest.redirects variant 2

anyOf variant 2.

- Undeclared: `cancel_url`, `expired_url`, `success_url`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section. 

### CreateShopRequest.tax

Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | [CheckoutTaxCalculation](../models/CheckoutTaxCalculation.md#checkouttaxcalculation) | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here. `calculation`: [field definitions](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-2calculation). |
| `enabled` | Conditional | boolean | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. |

### CreateShopRequest.tax variant 1

anyOf CheckoutTaxConfigRequest: Whether tax is collected for a checkout session or payment link..

- Optional: `calculation`, `enabled`.

### CreateShopRequest.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `enabled`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section. 

### CreateShopRequest.tax variant 1.calculation

Field definitions: [CheckoutTaxConfig variant 2.calculation](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-2calculation).

### CreateShopRequest.tip

Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Conditional | boolean | Whether buyers can enter a custom tip amount. |
| `default_smart_tip_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `default_smart_tip_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money). |
| `default_tip_percent` | Conditional | number | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `enabled` | Conditional | boolean | Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. |
| `smart_tip_money_options` | Conditional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. `smart_tip_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `smart_tips_enabled` | Conditional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Conditional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### CreateShopRequest.tip variant 1

anyOf CheckoutTipConfigRequest: Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips..

- Optional: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.

### CreateShopRequest.tip variant 2

anyOf variant 2.

- Undeclared: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section. 

### CreateShopRequest.tip variant 1.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### CreateShopRequest.tip variant 1.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

