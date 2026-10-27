[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCountsInput

Counts of subscriptions by status: active, past due, and paused.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `past_due` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `paused` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

