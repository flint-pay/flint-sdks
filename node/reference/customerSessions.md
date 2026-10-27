[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerSessions

### customerSessions.create

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Keep secret and refresh_token on your server. For hosted sign-in, create a customer access link instead.

`POST /v1/customer-sessions`

Signature:

```typescript
create(params: (InputValue<CreateCustomerSessionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequest.md#createcustomersessionrequest) | The request body for: Create a customer session. |

Body model: [CreateCustomerSessionRequestInput](../models/CreateCustomerSessionRequest.md#createcustomersessionrequest).

#### customerSessions.create body fields

Field definitions: [shared fields](../models/CreateCustomerSessionRequest.md#createcustomersessionrequest).

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecret.md#customersessionwithsecret).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerSessions.create({customer_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerSessions-create.mjs)

### customerSessions.refresh

Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family. Send one fixed Idempotency-Key per session: Flint scopes the key to the refresh token, so concurrent refreshes replay the same pair. On IDEMPOTENCY_KEY_IN_PROGRESS, retry the same key and token.

`POST /v1/customer-sessions/refresh`

Signature:

```typescript
refresh(params: (InputValue<RefreshCustomerSessionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<never>>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequest.md#refreshcustomersessionrequest) | The request body for: Refresh a customer session. |

Body model: [RefreshCustomerSessionRequestInput](../models/RefreshCustomerSessionRequest.md#refreshcustomersessionrequest).

#### customerSessions.refresh body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refresh_token` | Required | string | minLength: `1`. |

#### Response

Returned payload: [CustomerSessionWithSecret](../models/CustomerSessionWithSecret.md#customersessionwithsecret).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerSessions.refresh({refresh_token: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerSessions-refresh.mjs)

### customerSessions.revoke

Revokes one customer session in the selected merchant environment. This does not revoke an independent Flint Account buyer session.

`POST /v1/customer-sessions/{customer_session_id}/revoke`

Signature: `revoke(customer_session_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerSession](../models/CustomerSession.md#customersession).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerSessions.revoke("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerSessions-revoke.mjs)

