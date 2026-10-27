[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnWindowInput

How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `duration_seconds` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `starts_at_event` | Required | string | Values: `"fulfilled"`, `"delivered"`, `"picked_up"`, `"service_completed"`. |

