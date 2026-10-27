[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingNextStep

The next step to move onboarding forward, with who owns it, whether a machine can complete it, and the endpoint to submit to.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Values: `"check_onboarding_state"`, `"start_onboarding"`, `"complete_business_profile"`, `"complete_verification_step"`, `"wait_for_review"`, `"create_api_key"`. |
| `launch` | Optional | [OnboardingLaunchReference](../models/OnboardingLaunchReference.md#onboardinglaunchreference) | How to launch the embedded onboarding component: the endpoint and method to call, and the recommended policy to send. |
| `machine_completable` | Required | boolean |  |
| `owner` | Required | string | Values: `"agent"`, `"human"`, `"system"`. |
| `required_fields` | Optional | Array of string |  |
| `submit_endpoint` | Optional | string |  |
| `submit_method` | Optional | string | HTTP method for submit_endpoint. |

