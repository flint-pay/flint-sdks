[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContextResponseDataOnboardingSession

Non-secret metadata for the calling credential, selected by auth_type.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Access level; scoped tokens always have restricted access. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Optional | string | ID of the API key. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"onboarding_session"`. |
| `can_manage_api_keys` | Required | boolean | Whether the onboarding user's role permits managing API keys. |
| `context_id` | Optional | string | ID of the selected CLI context. |
| `expires_at` | Required | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. |
| `fresh_verification_expires_at` | Required | string | Time fresh identity verification expires; it may be in the past. Format: `date-time`. |
| `merchant_id` | Required | (string or null) or null | `merchant_id`: [declared alternatives](../models/AuthContextResponseDataOnboardingSession.md#authcontextresponsedataonboardingsessionmerchant_id). |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`. |
| `name` | Optional | string | Name of the key, CLI context, or workload identity. |
| `oauth_grant_id` | Optional | string | ID of the CLI login grant. |
| `oauth_session_id` | Optional | string | ID of the CLI session. |
| `organization_id` | Optional | string | Organization selected by the key's access scope, when available. |
| `partner_app_id` | Optional | string | ID of the partner app. |
| `partner_app_install_id` | Optional | string or null | ID of the partner app install. Null when the API key is not linked to an install. |
| `sandbox_id` | Required | (string or null) or null | `sandbox_id`: [declared alternatives](../models/AuthContextResponseDataOnboardingSession.md#authcontextresponsedataonboardingsessionsandbox_id). |
| `scopes` | Optional | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |
| `user_id` | Required | string | User the session acts for. |
| `workload_identity_id` | Optional | string | ID of the workload identity. |

### AuthContextResponseDataOnboardingSession.merchant_id

### AuthContextResponseDataOnboardingSession.merchant_id variant 1

anyOf variant 1.

- Value shape: (string or null). Merchant the credential acts for. Null when an onboarding session has no merchant yet. 

### AuthContextResponseDataOnboardingSession.merchant_id variant 2

anyOf variant 2.

- Value shape: null.  

### AuthContextResponseDataOnboardingSession.sandbox_id

### AuthContextResponseDataOnboardingSession.sandbox_id variant 1

anyOf variant 1.

- Value shape: (string or null). Public sandbox ID in test mode. Null when an onboarding session has no sandbox yet. Omitted when mode is live. 

### AuthContextResponseDataOnboardingSession.sandbox_id variant 2

anyOf variant 2.

- Value shape: null.  

