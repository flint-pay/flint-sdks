[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallPermissionsUpdatedEvent

The `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PartnerAppInstallPermissionsUpdatedEventData](../models/PartnerAppInstallPermissionsUpdatedEventData.md#partnerappinstallpermissionsupdatedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app_install.permissions_updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerAppInstallPermissionsUpdatedEventSource](../models/PartnerAppInstallPermissionsUpdatedEventSource.md#partnerappinstallpermissionsupdatedeventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributes). |

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.object

Field definitions: [PartnerAppInstallCreatedEvent.data fields 1.object](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.md#partnerappinstallpermissionsupdatedeventdatapreviousattributes).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1

anyOf variant 1: The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none..

- Value shape: Array of [PartnerEnvironmentGrantPreviousAttributes](../models/PartnerEnvironmentGrantPreviousAttributes.md#partnerenvironmentgrantpreviousattributes). The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 2

anyOf variant 2.

- Value shape: null. The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `environment_grant_id` | Optional | string or null | Unique identifier for this environment grant, prefixed `egrt_`. `environment_grant_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1environment_grant_id). |
| `granted_permissions` | Optional | Array of [PartnerAppPermissionManifestEntryPreviousAttributes](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributes) or null | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. `granted_permissions`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions). |
| `granted_scopes` | Optional | Array of string or null | The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. `granted_scopes`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_scopes). |
| `merchant_readiness` | Optional | Alternative shapes (see declared variants) | The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. `merchant_readiness`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmerchant_readiness). |
| `mode` | Optional | string or null | Environment used for this resource or request. Values: `"test"`, `"live"`. `mode`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmode). |
| `partner_app_install_id` | Optional | string or null | ID of the install this grant belongs to. `partner_app_install_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1partner_app_install_id). |
| `payment_splits` | Optional | Alternative shapes (see declared variants) | The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. `payment_splits`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributespayment_splits). |
| `platform_fee_cap` | Optional | Alternative shapes (see declared variants) | The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. No request accepts a platform fee yet. `platform_fee_cap`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesplatform_fee_cap). |
| `revoked_at` | Optional | string or null | RFC3339 timestamp. `revoked_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `revoked_by_user_id` | Optional | string or null | ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. `revoked_by_user_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1revoked_by_user_id). |
| `sandbox_id` | Optional | string or null | ID of the sandbox this resource belongs to. `sandbox_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1sandbox_id). |
| `status` | Optional | string or null | Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`. `status`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at variant 1

anyOf variant 1: RFC3339 timestamp..

- Value shape: string. RFC3339 timestamp. RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.environment_grant_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.environment_grant_id variant 1

anyOf variant 1: Unique identifier for this environment grant, prefixed `egrt_`..

- Value shape: string. Unique identifier for this environment grant, prefixed `egrt_`. Unique identifier for this environment grant, prefixed `egrt_`. Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.environment_grant_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this environment grant, prefixed `egrt_`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.granted_permissions

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.granted_scopes

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_scopes).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.merchant_readiness

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmerchant_readiness).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.mode

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmode).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.partner_app_install_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.partner_app_install_id variant 1

anyOf variant 1: ID of the install this grant belongs to..

- Value shape: string. ID of the install this grant belongs to. ID of the install this grant belongs to. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. ID of the install this grant belongs to. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.payment_splits

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributespayment_splits).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.platform_fee_cap

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.platform_fee_cap](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesplatform_fee_cap).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.revoked_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.revoked_by_user_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke..

- Value shape: string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.sandbox_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.sandbox_id variant 1

anyOf variant 1: ID of the sandbox this resource belongs to..

- Value shape: string. ID of the sandbox this resource belongs to. ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.sandbox_id variant 2

anyOf variant 2.

- Value shape: null. ID of the sandbox this resource belongs to. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.status

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesstatus).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.supported_actions

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributessupported_actions).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id variant 1

anyOf variant 1: ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded..

- Value shape: string. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id variant 1

anyOf variant 1: The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke..

- Value shape: string. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id variant 2

anyOf variant 2.

- Value shape: null. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: ID of the partner app the merchant installed..

- Value shape: string. ID of the partner app the merchant installed. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. ID of the partner app the merchant installed. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: Unique identifier for this partner app install, prefixed `pinst_`..

- Value shape: string. Unique identifier for this partner app install, prefixed `pinst_`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this partner app install, prefixed `pinst_`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name variant 1

anyOf variant 1: The app’s current name..

- Value shape: string. The app’s current name. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name variant 2

anyOf variant 2.

- Value shape: null. The app’s current name. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by variant 1

anyOf variant 1: Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again..

- Value shape: string. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Values: `"merchant"`, `"partner_app"`.

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by variant 2

anyOf variant 2.

- Value shape: null. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it..

- Value shape: string. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the install is in its lifecycle..

- Value shape: string. Where the install is in its lifecycle. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the install is in its lifecycle. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`.

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput).

