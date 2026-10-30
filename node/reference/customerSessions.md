[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerSessions

### customerSessions.create

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Keep secret and refresh_token on your server. For hosted sign-in, create a customer access link instead.

`POST /v1/customer-sessions`

Signature: `create(params: CustomerSessionsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequest.md#createcustomersessionrequest) | The request body for: Create a customer session. |

Body model: [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequest.md#createcustomersessionrequest).

#### customerSessions.create body fields

Field definitions: [shared fields](../models/CreateCustomerSessionRequest.md#createcustomersessionrequest).

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecret.md#customersessionwithsecret).

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

const result = await client.customerSessions.create({customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerSessions-create.mjs)

### customerSessions.refresh

Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family. Send one fixed Idempotency-Key per session: Flint scopes the key to the refresh token, so concurrent refreshes replay the same pair. On IDEMPOTENCY_KEY_IN_PROGRESS, retry the same key and token.

`POST /v1/customer-sessions/refresh`

Signature: `refresh(params: CustomerSessionsRefreshParams, options: _SdkRequiredIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequest.md#refreshcustomersessionrequest) | The request body for: Refresh a customer session. |

Body model: [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequest.md#refreshcustomersessionrequest).

#### customerSessions.refresh body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refresh_token` | Required | string | minLength: `1`. |

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecret.md#customersessionwithsecret).

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

```typescript
const customerSessionId = "cses_01ARZ3NDEKTSV4RRFFQ69G5FAV";
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = `refresh-${customerSessionId}`;

const result = await client.customerSessions.refresh({refresh_token: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerSessions-refresh.mjs)

### customerSessions.revoke

Revokes one customer session in the selected merchant environment. This does not revoke an independent Flint Account buyer session.

`POST /v1/customer-sessions/{customer_session_id}/revoke`

Signature: `revoke(customer_session_id: InputValue<string>, params?: CustomerSessionsRevokeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_session_id` | Required | string | Flint customer session ID. |

#### Response

Returned payload: [CustomerSession](../models/CustomerSession.md#customersession).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerSessions.revoke("cses_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerSessions-revoke.mjs)

