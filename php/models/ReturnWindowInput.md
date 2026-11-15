[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnWindowInput

How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `duration_seconds` | Required | integer | Length of the window in seconds, above 0 and at most 158,112,000 (1,830 days). Format: `int64`. minimum: `1`. maximum: `158112000`. |
| `starts_at_event` | Required | string | The fulfillment event the window counts from. Values: `"fulfilled"`, `"delivered"`, `"picked_up"`, `"service_completed"`. |

