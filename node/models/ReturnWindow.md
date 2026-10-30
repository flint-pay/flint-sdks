[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnWindow

How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `duration_seconds` | Required | integer | Format: `int64`. |
| `starts_at_event` | Required | string | Values: `"fulfilled"`, `"delivered"`, `"picked_up"`, `"service_completed"`. |

