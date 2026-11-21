[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrantPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `environment_grant_id` | Optional | string or null | Unique identifier for this environment grant, prefixed `egrt_`. `environment_grant_id`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesenvironment_grant_id). |
| `granted_permissions` | Optional | Array of [PartnerAppPermissionManifestEntryPreviousAttributes](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributes) or null | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. `granted_permissions`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesgranted_permissions). |
| `granted_scopes` | Optional | Array of string or null | The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. `granted_scopes`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesgranted_scopes). |
| `merchant_readiness` | Optional | [PartnerAppMerchantReadinessPreviousAttributes](../models/PartnerAppMerchantReadinessPreviousAttributes.md#partnerappmerchantreadinesspreviousattributes) or null | The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. |
| `mode` | Optional | string or null | Environment used for this resource or request. Values: `"test"`, `"live"`. `mode`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesmode). |
| `partner_app_install_id` | Optional | string or null | ID of the install this grant belongs to. `partner_app_install_id`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributespartner_app_install_id). |
| `payment_splits` | Optional | [PartnerEnvironmentGrantPaymentSplitsPreviousAttributes](../models/PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.md#partnerenvironmentgrantpaymentsplitspreviousattributes) or null | The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. |
| `platform_fee_cap` | Optional | [PlatformFeeCapPreviousAttributes](../models/PlatformFeeCapPreviousAttributes.md#platformfeecappreviousattributes) or null | The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. |
| `revoked_at` | Optional | string or null | RFC3339 timestamp. `revoked_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `revoked_by_user_id` | Optional | string or null | ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. `revoked_by_user_id`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesrevoked_by_user_id). |
| `sandbox_id` | Optional | string or null | ID of the sandbox this resource belongs to. `sandbox_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributessandbox_id). |
| `status` | Optional | string or null | Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`. `status`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### PartnerEnvironmentGrantPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PartnerEnvironmentGrantPreviousAttributes.environment_grant_id

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.environment_grant_id](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesenvironment_grant_id).

### PartnerEnvironmentGrantPreviousAttributes.granted_permissions

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.granted_permissions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesgranted_permissions).

### PartnerEnvironmentGrantPreviousAttributes.granted_scopes

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.granted_scopes](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesgranted_scopes).

### PartnerEnvironmentGrantPreviousAttributes.mode

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.mode](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesmode).

### PartnerEnvironmentGrantPreviousAttributes.partner_app_install_id

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.partner_app_install_id](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributespartner_app_install_id).

### PartnerEnvironmentGrantPreviousAttributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PartnerEnvironmentGrantPreviousAttributes.revoked_by_user_id

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.revoked_by_user_id](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesrevoked_by_user_id).

### PartnerEnvironmentGrantPreviousAttributes.sandbox_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.sandbox_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributessandbox_id).

### PartnerEnvironmentGrantPreviousAttributes.status

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.status](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributesstatus).

### PartnerEnvironmentGrantPreviousAttributes.supported_actions

Declared alternatives: [EnvironmentGrantRevokedEvent.data.previous_attributes.supported_actions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdataprevious_attributessupported_actions).

### PartnerEnvironmentGrantPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

