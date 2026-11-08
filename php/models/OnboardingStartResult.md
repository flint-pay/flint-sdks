[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartResult

The verification token and expiry returned after the verification email is accepted for asynchronous delivery. Success does not confirm email delivery.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Time the email verification expires. Start onboarding again to request a new code after this time. Format: `date-time`. |
| `verification_token` | Required | string | Token identifying the email verification. Send it with the emailed code to POST /v1/onboarding/verify-email. |

