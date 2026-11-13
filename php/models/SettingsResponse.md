[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettingsResponse

A response containing `Settings` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Settings](../models/Settings.md#settings) | Resource, collection, or operation result returned by this request. The settings for one merchant environment. `data`: [field definitions](../models/SettingsResponse.md#settingsresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SettingsResponse.data

Resource, collection, or operation result returned by this request. The settings for one merchant environment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettings](../models/BrandingSettings.md#brandingsettings) | Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you save a value in this section; effective settings fill in Flint's defaults. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) | Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details. `checkout`: [field definitions](../models/SettingsResponse.md#settingsresponsedatacheckout). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) | The customer account where buyers manage their orders, subscriptions, returns, and invoices. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) | Whether Flint or you send each kind of buyer email. Omitted until you save a value in this section; effective settings fill in Flint's defaults. For each kind of customer email, whether Flint sends it or the merchant sends it. |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) | Fulfillment workflow defaults. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`). |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) | Inventory defaults, such as the low stock threshold and what happens when stock can't cover a paid order. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one. `inventory`: [field definitions](../models/SettingsResponse.md#settingsresponsedatainventory). |
| `invoices` | Optional | [InvoiceSettings](../models/InvoiceSettings.md#invoicesettings) | Defaults and policies for the invoices you issue. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries. `invoices`: [field definitions](../models/SettingsResponse.md#settingsresponsedatainvoices). |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal links and terms acceptance that checkout shows. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `payment_limits` | Optional | [PaymentLimitSettings](../models/PaymentLimitSettings.md#paymentlimitsettings) | Your own lower and upper limits on payment amounts. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `payments` | Optional | [PaymentSettings](../models/PaymentSettings.md#paymentsettings) | Statement text for new payments. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Settings for the statement text on new payments. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) | Whether automatic promotions and promotion codes apply, and how many discounts one order can stack. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. |
| `settings_id` | Required | string | Unique identifier for this settings, prefixed `set_`. Example: `"set_01KEZF7C00SA6XKHH6GVZ1JMC2"`. |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) | Subscription billing behavior, such as what happens when payment retries run out. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. |
| `tax` | Optional | [TaxSettings](../models/TaxSettings.md#taxsettings) | Default tax behavior for new checkouts and orders. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. `tax`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatax). |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | The merchant's legal identity, printed on invoices and credit notes. `null` when none is set. `tax_identity`: [declared alternatives](../models/SettingsResponse.md#settingsresponsedatatax_identity). |
| `tipping` | Optional | [TippingSettings](../models/TippingSettings.md#tippingsettings) | How tips work at checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. `tipping`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatipping). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### SettingsResponse.data.checkout

Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_method_ids` | Optional | Array of string | Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `default_expires_in_seconds` | Optional | integer | Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `enabled_payment_options` | Optional | Array of string | Payment options checkout offers by default. Adding ach_debit in merchant settings requests ACH Direct Debit for your payment account; Flint refuses it before the account is set up, for a payment account outside the US, and in location or device settings. Each option shows only when it is available for the payment account and order. Items: minLength: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `promotion_codes_enabled` | Optional | boolean | Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; when unset, hosted checkout offers code entry only while an active code promotion exists in this environment. Read can_apply_promotion_code on the session. Object-level promotion_config.codes_enabled can override it for a session or payment link. |
| `recovery_email` | Optional | [CheckoutRecoveryEmailSettings](../models/CheckoutRecoveryEmailSettings.md#checkoutrecoveryemailsettings) | Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value. |
| `require_billing_address` | Optional | boolean | Whether hosted checkout requires the buyer's billing address before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `require_email` | Optional | boolean | Whether hosted checkout requires the buyer's email address before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `require_phone` | Optional | boolean | Whether hosted checkout requires the buyer's phone number before payment. A checkout session or payment link can override it with `buyer_fields`. |
| `saved_payment_details` | Optional | [CheckoutSavedPaymentDetailsSettings](../models/CheckoutSavedPaymentDetailsSettings.md#checkoutsavedpaymentdetailssettings) | Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value. |

### SettingsResponse.data.inventory

Inventory defaults, such as the low stock threshold and what happens when stock can't cover a paid order. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set, which means callers must send `inventory_routing_source` on each request with tracked items. `default_routing_source`: [declared alternatives](../models/SettingsResponse.md#settingsresponsedatainventorydefault_routing_source). |
| `low_stock_threshold` | Optional | integer | Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: `int32`. minimum: `0`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicy](../models/InventoryOriginPolicy.md#inventoryoriginpolicy) | Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. |

### SettingsResponse.data.inventory.default_routing_source

Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set, which means callers must send `inventory_routing_source` on each request with tracked items.

Field definitions: [shared fields](ProductResponse.md#productresponsedatadefault_variantinventory_availabilityinventory_routing_source).

### SettingsResponse.data.inventory.default_routing_source variant 1

anyOf InventoryRoutingSource: Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision..

- Required: `type`.
- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`.

### SettingsResponse.data.inventory.default_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set, which means callers must send `inventory_routing_source` on each request with tracked items. 

### SettingsResponse.data.invoices

Defaults and policies for the invoices you issue. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `autopay_retry_policy` | Optional | [InvoiceAutopayRetryPolicy](../models/InvoiceAutopayRetryPolicy.md#invoiceautopayretrypolicy) | Replaced as a whole: send every field you want to keep. When to retry a failed automatic invoice payment, as a list of day offsets. |
| `credit_note_number_prefix` | Optional | string | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `default_collection_mode` | Optional | string | How new invoices that ask for `merchant_default` collection are collected. Defaults to `buyer_initiated`. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `default_footer` | Optional | string | Limited to 4096 characters (Unicode code points), counted before normalization. maxLength: `4096`. |
| `default_invoice_payment_term_id` | Optional | string | ID of the invoice payment term that applies to your invoices created with `payment_due.type` set to `merchant_default`. pattern: `^ipt_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `default_memo` | Optional | string | Limited to 4096 characters (Unicode code points), counted before normalization. maxLength: `4096`. |
| `invoice_number_prefix` | Optional | string | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Replaced as a whole: send every field you want to keep. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |
| `reminder_policy` | Optional | [InvoiceReminderPolicy](../models/InvoiceReminderPolicy.md#invoicereminderpolicy) | Replaced as a whole: send every field you want to keep. Rules for automatic invoice reminders, each sent a set number of days before or after the due date. |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) | Replaced as a whole: send every field you want to keep. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `remit_to_address`: [field definitions](../models/SettingsResponse.md#settingsresponsedatainvoicesremit_to_address). |
| `reply_to_email` | Optional | string | Limited to 255 characters (Unicode code points), counted before normalization. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. |

### SettingsResponse.data.invoices.remit_to_address

Replaced as a whole: send every field you want to keep. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### SettingsResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SettingsResponse.data.tax

Default tax behavior for new checkouts and orders. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_callback_id` | Optional | string or null | The active tax calculation callback selected for this merchant and environment. Switching IDs is atomic. Omitted when no callback is selected. minLength: `1`. Example: `"tcb_01KEZF7C00N7SER74Y2E6D1ZGT"`. |
| `default_calculation` | Optional | [TaxDefaultCalculation](../models/TaxDefaultCalculation.md#taxdefaultcalculation) | Replaced as a whole: send every field you want to keep. The calculation an order uses when nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and the orders of checkout sessions, payment links, and subscriptions that set none. A `provided` default applies only to orders you create; the orders Flint creates use automatic tax under it. Omitted when unset, which means automatic. The calculation an order uses when its request leaves `tax.calculation` unset. |
| `default_delivery_tax_category` | Optional | string or null | Charge category inherited by delivery methods that omit charge_tax_category. `null` when no default is set; the category then follows the method type: shipping for shipments, delivery for local delivery, and service_fee for pickup. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `default_delivery_taxable` | Optional | boolean | Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to true. |
| `default_enabled` | Optional | boolean | Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable. Turning it on, or changing the default calculation while it is on, needs what the default calculation uses: a selected tax calculation callback for an external `callback` default, and an active tax connection for any other, because the orders Flint creates use automatic tax under an automatic or `provided` default. |
| `default_line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#settingsresponsedatatax-default_line_item_tax_category-values). |
| `default_price_mode` | Optional | string | Price mode an order takes when it starts calculating tax without its own tax.calculation: when it is created, from a checkout session or payment link, or when tax is turned on later. additive (the default) adds tax to prices, and inclusive treats every line item and charge price as including its tax. Subscription orders, including renewals, stay additive, and orders that already calculate tax keep their mode. Values: `"additive"`, `"inclusive"`. |
| `delivery_charge_tax_basis` | Optional | string | Automatic tax basis for delivery-method charges. Defaults to full_charge. taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges and external tax are unchanged. Saved values take effect only when Flint enables this capability; until then the full charge is used. Open orders use the setting at their next calculation; committed tax keeps its basis. Values: `"full_charge"`, `"taxable_items_share"`. |

#### SettingsResponse.data.tax default_line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### SettingsResponse.data.tax_identity

The merchant's legal identity, printed on invoices and credit notes. `null` when none is set.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity).

### SettingsResponse.data.tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### SettingsResponse.data.tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. The merchant's legal identity, printed on invoices and credit notes. `null` when none is set. 

### SettingsResponse.data.tax_identity variant 1.registered_address

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address).

### SettingsResponse.data.tax_identity variant 1.tax_ids[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids).

### SettingsResponse.data.tipping

How tips work at checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean | Whether hosted checkout offers tips when a checkout session or payment link doesn't set its own `tip`. Defaults to false. |
| `default_smart_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. `null` when no preselection is set; effective settings use Flint's default. `default_smart_tip_money`: [declared alternatives](../models/SettingsResponse.md#settingsresponsedatatippingdefault_smart_tip_money). |
| `default_tip_percent` | Required | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. It must match one of the effective tip_percent_options. `null` when no preselection is set; effective settings use Flint's default. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Three fixed tip amounts to offer. minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. `smart_tip_money_options[]`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatippingsmart_tip_money_options). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### SettingsResponse.data.tipping.default_smart_tip_money

Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. `null` when no preselection is set; effective settings use Flint's default.

Field definitions: [shared fields](TippingSettingsInput.md#tippingsettingsinputdefault_smart_tip_money).

### SettingsResponse.data.tipping.default_smart_tip_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### SettingsResponse.data.tipping.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. `null` when no preselection is set; effective settings use Flint's default. 

### SettingsResponse.data.tipping.smart_tip_money_options[]

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](TippingSettingsSmartTipMoneyOptionsItem.md#tippingsettingssmarttipmoneyoptionsitem).

### SettingsResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

