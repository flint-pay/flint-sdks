[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionAnalytics

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currencies` | Required | Array of string | Currencies of subscription payments selected by succeeded activity created_at in the period, plus current active and past_due billing snapshots, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `currency` | Required | string | ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `period_end_at` | Required | string | Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `snapshot_metrics` | Required | [SubscriptionSnapshotMetrics](../models/SubscriptionSnapshotMetrics.md#subscriptionsnapshotmetrics) | Current persisted subscription state at computation time, cached briefly. Independent of the requested period end. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `window_metrics` | Required | [SubscriptionWindowMetrics](../models/SubscriptionWindowMetrics.md#subscriptionwindowmetrics) | Subscription creation, cancellation, and payment success metrics selected within the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |

