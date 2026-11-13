[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailResult

The merchant and user signed in by email verification, with an onboarding session token. Call GET /v1/onboarding/state for the current onboarding state and next step.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_sandbox_id` | Optional | string | ID of the merchant's default sandbox for testing API calls. Omitted when the merchant has no default sandbox. |
| `fresh_verification_expires_at` | Required | string | The last instant this session counts as freshly verified, 5 minutes after verification. Until then it can create keys with full or read_only access or with accounts.api_keys.write, accounts.workload_identities.write or commerce.gift_cards.secrets.write. Create the first sandbox key with POST /v1/api-keys before this time; afterward verify the email again for a fresh session. Format: `date-time`. |
| `merchant` | Required | [Merchant](../models/Merchant.md#merchant) | The merchant the onboarding session acts for, whether newly provisioned or already associated with the user. Its readiness describes the default sandbox identified by default_sandbox_id, matching GET /v1/merchant with this onboarding session. The business accepting payments. `merchant`: [field definitions](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedatamerchant). |
| `onboarding_session_expires_at` | Required | string | Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: `date-time`. |
| `onboarding_session_token` | Required | string | Bearer token for the verified user's onboarding session. Keep it secret and send it in the Authorization header for subsequent onboarding calls. |
| `user` | Required | [User](../models/User.md#user) | The user signed in by the verified email address. A user with access to merchant accounts. `user`: [field definitions](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedatauser). |

### OnboardingVerifyEmailResult.merchant

Field definitions: [OnboardingVerifyEmailResponse.data.merchant](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedatamerchant).

### OnboardingVerifyEmailResult.user

Field definitions: [OnboardingVerifyEmailResponse.data.user](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedatauser).

