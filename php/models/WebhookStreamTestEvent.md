[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamTestEvent

A synthetic event published to the webhook event stream for flint listen. Publication confirms the event was recorded, without confirming receipt by a running listener.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method` | Required | string | This event is available through the webhook event stream. Values: `"listener_stream"`. |
| `webhook_event_id` | Required | string | ID of the synthetic webhook event. |

