[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformApprovedEvent

The `partner_app.platform_approved` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PartnerAppPlatformApprovedEventData](../models/PartnerAppPlatformApprovedEventData.md#partnerappplatformapprovedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app.platform_approved"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PartnerAppPlatformApprovedEventRequest](../models/PartnerAppPlatformApprovedEventRequest.md#partnerappplatformapprovedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PartnerAppPlatformApprovedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributes). |

### PartnerAppPlatformApprovedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PartnerApp.md#partnerapp).

### PartnerAppPlatformApprovedEvent.data fields 1.object.merchant_action_routing

Field definitions: [PartnerAppResponse.data.merchant_action_routing](../models/PartnerAppResponse.md#partnerappresponsedatamerchant_action_routing).

### PartnerAppPlatformApprovedEvent.data fields 1.object.payment_splits

Field definitions: [PartnerAppResponse.data.payment_splits](../models/PartnerAppResponse.md#partnerappresponsedatapayment_splits).

### PartnerAppPlatformApprovedEvent.data fields 1.object.permission_manifest[]

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerAppPlatformApprovedEvent.data fields 1.object.platform

Field definitions: [PartnerAppResponse.data.platform](../models/PartnerAppResponse.md#partnerappresponsedataplatform).

### PartnerAppPlatformApprovedEvent.data fields 1.object.platform_profile

Field definitions: [PartnerAppResponse.data.platform_profile](../models/PartnerAppResponse.md#partnerappresponsedataplatform_profile).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PartnerAppPlatformApprovedEventDataPreviousAttributes.md#partnerappplatformapprovedeventdatapreviousattributes).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes variant 1

anyOf variant 1: Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves..

- Value shape: Array of string. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes variant 2

anyOf variant 2.

- Value shape: null. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version variant 1

anyOf variant 1: Default API version for requests without a Flint-Version header. Shared across live and test environments..

- Value shape: string. Default API version for requests without a Flint-Version header. Shared across live and test environments. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version variant 2

anyOf variant 2.

- Value shape: null. Default API version for requests without a Flint-Version header. Shared across live and test environments. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_changed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous variant 1

anyOf variant 1: Previous API version, present while a supported rollback is available..

- Value shape: string. Previous API version, present while a supported rollback is available. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous variant 2

anyOf variant 2.

- Value shape: null. Previous API version, present while a supported rollback is available. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at variant 1

anyOf variant 1: When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward..

- Value shape: string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at variant 2

anyOf variant 2.

- Value shape: null. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id variant 1

anyOf variant 1: Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change..

- Value shape: string. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id variant 2

anyOf variant 2.

- Value shape: null. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled variant 1

anyOf variant 1: Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential..

- Value shape: boolean. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at variant 1

anyOf variant 1: When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret..

- Value shape: (string or null). When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. Format: `date-time`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at variant 2

anyOf variant 2.

- Value shape: null. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions variant 1

anyOf variant 1: IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional..

- Value shape: Array of string. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions variant 2

anyOf variant 2.

- Value shape: null. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url variant 1

anyOf variant 1: Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set..

- Value shape: string. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url variant 2

anyOf variant 2.

- Value shape: null. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name variant 1

anyOf variant 1: The app's name, shown to merchants on the consent screen..

- Value shape: string. The app's name, shown to merchants on the consent screen. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The app's name, shown to merchants on the consent screen. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: Unique identifier for this partner app, prefixed `papp_`..

- Value shape: string. Unique identifier for this partner app, prefixed `papp_`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this partner app, prefixed `papp_`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest variant 1

anyOf variant 1: Permissions the app can request from merchants. Each lists the Flint scopes it grants..

- Value shape: Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry). Permissions the app can request from merchants. Each lists the Flint scopes it grants. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest variant 2

anyOf variant 2.

- Value shape: null. Permissions the app can request from merchants. Each lists the Flint scopes it grants. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest variant 1.[] fields 1

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.previous_secret_expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris variant 1

anyOf variant 1: Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment..

- Value shape: Array of string. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris variant 2

anyOf variant 2.

- Value shape: null. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the app is in its lifecycle. Only an active app can be installed or used..

- Value shape: string. Where the app is in its lifecycle. Only an active app can be installed or used. Values: `"active"`, `"archived"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the app is in its lifecycle. Only an active app can be installed or used. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed..

- Value shape: Array of string. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version variant 1

anyOf variant 1: Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read..

- Value shape: integer. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. 

