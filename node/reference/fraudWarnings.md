[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fraudWarnings

### fraudWarnings.get

Retrieves an early fraud warning. Expand `payment_intent` or `dispute` to include them.

`GET /v1/fraud-warnings/{fraud_warning_id}`

Signature:

```typescript
get(fraud_warning_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"dispute" | "payment_intent">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fraud_warning_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"dispute"`, `"payment_intent"`. |

#### Response

Returned payload: [FraudWarning](../models/FraudWarning.md#fraudwarning).

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
const result = await client.fraudWarnings.get("example", {}, {  });
```

[Complete runnable example](../examples/fraudWarnings-get.mjs)

### fraudWarnings.list

Lists early fraud warnings that card networks reported on your payments, most recently reported first. Filter with `is_actionable=true` to find warnings a full refund can still resolve before a dispute.

`GET /v1/fraud-warnings`

Signature:

```typescript
list(params?: {
  "is_actionable"?: InputValue<boolean>;
  "payment_intent_id"?: InputValue<string>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "expand"?: InputValue<Array<"dispute" | "payment_intent">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_actionable` | Optional | boolean |  |
| `payment_intent_id` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"dispute"`, `"payment_intent"`. |

#### Response

Returned payload: [FraudWarningListResponse](../models/FraudWarningListResponse.md#fraudwarninglistresponse).

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
const result = await client.fraudWarnings.list({}, {  });
```

[Complete runnable example](../examples/fraudWarnings-list.mjs)

