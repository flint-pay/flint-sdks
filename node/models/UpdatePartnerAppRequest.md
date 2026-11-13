[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePartnerAppRequest

The request body for: Update partner app. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Conditional | string | minLength: `1`. |
| `client_secret_enabled` | Conditional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Conditional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest, platform_fee_cap, merchant_action_url and payment_splits; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `merchant_action_url` | Conditional | string or null | Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. An absolute `https` URL of at most 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*` query parameters and replaces any it already has. Once the app has a `platform_profile`, its registrable domain must equal that of `platform_profile.website_url`, or the write fails with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants` platform capability. After Flint first approves or limits the platform, a change to another registrable domain routes after 72 hours, and every change is emailed to the owning merchant's owners and admins. Requires expected_version, because it decides where every merchant the app created is sent from Flint's emails. Send null to clear it: emails then lead to Flint, and new merchant signups are refused until you set it again. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |
| `name` | Conditional | string | The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100 characters, without links or email addresses. minLength: `1`. maxLength: `100`. |
| `payment_splits` | Conditional | [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits) or null | Replaces the whole payment_splits declaration. Sellers that already approved keep the seller terms they approved; merchants that authorize afterwards approve the new seller_terms_url. Send null to remove it, which ends every seller's approval at once: a seller must authorize the app again after you declare it again. Requires expected_version. Setting it doesn't need platform approval, and an unchanged declaration changes nothing. `payment_splits`: [declared alternatives](../models/UpdatePartnerAppRequest.md#updatepartnerapprequestpayment_splits). |
| `permission_manifest` | Conditional | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. `permission_manifest[]`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest). |
| `platform_fee_cap` | Conditional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) or null | Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency, lowers the cap every merchant approved at once. Raising either, or adding a currency, changes no install: each merchant must authorize the app again to approve the higher cap. Send null to remove the cap from the app and every install. Requires expected_version. Setting it doesn't need platform approval, and an unchanged cap changes nothing. `platform_fee_cap`: [declared alternatives](../models/UpdatePartnerAppRequest.md#updatepartnerapprequestplatform_fee_cap). |
| `platform_profile` | Conditional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. `platform_profile`: [declared alternatives](../models/UpdatePartnerAppRequest.md#updatepartnerapprequestplatform_profile). |
| `redirect_uris` | Conditional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

### UpdatePartnerAppRequest variant 1

anyOf variant 1.

- Required: `client_secret_enabled`.
- Optional: `api_version`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 2

anyOf variant 2.

- Required: `name`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 3

anyOf variant 3.

- Required: `redirect_uris`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`.

### UpdatePartnerAppRequest variant 4

anyOf variant 4.

- Required: `permission_manifest`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 5

anyOf variant 5.

- Required: `default_requested_permissions`.
- Optional: `api_version`, `client_secret_enabled`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 6

anyOf variant 6.

- Required: `api_version`.
- Optional: `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 7

anyOf variant 7.

- Required: `platform_profile`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `redirect_uris`.

### UpdatePartnerAppRequest variant 8

anyOf variant 8.

- Required: `platform_fee_cap`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 9

anyOf variant 9.

- Required: `merchant_action_url`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 10

anyOf variant 10.

- Required: `payment_splits`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest.payment_splits

Replaces the whole payment_splits declaration. Sellers that already approved keep the seller terms they approved; merchants that authorize afterwards approve the new seller_terms_url. Send null to remove it, which ends every seller's approval at once: a seller must authorize the app again after you declare it again. Requires expected_version. Setting it doesn't need platform approval, and an unchanged declaration changes nothing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Conditional | string | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

### UpdatePartnerAppRequest.payment_splits variant 1

anyOf PartnerAppPaymentSplitsRequest: The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole..

- Required: `seller_terms_url`.

### UpdatePartnerAppRequest.payment_splits variant 2

anyOf variant 2.

- Undeclared: `seller_terms_url`.
- Value shape: null. Replaces the whole payment_splits declaration. Sellers that already approved keep the seller terms they approved; merchants that authorize afterwards approve the new seller_terms_url. Send null to remove it, which ends every seller's approval at once: a seller must authorize the app again after you declare it again. Requires expected_version. Setting it doesn't need platform approval, and an unchanged declaration changes nothing. 

### UpdatePartnerAppRequest.permission_manifest[]

Field definitions: [CreatePartnerAppRequest.permission_manifest[]](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest).

### UpdatePartnerAppRequest.platform_fee_cap

Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency, lowers the cap every merchant approved at once. Raising either, or adding a currency, changes no install: each merchant must authorize the app again to approve the higher cap. Send null to remove the cap from the app and every install. Requires expected_version. Setting it doesn't need platform approval, and an unchanged cap changes nothing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed part of the cap per payment, keyed by currency code, added to the percentage part: 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to the same currency's maximum, and a currency needs a maximum to have one; otherwise INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency. Only USD today. `fixed_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `maximum_fee_currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today. minProperties: `1`. `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent` | Conditional | number | The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places. 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency without one. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### UpdatePartnerAppRequest.platform_fee_cap variant 1

anyOf PlatformFeeCapRequest: The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part..

- Required: `maximum_fee_currency_options`, `percent`.
- Optional: `fixed_fee_currency_options`.

### UpdatePartnerAppRequest.platform_fee_cap variant 2

anyOf variant 2.

- Undeclared: `fixed_fee_currency_options`, `maximum_fee_currency_options`, `percent`.
- Value shape: null. Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency, lowers the cap every merchant approved at once. Raising either, or adding a currency, changes no install: each merchant must authorize the app again to approve the higher cap. Send null to remove the cap from the app and every install. Requires expected_version. Setting it doesn't need platform approval, and an unchanged cap changes nothing. 

### UpdatePartnerAppRequest.platform_fee_cap variant 1.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### UpdatePartnerAppRequest.platform_fee_cap variant 1.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### UpdatePartnerAppRequest.platform_profile

Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Conditional | integer | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. |
| `estimated_monthly_volume_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `estimated_monthly_volume_money`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money). |
| `merchant_description` | Conditional | string | The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. |
| `merchant_onboarding_description` | Conditional | string | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. |
| `product_description` | Conditional | string | What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. |
| `support_email` | Conditional | string | Where the platform's merchants get support. Format: `email`. minLength: `1`. maxLength: `320`. Example: `"buyer@example.com"`. |
| `support_phone` | Conditional | string | Support phone number in E.164 format, such as +14155550123. Optional. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `website_url` | Conditional | string | The platform's website, as an https URL. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

### UpdatePartnerAppRequest.platform_profile variant 1

anyOf PartnerAppPlatformProfileRequest: The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole..

- Required: `estimated_merchant_count`, `estimated_monthly_volume_money`, `merchant_description`, `merchant_onboarding_description`, `product_description`, `support_email`, `website_url`.
- Optional: `support_phone`.

### UpdatePartnerAppRequest.platform_profile variant 2

anyOf variant 2.

- Undeclared: `estimated_merchant_count`, `estimated_monthly_volume_money`, `merchant_description`, `merchant_onboarding_description`, `product_description`, `support_email`, `support_phone`, `website_url`.
- Value shape: null. Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. 

### UpdatePartnerAppRequest.platform_profile variant 1.estimated_monthly_volume_money

Field definitions: [CreatePartnerAppRequest.platform_profile.estimated_monthly_volume_money](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money).

