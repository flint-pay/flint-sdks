[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailRequest

The request body for: Verify onboarding email.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Optional | string | minLength: `1`. |
| `verification_code` | Required | string | minLength: `1`. |
| `verification_token` | Required | string | minLength: `1`. |

