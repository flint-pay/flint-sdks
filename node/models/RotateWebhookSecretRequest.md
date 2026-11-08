[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotateWebhookSecretRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `expire_previous_secret_at` | Optional | string | Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

### RotateWebhookSecretRequest variant 1

anyOf variant 1: Declared schema RotatePartnerAppSecretRequest. The request body for: Rotate partner app secret..

- Constraints for `expected_version`: Rotate only if this matches the app's current version. A mismatch returns HTTP 409 VERSION_CONFLICT.
- Constraints for `expire_previous_secret_at`: RFC3339 timestamp.

### RotateWebhookSecretRequest variant 2

anyOf variant 2: Declared schema RotateWebhookSecretRequest. The request body for: Rotate webhook secret..

- Constraints for `expected_version`: Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed.
- Constraints for `expire_previous_secret_at`: When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.

