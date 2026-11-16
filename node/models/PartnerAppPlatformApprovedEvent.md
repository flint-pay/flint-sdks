[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformApprovedEvent

The `partner_app.platform_approved` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app.platform_approved"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PartnerAppPlatformApprovedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributes). |

### PartnerAppPlatformApprovedEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PartnerApp.md#partnerapp).

### PartnerAppPlatformApprovedEvent.data.object.payment_splits

Field definitions: [PartnerApp.payment_splits](../models/PartnerApp.md#partnerapppayment_splits).

### PartnerAppPlatformApprovedEvent.data.object.permission_manifest[]

Field definitions: [EnvironmentGrantCreatedEvent.data.object.granted_permissions[]](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobjectgranted_permissions).

### PartnerAppPlatformApprovedEvent.data.object.platform_fee_cap

Field definitions: [PartnerApp.platform_fee_cap](../models/PartnerApp.md#partnerappplatform_fee_cap).

### PartnerAppPlatformApprovedEvent.data.object.platform_profile

Field definitions: [PartnerApp.platform_profile](../models/PartnerApp.md#partnerappplatform_profile).

### PartnerAppPlatformApprovedEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Optional | Array of string or null | Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. `allowed_scopes`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesallowed_scopes). |
| `api_version` | Optional | string or null | Default API version for requests without a Flint-Version header. Shared across live and test environments. `api_version`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version). |
| `api_version_changed_at` | Optional | string or null | RFC3339 timestamp. `api_version_changed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `api_version_previous` | Optional | string or null | Previous API version, present while a supported rollback is available. `api_version_previous`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_previous). |
| `api_version_rollback_expires_at` | Optional | string or null | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. `api_version_rollback_expires_at`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_rollback_expires_at). |
| `client_id` | Optional | string or null | Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. `client_id`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesclient_id). |
| `client_secret_enabled` | Optional | boolean or null | Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. `client_secret_enabled`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesclient_secret_enabled). |
| `client_secret_last_used_at` | Optional | string or null or null | When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. `client_secret_last_used_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesclient_secret_last_used_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `default_requested_permissions` | Optional | Array of string or null | IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. `default_requested_permissions`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesdefault_requested_permissions). |
| `merchant_action_routing` | Optional | [PartnerAppMerchantActionRoutingPreviousAttributes](../models/PartnerAppMerchantActionRoutingPreviousAttributes.md#partnerappmerchantactionroutingpreviousattributes) or null | Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. |
| `merchant_action_url` | Optional | string or null | Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. `merchant_action_url`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesmerchant_action_url). |
| `name` | Optional | string or null | The app's name, shown to merchants on the consent screen. `name`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesname). |
| `partner_app_id` | Optional | string or null | Unique identifier for this partner app, prefixed `papp_`. `partner_app_id`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributespartner_app_id). |
| `payment_splits` | Optional | [PartnerAppPaymentSplitsPreviousAttributes](../models/PartnerAppPaymentSplitsPreviousAttributes.md#partnerapppaymentsplitspreviousattributes) or null | The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryPreviousAttributes](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributes) or null | Permissions the app can request from merchants. Each lists the Flint scopes it grants. `permission_manifest`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributespermission_manifest). |
| `platform` | Optional | [PartnerAppPlatformPreviousAttributes](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributes) or null | The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. |
| `platform_fee_cap` | Optional | [PlatformFeeCapPreviousAttributes](../models/PlatformFeeCapPreviousAttributes.md#platformfeecappreviousattributes) or null | The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. |
| `platform_profile` | Optional | [PartnerAppPlatformProfilePreviousAttributes](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributes) or null | What the app told Flint for its platform review. Absent until set. |
| `previous_secret_expires_at` | Optional | string or null | RFC3339 timestamp. `previous_secret_expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `redirect_uris` | Optional | Array of string or null | Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. `redirect_uris`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesredirect_uris). |
| `status` | Optional | string or null | Where the app is in its lifecycle. Only an active app can be installed or used. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`. `supported_actions`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. `version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdataprevious_attributesversion). |

### PartnerAppPlatformApprovedEvent.data.previous_attributes.allowed_scopes

### PartnerAppPlatformApprovedEvent.data.previous_attributes.allowed_scopes variant 1

anyOf variant 1: Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves..

- Value shape: Array of string. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.allowed_scopes variant 2

anyOf variant 2.

- Value shape: null. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.api_version

Declared alternatives: [MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.api_version_changed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.api_version_previous

Declared alternatives: [MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_previous](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_previous).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.api_version_rollback_expires_at

Declared alternatives: [MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_rollback_expires_at](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_rollback_expires_at).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_id

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_id variant 1

anyOf variant 1: Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change..

- Value shape: string. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. Example: `"fpc_00112233445566778899aabbccddeeff"`. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_id variant 2

anyOf variant 2.

- Value shape: null. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_secret_enabled

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_secret_enabled variant 1

anyOf variant 1: Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential..

- Value shape: boolean. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_secret_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_secret_last_used_at

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_secret_last_used_at variant 1

anyOf variant 1: When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret..

- Value shape: (string or null). When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.client_secret_last_used_at variant 2

anyOf variant 2.

- Value shape: null. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.default_requested_permissions

### PartnerAppPlatformApprovedEvent.data.previous_attributes.default_requested_permissions variant 1

anyOf variant 1: IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional..

- Value shape: Array of string. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.default_requested_permissions variant 2

anyOf variant 2.

- Value shape: null. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.merchant_action_url

### PartnerAppPlatformApprovedEvent.data.previous_attributes.merchant_action_url variant 1

anyOf variant 1: Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set..

- Value shape: string. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.merchant_action_url variant 2

anyOf variant 2.

- Value shape: null. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.name

### PartnerAppPlatformApprovedEvent.data.previous_attributes.name variant 1

anyOf variant 1: The app's name, shown to merchants on the consent screen..

- Value shape: string. The app's name, shown to merchants on the consent screen. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The app's name, shown to merchants on the consent screen. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.partner_app_id

### PartnerAppPlatformApprovedEvent.data.previous_attributes.partner_app_id variant 1

anyOf variant 1: Unique identifier for this partner app, prefixed `papp_`..

- Value shape: string. Unique identifier for this partner app, prefixed `papp_`. Unique identifier for this partner app, prefixed `papp_`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this partner app, prefixed `papp_`. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.permission_manifest

### PartnerAppPlatformApprovedEvent.data.previous_attributes.permission_manifest variant 1

anyOf variant 1: Permissions the app can request from merchants. Each lists the Flint scopes it grants..

- Value shape: Array of [PartnerAppPermissionManifestEntryPreviousAttributes](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributes). Permissions the app can request from merchants. Each lists the Flint scopes it grants. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.permission_manifest variant 2

anyOf variant 2.

- Value shape: null. Permissions the app can request from merchants. Each lists the Flint scopes it grants. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.previous_secret_expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.redirect_uris

### PartnerAppPlatformApprovedEvent.data.previous_attributes.redirect_uris variant 1

anyOf variant 1: Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment..

- Value shape: Array of string. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.redirect_uris variant 2

anyOf variant 2.

- Value shape: null. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.status

### PartnerAppPlatformApprovedEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the app is in its lifecycle. Only an active app can be installed or used..

- Value shape: string. Where the app is in its lifecycle. Only an active app can be installed or used. Values: `"active"`, `"archived"`.

### PartnerAppPlatformApprovedEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the app is in its lifecycle. Only an active app can be installed or used. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.supported_actions

### PartnerAppPlatformApprovedEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed..

- Value shape: Array of string. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`.

### PartnerAppPlatformApprovedEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data.previous_attributes.version

### PartnerAppPlatformApprovedEvent.data.previous_attributes.version variant 1

anyOf variant 1: Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read..

- Value shape: integer. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. 

### PartnerAppPlatformApprovedEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. 

### PartnerAppPlatformApprovedEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

