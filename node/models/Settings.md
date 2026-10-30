[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Settings

The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettings](../models/BrandingSettings.md#brandingsettings) | A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) | Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details. `checkout`: [field definitions](../models/Settings.md#settingscheckout). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) | Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions. `customer_account`: [field definitions](../models/Settings.md#settingscustomer_account). |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) | For each kind of customer email, whether Flint sends it or the merchant sends it. `customer_email_delivery`: [field definitions](../models/Settings.md#settingscustomer_email_delivery). |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) | Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`). `fulfillment`: [field definitions](../models/Settings.md#settingsfulfillment). |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) | Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source. `inventory`: [field definitions](../models/Settings.md#settingsinventory). |
| `invoices` | Optional | [InvoiceSettings](../models/InvoiceSettings.md#invoicesettings) | Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. `legal`: [field definitions](../models/Settings.md#settingslegal). |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BuyerRefund.md#buyerrefundmetadata). |
| `payment_limits` | Optional | [PaymentLimitSettings](../models/PaymentLimitSettings.md#paymentlimitsettings) | Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) | Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. `promotions`: [field definitions](../models/Settings.md#settingspromotions). |
| `receipts` | Optional | [ReceiptSettings](../models/ReceiptSettings.md#receiptsettings) | Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text. |
| `settings_id` | Required | string |  |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) | Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. `subscriptions`: [field definitions](../models/Settings.md#settingssubscriptions). |
| `tax` | Optional | [TaxSettings](../models/TaxSettings.md#taxsettings) | Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null |  |
| `tipping` | Optional | [TippingSettings](../models/TippingSettings.md#tippingsettings) | Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

### Settings.checkout

Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_method_ids` | Optional | Array of string | Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Items: minLength: `1`. |
| `default_expires_in_seconds` | Optional | integer | Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `enabled_payment_options` | Optional | Array of string | Payment options checkout offers by default. Adding ach_debit in merchant settings requests ACH Direct Debit for your payment account; Flint refuses it before the account is set up, for a payment account outside the US, and in location or device settings. Each option shows only when it is available for the payment account and order. Items: minLength: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `promotion_codes_enabled` | Optional | boolean | Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; hosted checkout shows or hides code entry to match. Object-level promotion_config.codes_enabled can override it for a session or payment link. |
| `recovery_email` | Optional | [CheckoutRecoveryEmailSettings](../models/CheckoutRecoveryEmailSettings.md#checkoutrecoveryemailsettings) | Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value. `recovery_email`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-1recovery_email). |
| `require_billing_address` | Optional | boolean |  |
| `require_email` | Optional | boolean |  |
| `require_phone` | Optional | boolean |  |
| `saved_payment_details` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value. `saved_payment_details`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-1saved_payment_details). |

### Settings.checkout.recovery_email

Field definitions: [CheckoutSettings variant 1.recovery_email](../models/CheckoutSettings.md#checkoutsettings-variant-1recovery_email).

### Settings.checkout.saved_payment_details

Field definitions: [CheckoutSettings variant 1.saved_payment_details](../models/CheckoutSettings.md#checkoutsettings-variant-1saved_payment_details).

### Settings.customer_account

Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_capabilities` | Optional | [BuyerCapabilities](../models/BuyerCapabilities.md#buyercapabilities) | Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default. minProperties: `1`. |
| `merchant_account_url` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `mode` | Optional | string | Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Optional | [CustomerAccountPresentation](../models/CustomerAccountPresentation.md#customeraccountpresentation) | Patch object: fields you send are applied, fields you omit are unchanged. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value. `presentation`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1presentation). |
| `route_templates` | Optional | [CustomerAccountRouteTemplates](../models/CustomerAccountRouteTemplates.md#customeraccountroutetemplates) | Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one. `route_templates`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1route_templates). |

### Settings.customer_account.presentation

Field definitions: [CustomerAccountSettings variant 1.presentation](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1presentation).

### Settings.customer_account.route_templates

Field definitions: [CustomerAccountSettings variant 1.route_templates](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1route_templates).

### Settings.customer_email_delivery

For each kind of customer email, whether Flint sends it or the merchant sends it.

Field definitions: [shared fields](CustomerEmailDeliverySettings.md#customeremaildeliverysettings).

### Settings.fulfillment

Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_required` | Optional | boolean |  |

### Settings.inventory

Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Optional | integer | Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: `int32`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicy](../models/InventoryOriginPolicy.md#inventoryoriginpolicy) | Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. `origin_policies{}`: [field definitions](../models/InventorySettings.md#inventorysettings-variant-1origin_policies). |

### Settings.inventory.origin_policies{}

Field definitions: [InventorySettings variant 1.origin_policies{}](../models/InventorySettings.md#inventorysettings-variant-1origin_policies).

### Settings.legal

Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

Field definitions: [shared fields](LegalSettings.md#legalsettings).

### Settings.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### Settings.promotions

Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.

Field definitions: [shared fields](PromotionSettings.md#promotionsettings).

### Settings.subscriptions

Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.

Field definitions: [shared fields](SubscriptionSettings.md#subscriptionsettings).

