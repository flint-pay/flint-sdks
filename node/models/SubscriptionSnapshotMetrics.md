[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSnapshotMetrics

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `arr_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current mrr_money multiplied by 12, in currency; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. `arr_money`: [field definitions](../models/SubscriptionSnapshotMetrics.md#subscriptionsnapshotmetricsarr_money). |
| `mrr_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly recurring revenue from current billing snapshots of active and past_due subscriptions, restricted to currency. Each subscription is normalized and rounded separately; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. `mrr_money`: [field definitions](../models/SubscriptionSnapshotMetrics.md#subscriptionsnapshotmetricsmrr_money). |
| `status_counts` | Required | [SubscriptionStatusCounts](../models/SubscriptionStatusCounts.md#subscriptionstatuscounts) | Current subscription counts by status across currencies; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Counts of current subscriptions by status, across currencies. |

### SubscriptionSnapshotMetrics.arr_money

Current mrr_money multiplied by 12, in currency; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SubscriptionSnapshotMetrics.mrr_money

Monthly recurring revenue from current billing snapshots of active and past_due subscriptions, restricted to currency. Each subscription is normalized and rounded separately; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

