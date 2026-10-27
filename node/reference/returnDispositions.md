[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnDispositions

### returnDispositions.cancel

Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.

`POST /v1/return-dispositions/{return_disposition_id}/cancel`

Signature:

```typescript
cancel(return_disposition_id: InputValue<string>,
 params: (InputValue<CancelReturnDispositionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CancelReturnDispositionRequestInput](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest) | The request body for: Cancel return disposition. |

Body model: [CancelReturnDispositionRequestInput](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest).

#### returnDispositions.cancel body fields

Field definitions: [shared fields](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest).

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnDispositions.cancel("example", {reason: "created_in_error"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-cancel.mjs)

### returnDispositions.get

Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.

`GET /v1/return-dispositions/{return_disposition_id}`

Signature: `get(return_disposition_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string |  |

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.returnDispositions.get("example", {}, {  });
```

[Complete runnable example](../examples/returnDispositions-get.mjs)

### returnDispositions.list

List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant. Newest first: created_at descending, with return_disposition_id descending as the tiebreak.

`GET /v1/return-dispositions`

Signature:

```typescript
list(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "disposition_type"?: InputValue<Array<"sellable" |
    "quality_control" |
    "damaged" |
    "quarantined" |
    "repair" |
    "refurbish" |
    "liquidate" |
    "donate" |
    "discard" |
    "return_to_buyer" |
    "lost">>;
  "external_reference_id"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "inventory_location_id"?: InputValue<string>;
  "occurred_after"?: InputValue<string | globalThis.Date>;
  "occurred_before"?: InputValue<string | globalThis.Date>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "replaces_return_disposition_id"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "return_inspection_line_item_id"?: InputValue<string>;
  "return_line_item_id"?: InputValue<string>;
  "return_receipt_line_item_id"?: InputValue<string>;
  "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `disposition_type` | Optional | Array of string | minItems: `1`. Items values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `replaces_return_disposition_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_inspection_line_item_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_line_item_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [ListReturnDispositionsResponse](../models/ListReturnDispositionsResponse.md#listreturndispositionsresponse).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returnDispositions.list({}, {  });
```

[Complete runnable example](../examples/returnDispositions-list.mjs)

### returnDispositions.retry

Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.

`POST /v1/return-dispositions/{return_disposition_id}/retry`

Signature:

```typescript
retry(return_disposition_id: InputValue<string>,
 params: (InputValue<RetryReturnDispositionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RetryReturnDispositionRequestInput](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest) | The request body for: Retry return disposition. |

Body model: [RetryReturnDispositionRequestInput](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest).

#### returnDispositions.retry body fields

Field definitions: [shared fields](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest).

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `retryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnDispositions.retry("example", {reason: "dependency_recovered"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-retry.mjs)

