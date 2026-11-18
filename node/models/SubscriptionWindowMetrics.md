[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionWindowMetrics

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_subscriptions_count` | Required | integer | Subscriptions selected by canceled_at in the period, across currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payment amounts for subscriptions, including the initial checkout payment, recurring charges, and setup fees, restricted to currency. A succeeded payment activity selects the payment by activity created_at in the period; each payment is counted once. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. `collected_money`: [field definitions](../models/SubscriptionWindowMetrics.md#subscriptionwindowmetricscollected_money). |
| `new_subscriptions_count` | Required | integer | Subscriptions selected by subscription created_at in the period whose current status is trialing, active, paused, or past_due. Excludes incomplete and canceled subscriptions; past counts can change with current status. Spans currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |

### SubscriptionWindowMetrics.collected_money

Payment amounts for subscriptions, including the initial checkout payment, recurring charges, and setup fees, restricted to currency. A succeeded payment activity selects the payment by activity created_at in the period; each payment is counted once. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

