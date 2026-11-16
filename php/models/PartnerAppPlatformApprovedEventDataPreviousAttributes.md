[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformApprovedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Optional | Array of string or null | Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. `allowed_scopes`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesallowed_scopes). |
| `api_version` | Optional | string or null | Default API version for requests without a Flint-Version header. Shared across live and test environments. `api_version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version). |
| `api_version_changed_at` | Optional | string or null | RFC3339 timestamp. `api_version_changed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `api_version_previous` | Optional | string or null | Previous API version, present while a supported rollback is available. `api_version_previous`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous). |
| `api_version_rollback_expires_at` | Optional | string or null | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. `api_version_rollback_expires_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at). |
| `client_id` | Optional | string or null | Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. `client_id`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesclient_id). |
| `client_secret_enabled` | Optional | boolean or null | Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. `client_secret_enabled`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesclient_secret_enabled). |
| `client_secret_last_used_at` | Optional | string or null or null | When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. `client_secret_last_used_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesclient_secret_last_used_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `default_requested_permissions` | Optional | Array of string or null | IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. `default_requested_permissions`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesdefault_requested_permissions). |
| `merchant_action_routing` | Optional | [PartnerAppMerchantActionRouting](../models/PartnerAppMerchantActionRouting.md#partnerappmerchantactionrouting) or null | Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. |
| `merchant_action_url` | Optional | string or null | Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. `merchant_action_url`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesmerchant_action_url). |
| `name` | Optional | string or null | The app's name, shown to merchants on the consent screen. `name`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesname). |
| `partner_app_id` | Optional | string or null | Unique identifier for this partner app, prefixed `papp_`. `partner_app_id`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributespartner_app_id). |
| `payment_splits` | Optional | [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits) or null | The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) or null | Permissions the app can request from merchants. Each lists the Flint scopes it grants. `permission_manifest`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributespermission_manifest). |
| `platform` | Optional | [PartnerAppPlatform](../models/PartnerAppPlatform.md#partnerappplatform) or null | The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) or null | The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. |
| `platform_profile` | Optional | [PartnerAppPlatformProfile](../models/PartnerAppPlatformProfile.md#partnerappplatformprofile) or null | What the app told Flint for its platform review. Absent until set. |
| `previous_secret_expires_at` | Optional | string or null | RFC3339 timestamp. `previous_secret_expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `redirect_uris` | Optional | Array of string or null | Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. `redirect_uris`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesredirect_uris). |
| `status` | Optional | string or null | Where the app is in its lifecycle. Only an active app can be installed or used. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`. `supported_actions`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. `version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesversion). |

### PartnerAppPlatformApprovedEventDataPreviousAttributes.allowed_scopes

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesallowed_scopes).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.api_version

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.api_version_changed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.api_version_previous

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.api_version_rollback_expires_at

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.client_id

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesclient_id).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.client_secret_enabled

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesclient_secret_enabled).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.client_secret_last_used_at

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesclient_secret_last_used_at).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.default_requested_permissions

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesdefault_requested_permissions).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.merchant_action_url

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesmerchant_action_url).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.name

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesname).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.partner_app_id

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributespartner_app_id).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.permission_manifest

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributespermission_manifest).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.previous_secret_expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.redirect_uris

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesredirect_uris).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.status

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesstatus).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.supported_actions

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributessupported_actions).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEventDataPreviousAttributes.version

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesversion).

