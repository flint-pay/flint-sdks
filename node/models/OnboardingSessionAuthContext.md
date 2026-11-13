[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingSessionAuthContext

Non-secret metadata for the calling credential, selected by auth_type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"onboarding_session"`. |
| `can_manage_api_keys` | Required | boolean | Whether the onboarding user's role permits managing API keys. |
| `expires_at` | Required | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fresh_verification_expires_at` | Required | string | Time fresh identity verification expires; it may be in the past. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | Merchant the credential acts for. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`. |
| `sandbox_id` | Required | string | Sandbox the credential is bound to, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `user_id` | Required | string | User the session acts for. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |

