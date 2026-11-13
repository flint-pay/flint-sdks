[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContext

Non-secret metadata for the calling credential, selected by auth_type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Conditional | string | Access level; scoped tokens always have restricted access. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Conditional | string | ID of the API key. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"api_key"`, `"cli_login"`, `"workload_identity"`, `"partner_app"`, `"onboarding_session"`. |
| `can_manage_api_keys` | Conditional | boolean | Whether the onboarding user's role permits managing API keys. |
| `context_id` | Conditional | string | ID of the selected CLI context. Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `expires_at` | Conditional | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fresh_verification_expires_at` | Conditional | string | Time fresh identity verification expires; it may be in the past. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | Merchant the credential acts for. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `name` | Conditional | string | Name of the key, CLI context, or workload identity. |
| `oauth_grant_id` | Conditional | string | ID of the CLI login grant. Example: `"clg_01KEZF7C00F8Q8XM1TZ6Y1GB31"`. |
| `oauth_session_id` | Conditional | string | ID of the CLI session. Example: `"session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`. |
| `organization_id` | Optional | string | Organization selected by the key's access scope, when available. Example: `"org_01KEZF7C00EA57F19C2ZFWA7HJ"`. |
| `partner_app_id` | Conditional | string | ID of the partner app. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Conditional | Varies by condition | ID of the partner app install. Null when the API key is not linked to an install. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `sandbox_id` | Conditional | string | Sandbox the credential is bound to, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Conditional | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |
| `user_id` | Conditional | string | User the session acts for. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `workload_identity_id` | Conditional | string | ID of the workload identity. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |

### AuthContext variant 1: `auth_type` = `"api_key"`

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

### AuthContext variant 2: `access` = `"restricted"`, `auth_type` = `"cli_login"`

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

### AuthContext variant 3: `access` = `"restricted"`, `auth_type` = `"workload_identity"`

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

### AuthContext variant 4: `access` = `"restricted"`, `auth_type` = `"partner_app"`

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

### AuthContext variant 5: `auth_type` = `"onboarding_session"`, `mode` = `"test"`

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

