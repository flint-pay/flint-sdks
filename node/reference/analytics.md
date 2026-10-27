[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# analytics

### analytics.getOverview

Returns high-level merchant analytics for the requested half-open period.

`GET /v1/analytics/overview`

Signature:

```typescript
getOverview(params: {
  "period_start_at": InputValue<string | globalThis.Date>;
  "period_end_at"?: InputValue<string | globalThis.Date>;
  "currency"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_start_at` | Required | string | Inclusive period start. Format: `date-time`. |
| `period_end_at` | Optional | string | Exclusive period end. Format: `date-time`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

#### Response

Returned payload: [AnalyticsOverview](../models/AnalyticsOverview.md#analyticsoverview).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getOverviewWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.analytics.getOverview({period_start_at: "2026-01-01T00:00:00Z"}, {  });
```

[Complete runnable example](../examples/analytics-getOverview.mjs)

### analytics.getPaymentVolumeTimeseries

Returns merchant payment volume buckets for the requested half-open period.

`GET /v1/analytics/payment-volume-timeseries`

Signature:

```typescript
getPaymentVolumeTimeseries(params: {
  "period_start_at": InputValue<string | globalThis.Date>;
  "period_end_at"?: InputValue<string | globalThis.Date>;
  "currency"?: InputValue<string>;
  "granularity"?: InputValue<"hour" | "day" | "week" | "month">;
  "timezone"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_start_at` | Required | string | Inclusive period start. Format: `date-time`. |
| `period_end_at` | Optional | string | Exclusive period end. Format: `date-time`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `granularity` | Optional | string | Values: `"hour"`, `"day"`, `"week"`, `"month"`. |
| `timezone` | Optional | string | maxLength: `100`. |

#### Response

Returned payload: [PaymentVolumeTimeseries](../models/PaymentVolumeTimeseries.md#paymentvolumetimeseries).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPaymentVolumeTimeseriesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.analytics.getPaymentVolumeTimeseries({period_start_at: "2026-01-01T00:00:00Z"}, {  });
```

[Complete runnable example](../examples/analytics-getPaymentVolumeTimeseries.mjs)

### analytics.getSubscription

Returns windowed subscription metrics plus current subscription snapshot metrics.

`GET /v1/analytics/subscriptions`

Signature:

```typescript
getSubscription(params: {
  "period_start_at": InputValue<string | globalThis.Date>;
  "period_end_at"?: InputValue<string | globalThis.Date>;
  "currency"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

Field definitions: [shared fields](#request-fields).

#### Response

Returned payload: [SubscriptionAnalytics](../models/SubscriptionAnalytics.md#subscriptionanalytics).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.analytics.getSubscription({period_start_at: "2026-01-01T00:00:00Z"}, {  });
```

[Complete runnable example](../examples/analytics-getSubscription.mjs)

