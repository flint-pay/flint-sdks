[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCounts

Counts of subscriptions by status: active, past due, and paused.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Required | integer | Number of counted subscriptions with status `active`. Format: `int64`. |
| `past_due` | Required | integer | Number of counted subscriptions with status `past_due`. Format: `int64`. |
| `paused` | Required | integer | Number of counted subscriptions with status `paused`. Format: `int64`. |

