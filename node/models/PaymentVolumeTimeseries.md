[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentVolumeTimeseries

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buckets` | Required | Array of [PaymentVolumeBucket](../models/PaymentVolumeBucket.md#paymentvolumebucket) | Payment created_at buckets clipped to the period, including empty buckets. Repeated local hours produce two buckets; skipped hours and days produce none. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `currencies` | Required | Array of string | Currencies of succeeded payments selected by payment created_at or counted refunds selected by refund created_at in the period, regardless of the currency filter. Empty when neither has rows. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `currency` | Required | string | ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `granularity` | Required | string | Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Values: `"hour"`, `"day"`, `"week"`, `"month"`. |
| `period_end_at` | Required | string | Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `timezone` | Required | string | IANA timezone used only for local bucket boundaries. Defaults to UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |

