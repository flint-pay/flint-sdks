[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSettingsRequest

The request body for: Update merchant settings. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsRequest](../models/BrandingSettingsRequest.md#brandingsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `checkout`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestcheckout). |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. `customer_account`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestcustomer_account). |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `customer_email_delivery`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestcustomer_email_delivery). |
| `expected_version` | Optional | integer | The Settings.version last read by the caller. Required when tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `fulfillment`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestfulfillment). |
| `inventory` | Optional | [InventorySettingsRequest](../models/InventorySettingsRequest.md#inventorysettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `invoices` | Optional | [InvoiceSettingsPatch](../models/InvoiceSettingsPatch.md#invoicesettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettingsRequest](../models/LegalSettingsRequest.md#legalsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `legal`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestlegal). |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `payment_limits` | Optional | [PaymentLimitSettingsPatch](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are omitted from reads. |
| `payments` | Optional | [PaymentSettingsPatch](../models/PaymentSettingsPatch.md#paymentsettingspatch) | Patch object: fields you send are applied, fields you omit are unchanged. Changes the statement text for new payments. Changes to the statement text for new payments. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `promotions`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestpromotions). |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `subscriptions`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestsubscriptions). |
| `tax` | Optional | [TaxSettingsRequest](../models/TaxSettingsRequest.md#taxsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax_identity` | Optional | [TaxIdentityPatch](../models/TaxIdentityPatch.md#taxidentitypatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Legal identity displayed on invoices and credit notes. Requires expected_version whenever present. |
| `tipping` | Optional | [TippingSettingsPatch](../models/TippingSettingsPatch.md#tippingsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |

### UpdateSettingsRequest.checkout

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_method_ids` | Conditional | Array of string | Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `default_expires_in_seconds` | Conditional | integer | Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `enabled_payment_options` | Conditional | Array of string | Payment options checkout offers by default. Adding ach_debit in merchant settings requests ACH Direct Debit for your payment account; Flint refuses it before the account is set up, for a payment account outside the US, and in location or device settings. Each option shows only when it is available for the payment account and order. Items: minLength: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `promotion_codes_enabled` | Conditional | boolean | Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; when unset, hosted checkout offers code entry only while an active code promotion exists in this environment. Read can_apply_promotion_code on the session. Object-level promotion_config.codes_enabled can override it for a session or payment link. |
| `recovery_email` | Conditional | [CheckoutRecoveryEmailSettings](../models/CheckoutRecoveryEmailSettings.md#checkoutrecoveryemailsettings) | Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value. `recovery_email`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-2recovery_email). |
| `require_billing_address` | Conditional | boolean | Whether hosted checkout requires the buyer's billing address before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `require_email` | Conditional | boolean | Whether hosted checkout requires the buyer's email address before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `require_phone` | Conditional | boolean | Whether hosted checkout requires the buyer's phone number before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `saved_payment_details` | Conditional | [CheckoutSavedPaymentDetailsSettings](../models/CheckoutSavedPaymentDetailsSettings.md#checkoutsavedpaymentdetailssettings) | Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value. `saved_payment_details`: [field definitions](../models/CheckoutSettings.md#checkoutsettings-variant-2saved_payment_details). |

### UpdateSettingsRequest.checkout variant 1

anyOf CheckoutSettingsRequest: Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details..

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
| `buyer_capabilities` | Conditional | [BuyerCapabilities](../models/BuyerCapabilities.md#buyercapabilities) | Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Send at least one field. What a store lets buyers do to their own subscriptions. minProperties: `1`. `buyer_capabilities`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2buyer_capabilities). |
| `merchant_account_url` | Conditional | string or null | Your customer account page's URL, when you host it. Send null to clear it. minLength: `1`. |
| `mode` | Conditional | string | Who hosts the customer account where buyers see their orders, subscriptions, returns, and invoices. Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Conditional | [CustomerAccountPresentation](../models/CustomerAccountPresentation.md#customeraccountpresentation) | Patch object: fields you send are applied, fields you omit are unchanged. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value. `presentation`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2presentation). |
| `route_templates` | Conditional | [CustomerAccountRouteTemplates](../models/CustomerAccountRouteTemplates.md#customeraccountroutetemplates) | Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one. `route_templates`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2route_templates). |

### UpdateSettingsRequest.customer_account variant 1

anyOf CustomerAccountSettingsRequest: Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions..

- Optional: `buyer_capabilities`, `merchant_account_url`, `mode`, `presentation`, `route_templates`.

### UpdateSettingsRequest.customer_account variant 2

anyOf variant 2.

- Undeclared: `buyer_capabilities`, `merchant_account_url`, `mode`, `presentation`, `route_templates`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. 

### UpdateSettingsRequest.customer_account variant 1.buyer_capabilities

Field definitions: [CustomerAccountSettings variant 2.buyer_capabilities](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2buyer_capabilities).

### UpdateSettingsRequest.customer_account variant 1.presentation

Field definitions: [CustomerAccountSettings variant 2.presentation](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2presentation).

### UpdateSettingsRequest.customer_account variant 1.route_templates

Field definitions: [CustomerAccountSettings variant 2.route_templates](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2route_templates).

### UpdateSettingsRequest.customer_email_delivery

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dunning` | Conditional | string | Who sends the buyer emails when a subscription becomes past due or a payment retry fails. When you send them, use the `subscription.past_due` and `subscription_payment_retry.failed` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `fulfillment_updates` | Conditional | string | Who sends the buyer updates when a fulfillment, shipment, or package changes, and when a paid line's `expected_ship_date` changes. When you send them, use the `fulfillment.*`, `shipment.*`, and `package.*` webhook events, and `order.updated` for ship date changes. Values: `"flint_sends"`, `"merchant_sends"`. |
| `invoices` | Conditional | string | Who sends invoice emails, reminders, late fee notices, credit note emails, and failed bank debit notices for invoice payments. Explicit email issue and scheduling require flint_sends. When you send these emails, use invoice.*, invoice_delivery_attempt.*, and invoice_payment_attempt.* webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `order_receipts` | Conditional | string | Who sends payment and refund receipts for orders, invoices, and payments without an order, plus failed bank debit notices for orders. When you send them, use order.paid (or payment_intent.succeeded for payments without an order), refund.succeeded, and refund.partially_succeeded. For failed bank debits on orders, use payment_intent.payment_failed. Values: `"flint_sends"`, `"merchant_sends"`. |
| `returns` | Conditional | string | Who sends the buyer emails as a return is created, decided, canceled, reopened, or completed. When you send them, use the `return.*` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `subscription_lifecycle` | Conditional | string | Who sends the buyer emails when a subscription is created, activated, paused, resumed, canceled, or changes plan, and for its trial ending and skipped cycles. When you send them, use the `subscription.*` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |

### UpdateSettingsRequest.customer_email_delivery variant 1

anyOf CustomerEmailDeliverySettingsRequest: For each kind of customer email, whether Flint sends it or the merchant sends it..

- Optional: `dunning`, `fulfillment_updates`, `invoices`, `order_receipts`, `returns`, `subscription_lifecycle`.

### UpdateSettingsRequest.customer_email_delivery variant 2

anyOf variant 2.

- Undeclared: `dunning`, `fulfillment_updates`, `invoices`, `order_receipts`, `returns`, `subscription_lifecycle`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.fulfillment

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_required` | Conditional | boolean | Whether a new fulfillment must be accepted before it can move into preparation, movement, or completion. Defaults to false. |

### UpdateSettingsRequest.fulfillment variant 1

anyOf FulfillmentSettingsRequest: Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`)..

- Optional: `approval_required`.

### UpdateSettingsRequest.fulfillment variant 2

anyOf variant 2.

- Undeclared: `approval_required`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.legal

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Conditional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |
| `refund_policy_url` | Conditional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |
| `require_terms_of_service` | Conditional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Conditional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |
| `terms_of_service_url` | Conditional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |

### UpdateSettingsRequest.legal variant 1

anyOf LegalSettingsRequest: Changes to a merchant's legal settings. Send null on a URL to clear it..

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### UpdateSettingsRequest.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.promotions

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Conditional | boolean | Whether automatic promotions apply to this merchant's orders, checkout sessions and payment links. Omitted means true. Explicit false stops them everywhere, and a checkout session or payment link can't turn them back on. |
| `codes_enabled` | Conditional | boolean | Merchant promotion code redemption policy. Explicit false rejects promotion-code application even when a checkout or payment link asks to show code entry. |
| `max_promotions_per_order` | Conditional | integer | Maximum promotion discounts on an order, from 1 to 10, default 2. Manual discounts do not count. See Promotion for the evaluation order. Format: `int32`. minimum: `1`. maximum: `10`. Default: `2`. |

### UpdateSettingsRequest.promotions variant 1

anyOf PromotionSettingsRequest: Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order..

- Optional: `automatic_enabled`, `codes_enabled`, `max_promotions_per_order`.

### UpdateSettingsRequest.promotions variant 2

anyOf variant 2.

- Undeclared: `automatic_enabled`, `codes_enabled`, `max_promotions_per_order`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

### UpdateSettingsRequest.subscriptions

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_billing_schedule_owner` | Conditional | string | Who sets billing dates for a new subscription that doesn't send `billing_schedule`. Defaults to `flint`. Values: `"flint"`, `"external"`. |
| `dunning_end_action` | Conditional | string | What happens to a subscription that Flint bills when every payment retry has failed. Defaults to `cancel`. Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `dunning_retry_days` | Conditional | integer | Days automatic payment retries run after a renewal fails, from 1 to 90. Defaults to 16. Format: `int32`. minimum: `1`. maximum: `90`. Default: `16`. |
| `external_dunning_end_action` | Conditional | string | What happens to a subscription with an external billing schedule when every payment retry has failed. Defaults to `notify_only`. Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `send_backordered_email` | Conditional | boolean | Whether Flint emails the buyer when a renewal waits on stock. Defaults to false. |

### UpdateSettingsRequest.subscriptions variant 1

anyOf SubscriptionSettingsRequest: Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email..

- Optional: `default_billing_schedule_owner`, `dunning_end_action`, `dunning_retry_days`, `external_dunning_end_action`, `send_backordered_email`.

### UpdateSettingsRequest.subscriptions variant 2

anyOf variant 2.

- Undeclared: `default_billing_schedule_owner`, `dunning_end_action`, `dunning_retry_days`, `external_dunning_end_action`, `send_backordered_email`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

