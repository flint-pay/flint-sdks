[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppRequest

The request body for: Create partner app.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version for requests the app makes with its install tokens that send no Flint-Version header. Defaults to the version of this request and can't be newer than it. minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | IDs of the permissions requested when an authorization request sends no scope. Each must be in permission_manifest. Defaults to every permission that isn't optional. Items: minLength: `1`. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen. minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Permissions the app can request from merchants. At least one is required. Each lists the Flint scopes it grants. `permission_manifest[]`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest). |
| `platform_profile` | Optional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) | The platform profile Flint reviews before it approves the app as a platform. Optional; set it now or later with PATCH. The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole. `platform_profile`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profile). |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. At least one is required. Items: minLength: `1`. |

### CreatePartnerAppRequest.permission_manifest[]

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Field definitions: [shared fields](PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput).

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

