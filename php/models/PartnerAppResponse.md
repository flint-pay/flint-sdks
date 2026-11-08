[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppResponse

A response containing `PartnerApp` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerApp](../models/PartnerApp.md#partnerapp) | Resource, collection, or operation result returned by this request. An application that merchants can authorize to access their accounts. `data`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PartnerAppResponse.data

Resource, collection, or operation result returned by this request. An application that merchants can authorize to access their accounts.

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
| `name` | Required | string | The app's name, shown to merchants on the consent screen. |
| `partner_app_id` | Required | string | Unique identifier for this partner app, prefixed `papp_`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Permissions the app can request from merchants. Each lists the Flint scopes it grants. `permission_manifest[]`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest). |
| `platform` | Required | [PartnerAppPlatform](../models/PartnerAppPlatform.md#partnerappplatform) | The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event. `platform`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedataplatform). |
| `platform_profile` | Optional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) | What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole. `platform_profile`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedataplatform_profile). |
| `previous_secret_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. |

### PartnerAppResponse.data.permission_manifest[]

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Field definitions: [shared fields](PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput).

### PartnerAppResponse.data.platform

The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [PartnerAppPlatformCapability](../models/PartnerAppPlatformCapability.md#partnerappplatformcapability) | One entry per platform capability, in the same order for every app. |
| `limits` | Optional | [PartnerAppPlatformLimits](../models/PartnerAppPlatformLimits.md#partnerappplatformlimits) | The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. Soft limits on the platform's live use, and its usage against them. |
| `requirements` | Required | Array of string | What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`. |
| `reserve` | Optional | [PartnerAppPlatformReserve](../models/PartnerAppPlatformReserve.md#partnerappplatformreserve) | The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. The platform's reserve terms. |
| `status` | Required | string | Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`. |
| `terms_acceptance` | Required | [PartnerAppPlatformTermsAcceptance](../models/PartnerAppPlatformTermsAcceptance.md#partnerappplatformtermsacceptance) or null | The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. `terms_acceptance`: [declared alternatives](../models/PartnerAppResponse.md#partnerappresponsedataplatformterms_acceptance). |

### PartnerAppResponse.data.platform.terms_acceptance

The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Conditional | string | When Flint recorded the acceptance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `accepted_by` | Conditional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The credential that accepted: a user for a Dashboard session, or an api_key. A reference to another resource by `resource_type` and `resource_id`. `accepted_by`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedataplatformterms_acceptance-variant-1accepted_by). |
| `platform_terms_version` | Conditional | string | The platform terms version accepted. |

### PartnerAppResponse.data.platform.terms_acceptance variant 1

anyOf PartnerAppPlatformTermsAcceptance: Who accepted a version of Flint's platform terms, and when..

- Required: `accepted_at`, `accepted_by`, `platform_terms_version`.

### PartnerAppResponse.data.platform.terms_acceptance variant 2

anyOf variant 2.

- Undeclared: `accepted_at`, `accepted_by`, `platform_terms_version`.
- Value shape: null. The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. 

### PartnerAppResponse.data.platform.terms_acceptance variant 1.accepted_by

The credential that accepted: a user for a Dashboard session, or an api_key. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

### PartnerAppResponse.data.platform_profile

What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Required | integer | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. |
| `estimated_monthly_volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `merchant_description` | Required | string | The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. |
| `merchant_onboarding_description` | Required | string | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. |
| `product_description` | Required | string | What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. |
| `support_email` | Required | string | Where the platform's merchants get support. Format: `email`. maxLength: `320`. Example: `"buyer@example.com"`. |
| `support_phone` | Optional | string | Support phone number in E.164 format, such as +14155550123. Optional. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `website_url` | Required | string | The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

### PartnerAppResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

