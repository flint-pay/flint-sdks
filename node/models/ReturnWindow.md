[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnWindow







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `duration_seconds` | Required | integer | Length of the window in seconds, above 0 and at most 158,112,000 (1,830 days). Format: `int64`. |
| `starts_at_event` | Required | string | The fulfillment event the window counts from. Values: `"fulfilled"`, `"delivered"`, `"picked_up"`, `"service_completed"`. |

### ReturnWindow variant 1

anyOf variant 1: Declared schema ReturnWindow. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy..

No additional constraints.

### ReturnWindow variant 2

anyOf variant 2: Declared schema ReturnWindowRequest. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy..

No additional constraints.

