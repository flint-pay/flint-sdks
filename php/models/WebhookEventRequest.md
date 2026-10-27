[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventRequest

Originating merchant request, or null for a background event. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string |  |
| `idempotency_key` | Optional | string | The Idempotency-Key the originating request sent. Absent when it sent none. |

