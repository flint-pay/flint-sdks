[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventRequest

Originating request. `null` when the event is synthetic or no originating request ID is recorded. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string | Request ID of the request that caused the event. |
| `idempotency_key` | Optional | string | The Idempotency-Key the originating request sent. Absent when it sent none. |

