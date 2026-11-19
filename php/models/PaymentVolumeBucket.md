[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentVolumeBucket

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payments_count` | Required | integer | Succeeded payments captured in this bucket, restricted to the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `period_end_at` | Required | string | Exclusive bucket end instant, clipped to the resolved period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured amounts for succeeded payments captured in this bucket, in the response currency. Excludes gift card and store credit redemptions. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

