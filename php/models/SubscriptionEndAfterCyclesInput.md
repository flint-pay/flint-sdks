[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterCyclesInput

A subscription automatic end measured by the total number of charged billing cycles.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Required | integer | Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. |
| `type` | Required | string | How this automatic end is measured. Values: `"cycles"`. |

