[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantRevokedEventInput

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### EnvironmentGrantRevokedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributes). |

### EnvironmentGrantRevokedEventInput.data.object

Field definitions: [EnvironmentGrantCreatedEventInput.data.object](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputdataobject).

### EnvironmentGrantRevokedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `environment_grant_id` | Optional | string or null | Unique identifier for this environment grant, prefixed `egrt_`. `environment_grant_id`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributesenvironment_grant_id). |
| `granted_permissions` | Optional | Array of [PartnerAppPermissionManifestEntryInput](../models/PartnerAppPermissionManifestEntryInput.md#partnerapppermissionmanifestentryinput) or null | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. `granted_permissions`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributesgranted_permissions). |
| `granted_scopes` | Optional | Array of string or null | The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. `granted_scopes`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributesgranted_scopes). |
| `merchant_readiness` | Optional | [PartnerAppMerchantReadinessInput](../models/PartnerAppMerchantReadinessInput.md#partnerappmerchantreadinessinput) or null | The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. |
| `mode` | Optional | string or null | Environment used for this resource or request. Values: `"test"`, `"live"`. `mode`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributesmode). |
| `partner_app_install_id` | Optional | string or null | ID of the install this grant belongs to. `partner_app_install_id`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributespartner_app_install_id). |
| `payment_splits` | Optional | [PartnerEnvironmentGrantPaymentSplitsInput](../models/PartnerEnvironmentGrantPaymentSplitsInput.md#partnerenvironmentgrantpaymentsplitsinput) or null | The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. |
| `platform_fee_cap` | Optional | [PlatformFeeCapInput](../models/PlatformFeeCapInput.md#platformfeecapinput) or null | The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. No request accepts a platform fee yet. |
| `revoked_at` | Optional | string or null | RFC3339 timestamp. `revoked_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `revoked_by_user_id` | Optional | string or null | ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. `revoked_by_user_id`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributesrevoked_by_user_id). |
| `sandbox_id` | Optional | string or null | ID of the sandbox this resource belongs to. `sandbox_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributessandbox_id). |
| `status` | Optional | string or null | Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`. `status`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### EnvironmentGrantRevokedEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.environment_grant_id

### EnvironmentGrantRevokedEventInput.data.previous_attributes.environment_grant_id variant 1

anyOf variant 1: Unique identifier for this environment grant, prefixed `egrt_`..

- Value shape: string. Unique identifier for this environment grant, prefixed `egrt_`. Unique identifier for this environment grant, prefixed `egrt_`. Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.environment_grant_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this environment grant, prefixed `egrt_`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_permissions

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_permissions variant 1

anyOf variant 1: The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope..

- Value shape: Array of [PartnerAppPermissionManifestEntryInput](../models/PartnerAppPermissionManifestEntryInput.md#partnerapppermissionmanifestentryinput). The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_permissions variant 2

anyOf variant 2.

- Value shape: null. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_scopes

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_scopes variant 1

anyOf variant 1: The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission..

- Value shape: Array of string. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.mode

### EnvironmentGrantRevokedEventInput.data.previous_attributes.mode variant 1

anyOf variant 1: Environment used for this resource or request..

- Value shape: string. Environment used for this resource or request. Values: `"test"`, `"live"`.

### EnvironmentGrantRevokedEventInput.data.previous_attributes.mode variant 2

anyOf variant 2.

- Value shape: null. Environment used for this resource or request. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.partner_app_install_id

### EnvironmentGrantRevokedEventInput.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: ID of the install this grant belongs to..

- Value shape: string. ID of the install this grant belongs to. ID of the install this grant belongs to. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. ID of the install this grant belongs to. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_by_user_id

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke..

- Value shape: string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.sandbox_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.sandbox_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributessandbox_id).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.status

### EnvironmentGrantRevokedEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the grant is in its lifecycle. Only an active grant gives the app access to its environment..

- Value shape: string. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### EnvironmentGrantRevokedEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.supported_actions

### EnvironmentGrantRevokedEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`.

### EnvironmentGrantRevokedEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### EnvironmentGrantRevokedEventInput.source

Field definitions: [EnvironmentGrantCreatedEventInput.source](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource).

