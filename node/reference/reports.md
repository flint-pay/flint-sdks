[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# reports

### reports.create

Creates an idempotent asynchronous CSV report. interval_end_at may be at most the same local time 366 calendar days after interval_start_at in timezone, and must not be in the future. Poll the returned report until it succeeds or fails.

`POST /v1/reports`

Signature: `create(params: ReportsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateReportRequestInput](../models/CreateReportRequest.md#createreportrequest) | The request body for: Create a report. |

Body model: [CreateReportRequestInput](../models/CreateReportRequest.md#createreportrequest).

#### reports.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on currency. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `interval_end_at` | Required | string | Exclusive report interval end instant. Each report type matches its own occurrence time. At most the same local time 366 calendar days after interval_start_at in timezone. Must not be in the future. Format: `date-time`. minLength: `1`. |
| `interval_start_at` | Required | string | Inclusive report interval start instant. Each report type matches its own occurrence time. Format: `date-time`. minLength: `1`. |
| `report_type` | Required | string | Which report to generate. The value names the row and the column version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and columns. Values: [10 declared values](../models/CreateReportRequest.md#createreportrequest-report_type-values). |
| `timezone` | Optional | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. Defaults to UTC. minLength: `1`. |

#### Response

Returned payload: [Report](../models/Report.md#report).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.reports.create({currency: "USD", interval_end_at: "2026-01-02T00:00:00Z", interval_start_at: "2026-01-01T00:00:00Z", report_type: "orders_itemized_v1"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/reports-create.mjs)

### reports.get

Returns one report and its terminal download or failure details when available.

`GET /v1/reports/{report_id}`

Signature: `get(report_id: InputValue<string>, params?: ReportsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `report_id` | Required | string | Flint report ID. |

#### Response

Returned payload: [Report](../models/Report.md#report).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Polling: `getWait`; state `data.status`; success `succeeded`; failure `failed`. [Polling deadlines](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.reports.get("rep_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/reports-get.mjs)

### reports.list

Lists reports using opaque pagination. Default order: created_at descending, then report_id descending.

`GET /v1/reports`

Signature: `list(params?: ReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `report_type` | Optional | Array of string or string | Return reports with any of these report types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](../models/CreateReportRequest.md#createreportrequest-report_type-values). Values: [10 declared values](../models/CreateReportRequest.md#createreportrequest-report_type-values). |
| `status` | Optional | Array of string or string | Return reports in any of these statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"failed"`. Values: `"pending"`, `"succeeded"`, `"failed"`. |

#### Response

Returned payload: [ReportListResponse](../models/ReportListResponse.md#reportlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.reports.list({}, {  });
```

[Complete runnable example](../examples/reports-list.mjs)

