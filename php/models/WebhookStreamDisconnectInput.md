[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamDisconnectInput

Sent on the webhook event stream before the server closes it, with the `reason`. After a backpressure disconnect, resume from `resume_cursor`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | Values: `"ttl"`, `"authorization_changed"`, `"server_error"`, `"backpressure"`. |
| `resume_cursor` | Optional | string | Last event sent before a backpressure disconnect. Reconnect using this value as Last-Event-ID or after. |

