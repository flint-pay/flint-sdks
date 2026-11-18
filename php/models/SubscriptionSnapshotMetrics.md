[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSnapshotMetrics

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `arr_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current mrr_money multiplied by 12, in currency. Annualizes the current discounted rate rather than forecasting future charges or discount expiration; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `mrr_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly recurring merchandise revenue from active and past_due subscriptions after the frozen promotions applicable to the next charged cycle, restricted to currency. Excludes tax, shipping, setup fees, and one-time adjustments. Each subscription is normalized and rounded separately after discounts; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status_counts` | Required | [SubscriptionStatusCounts](../models/SubscriptionStatusCounts.md#subscriptionstatuscounts) | Current subscription counts by status across currencies; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Counts of current subscriptions by status, across currencies. |

