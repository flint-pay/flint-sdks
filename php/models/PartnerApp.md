[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerApp

An application that merchants can authorize to access their accounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Required | Array of string | Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. |
| `api_version` | Required | string | Default API version for requests without a Flint-Version header. Shared across live and test environments. |
| `api_version_changed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `api_version_previous` | Optional | string | Previous API version, present while a supported rollback is available. |
| `api_version_rollback_expires_at` | Optional | string | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. |
| `client_id` | Required | string | Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. |
| `client_secret_enabled` | Required | boolean | Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. |
| `client_secret_last_used_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `default_requested_permissions` | Required | Array of string | IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen. |
| `partner_app_id` | Required | string | Unique identifier for this partner app, prefixed `papp_`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Permissions the app can request from merchants. Each lists the Flint scopes it grants. `permission_manifest[]`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest). |
| `platform` | Required | [PartnerAppPlatform](../models/PartnerAppPlatform.md#partnerappplatform) | The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event. `platform`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedataplatform). |
| `platform_profile` | Optional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) | What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole. `platform_profile`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedataplatform_profile). |
| `previous_secret_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. |

### PartnerApp.permission_manifest[]

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerApp.platform fields 1

Field definitions: [PartnerAppResponse.data.platform](../models/PartnerAppResponse.md#partnerappresponsedataplatform).

### PartnerApp.platform_profile

Field definitions: [PartnerAppResponse.data.platform_profile](../models/PartnerAppResponse.md#partnerappresponsedataplatform_profile).

