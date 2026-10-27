[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotatePartnerAppSecretRequestInput

Request input. Response: [RotateWebhookSecretRequest](../models/RotateWebhookSecretRequest.md#rotatewebhooksecretrequest).

The request body for: Rotate partner app secret.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `expire_previous_secret_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

