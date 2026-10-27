[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutTraceIDInput

A payout's bank trace ID, with whether it is pending, available, or unsupported.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Required | string | Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Values: `"pending"`, `"available"`, `"unsupported"`. |
| `value` | Optional | string |  |

