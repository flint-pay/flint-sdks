[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionStatusCountsInput

Counts of current subscriptions by status, across currencies.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |
| `canceled_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |
| `incomplete_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |
| `past_due_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |
| `paused_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |
| `scheduled_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |
| `trialing_count` | Required | integer | Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: `int64`. |

