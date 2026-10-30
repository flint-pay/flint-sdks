[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentMethods

### paymentMethods.create

Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/payment-methods`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [SavePaymentMethodRequestInput](../models/SavePaymentMethodRequestInput.md#savepaymentmethodrequestinput) | The request body for: Create a payment method. |

Body model: [SavePaymentMethodRequestInput](../models/SavePaymentMethodRequestInput.md#savepaymentmethodrequestinput).

#### paymentMethods.create body fields

Field definitions: [shared fields](../models/SavePaymentMethodRequestInput.md#savepaymentmethodrequestinput).

#### Response

Returned payload: [PaymentMethodWithSetup](../models/PaymentMethodWithSetup.md#paymentmethodwithsetup).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
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

$result = $client->paymentMethods->create([
  'customer_id' => 'cus_01KEZF7C003ACYXT6Q5EQZ78EE',
  'type' => 'card',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentMethods-create.php)

### paymentMethods.delete

Deletes a saved payment method so it can no longer be used for future payments. Returns the payment method with status archived, including when it was already archived.

`DELETE /v1/payment-methods/{payment_method_id}`

Signature: `delete(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string | Flint payment method ID. |

#### Response

Returned payload: [PaymentMethod](../models/PaymentMethod.md#paymentmethod).

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
| 502 | ServerError |
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

$result = $client->paymentMethods->delete('pm_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentMethods-delete.php)

### paymentMethods.get

Returns a single payment method by ID.

`GET /v1/payment-methods/{payment_method_id}`

Signature: `get(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string | Flint payment method ID. |
| `expand` | Optional | Array of string or string | Supported expansions: customer. Expansion requires payments.payment_methods.read plus customers.read. Limits: at most 10 unique expand paths per request. Pass expand=customer. Items values: `"customer"`. Values: `"customer"`. |

#### Response

Returned payload: [PaymentMethod](../models/PaymentMethod.md#paymentmethod).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->paymentMethods->get('pm_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/paymentMethods-get.php)

### paymentMethods.list

Lists payment methods in every status except archived, newest first. Filter by status=active for the cards you can charge. Optionally filter to a customer. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use. Default order: created_at descending, then payment_method_id descending.

`GET /v1/payment-methods`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | Optional Flint customer ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `type` | Optional | Array of string or string | Filter by payment method type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"card"`. Values: `"card"`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. Values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. |
| `usage` | Optional | Array of string or string | Filter by usage: off_session payment methods can be charged without the buyer; on_session ones were saved by buyers for faster checkout. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"on_session"`, `"off_session"`. Values: `"on_session"`, `"off_session"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: customer. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=customer. Items values: `"customer"`. Values: `"customer"`. |

#### Response

Returned payload: [PaymentMethodListResponse](../models/PaymentMethodListResponse.md#paymentmethodlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->paymentMethods->list([], new RequestOptions());
```

[Complete runnable example](../examples/paymentMethods-list.php)

