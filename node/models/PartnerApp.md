[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerApp

An application that merchants can authorize to access their accounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Required | Array of string | Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. |
| `api_version` | Required | string | Default API version for requests without a Flint-Version header. Shared across live and test environments. |
| `api_version_changed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `api_version_previous` | Optional | string | Previous API version, present while a supported rollback is available. |
| `api_version_rollback_expires_at` | Optional | string | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `client_id` | Required | string | Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. Example: `"fpc_00112233445566778899aabbccddeeff"`. |
| `client_secret_enabled` | Required | boolean | Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. |
| `client_secret_last_used_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_requested_permissions` | Required | Array of string | IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. |
| `merchant_action_routing` | Optional | [PartnerAppMerchantActionRouting](../models/PartnerAppMerchantActionRouting.md#partnerappmerchantactionrouting) | Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. The destination merchant emails keep using while a move to another registrable domain is pending. |
| `merchant_action_url` | Optional | string | Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen. |
| `partner_app_id` | Required | string | Unique identifier for this partner app, prefixed `papp_`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payment_splits` | Optional | [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits) | The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen. `payment_splits`: [field definitions](../models/PartnerApp.md#partnerapppayment_splits). |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Permissions the app can request from merchants. Each lists the Flint scopes it grants. `permission_manifest[]`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobjectgranted_permissions). |
| `platform` | Required | [PartnerAppPlatform](../models/PartnerAppPlatform.md#partnerappplatform) | The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event. |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) | The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. `platform_fee_cap`: [field definitions](../models/PartnerApp.md#partnerappplatform_fee_cap). |
| `platform_profile` | Optional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) | What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole. `platform_profile`: [field definitions](../models/PartnerApp.md#partnerappplatform_profile). |
| `previous_secret_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. |

### PartnerApp.payment_splits

The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Required | string | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

### PartnerApp.permission_manifest[]

Field definitions: [EnvironmentGrantCreatedEvent.data.object.granted_permissions[]](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobjectgranted_permissions).

### PartnerApp.platform_fee_cap

The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.

Field definitions: [shared fields](EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobjectplatform_fee_cap).

### PartnerApp.platform_fee_cap.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PartnerApp.platform_fee_cap.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PartnerApp.platform_profile

What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Required | integer | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. |
| `estimated_monthly_volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `estimated_monthly_volume_money`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money). |
| `merchant_description` | Required | string | The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. |
| `merchant_onboarding_description` | Required | string | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. |
| `product_description` | Required | string | What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. |
| `support_email` | Required | string | Where the platform's merchants get support. Format: `email`. maxLength: `320`. Example: `"buyer@example.com"`. |
| `support_phone` | Optional | string | Support phone number in E.164 format, such as +14155550123. Optional. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `website_url` | Required | string | The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

### PartnerApp.platform_profile.estimated_monthly_volume_money

Field definitions: [CreatePartnerAppRequest.platform_profile.estimated_monthly_volume_money](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money).

