[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterCycles







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Required | integer | Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. |
| `type` | Required | string | How this automatic end is measured. Values: `"cycles"`. |

### SubscriptionEndAfterCycles variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfterCycles: Declared schema SubscriptionEndAfterCycles. A subscription automatic end measured by the total number of charged billing cycles..

No additional constraints.

### SubscriptionEndAfterCycles variant 2: `type` = `"cycles"`

anyOf SubscriptionEndAfterCycles: Declared schema SubscriptionEndAfterCyclesRequest. A subscription automatic end measured by the total number of charged billing cycles..

No additional constraints.

