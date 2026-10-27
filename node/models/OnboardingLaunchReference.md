[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingLaunchReference

How to launch the embedded onboarding component: the endpoint and method to call, and the recommended policy to send.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `component` | Required | string | Values: `"account_onboarding"`. |
| `endpoint` | Required | string | Endpoint for creating the browser session. Uses the same public API base URL as submit_endpoint: absolute when configured, relative otherwise. |
| `method` | Required | string | Values: `"POST"`. |
| `recommended_policy` | Required | [OnboardingLaunchRecommendedPolicy](../models/OnboardingLaunchRecommendedPolicy.md#onboardinglaunchrecommendedpolicy) | The recommended collection strategy and future-requirement behavior for launching embedded onboarding. |
| `sandbox_id` | Optional | string |  |

