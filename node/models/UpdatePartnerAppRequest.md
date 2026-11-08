[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePartnerAppRequest

The request body for: Update partner app. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Conditional | string | minLength: `1`. |
| `client_secret_enabled` | Conditional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Conditional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Conditional | string | minLength: `1`. |
| `permission_manifest` | Conditional | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. `permission_manifest[]`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest). |
| `platform_profile` | Conditional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. `platform_profile`: [declared alternatives](../models/UpdatePartnerAppRequest.md#updatepartnerapprequestplatform_profile). |
| `redirect_uris` | Conditional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

### UpdatePartnerAppRequest variant 1

anyOf variant 1.

- Required: `client_secret_enabled`.
- Optional: `api_version`, `default_requested_permissions`, `name`, `permission_manifest`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 2

anyOf variant 2.

- Required: `name`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `permission_manifest`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 3

anyOf variant 3.

- Required: `redirect_uris`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `permission_manifest`, `platform_profile`.

### UpdatePartnerAppRequest variant 4

anyOf variant 4.

- Required: `permission_manifest`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 5

anyOf variant 5.

- Required: `default_requested_permissions`.
- Optional: `api_version`, `client_secret_enabled`, `name`, `permission_manifest`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 6

anyOf variant 6.

- Required: `api_version`.
- Optional: `client_secret_enabled`, `default_requested_permissions`, `name`, `permission_manifest`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequest variant 7

anyOf variant 7.

- Required: `platform_profile`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `permission_manifest`, `redirect_uris`.

### UpdatePartnerAppRequest.permission_manifest[]

Field definitions: [CreatePartnerAppRequest.permission_manifest[]](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest).

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

