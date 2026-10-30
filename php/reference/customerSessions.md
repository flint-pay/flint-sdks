[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerSessions

### customerSessions.create

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Keep secret and refresh_token on your server. For hosted sign-in, create a customer access link instead.

`POST /v1/customer-sessions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequestInput.md#createcustomersessionrequestinput) | The request body for: Create a customer session. |

Body model: [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequestInput.md#createcustomersessionrequestinput).

#### customerSessions.create body fields

Field definitions: [shared fields](../models/CreateCustomerSessionRequestInput.md#createcustomersessionrequestinput).

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecretInput.md#customersessionwithsecretinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerSessions->create([
  'customer_id' => 'cus_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerSessions-create.php)

### customerSessions.refresh

Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family. Send one fixed Idempotency-Key per session: Flint scopes the key to the refresh token, so concurrent refreshes replay the same pair. On IDEMPOTENCY_KEY_IN_PROGRESS, retry the same key and token.

`POST /v1/customer-sessions/refresh`

Signature: `refresh(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequestInput.md#refreshcustomersessionrequestinput) | The request body for: Refresh a customer session. |

Body model: [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequestInput.md#refreshcustomersessionrequestinput).

#### customerSessions.refresh body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refresh_token` | Required | string | minLength: `1`. |

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecretInput.md#customersessionwithsecretinput).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$customerSessionId = 'cses_01ARZ3NDEKTSV4RRFFQ69G5FAV';
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = 'refresh-' . $customerSessionId;

$result = $client->customerSessions->refresh([
  'refresh_token' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerSessions-refresh.php)

### customerSessions.revoke

Revokes one customer session in the selected merchant environment. This does not revoke an independent Flint Account buyer session.

`POST /v1/customer-sessions/{customer_session_id}/revoke`

Signature: `revoke(string|Model $customer_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_session_id` | Required | string | Flint customer session ID. |

#### Response

Returned payload: [CustomerSession](../models/CustomerSessionInput.md#customersessioninput).

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

$result = $client->customerSessions->revoke('cses_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerSessions-revoke.php)

