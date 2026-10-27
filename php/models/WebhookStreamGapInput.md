[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamGapInput

Sent on the webhook event stream when events could not be replayed from the requested cursor, with a `resume_cursor` to continue from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | Values: `"cursor_unavailable"`, `"payload_expired"`. |
| `requested_cursor` | Optional | string |  |
| `resume_cursor` | Optional | string |  |

