[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSnapshotMetricsInput

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `arr_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Current mrr_money multiplied by 12, in currency; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `mrr_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monthly recurring revenue from current billing snapshots of active and past_due subscriptions, restricted to currency. Each subscription is normalized and rounded separately; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status_counts` | Required | [SubscriptionStatusCountsInput](../models/SubscriptionStatusCountsInput.md#subscriptionstatuscountsinput) | Current subscription counts by status across currencies; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Counts of current subscriptions by status, across currencies. |

