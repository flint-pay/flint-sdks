[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailResponse

A response containing `OnboardingVerifyEmailResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OnboardingVerifyEmailResult](../models/OnboardingVerifyEmailResult.md#onboardingverifyemailresult) | Resource, collection, or operation result returned by this request. The merchant and user signed in by email verification, with an onboarding session token. Call GET /v1/onboarding/state for the current onboarding state and next step. `data`: [field definitions](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OnboardingVerifyEmailResponse.data

Resource, collection, or operation result returned by this request. The merchant and user signed in by email verification, with an onboarding session token. Call GET /v1/onboarding/state for the current onboarding state and next step.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_issue_api_key` | Required | boolean | Whether the merchant has no external API key and a default sandbox exists. |
| `default_sandbox_id` | Optional | string | ID of the merchant's default sandbox for testing API calls. Omitted when the merchant has no default sandbox. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `merchant` | Required | [Merchant](../models/Merchant.md#merchant) | The merchant the onboarding session acts for, whether newly provisioned or already associated with the user. Its readiness describes the default sandbox identified by default_sandbox_id, matching GET /v1/merchant with this onboarding session. The business accepting payments. `merchant`: [field definitions](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedatamerchant). |
| `onboarding_session_expires_at` | Required | string | Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `onboarding_session_token` | Required | string | Bearer token for the verified user's onboarding session. Keep it secret and send it in the Authorization header for subsequent onboarding calls. |
| `user` | Required | [User](../models/User.md#user) | The user signed in by the verified email address. A user with access to merchant accounts. `user`: [field definitions](../models/OnboardingVerifyEmailResponse.md#onboardingverifyemailresponsedatauser). |

### OnboardingVerifyEmailResponse.data.merchant

The merchant the onboarding session acts for, whether newly provisioned or already associated with the user. Its readiness describes the default sandbox identified by default_sandbox_id, matching GET /v1/merchant with this onboarding session. The business accepting payments.

Field definitions: [shared fields](MerchantResponse.md#merchantresponsedata).

### OnboardingVerifyEmailResponse.data.merchant.address

Field definitions: [MerchantResponse.data.address](../models/MerchantResponse.md#merchantresponsedataaddress).

### OnboardingVerifyEmailResponse.data.merchant.icon

Field definitions: [MerchantResponse.data.icon](../models/MerchantResponse.md#merchantresponsedataicon).

### OnboardingVerifyEmailResponse.data.merchant.logo

Field definitions: [MerchantResponse.data.logo](../models/MerchantResponse.md#merchantresponsedatalogo).

### OnboardingVerifyEmailResponse.data.merchant.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### OnboardingVerifyEmailResponse.data.merchant.readiness

Field definitions: [MerchantResponse.data.readiness](../models/MerchantResponse.md#merchantresponsedatareadiness).

### OnboardingVerifyEmailResponse.data.user

The user signed in by the verified email address. A user with access to merchant accounts.

Field definitions: [shared fields](UserInput.md#userinput).

### OnboardingVerifyEmailResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

