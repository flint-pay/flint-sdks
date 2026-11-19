[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentVolumeTimeseries

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buckets` | Required | Array of [PaymentVolumeBucket](../models/PaymentVolumeBucket.md#paymentvolumebucket) | Payment capture-time buckets clipped to the period, including empty buckets. Repeated local hours produce two buckets; skipped hours and days produce none. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  `buckets[]`: [field definitions](../models/PaymentVolumeTimeseriesResponse.md#paymentvolumetimeseriesresponsedatabuckets). |
| `currencies` | Required | Array of string | Currencies of succeeded payments captured in the period and qualifying refunds that succeeded in the period, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `currency` | Required | string | ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `granularity` | Required | string | Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Values: `"hour"`, `"day"`, `"week"`, `"month"`. |
| `period_end_at` | Required | string | Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. |
| `timezone` | Required | string | IANA timezone used only for local bucket boundaries. Defaults to the merchant's timezone, then UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |

### PaymentVolumeTimeseries.buckets[]

Field definitions: [PaymentVolumeTimeseriesResponse.data.buckets[]](../models/PaymentVolumeTimeseriesResponse.md#paymentvolumetimeseriesresponsedatabuckets).

