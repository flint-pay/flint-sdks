[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettingsInput

The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsInput](../models/BrandingSettingsInput.md#brandingsettingsinput) | A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme. |
| `checkout` | Optional | [CheckoutSettingsInput](../models/CheckoutSettingsInput.md#checkoutsettingsinput) | Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_account` | Optional | [CustomerAccountSettingsInput](../models/CustomerAccountSettingsInput.md#customeraccountsettingsinput) | Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettingsInput](../models/CustomerEmailDeliverySettingsInput.md#customeremaildeliverysettingsinput) | For each kind of customer email, whether Flint sends it or the merchant sends it. |
| `fulfillment` | Optional | [FulfillmentSettingsInput](../models/FulfillmentSettingsInput.md#fulfillmentsettingsinput) | Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`). |
| `inventory` | Optional | [InventorySettingsInput](../models/InventorySettingsInput.md#inventorysettingsinput) | Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source. |
| `invoices` | Optional | [InvoiceSettingsInput](../models/InvoiceSettingsInput.md#invoicesettingsinput) | Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries. |
| `legal` | Optional | [LegalSettingsInput](../models/LegalSettingsInput.md#legalsettingsinput) | Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `payment_limits` | Optional | [PaymentLimitSettingsInput](../models/PaymentLimitSettingsInput.md#paymentlimitsettingsinput) | Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `promotions` | Optional | [PromotionSettingsInput](../models/PromotionSettingsInput.md#promotionsettingsinput) | Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. |
| `receipts` | Optional | [ReceiptSettingsInput](../models/ReceiptSettingsInput.md#receiptsettingsinput) | Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text. |
| `settings_id` | Required | string |  |
| `subscriptions` | Optional | [SubscriptionSettingsInput](../models/SubscriptionSettingsInput.md#subscriptionsettingsinput) | Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. |
| `tax` | Optional | [TaxSettingsInput](../models/TaxSettingsInput.md#taxsettingsinput) | Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. |
| `tax_identity` | Required | [TaxIdentityInput](../models/TaxIdentityInput.md#taxidentityinput) or null |  |
| `tipping` | Optional | [TippingSettingsInput](../models/TippingSettingsInput.md#tippingsettingsinput) | Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

