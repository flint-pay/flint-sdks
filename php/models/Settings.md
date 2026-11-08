[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Settings

The settings for one merchant environment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettings](../models/BrandingSettings.md#brandingsettings) | Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you save a value in this section; effective settings fill in Flint's defaults. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) | Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details. `checkout`: [field definitions](../models/SettingsResponse.md#settingsresponsedatacheckout). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) | The customer account where buyers manage their orders, subscriptions, returns, and invoices. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) | Whether Flint or you send each kind of buyer email. Omitted until you save a value in this section; effective settings fill in Flint's defaults. For each kind of customer email, whether Flint sends it or the merchant sends it. |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) | Fulfillment workflow defaults. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`). |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) | Inventory defaults, such as the low stock threshold and what happens when stock can't cover a paid order. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one. `inventory`: [field definitions](../models/SettingsResponse.md#settingsresponsedatainventory). |
| `invoices` | Optional | [InvoiceSettings](../models/InvoiceSettings.md#invoicesettings) | Defaults and policies for the invoices you issue. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries. `invoices`: [field definitions](../models/SettingsResponse.md#settingsresponsedatainvoices). |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal links and terms acceptance that checkout shows. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `payment_limits` | Optional | [PaymentLimitSettings](../models/PaymentLimitSettings.md#paymentlimitsettings) | Your own lower and upper limits on payment amounts. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `payments` | Optional | [PaymentSettings](../models/PaymentSettings.md#paymentsettings) | Statement text for new payments. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Settings for the statement text on new payments. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) | Whether automatic promotions and promotion codes apply, and how many discounts one order can stack. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. |
| `settings_id` | Required | string | Unique identifier for this settings, prefixed `set_`. |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) | Subscription billing behavior, such as what happens when payment retries run out. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. |
| `tax` | Optional | [TaxSettings](../models/TaxSettings.md#taxsettings) | Default tax behavior for new checkouts and orders. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. `tax`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatax). |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | The merchant's legal identity, printed on invoices and credit notes. `null` when none is set. |
| `tipping` | Optional | [TippingSettings](../models/TippingSettings.md#tippingsettings) | How tips work at checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. `tipping`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatipping). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### Settings.checkout

Field definitions: [SettingsResponse.data.checkout](../models/SettingsResponse.md#settingsresponsedatacheckout).

### Settings.inventory

Field definitions: [SettingsResponse.data.inventory](../models/SettingsResponse.md#settingsresponsedatainventory).

### Settings.invoices

Field definitions: [SettingsResponse.data.invoices](../models/SettingsResponse.md#settingsresponsedatainvoices).

### Settings.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### Settings.tax

Field definitions: [SettingsResponse.data.tax](../models/SettingsResponse.md#settingsresponsedatatax).

### Settings.tipping

Field definitions: [SettingsResponse.data.tipping](../models/SettingsResponse.md#settingsresponsedatatipping).

