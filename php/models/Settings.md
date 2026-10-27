[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Settings

The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettings](../models/BrandingSettings.md#brandingsettings) | A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) | Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) | Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) | For each kind of customer email, whether Flint sends it or the merchant sends it. |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) | Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`). |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) | Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source. |
| `invoices` | Optional | [InvoiceSettings](../models/InvoiceSettings.md#invoicesettings) | Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `payment_limits` | Optional | [PaymentLimitSettings](../models/PaymentLimitSettings.md#paymentlimitsettings) | Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) | Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. |
| `receipts` | Optional | [ReceiptSettings](../models/ReceiptSettings.md#receiptsettings) | Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text. |
| `settings_id` | Required | string |  |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) | Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. |
| `tax` | Optional | [TaxSettings](../models/TaxSettings.md#taxsettings) | Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null |  |
| `tipping` | Optional | [TippingSettings](../models/TippingSettings.md#tippingsettings) | Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. `tipping`: [field definitions](../models/SettingsGetEffectiveResponse200.md#settingsgeteffectiveresponse200datatipping). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### Settings.tipping

Field definitions: [SettingsGetEffectiveResponse200.data.tipping](../models/SettingsGetEffectiveResponse200.md#settingsgeteffectiveresponse200datatipping).

