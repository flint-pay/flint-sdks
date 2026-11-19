[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionWindowMetrics

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_subscriptions_count` | Required | integer | Subscriptions selected by canceled_at in the period, across currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured amounts for succeeded subscription payments in the period, including the initial checkout payment, recurring charges, and setup fees, restricted to currency. Each payment is counted once by capture time. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `new_subscriptions_count` | Required | integer | Subscriptions selected by subscription created_at in the period whose current status is trialing, active, paused, or past_due. Excludes incomplete and canceled subscriptions; past counts can change with current status. Spans currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |

