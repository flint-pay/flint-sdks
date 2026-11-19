[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentVolumeTimeseriesResponse

A response containing `PaymentVolumeTimeseries` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentVolumeTimeseries](../models/PaymentVolumeTimeseries.md#paymentvolumetimeseries) | Resource, collection, or operation result returned by this request. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  `data`: [field definitions](../models/PaymentVolumeTimeseriesResponse.md#paymentvolumetimeseriesresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentVolumeTimeseriesResponse.data

Resource, collection, or operation result returned by this request. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buckets` | Required | Array of [PaymentVolumeBucket](../models/PaymentVolumeBucket.md#paymentvolumebucket) | Payment capture-time buckets clipped to the period, including empty buckets. Repeated local hours produce two buckets; skipped hours and days produce none. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  `buckets[]`: [field definitions](../models/PaymentVolumeTimeseriesResponse.md#paymentvolumetimeseriesresponsedatabuckets). |
| `currencies` | Required | Array of string | Currencies of succeeded payments captured in the period and qualifying refunds that succeeded in the period, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `currency` | Required | string | ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `granularity` | Required | string | Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Values: `"hour"`, `"day"`, `"week"`, `"month"`. |
| `period_end_at` | Required | string | Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Required | string | IANA timezone used only for local bucket boundaries. Defaults to the merchant's timezone, then UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |

### PaymentVolumeTimeseriesResponse.data.buckets[]

The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. 

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payments_count` | Required | integer | Succeeded payments captured in this bucket, restricted to the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `int64`. |
| `period_end_at` | Required | string | Exclusive bucket end instant, clipped to the resolved period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `period_start_at` | Required | string | Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured amounts for succeeded payments captured in this bucket, in the response currency. Excludes gift card and store credit redemptions. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### PaymentVolumeTimeseriesResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

