[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCounts

Delivery usage counts by stored status, with separate subsets for active subscriptions that are canceling or on billing hold.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Required | integer | Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Format: `int64`. |
| `billing_hold` | Required | integer | Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Format: `int64`. |
| `canceling` | Required | integer | Number of active subscriptions scheduled to cancel at the end of their current period. Format: `int64`. |
| `past_due` | Required | integer | Number of counted subscriptions with status `past_due`. Format: `int64`. |
| `paused` | Required | integer | Number of counted subscriptions with status `paused`. Format: `int64`. |

