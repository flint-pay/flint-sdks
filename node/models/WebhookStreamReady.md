[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamReady

Sent when a webhook event stream connects, with the current `cursor`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cursor` | Optional | string | Event ID after which this connection begins streaming. Omitted when the starting position has no event ID. |

