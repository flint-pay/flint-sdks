[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnReasons

### returnReasons.create

Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons. Flint handles and all existing merchant handles, including archived reasons, are reserved. A conflicting handle returns 409 ALREADY_EXISTS.

`POST /v1/return-reasons`

Signature:

```typescript
create(params: (InputValue<CreateReturnReasonRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReturnReasonRequestInput](../models/CreateReturnReasonRequest.md#createreturnreasonrequest) | The request body for: Create return reason. |

Body model: [CreateReturnReasonRequestInput](../models/CreateReturnReasonRequest.md#createreturnreasonrequest).

#### returnReasons.create body fields

Field definitions: [shared fields](../models/CreateReturnReasonRequest.md#createreturnreasonrequest).

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnReasons.create({handle: "example", name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReasons-create.mjs)

### returnReasons.get

Retrieve one Return reason with its handle, category handles, and status.

`GET /v1/return-reasons/{return_reason_id}`

Signature: `get(return_reason_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.returnReasons.get("example", {}, {  });
```

[Complete runnable example](../examples/returnReasons-get.mjs)

### returnReasons.list

List Return reasons, including Flint-provided defaults and merchant-defined reasons. Newest first: created_at descending, with return_reason_id descending as the tiebreak. Flint reasons have a created_at of 1970-01-01T00:00:00Z, so they follow your own.

`GET /v1/return-reasons`

Signature:

```typescript
list(params?: {
  "external_reference_id"?: InputValue<string>;
  "handle"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "source"?: InputValue<Array<"flint" | "merchant">>;
  "status"?: InputValue<Array<"active" | "archived" | "inactive">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `handle` | Optional | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `source` | Optional | Array of string | minItems: `1`. Items values: `"flint"`, `"merchant"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`, `"inactive"`. |

#### Response

Returned payload: [ListReturnReasonsResponse](../models/ListReturnReasonsResponse.md#listreturnreasonsresponse).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returnReasons.list({}, {  });
```

[Complete runnable example](../examples/returnReasons-list.mjs)

### returnReasons.remove

Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep the frozen reason name. Flint reasons cannot be archived; set status to inactive instead. Archived merchant handles remain reserved.

`DELETE /v1/return-reasons/{return_reason_id}`

Signature:

```typescript
remove(return_reason_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnReasons.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReasons-remove.mjs)

### returnReasons.update

Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set. Set status to active or inactive to control availability. Flint reasons accept only status and expected_version; create your own reason to use different wording. Use DELETE to archive a merchant reason.

`PATCH /v1/return-reasons/{return_reason_id}`

Signature:

```typescript
update(return_reason_id: InputValue<string>,
 params: (InputValue<UpdateReturnReasonRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateReturnReasonRequestInput](../models/UpdateReturnReasonRequest.md#updatereturnreasonrequest) | The request body for: Update return reason. |

Body model: [UpdateReturnReasonRequestInput](../models/UpdateReturnReasonRequest.md#updatereturnreasonrequest).

#### returnReasons.update body fields

Field definitions: [shared fields](../models/UpdateReturnReasonRequest.md#updatereturnreasonrequest).

#### Response

Returned payload: [ReturnReason](../models/ReturnReason.md#returnreason).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnReasons.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReasons-update.mjs)

