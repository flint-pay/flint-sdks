[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# disputes

### disputes.accept

Accepts a chargeback: you won't contest it, and the disputed amount stays with the buyer. The dispute becomes `lost`, and Flint sends `dispute.lost`. You can accept while `status` is `needs_response` and `is_action_required` is `true`. An inquiry can't be accepted; refund the payment or respond with evidence instead. Accepting can't be undone. Requires `payments.disputes.write`. Send no body or `{}`. If you don't receive a response, retry with the same `Idempotency-Key`, or read the dispute: `status: lost` means it was accepted.

`POST /v1/disputes/{dispute_id}/accept`

Signature: `accept(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Dispute](../models/Dispute.md#dispute).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `acceptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->disputes->accept('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/disputes-accept.php)

### disputes.createResponseSession

Creates a browser session for responding to or viewing a dispute with Stripe Connect. Requires payments.disputes.write. Allowed for closed disputes; bank returns cannot be contested. Pass the returned payment to setPayment or the React payment prop. Each completed retry creates a fresh single-use client secret. Keep your API key on your server.

`POST /v1/disputes/{dispute_id}/response-sessions`

Signature: `createResponseSession(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DisputeResponseSession](../models/DisputeResponseSession.md#disputeresponsesession).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createResponseSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->disputes->createResponseSession('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/disputes-createResponseSession.php)

### disputes.get

Returns one dispute by ID, with optional customer, order, and payment intent expansions.

`GET /v1/disputes/{dispute_id}`

Signature: `get(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [Dispute](../models/Dispute.md#dispute).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->disputes->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/disputes-get.php)

### disputes.list

Returns a paginated list of disputes for the authenticated merchant with optional payment, customer, status, reason, case type, action required, and timing filters. Defaults to created_at descending. The amount sort compares amount_money.amount in minor units. The evidence_due_at sort places disputes without deadlines last in either direction. Default order: created_at descending, then dispute_id descending.

`GET /v1/disputes`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `payment_intent_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. |
| `reason` | Optional | Array of string | minItems: `1`. Items values: [12 declared values](../models/DisputeInput.md#disputeinput-reason-values). |
| `case_type` | Optional | Array of string | minItems: `1`. Items values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. |
| `is_action_required` | Optional | boolean |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"evidence_due_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `evidence_due_after` | Optional | string | Format: `date-time`. |
| `evidence_due_before` | Optional | string | Format: `date-time`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [DisputesListResponse200](../models/DisputesListResponse200.md#disputeslistresponse200).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->disputes->list([], new RequestOptions());
```

[Complete runnable example](../examples/disputes-list.php)

