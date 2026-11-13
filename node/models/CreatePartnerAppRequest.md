[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppRequest

The request body for: Create partner app.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version for requests the app makes with its install tokens that send no Flint-Version header. Defaults to the version of this request and can't be newer than it. minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | IDs of the permissions requested when an authorization request sends no scope. Each must be in permission_manifest. Defaults to every permission that isn't optional. Items: minLength: `1`. |
| `merchant_action_url` | Optional | string | Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. An absolute `https` URL of at most 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*` query parameters and replaces any it already has. Once the app has a `platform_profile`, its registrable domain must equal that of `platform_profile.website_url`, or the write fails with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants` platform capability. After Flint first approves or limits the platform, a change to another registrable domain routes after 72 hours, and every change is emailed to the owning merchant's owners and admins. Optional; set it now or later with PATCH. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100 characters, without links or email addresses. minLength: `1`. maxLength: `100`. |
| `payment_splits` | Optional | [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits) | Declares that the app's owner sends splits of the payments it collects to sellers that install the app, with the seller terms sellers approve on the consent screen. Optional. Setting it doesn't need platform approval, so test installs can use it right away; it requests the payment_splits platform capability, which live splits need. The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole. `payment_splits`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpayment_splits). |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Permissions the app can request from merchants. At least one is required. Each lists the Flint scopes it grants. `permission_manifest[]`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest). |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) | The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it when they install the app. Optional. Setting it doesn't need platform approval, so test installs can use it right away. The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part. `platform_fee_cap`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_fee_cap). |
| `platform_profile` | Optional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) | The platform profile Flint reviews before it approves the app as a platform. Optional; set it now or later with PATCH. The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole. `platform_profile`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profile). |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. At least one is required. Items: minLength: `1`. |

### CreatePartnerAppRequest.payment_splits

Declares that the app's owner sends splits of the payments it collects to sellers that install the app, with the seller terms sellers approve on the consent screen. Optional. Setting it doesn't need platform approval, so test installs can use it right away; it requests the payment_splits platform capability, which live splits need. The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole.

Field definitions: [shared fields](PartnerAppPaymentSplitsRequestInput.md#partnerapppaymentsplitsrequestinput).

### CreatePartnerAppRequest.permission_manifest[]

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Field definitions: [shared fields](PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput).

### CreatePartnerAppRequest.platform_fee_cap

The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it when they install the app. Optional. Setting it doesn't need platform approval, so test installs can use it right away. The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed part of the cap per payment, keyed by currency code, added to the percentage part: 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to the same currency's maximum, and a currency needs a maximum to have one; otherwise INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency. Only USD today. `fixed_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today. minProperties: `1`. `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent` | Required | number | The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places. 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency without one. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### CreatePartnerAppRequest.platform_fee_cap.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### CreatePartnerAppRequest.platform_fee_cap.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### CreatePartnerAppRequest.platform_profile

The platform profile Flint reviews before it approves the app as a platform. Optional; set it now or later with PATCH. The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Required | integer | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. |
| `estimated_monthly_volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `estimated_monthly_volume_money`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money). |
| `merchant_description` | Required | string | The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. |
| `merchant_onboarding_description` | Required | string | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. |
| `product_description` | Required | string | What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. |
| `support_email` | Required | string | Where the platform's merchants get support. Format: `email`. minLength: `1`. maxLength: `320`. Example: `"buyer@example.com"`. |
| `support_phone` | Optional | string | Support phone number in E.164 format, such as +14155550123. Optional. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `website_url` | Required | string | The platform's website, as an https URL. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

### CreatePartnerAppRequest.platform_profile.estimated_monthly_volume_money

Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

