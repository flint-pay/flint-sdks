[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerDeletionRequests

### customerDeletionRequests.list

Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests.

`GET /v1/customer-deletion-requests`

Signature:

```typescript
list(params?: {
  "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
  "customer_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `customer_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [CustomerDeletionRequestListResponse](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponse).

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
const result = await client.customerDeletionRequests.list({}, {  });
```

[Complete runnable example](../examples/customerDeletionRequests-list.mjs)

### customerDeletionRequests.resolve

Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.

`POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`

Signature:

```typescript
resolve(customer_deletion_request_id: InputValue<string>,
 params: (InputValue<ResolveCustomerDeletionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ResolveCustomerDeletionRequestInput](../models/ResolveCustomerDeletionRequest.md#resolvecustomerdeletionrequest) | The request body for: Resolve a customer deletion request. |

Body model: [ResolveCustomerDeletionRequestInput](../models/ResolveCustomerDeletionRequest.md#resolvecustomerdeletionrequest).

#### customerDeletionRequests.resolve body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `decision` | Required | string | Values: `"approve"`, `"reject"`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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

Complete body and metadata: `resolveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerDeletionRequests.resolve("example", {decision: "approve"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerDeletionRequests-resolve.mjs)

