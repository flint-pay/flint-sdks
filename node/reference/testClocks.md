[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# testClocks

### testClocks.advance

Sandbox only. Moves the test clock forward to `frozen_at`. Flint returns `202` with the clock in status `advancing`, then moves the clock's customers and their subscriptions to `frozen_at`, running the billing that falls due along the way, in order. Flint sends `test_clock.ready` when the advance finishes, or `test_clock.failed` if it can't finish. You can also read the clock with `GET /v1/test-clocks/{test_clock_id}` until its status is `ready` or `failed`. One advance reaches at most two years, or two billing intervals of any subscription on the clock that isn't canceled, whichever is earlier.

`POST /v1/test-clocks/{test_clock_id}/advance`

Signature: `advance(test_clock_id: InputValue<string>, params: TestClocksAdvanceParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `test_clock_id` | Required | string | ID of the test clock. |
| `body` | Required | [AdvanceTestClockRequestInput](../models/AdvanceTestClockRequest.md#advancetestclockrequest) | The request body for: Advance a test clock. |

Body model: [AdvanceTestClockRequestInput](../models/AdvanceTestClockRequest.md#advancetestclockrequest).

#### testClocks.advance body fields

Field definitions: [shared fields](../models/AdvanceTestClockRequest.md#advancetestclockrequest).

#### Response

Returned payload: [TestClock](../models/TestClock.md#testclock).

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

const result = await client.testClocks.advance("tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expected_version: 1, frozen_at: "2026-12-01T00:00:00Z"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/testClocks-advance.mjs)

### testClocks.create

Sandbox only. Creates a test clock stopped at `frozen_at`, with status `ready`. Customers created on it, and their subscriptions, read its time instead of real time.

`POST /v1/test-clocks`

Signature: `create(params?: TestClocksCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Optional | [CreateTestClockRequestInput](../models/CreateTestClockRequest.md#createtestclockrequest) | The request body for: Create a test clock. |

Body model: [CreateTestClockRequestInput](../models/CreateTestClockRequest.md#createtestclockrequest).

#### testClocks.create body fields

Field definitions: [shared fields](../models/CreateTestClockRequest.md#createtestclockrequest).

#### Response

Returned payload: [TestClock](../models/TestClock.md#testclock).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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

const result = await client.testClocks.create(undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/testClocks-create.mjs)

### testClocks.delete

Sandbox only. Archives the test clock. It stays readable by ID, never advances again, and no new customer can be created on it. Customers and subscriptions already on it are not changed: they keep the clock's `frozen_at` as their current time, so their subscriptions don't bill again. Cancel those subscriptions first if you want them canceled, or reset the sandbox to remove everything. Deleting an archived clock returns it unchanged.

`DELETE /v1/test-clocks/{test_clock_id}`

Signature: `delete(test_clock_id: InputValue<string>, params?: TestClocksDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `test_clock_id` | Required | string | ID of the test clock. |
| `expected_version` | Optional | integer | Optional version most recently read. A stale value returns 409 VERSION_CONFLICT with the current version. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [TestClock](../models/TestClock.md#testclock).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.testClocks.delete("tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/testClocks-delete.mjs)

### testClocks.get

Sandbox only. Returns a test clock in this sandbox, including an archived one.

`GET /v1/test-clocks/{test_clock_id}`

Signature: `get(test_clock_id: InputValue<string>, params?: TestClocksGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `test_clock_id` | Required | string | ID of the test clock. |

#### Response

Returned payload: [TestClock](../models/TestClock.md#testclock).

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

#### Example

```typescript
const result = await client.testClocks.get("tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/testClocks-get.mjs)

### testClocks.list

Sandbox only. Lists the sandbox's test clocks, newest first, then by `test_clock_id`. Archived clocks are listed only when the `status` filter names `archived`. Default order: created_at descending, then test_clock_id descending.

`GET /v1/test-clocks`

Signature: `list(params?: TestClocksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`. Values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [TestClockListResponse](../models/TestClockListResponse.md#testclocklistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.testClocks.list({}, {  });
```

[Complete runnable example](../examples/testClocks-list.mjs)

