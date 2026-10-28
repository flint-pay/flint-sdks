[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSettingsRequest

The request body for: Update merchant settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsRequest](../models/BrandingSettingsRequest.md#brandingsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `checkout`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestcheckout). |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. `customer_account`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestcustomer_account). |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `customer_email_delivery`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestcustomer_email_delivery). |
| `expected_version` | Optional | integer string | The Settings.version last read by the caller. Required when tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `fulfillment`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestfulfillment). |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `inventory`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestinventory). |
| `invoices` | Optional | [InvoiceSettingsPatch](../models/InvoiceSettingsPatch.md#invoicesettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettingsRequest](../models/LegalSettingsRequest.md#legalsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `legal`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestlegal). |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `payment_limits` | Optional | [PaymentLimitSettingsPatch](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are omitted from reads. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `promotions`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestpromotions). |
| `receipts` | Optional | [ReceiptSettingsRequest](../models/ReceiptSettingsRequest.md#receiptsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `subscriptions`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestsubscriptions). |
| `tax` | Optional | [TaxSettingsRequest](../models/TaxSettingsRequest.md#taxsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax_identity` | Optional | [TaxIdentityPatch](../models/TaxIdentityPatch.md#taxidentitypatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Legal identity displayed on invoices and credit notes. Requires expected_version whenever present. |
| `tipping` | Optional | [TippingSettingsPatch](../models/TippingSettingsPatch.md#tippingsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |

### UpdateSettingsRequest.checkout

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_method_ids` | Conditional | Array of string | Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Items: minLength: `1`. |
| `default_expires_in_seconds` | Conditional | integer string | Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `enabled_payment_options` | Conditional | Array of string | Items: minLength: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `promotion_codes_enabled` | Conditional | boolean | Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; hosted checkout shows or hides code entry to match. Object-level promotion_config.codes_enabled can override it for a session or payment link. |
| `recovery_email` | Conditional | [CheckoutRecoveryEmailSettings](../models/CheckoutRecoveryEmailSettings.md#checkoutrecoveryemailsettings) | Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value. `recovery_email`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-2recovery_email). |
| `require_billing_address` | Conditional | boolean |  |
| `require_email` | Conditional | boolean |  |
| `require_phone` | Conditional | boolean |  |
| `saved_payment_details` | Conditional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value. `saved_payment_details`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-2saved_payment_details). |

### UpdateSettingsRequest.checkout variant 1

anyOf variant 1: Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details..

- Optional: `default_delivery_method_ids`, `default_expires_in_seconds`, `enabled_payment_options`, `promotion_codes_enabled`, `recovery_email`, `require_billing_address`, `require_email`, `require_phone`, `saved_payment_details`.

### UpdateSettingsRequest.checkout variant 2

anyOf variant 2.

- Undeclared: `default_delivery_method_ids`, `default_expires_in_seconds`, `enabled_payment_options`, `promotion_codes_enabled`, `recovery_email`, `require_billing_address`, `require_email`, `require_phone`, `saved_payment_details`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.checkout variant 1.recovery_email

Field definitions: [CheckoutSettings variant 2.recovery_email](../models/CheckoutSettings.md#checkoutsettings-variant-2recovery_email).

### UpdateSettingsRequest.checkout variant 1.saved_payment_details

Field definitions: [CheckoutSettings variant 2.saved_payment_details](../models/CheckoutSettings.md#checkoutsettings-variant-2saved_payment_details).

### UpdateSettingsRequest.customer_account

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_capabilities` | Conditional | [BuyerCapabilities](../models/BuyerCapabilities.md#buyercapabilities) | Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default. minProperties: `1`. |
| `merchant_account_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `mode` | Conditional | string | Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Conditional | [CustomerAccountPresentation](../models/CustomerAccountPresentation.md#customeraccountpresentation) | Patch object: fields you send are applied, fields you omit are unchanged. How a customer account is presented: its account name and custom domain. Send null to clear a value. `presentation`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2presentation). |
| `route_templates` | Conditional | [CustomerAccountRouteTemplates](../models/CustomerAccountRouteTemplates.md#customeraccountroutetemplates) | Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one. `route_templates`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2route_templates). |

### UpdateSettingsRequest.customer_account variant 1

anyOf variant 1: Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions..

- Optional: `buyer_capabilities`, `merchant_account_url`, `mode`, `presentation`, `route_templates`.

### UpdateSettingsRequest.customer_account variant 2

anyOf variant 2.

- Undeclared: `buyer_capabilities`, `merchant_account_url`, `mode`, `presentation`, `route_templates`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. 

### UpdateSettingsRequest.customer_account variant 1.presentation

Field definitions: [CustomerAccountSettings variant 2.presentation](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2presentation).

### UpdateSettingsRequest.customer_account variant 1.route_templates

Field definitions: [CustomerAccountSettings variant 2.route_templates](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2route_templates).

### UpdateSettingsRequest.customer_email_delivery

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dunning` | Conditional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `fulfillment_updates` | Conditional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `invoices` | Conditional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `order_receipts` | Conditional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `returns` | Conditional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `subscription_lifecycle` | Conditional | string | Values: `"flint_sends"`, `"merchant_sends"`. |

### UpdateSettingsRequest.customer_email_delivery variant 1

anyOf variant 1: For each kind of customer email, whether Flint sends it or the merchant sends it..

- Optional: `dunning`, `fulfillment_updates`, `invoices`, `order_receipts`, `returns`, `subscription_lifecycle`.

### UpdateSettingsRequest.customer_email_delivery variant 2

anyOf variant 2.

- Undeclared: `dunning`, `fulfillment_updates`, `invoices`, `order_receipts`, `returns`, `subscription_lifecycle`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.fulfillment

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_required` | Conditional | boolean |  |

### UpdateSettingsRequest.fulfillment variant 1

anyOf variant 1: Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`)..

- Optional: `approval_required`.

### UpdateSettingsRequest.fulfillment variant 2

anyOf variant 2.

- Undeclared: `approval_required`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.inventory

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Conditional | integer | Format: `int32`. |
| `origin_policies` | Conditional | Map of [InventoryOriginPolicy](../models/InventoryOriginPolicy.md#inventoryoriginpolicy) | Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. `origin_policies{}`: [field definitions](../models/InventorySettings.md#inventorysettings-variant-2origin_policies). |

### UpdateSettingsRequest.inventory variant 1

anyOf variant 1: Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source..

- Optional: `low_stock_threshold`, `origin_policies`.

### UpdateSettingsRequest.inventory variant 2

anyOf variant 2.

- Undeclared: `low_stock_threshold`, `origin_policies`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.inventory variant 1.origin_policies{}

Field definitions: [InventorySettings variant 2.origin_policies{}](../models/InventorySettings.md#inventorysettings-variant-2origin_policies).

### UpdateSettingsRequest.legal

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `refund_policy_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `require_terms_of_service` | Conditional | boolean |  |
| `shipping_policy_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `terms_of_service_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |

### UpdateSettingsRequest.legal variant 1

anyOf variant 1: Changes to a merchant's legal settings. Send null on a URL to clear it..

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### UpdateSettingsRequest.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.promotions

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Conditional | boolean |  |
| `codes_enabled` | Conditional | boolean | Merchant promotion code redemption policy. Explicit false rejects promotion-code application even when a checkout or payment link asks to show code entry. |
| `max_promotions_per_order` | Conditional | integer | Maximum promotion discounts on an order, from 1 to 10, default 2. Manual discounts do not count. See Promotion for the evaluation order. Format: `int32`. minimum: `1`. maximum: `10`. Default: `2`. |

### UpdateSettingsRequest.promotions variant 1

anyOf variant 1: Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order..

- Optional: `automatic_enabled`, `codes_enabled`, `max_promotions_per_order`.

### UpdateSettingsRequest.promotions variant 2

anyOf variant 2.

- Undeclared: `automatic_enabled`, `codes_enabled`, `max_promotions_per_order`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.subscriptions

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_billing_schedule_owner` | Conditional | string | Values: `"flint"`, `"external"`. |
| `dunning_end_action` | Conditional | string | Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `dunning_retry_days` | Conditional | integer | Format: `int32`. |
| `external_dunning_end_action` | Conditional | string | Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `send_backordered_email` | Conditional | boolean |  |

### UpdateSettingsRequest.subscriptions variant 1

anyOf variant 1: Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email..

- Optional: `default_billing_schedule_owner`, `dunning_end_action`, `dunning_retry_days`, `external_dunning_end_action`, `send_backordered_email`.

### UpdateSettingsRequest.subscriptions variant 2

anyOf variant 2.

- Undeclared: `default_billing_schedule_owner`, `dunning_end_action`, `dunning_retry_days`, `external_dunning_end_action`, `send_backordered_email`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

