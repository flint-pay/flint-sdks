[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartResultInput

The verification token and expiry returned after the verification email is accepted for asynchronous delivery. Success does not confirm email delivery.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Time the email verification expires. Start onboarding again to request a new code after this time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `verification_token` | Required | string | Token identifying the email verification. Send it with the emailed code to POST /v1/onboarding/verify-email. |

