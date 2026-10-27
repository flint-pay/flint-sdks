[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# reports

### reports.create

Creates an idempotent asynchronous CSV report. interval_end_at may be at most the same local time 366 calendar days after interval_start_at in timezone, and must not be in the future. Poll the returned report until it succeeds or fails.

`POST /v1/reports`

Signature: `create(params: (InputValue<CreateReportRequestInput>) & { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

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

Signature: `get(report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `report_id` | Required | string |  |

#### Response

Returned payload: [Report](../models/Report.md#report).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Polling: `getWait`, `getWaitWithResponse`; state `data.status`; success `succeeded`; failure `failed`. [Polling deadlines](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.reports.get("example", {}, {  });
```

[Complete runnable example](../examples/reports-get.mjs)

### reports.list

Lists reports newest first by created_at, with report_id descending as the tiebreak, using opaque pagination.

`GET /v1/reports`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "report_type"?: InputValue<Array<"gift_card_liability_v1" |
    "orders_itemized_v1" |
    "orders_itemized_v2" |
    "payments_itemized_v1" |
    "balance_transactions_itemized_v1" |
    "payouts_itemized_v1" |
    "tax_itemized_v1" |
    "tax_summarized_v1" |
    "merchant_billing_itemized_v1" |
    "tax_transactions_itemized_v1">>;
  "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `report_type` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](../models/CreateReportRequest.md#createreportrequest-report_type-values). |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"succeeded"`, `"failed"`. |

#### Response

Returned payload: [ReportListResponse](../models/ReportListResponse.md#reportlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.reports.list({}, {  });
```

[Complete runnable example](../examples/reports-list.mjs)

