[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AnalyticsOverview

Succeeded payments are selected by capture time. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currencies` | Required | Array of string | Currencies of succeeded payments captured in the period and qualifying refunds that succeeded in the period, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `currency` | Required | string | ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `gross_volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of captured amounts for succeeded payments captured in the period, in currency. Excludes gift card and store credit redemptions. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `new_customers_count` | Required | integer | Customers selected by customer created_at in the period, across all currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `payments_count` | Required | integer | Succeeded payments captured in the period, restricted to currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `period_end_at` | Required | string | Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount refunded to original payment methods, in currency, based on when the refund succeeded, regardless of when the payment was captured. Excludes amounts returned as gift card value or store credit. Each qualifying part of a split refund counts once. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

