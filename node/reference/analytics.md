[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# analytics

### analytics.getOverview

Returns high-level merchant analytics for the requested half-open period.

`GET /v1/analytics/overview`

Signature: `getOverview(params: AnalyticsGetOverviewParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_start_at` | Required | string | Inclusive period start. Format: `date-time`. |
| `period_end_at` | Optional | string | Exclusive period end. Format: `date-time`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

#### Response

Returned payload: [AnalyticsOverview](../models/AnalyticsOverview.md#analyticsoverview).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.analytics.getOverview({period_start_at: "2026-01-01T00:00:00Z"}, {  });
```

[Complete runnable example](../examples/analytics-getOverview.mjs)

### analytics.getPaymentVolumeTimeseries

Returns merchant payment volume buckets for the requested half-open period.

`GET /v1/analytics/payment-volume-timeseries`

Signature: `getPaymentVolumeTimeseries(params: AnalyticsGetPaymentVolumeTimeseriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_start_at` | Required | string | Inclusive period start. Format: `date-time`. |
| `period_end_at` | Optional | string | Exclusive period end. Format: `date-time`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `granularity` | Optional | string | Bucket size: hour, day (default), week starting Monday, or month. Buckets follow local boundaries, clipped to the period. Repeated hours have two buckets; skipped hours and days have none. Empty buckets are included. Values: `"hour"`, `"day"`, `"week"`, `"month"`. |
| `timezone` | Optional | string | IANA timezone for bucket boundaries. Defaults to UTC. maxLength: `100`. |

#### Response

Returned payload: [PaymentVolumeTimeseries](../models/PaymentVolumeTimeseries.md#paymentvolumetimeseries).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.analytics.getPaymentVolumeTimeseries({period_start_at: "2026-01-01T00:00:00Z"}, {  });
```

[Complete runnable example](../examples/analytics-getPaymentVolumeTimeseries.mjs)

### analytics.getSubscription

Returns windowed subscription metrics plus current subscription snapshot metrics.

`GET /v1/analytics/subscriptions`

Signature: `getSubscription(params: AnalyticsGetSubscriptionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

Field definitions: [shared fields](#request-fields).

#### Response

Returned payload: [SubscriptionAnalytics](../models/SubscriptionAnalytics.md#subscriptionanalytics).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.analytics.getSubscription({period_start_at: "2026-01-01T00:00:00Z"}, {  });
```

[Complete runnable example](../examples/analytics-getSubscription.mjs)

