[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerSessions

### customerSessions.create

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Keep secret and refresh_token on your server. For hosted sign-in, create a customer access link instead.

`POST /v1/customer-sessions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequestInput.md#createcustomersessionrequestinput) | The request body for: Create a customer session. |

Body model: [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequestInput.md#createcustomersessionrequestinput).

#### customerSessions.create body fields

Field definitions: [shared fields](../models/CreateCustomerSessionRequestInput.md#createcustomersessionrequestinput).

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecretInput.md#customersessionwithsecretinput).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerSessions->create([
  'customer_id' => 'example',
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
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequestInput.md#refreshcustomersessionrequestinput) | The request body for: Refresh a customer session. |

Body model: [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequestInput.md#refreshcustomersessionrequestinput).

#### customerSessions.refresh body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refresh_token` | Required | string | minLength: `1`. |

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecretInput.md#customersessionwithsecretinput).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `refreshWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

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
| `customer_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerSession](../models/CustomerSessionInput.md#customersessioninput).

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

Complete body and metadata: `revokeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerSessions->revoke('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerSessions-revoke.php)

