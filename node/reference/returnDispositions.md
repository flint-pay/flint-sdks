[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnDispositions

### returnDispositions.cancel

Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.

`POST /v1/return-dispositions/{return_disposition_id}/cancel`

Signature: `cancel(return_disposition_id: InputValue<string>, params: ReturnDispositionsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string | Flint return disposition id. |
| `body` | Required | [CancelReturnDispositionRequestInput](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest) | The request body for: Cancel return disposition. |

Body model: [CancelReturnDispositionRequestInput](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest).

#### returnDispositions.cancel body fields

Field definitions: [shared fields](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest).

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

const result = await client.returnDispositions.cancel("retdsp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "created_in_error"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-cancel.mjs)

### returnDispositions.get

Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.

`GET /v1/return-dispositions/{return_disposition_id}`

Signature:

```typescript
get(return_disposition_id: InputValue<string>,
 params?: ReturnDispositionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string | Flint return disposition id. |

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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
const result = await client.returnDispositions.get("retdsp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnDispositions-get.mjs)

### returnDispositions.list

List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant. Default order: created_at descending, then return_disposition_id descending.

`GET /v1/return-dispositions`

Signature: `list(params?: ReturnDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `disposition_type` | Optional | Array of string or string | Filter by disposition type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | Filter by inventory location id. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return disposition ID or external reference ID. |
| `replaces_return_disposition_id` | Optional | string | Filter by replaces return disposition id. |
| `return_id` | Optional | string | Filter by return id. |
| `return_inspection_line_item_id` | Optional | string | Filter by return inspection line item id. |
| `return_line_item_id` | Optional | string | Filter by return line item id. |
| `return_receipt_line_item_id` | Optional | string | Filter by return receipt line item id. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [ListReturnDispositionsResponse](../models/ListReturnDispositionsResponse.md#listreturndispositionsresponse).

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
const result = await client.returnDispositions.list({}, {  });
```

[Complete runnable example](../examples/returnDispositions-list.mjs)

### returnDispositions.retry

Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.

`POST /v1/return-dispositions/{return_disposition_id}/retry`

Signature: `retry(return_disposition_id: InputValue<string>, params: ReturnDispositionsRetryParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string | Flint return disposition id. |
| `body` | Required | [RetryReturnDispositionRequestInput](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest) | The request body for: Retry return disposition. |

Body model: [RetryReturnDispositionRequestInput](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest).

#### returnDispositions.retry body fields

Field definitions: [shared fields](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest).

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

const result = await client.returnDispositions.retry("retdsp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "dependency_recovered"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-retry.mjs)

