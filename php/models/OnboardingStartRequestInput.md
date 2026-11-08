[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartRequestInput

The request body for: Start onboarding flow.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address to verify. Flint emails a verification code to it. minLength: `1`. |
| `first_name` | Required | string | First name of the person signing up. minLength: `1`. |
| `last_name` | Required | string | Last name of the person signing up. minLength: `1`. |

