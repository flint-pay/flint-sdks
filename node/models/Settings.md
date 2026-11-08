[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Settings

The settings for one merchant environment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettings](../models/BrandingSettings.md#brandingsettings) | Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you save a value in this section; effective settings fill in Flint's defaults. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) | Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details. `checkout`: [field definitions](../models/Settings.md#settingscheckout). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) | The customer account where buyers manage their orders, subscriptions, returns, and invoices. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions. `customer_account`: [field definitions](../models/Settings.md#settingscustomer_account). |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) | Whether Flint or you send each kind of buyer email. Omitted until you save a value in this section; effective settings fill in Flint's defaults. For each kind of customer email, whether Flint sends it or the merchant sends it. `customer_email_delivery`: [field definitions](../models/Settings.md#settingscustomer_email_delivery). |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) | Fulfillment workflow defaults. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`). `fulfillment`: [field definitions](../models/Settings.md#settingsfulfillment). |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) | Inventory defaults, such as the low stock threshold and what happens when stock can't cover a paid order. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one. |
| `invoices` | Optional | [InvoiceSettings](../models/InvoiceSettings.md#invoicesettings) | Defaults and policies for the invoices you issue. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal links and terms acceptance that checkout shows. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. `legal`: [field definitions](../models/Settings.md#settingslegal). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutSession.md#checkoutsessionmetadata). |
| `payment_limits` | Optional | [PaymentLimitSettings](../models/PaymentLimitSettings.md#paymentlimitsettings) | Your own lower and upper limits on payment amounts. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `payments` | Optional | [PaymentSettings](../models/PaymentSettings.md#paymentsettings) | Statement text for new payments. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Settings for the statement text on new payments. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) | Whether automatic promotions and promotion codes apply, and how many discounts one order can stack. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. `promotions`: [field definitions](../models/Settings.md#settingspromotions). |
| `settings_id` | Required | string | Unique identifier for this settings, prefixed `set_`. Example: `"set_01KEZF7C00SA6XKHH6GVZ1JMC2"`. |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) | Subscription billing behavior, such as what happens when payment retries run out. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. `subscriptions`: [field definitions](../models/Settings.md#settingssubscriptions). |
| `tax` | Optional | [TaxSettings](../models/TaxSettings.md#taxsettings) | Default tax behavior for new checkouts and orders. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | The merchant's legal identity, printed on invoices and credit notes. `null` when none is set. |
| `tipping` | Optional | [TippingSettings](../models/TippingSettings.md#tippingsettings) | How tips work at checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### Settings.checkout

Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_method_ids` | Optional | Array of string | Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `default_expires_in_seconds` | Optional | integer | Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `enabled_payment_options` | Optional | Array of string | Payment options checkout offers by default. Adding ach_debit in merchant settings requests ACH Direct Debit for your payment account; Flint refuses it before the account is set up, for a payment account outside the US, and in location or device settings. Each option shows only when it is available for the payment account and order. Items: minLength: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `promotion_codes_enabled` | Optional | boolean | Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; hosted checkout shows or hides code entry to match. Object-level promotion_config.codes_enabled can override it for a session or payment link. |
| `recovery_email` | Optional | [CheckoutRecoveryEmailSettings](../models/CheckoutRecoveryEmailSettings.md#checkoutrecoveryemailsettings) | Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value. `recovery_email`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-1recovery_email). |
| `require_billing_address` | Optional | boolean | Whether hosted checkout requires the buyer's billing address before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `require_email` | Optional | boolean | Whether hosted checkout requires the buyer's email address before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `require_phone` | Optional | boolean | Whether hosted checkout requires the buyer's phone number before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `saved_payment_details` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value. `saved_payment_details`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-1saved_payment_details). |

### Settings.checkout.recovery_email

Field definitions: [CheckoutSettings variant 1.recovery_email](../models/CheckoutSettings.md#checkoutsettings-variant-1recovery_email).

### Settings.checkout.saved_payment_details

Field definitions: [CheckoutSettings variant 1.saved_payment_details](../models/CheckoutSettings.md#checkoutsettings-variant-1saved_payment_details).

### Settings.customer_account

The customer account where buyers manage their orders, subscriptions, returns, and invoices. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_capabilities` | Optional | [BuyerCapabilities](../models/BuyerCapabilities.md#buyercapabilities) | Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. minProperties: `1`. `buyer_capabilities`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1buyer_capabilities). |
| `merchant_account_url` | Optional | string or null | Your customer account page's URL, when you host it. `null` when you don't host the account. minLength: `1`. |
| `mode` | Optional | string | Who hosts the customer account where buyers see their orders, subscriptions, returns, and invoices. Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Optional | [CustomerAccountPresentation](../models/CustomerAccountPresentation.md#customeraccountpresentation) | Patch object: fields you send are applied, fields you omit are unchanged. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value. `presentation`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1presentation). |
| `route_templates` | Optional | [CustomerAccountRouteTemplates](../models/CustomerAccountRouteTemplates.md#customeraccountroutetemplates) | Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one. `route_templates`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1route_templates). |

### Settings.customer_account.buyer_capabilities

Field definitions: [CustomerAccountSettings variant 1.buyer_capabilities](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1buyer_capabilities).

### Settings.customer_account.presentation

Field definitions: [CustomerAccountSettings variant 1.presentation](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1presentation).

### Settings.customer_account.route_templates

Field definitions: [CustomerAccountSettings variant 1.route_templates](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1route_templates).

### Settings.customer_email_delivery

Whether Flint or you send each kind of buyer email. Omitted until you save a value in this section; effective settings fill in Flint's defaults. For each kind of customer email, whether Flint sends it or the merchant sends it.

Field definitions: [shared fields](CustomerEmailDeliverySettings.md#customeremaildeliverysettings).

### Settings.fulfillment

Fulfillment workflow defaults. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_required` | Optional | boolean | Whether a new fulfillment must be accepted before it can move into preparation, movement, or completion. Defaults to false. |

### Settings.legal

Legal links and terms acceptance that checkout shows. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |
| `refund_policy_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |
| `terms_of_service_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |

### Settings.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### Settings.promotions

Whether automatic promotions and promotion codes apply, and how many discounts one order can stack. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.

Field definitions: [shared fields](PromotionSettings.md#promotionsettings).

### Settings.subscriptions

Subscription billing behavior, such as what happens when payment retries run out. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.

Field definitions: [shared fields](SubscriptionSettings.md#subscriptionsettings).

