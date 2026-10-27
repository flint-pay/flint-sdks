[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutTraceID

A payout's bank trace ID, with whether it is pending, available, or unsupported.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Required | string | Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Values: `"pending"`, `"available"`, `"unsupported"`. |
| `value` | Optional | string |  |

