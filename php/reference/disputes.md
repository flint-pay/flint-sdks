[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# disputes

### disputes.accept

Accepts a chargeback: you won't contest it, and the disputed amount stays with the buyer. The dispute becomes `lost`, and Flint sends `dispute.lost`. You can accept while `status` is `needs_response` and `is_action_required` is `true`. An inquiry can't be accepted; refund the payment or respond with evidence instead. Accepting can't be undone. Requires `payments.disputes.write`. Send no body or `{}`. If you don't receive a response, retry with the same `Idempotency-Key`, or read the dispute: `status: lost` means it was accepted.

`POST /v1/disputes/{dispute_id}/accept`

Signature: `accept(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string | Flint dispute ID. |

#### Response

Returned payload: [Dispute](../models/Dispute.md#dispute).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->disputes->accept('du_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/disputes-accept.php)

### disputes.createResponseSession

Creates a browser session for responding to or viewing a dispute with Stripe Connect. Requires payments.disputes.write. Allowed for closed disputes; bank returns cannot be contested. Pass the returned payment to setPayment or the React payment prop. Each completed retry creates a fresh single-use client secret. Keep your API key on your server.

`POST /v1/disputes/{dispute_id}/response-sessions`

Signature: `createResponseSession(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string | Flint dispute ID. |

#### Response

Returned payload: [DisputeResponseSession](../models/DisputeResponseSession.md#disputeresponsesession).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->disputes->createResponseSession('du_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/disputes-createResponseSession.php)

### disputes.get

Returns one dispute by ID, with optional customer, order, and payment intent expansions.

`GET /v1/disputes/{dispute_id}`

Signature: `get(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string | Flint dispute ID. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order, payment_intent. Expansion requires payments.disputes.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`, `"payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [Dispute](../models/Dispute.md#dispute).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->disputes->get('du_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/disputes-get.php)

### disputes.list

Returns a paginated list of disputes for the authenticated merchant with optional payment, customer, status, reason, case type, action required, and timing filters. Defaults to created_at descending. The amount sort compares amount_money.amount in minor units. The evidence_due_at sort places disputes without deadlines last in either direction. Default order: created_at descending, then dispute_id descending.

`GET /v1/disputes`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `payment_intent_id` | Optional | string | Optional Flint payment intent ID filter. |
| `order_id` | Optional | string | Optional Flint order ID filter. |
| `customer_id` | Optional | string | Optional Flint customer ID filter. |
| `status` | Optional | Array of string or string | Optional dispute status filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. |
| `reason` | Optional | Array of string or string | Optional normalized dispute reason filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [12 declared values](../models/DisputeInput.md#disputeinput-reason-values). Values: [12 declared values](../models/DisputeInput.md#disputeinput-reason-values). |
| `case_type` | Optional | Array of string or string | Optional dispute case type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. |
| `is_action_required` | Optional | boolean | Filter by whether a merchant response is needed now. True includes needs_response and inquiry_needs_response disputes that allow evidence and whose evidence deadline has not passed; false includes the remaining disputes. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by dispute_id. Default: `"created_at"`. Values: `"created_at"`, `"evidence_due_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `evidence_due_after` | Optional | string | Inclusive lower bound on evidence_due_at. Format: `date-time`. |
| `evidence_due_before` | Optional | string | Exclusive upper bound on evidence_due_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`, `"payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [DisputeListResponse](../models/DisputeListResponse.md#disputelistresponse).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->disputes->list([], new RequestOptions());
```

[Complete runnable example](../examples/disputes-list.php)

### disputes.simulate

Sandbox only. Simulates the card network's ruling on a dispute that needs a response. Flint submits Stripe's test evidence for the `outcome`, and the ruling arrives through the dispute's usual webhook events, as a real one would. Send `won` or `lost` for a chargeback in `needs_response`, and `inquiry_closed` or `escalated` for an inquiry in `inquiry_needs_response`. The response is the dispute after the evidence is submitted, usually `under_review` or `inquiry_under_review`. Stripe decides shortly after, with no fixed timing. Requires `payments.disputes.write`. If you don't receive a response, retry with the same `Idempotency-Key`, or read the dispute.

`POST /v1/disputes/{dispute_id}/simulate`

Signature: `simulate(string|Model $dispute_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string | Flint dispute ID. |
| `body` | Required | [SimulateDisputeRequestInput](../models/SimulateDisputeRequestInput.md#simulatedisputerequestinput) | The request body for: Simulate a dispute outcome. |

Body model: [SimulateDisputeRequestInput](../models/SimulateDisputeRequestInput.md#simulatedisputerequestinput).

#### disputes.simulate body fields

Field definitions: [shared fields](../models/SimulateDisputeRequestInput.md#simulatedisputerequestinput).

#### Response

Returned payload: [Dispute](../models/Dispute.md#dispute).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->disputes->simulate('du_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'outcome' => 'won',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/disputes-simulate.php)

