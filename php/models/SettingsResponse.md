[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettingsResponse

A response containing `Settings` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Settings](../models/Settings.md#settings) | The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping. `data`: [field definitions](../models/SettingsResponse.md#settingsresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SettingsResponse.data

The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.

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
| `metadata` | Optional | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata). |
| `payment_limits` | Optional | [PaymentLimitSettings](../models/PaymentLimitSettings.md#paymentlimitsettings) | Optional merchant limits that can lower Flint's payment-option and surface policy limits. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) | Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order. |
| `receipts` | Optional | [ReceiptSettings](../models/ReceiptSettings.md#receiptsettings) | Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text. |
| `settings_id` | Required | string |  |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) | Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email. |
| `tax` | Optional | [TaxSettings](../models/TaxSettings.md#taxsettings) | Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges. |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | `tax_identity`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatatax_identity). |
| `tipping` | Optional | [TippingSettings](../models/TippingSettings.md#tippingsettings) | Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed. `tipping`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatipping). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

### SettingsResponse.data.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### SettingsResponse.data.tax_identity

Declared alternatives: [CustomerResponse.data.tax_identity](../models/CustomerResponse.md#customerresponsedatatax_identity).

### SettingsResponse.data.tipping

Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean |  |
| `default_smart_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. `default_smart_tip_money`: [declared alternatives](../models/SettingsResponse.md#settingsresponsedatatippingdefault_smart_tip_money). |
| `default_tip_percent` | Required | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. It must match one of the effective tip_percent_options. Null means no preselection is set; effective settings use Flint's default. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. `smart_tip_money_options[]`: [field definitions](../models/SettingsResponse.md#settingsresponsedatatippingsmart_tip_money_options). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### SettingsResponse.data.tipping.default_smart_tip_money

Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default.

Field definitions: [shared fields](TippingSettingsInput.md#tippingsettingsinputdefault_smart_tip_money).

### SettingsResponse.data.tipping.default_smart_tip_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### SettingsResponse.data.tipping.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. 

### SettingsResponse.data.tipping.smart_tip_money_options[]

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](TippingSettingsSmartTipMoneyOptionsItem.md#tippingsettingssmarttipmoneyoptionsitem).

