[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailResult

The merchant and user signed in by email verification, with an onboarding session token. Call GET /v1/onboarding/state for the current onboarding state and next step.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_issue_api_key` | Required | boolean | Whether the merchant has no external API key and a default sandbox exists. |
| `default_sandbox_id` | Optional | string | ID of the merchant's default sandbox for testing API calls. Omitted when the merchant has no default sandbox. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `merchant` | Required | [Merchant](../models/Merchant.md#merchant) | The merchant the onboarding session acts for, whether newly provisioned or already associated with the user. Its readiness describes the default sandbox identified by default_sandbox_id, matching GET /v1/merchant with this onboarding session. The business accepting payments. |
| `onboarding_session_expires_at` | Required | string | Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `onboarding_session_token` | Required | string | Bearer token for the verified user's onboarding session. Keep it secret and send it in the Authorization header for subsequent onboarding calls. |
| `user` | Required | [User](../models/User.md#user) | The user signed in by the verified email address. A user with access to merchant accounts. |

