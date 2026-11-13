[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContextResponse

A response containing `AuthContext` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. Non-secret metadata for the calling credential, selected by auth_type. `data`: [declared alternatives](../models/AuthContextResponse.md#authcontextresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### AuthContextResponse.data

Resource, collection, or operation result returned by this request. Non-secret metadata for the calling credential, selected by auth_type.

Field definitions: [shared fields](AuthContextInput.md#authcontextinput).

### AuthContextResponse.data variant 1: `auth_type` = `"api_key"`

oneOf with auth_type: "api_key": Non-secret metadata for the calling credential, selected by auth_type..

- Condition: not (present(`can_manage_api_keys`)).
- Condition: not (present(`context_id`)).
- Condition: not (present(`fresh_verification_expires_at`)).
- Condition: not (present(`oauth_grant_id`)).
- Condition: not (present(`oauth_session_id`)).
- Condition: not (present(`partner_app_id`)).
- Condition: not (present(`user_id`)).
- Condition: not (present(`workload_identity_id`)).
- Required: `access`, `api_key_id`, `name`, `partner_app_install_id`, `scopes`.
- Optional: `can_manage_api_keys`, `context_id`, `expires_at`, `fresh_verification_expires_at`, `oauth_grant_id`, `oauth_session_id`, `partner_app_id`, `sandbox_id`, `user_id`, `workload_identity_id`.
- Constraints for `auth_type`: Values: `"api_key"`.
- Constraints for `partner_app_install_id`: string or null.

### AuthContextResponse.data variant 2: `access` = `"restricted"`, `auth_type` = `"cli_login"`

oneOf with auth_type: "cli_login": Non-secret metadata for the calling credential, selected by auth_type..

- Condition: not (present(`api_key_id`)).
- Condition: not (present(`can_manage_api_keys`)).
- Condition: not (present(`expires_at`)).
- Condition: not (present(`fresh_verification_expires_at`)).
- Condition: not (present(`organization_id`)).
- Condition: not (present(`partner_app_id`)).
- Condition: not (present(`partner_app_install_id`)).
- Condition: not (present(`workload_identity_id`)).
- Required: `access`, `context_id`, `name`, `oauth_grant_id`, `oauth_session_id`, `scopes`, `user_id`.
- Optional: `api_key_id`, `can_manage_api_keys`, `expires_at`, `fresh_verification_expires_at`, `partner_app_id`, `partner_app_install_id`, `sandbox_id`, `workload_identity_id`.
- Constraints for `access`: Values: `"restricted"`.
- Constraints for `auth_type`: Values: `"cli_login"`.
- Constraints for `partner_app_install_id`: string or null.

### AuthContextResponse.data variant 3: `access` = `"restricted"`, `auth_type` = `"workload_identity"`

oneOf with auth_type: "workload_identity": Non-secret metadata for the calling credential, selected by auth_type..

- Condition: not (present(`api_key_id`)).
- Condition: not (present(`can_manage_api_keys`)).
- Condition: not (present(`context_id`)).
- Condition: not (present(`fresh_verification_expires_at`)).
- Condition: not (present(`oauth_grant_id`)).
- Condition: not (present(`oauth_session_id`)).
- Condition: not (present(`organization_id`)).
- Condition: not (present(`partner_app_id`)).
- Condition: not (present(`partner_app_install_id`)).
- Condition: not (present(`user_id`)).
- Required: `access`, `expires_at`, `name`, `scopes`, `workload_identity_id`.
- Optional: `api_key_id`, `can_manage_api_keys`, `context_id`, `fresh_verification_expires_at`, `oauth_grant_id`, `oauth_session_id`, `partner_app_id`, `partner_app_install_id`, `sandbox_id`, `user_id`.
- Constraints for `access`: Values: `"restricted"`.
- Constraints for `auth_type`: Values: `"workload_identity"`.
- Constraints for `partner_app_install_id`: string or null.

### AuthContextResponse.data variant 4: `access` = `"restricted"`, `auth_type` = `"partner_app"`

oneOf with auth_type: "partner_app": Non-secret metadata for the calling credential, selected by auth_type..

- Condition: not (present(`api_key_id`)).
- Condition: not (present(`can_manage_api_keys`)).
- Condition: not (present(`context_id`)).
- Condition: not (present(`fresh_verification_expires_at`)).
- Condition: not (present(`name`)).
- Condition: not (present(`oauth_grant_id`)).
- Condition: not (present(`oauth_session_id`)).
- Condition: not (present(`organization_id`)).
- Condition: not (present(`user_id`)).
- Condition: not (present(`workload_identity_id`)).
- Required: `access`, `expires_at`, `partner_app_id`, `partner_app_install_id`, `scopes`.
- Optional: `api_key_id`, `can_manage_api_keys`, `context_id`, `fresh_verification_expires_at`, `name`, `oauth_grant_id`, `oauth_session_id`, `sandbox_id`, `user_id`, `workload_identity_id`.
- Constraints for `access`: Values: `"restricted"`.
- Constraints for `auth_type`: Values: `"partner_app"`.
- Constraints for `partner_app_install_id`: (string or null) and string.

### AuthContextResponse.data variant 5: `auth_type` = `"onboarding_session"`, `mode` = `"test"`

oneOf with auth_type: "onboarding_session": Non-secret metadata for the calling credential, selected by auth_type..

- Condition: not (present(`access`)).
- Condition: not (present(`api_key_id`)).
- Condition: not (present(`context_id`)).
- Condition: not (present(`name`)).
- Condition: not (present(`oauth_grant_id`)).
- Condition: not (present(`oauth_session_id`)).
- Condition: not (present(`organization_id`)).
- Condition: not (present(`partner_app_id`)).
- Condition: not (present(`partner_app_install_id`)).
- Condition: not (present(`scopes`)).
- Condition: not (present(`workload_identity_id`)).
- Required: `can_manage_api_keys`, `expires_at`, `fresh_verification_expires_at`, `sandbox_id`, `user_id`.
- Optional: `access`, `api_key_id`, `context_id`, `name`, `oauth_grant_id`, `oauth_session_id`, `partner_app_id`, `partner_app_install_id`, `scopes`, `workload_identity_id`.
- Constraints for `auth_type`: Values: `"onboarding_session"`.
- Constraints for `mode`: Values: `"test"`.
- Constraints for `partner_app_install_id`: string or null.

### AuthContextResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

