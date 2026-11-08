[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotateWebhookSecretRequestInput

Request input. Response: [RotateWebhookSecretRequest](../models/RotateWebhookSecretRequest.md#rotatewebhooksecretrequest).

The request body for: Rotate webhook secret.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `expire_previous_secret_at` | Optional | string | When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before now to stop it immediately. Must be no later than 7 days from now. Null is not accepted. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

