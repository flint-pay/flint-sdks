[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailResponse

A response containing `OnboardingVerifyEmailResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OnboardingVerifyEmailResult](../models/OnboardingVerifyEmailResult.md#onboardingverifyemailresult) | The result of verifying an onboarding email: the merchant and user, an onboarding session token, and the next step. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

