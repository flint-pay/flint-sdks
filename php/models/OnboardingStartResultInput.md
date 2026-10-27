[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartResultInput

The result of starting onboarding: whether email verification began, plus the verification token and its expiry.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `verification_started` | Required | boolean |  |
| `verification_token` | Required | string |  |

