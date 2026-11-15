[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContextResponseDataCliLogin

Non-secret metadata for the calling credential, selected by auth_type.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Access level; scoped tokens always have restricted access. Values: `"restricted"`. |
| `api_key_id` | Optional | string | ID of the API key. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"cli_login"`. |
| `can_manage_api_keys` | Optional | boolean | Whether the onboarding user's role permits managing API keys. |
| `context_id` | Required | string | ID of the selected CLI context. |
| `expires_at` | Optional | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. |
| `fresh_verification_expires_at` | Optional | string | Time fresh identity verification expires; it may be in the past. Format: `date-time`. |
| `merchant_id` | Required | string | Merchant the credential acts for. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | Name of the key, CLI context, or workload identity. |
| `oauth_grant_id` | Required | string | ID of the CLI login grant. |
| `oauth_session_id` | Required | string | ID of the CLI session. |
| `organization_id` | Optional | string | Organization selected by the key's access scope, when available. |
| `partner_app_id` | Optional | string | ID of the partner app. |
| `partner_app_install_id` | Optional | string or null | ID of the partner app install. Null when the API key is not linked to an install. |
| `sandbox_id` | Optional | string | Sandbox the credential is bound to, present only in test mode. |
| `scopes` | Required | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |
| `user_id` | Required | string | User the session acts for. |
| `workload_identity_id` | Optional | string | ID of the workload identity. |

