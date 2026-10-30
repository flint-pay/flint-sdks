[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCountsInput

Counts of subscriptions by status: active, past due, and paused.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Required | integer | Format: `int64`. |
| `past_due` | Required | integer | Format: `int64`. |
| `paused` | Required | integer | Format: `int64`. |

