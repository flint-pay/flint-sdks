[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotatePartnerAppSecretRequestInput

The request body for: Rotate partner app secret.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Rotate only if this matches the app's current version. A mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `expire_previous_secret_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

