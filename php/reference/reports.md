[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# reports

### reports.create

Creates an idempotent asynchronous CSV report. interval_end_at may be at most the same local time 366 calendar days after interval_start_at in timezone, and must not be in the future. Poll the returned report until it succeeds or fails.

`POST /v1/reports`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReportRequestInput](../models/CreateReportRequestInput.md#createreportrequestinput) | The request body for: Create a report. |

Body model: [CreateReportRequestInput](../models/CreateReportRequestInput.md#createreportrequestinput).

#### reports.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on currency. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `interval_end_at` | Required | string | Exclusive report interval end instant. Each report type matches its own occurrence time. At most the same local time 366 calendar days after interval_start_at in timezone. Must not be in the future. Format: `date-time`. minLength: `1`. |
| `interval_start_at` | Required | string | Inclusive report interval start instant. Each report type matches its own occurrence time. Format: `date-time`. minLength: `1`. |
| `report_type` | Required | string | Which report to generate. The value names the row and the column version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and columns. Values: [10 declared values](../models/CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `timezone` | Optional | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. Defaults to UTC. minLength: `1`. |

#### Response

Returned payload: [ReportsCreateResponse201DataPending](../models/ReportsCreateResponse201DataPending.md#reportscreateresponse201datapending)|[ReportsCreateResponse201DataSucceeded](../models/ReportsCreateResponse201DataSucceeded.md#reportscreateresponse201datasucceeded)|[ReportsCreateResponse201DataFailed](../models/ReportsCreateResponse201DataFailed.md#reportscreateresponse201datafailed)|\stdClass.

##### Response variant 1

A report generated from the merchant's activity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `download` | Optional | object | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. |
| `failure_reason` | Optional | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [10 declared values](../models/CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

##### Response variant 2

A report generated from the merchant's activity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `download` | Required | object | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. |
| `failure_reason` | Optional | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [10 declared values](../models/CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"succeeded"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

##### Response variant 3

A report generated from the merchant's activity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `download` | Optional | object | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. |
| `failure_reason` | Required | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [10 declared values](../models/CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"failed"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->reports->create([
  'currency' => 'USD',
  'interval_end_at' => '2026-01-02T00:00:00Z',
  'interval_start_at' => '2026-01-01T00:00:00Z',
  'report_type' => 'orders_itemized_v1',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/reports-create.php)

### reports.get

Returns one report and its terminal download or failure details when available.

`GET /v1/reports/{report_id}`

Signature: `get(string|Model $report_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `report_id` | Required | string |  |

#### Response

Returned payload: [ReportsGetResponse200DataPending](../models/ReportsGetResponse200DataPending.md#reportsgetresponse200datapending)|[ReportsGetResponse200DataSucceeded](../models/ReportsGetResponse200DataSucceeded.md#reportsgetresponse200datasucceeded)|[ReportsGetResponse200DataFailed](../models/ReportsGetResponse200DataFailed.md#reportsgetresponse200datafailed)|\stdClass.

##### Response variant 1

A report generated from the merchant's activity.

Field definitions: [shared fields](#response-variant-1).

##### Response variant 2

A report generated from the merchant's activity.

Field definitions: [shared fields](#response-variant-2).

##### Response variant 3

A report generated from the merchant's activity.

Field definitions: [shared fields](#response-variant-3).

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

```php
$result = $client->reports->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/reports-get.php)

### reports.list

Lists reports newest first by created_at, with report_id descending as the tiebreak, using opaque pagination.

`GET /v1/reports`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `report_type` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](../models/CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"succeeded"`, `"failed"`. |

#### Response

Returned payload: [ReportsListResponse200](../models/ReportsListResponse200.md#reportslistresponse200).

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

```php
$result = $client->reports->list([], new RequestOptions());
```

[Complete runnable example](../examples/reports-list.php)

