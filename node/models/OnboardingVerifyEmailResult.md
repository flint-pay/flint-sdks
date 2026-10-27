[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailResult

The result of verifying an onboarding email: the merchant and user, an onboarding session token, and the next step.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_issue_api_key` | Required | boolean | Whether the merchant has no external API key and a default sandbox exists. |
| `default_sandbox_id` | Optional | string |  |
| `merchant` | Required | [Merchant](../models/Merchant.md#merchant) | The business accepting payments. |
| `merchant_created` | Required | boolean |  |
| `next_step` | Optional | [OnboardingNextStep](../models/OnboardingNextStep.md#onboardingnextstep) | The next step to move onboarding forward, with who owns it, whether a machine can complete it, and the endpoint to submit to. |
| `onboarding_session_expires_at` | Required | string | Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: `date-time`. |
| `onboarding_session_token` | Required | string |  |
| `user` | Required | [User](../models/User.md#user) | A user with access to merchant accounts. |

