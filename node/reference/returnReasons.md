[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnReasons

### returnReasons.create

Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons. Flint handles and all existing merchant handles, including archived reasons, are reserved. A conflicting handle returns 409 ALREADY_EXISTS.

`POST /v1/return-reasons`

Signature: `create(params: ReturnReasonsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateReturnReasonRequestInput](../models/CreateReturnReasonRequest.md#createreturnreasonrequest) | The request body for: Create return reason. |

Body model: [CreateReturnReasonRequestInput](../models/CreateReturnReasonRequest.md#createreturnreasonrequest).

#### returnReasons.create body fields

Field definitions: [shared fields](../models/CreateReturnReasonRequest.md#createreturnreasonrequest).

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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

const result = await client.returnReasons.create({handle: "example", name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReasons-create.mjs)

### returnReasons.delete

Archive a Return reason so it can't be selected on new Return lines. Returns that recorded it keep its name and handle. Flint reasons can't be archived; set status to inactive instead. An archived reason's handle stays reserved.

`DELETE /v1/return-reasons/{return_reason_id}`

Signature: `delete(return_reason_id: InputValue<string>, params?: ReturnReasonsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string | Flint return reason id. |
| `expected_version` | Optional | integer | Optional. The reason's current version. If it changed, the archive fails with 409 VERSION_CONFLICT and nothing changes. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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

const result = await client.returnReasons.delete("rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReasons-delete.mjs)

### returnReasons.get

Retrieve one Return reason with its handle, category handles, and status.

`GET /v1/return-reasons/{return_reason_id}`

Signature: `get(return_reason_id: InputValue<string>, params?: ReturnReasonsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string | Flint return reason id. |

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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
const result = await client.returnReasons.get("rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnReasons-get.mjs)

### returnReasons.list

List Return reasons, including Flint-provided defaults and merchant-defined reasons. Flint reasons have a created_at of 1970-01-01T00:00:00Z, so they follow your own. Default order: created_at descending, then return_reason_id descending.

`GET /v1/return-reasons`

Signature: `list(params?: ReturnReasonsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `handle` | Optional | string | Exact, case-sensitive match on the reason's handle, for Flint and merchant reasons. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return reason ID, handle, name, description, or external reference ID. |
| `source` | Optional | Array of string or string | Filter by source. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"flint"`, `"merchant"`. Values: `"flint"`, `"merchant"`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`, `"inactive"`. Values: `"active"`, `"archived"`, `"inactive"`. |

#### Response

Returned payload: [ListReturnReasonsResponse](../models/ListReturnReasonsResponse.md#listreturnreasonsresponse).

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
const result = await client.returnReasons.list({}, {  });
```

[Complete runnable example](../examples/returnReasons-list.mjs)

### returnReasons.update

Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set. Set status to active or inactive to control availability. Flint reasons accept only status and expected_version; create your own reason to use different wording. Use DELETE to archive a merchant reason.

`PATCH /v1/return-reasons/{return_reason_id}`

Signature: `update(return_reason_id: InputValue<string>, params: ReturnReasonsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string | Flint return reason id. |
| `body` | Required | [UpdateReturnReasonRequestInput](../models/UpdateReturnReasonRequest.md#updatereturnreasonrequest) | The request body for: Update return reason. |

Body model: [UpdateReturnReasonRequestInput](../models/UpdateReturnReasonRequest.md#updatereturnreasonrequest).

#### returnReasons.update body fields

Field definitions: [shared fields](../models/UpdateReturnReasonRequest.md#updatereturnreasonrequest).

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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

const result = await client.returnReasons.update("rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Wrong size"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReasons-update.mjs)

