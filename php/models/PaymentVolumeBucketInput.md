[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentVolumeBucketInput

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payments_count` | Required | integer | Succeeded payments selected by payment created_at within this bucket, restricted to the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `period_end_at` | Required | string | Exclusive bucket end instant, clipped to the resolved period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `volume_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Succeeded payment amounts selected by payment created_at within this bucket, in the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

