[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerDeletionRequests

### customerDeletionRequests.create

Creates a deletion request for merchant review, or returns the customer's open request unchanged. No deletion work starts until approval.

`POST /v1/customer-deletion-requests`

Signature: `create(params: CustomerDeletionRequestsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerDeletionRequestInput](../models/CreateCustomerDeletionRequest.md#createcustomerdeletionrequest) | The request body for: Request customer account deletion. |

Body model: [CreateCustomerDeletionRequestInput](../models/CreateCustomerDeletionRequest.md#createcustomerdeletionrequest).

#### customerDeletionRequests.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID of the customer to delete. minLength: `1`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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

const result = await client.customerDeletionRequests.create({customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerDeletionRequests-create.mjs)

### customerDeletionRequests.get

Returns the current status of a tracked deletion request.

`GET /v1/customer-deletion-requests/{customer_deletion_request_id}`

Signature:

```typescript
get(customer_deletion_request_id: InputValue<string>,
 params?: CustomerDeletionRequestsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string | Flint customer deletion request ID. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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
const result = await client.customerDeletionRequests.get("cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/customerDeletionRequests-get.mjs)

### customerDeletionRequests.list

Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests. Default order: requested_at descending, then customer_deletion_request_id descending.

`GET /v1/customer-deletion-requests`

Signature: `list(params?: CustomerDeletionRequestsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Only return requests in this lifecycle state. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `customer_id` | Optional | string | Only return requests for this Flint customer ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [CustomerDeletionRequestListResponse](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponse).

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
const result = await client.customerDeletionRequests.list({}, {  });
```

[Complete runnable example](../examples/customerDeletionRequests-list.mjs)

### customerDeletionRequests.resolve

Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.

`POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`

Signature:

```typescript
resolve(customer_deletion_request_id: InputValue<string>,
 params: CustomerDeletionRequestsResolveParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string | Flint customer deletion request ID. |
| `body` | Required | [ResolveCustomerDeletionRequestInput](../models/ResolveCustomerDeletionRequest.md#resolvecustomerdeletionrequest) | The request body for: Resolve a customer deletion request. |

Body model: [ResolveCustomerDeletionRequestInput](../models/ResolveCustomerDeletionRequest.md#resolvecustomerdeletionrequest).

#### customerDeletionRequests.resolve body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `decision` | Required | string | Values: `"approve"`, `"reject"`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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

const result = await client.customerDeletionRequests.resolve("cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", {decision: "approve"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerDeletionRequests-resolve.mjs)

