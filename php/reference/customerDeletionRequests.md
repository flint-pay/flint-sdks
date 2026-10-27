[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerDeletionRequests

### customerDeletionRequests.list

Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests.

`GET /v1/customer-deletion-requests`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `customer_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [CustomerDeletionRequestsListResponse200](../models/CustomerDeletionRequestsListResponse200.md#customerdeletionrequestslistresponse200).

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

```php
$result = $client->customerDeletionRequests->list([], new RequestOptions());
```

[Complete runnable example](../examples/customerDeletionRequests-list.php)

### customerDeletionRequests.resolve

Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.

`POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`

Signature: `resolve(string|Model $customer_deletion_request_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ResolveCustomerDeletionRequestInput](../models/ResolveCustomerDeletionRequestInput.md#resolvecustomerdeletionrequestinput) | The request body for: Resolve a customer deletion request. |

Body model: [ResolveCustomerDeletionRequestInput](../models/ResolveCustomerDeletionRequestInput.md#resolvecustomerdeletionrequestinput).

#### customerDeletionRequests.resolve body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `decision` | Required | string | Values: `"approve"`, `"reject"`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequestInput.md#customerdeletionrequestinput).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerDeletionRequests->resolve('example', [
  'decision' => 'approve',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerDeletionRequests-resolve.php)

