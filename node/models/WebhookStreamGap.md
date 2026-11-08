[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamGap

Sent on the webhook event stream when events could not be replayed from the requested cursor, with a `resume_cursor` to continue from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | Why events could not be replayed from the requested position. Values: `"cursor_unavailable"`, `"payload_expired"`. |
| `requested_cursor` | Optional | string | Event ID from which replay was requested. Omitted when the requested position has no event ID. |
| `resume_cursor` | Optional | string | Event ID after which streaming continues following this gap. Omitted when the resume position has no event ID. |

