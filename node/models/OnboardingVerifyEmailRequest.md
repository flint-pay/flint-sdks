[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingVerifyEmailRequest

The request body for: Verify onboarding email.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. minLength: `1`. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `verification_code` | Required | string | The code Flint emailed to the address you sent to `POST /v1/onboarding/start`. minLength: `1`. |
| `verification_token` | Required | string | The `verification_token` that `POST /v1/onboarding/start` returned. minLength: `1`. |

