[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# demoSessions

### demoSessions.create

Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is displayed only at creation time and for a short idempotent retry window. Omit template to use quickstart; an explicit empty or unsupported value is invalid.

`POST /v1/demo-sessions`

Signature: `create(params: DemoSessionsCreateParams, options?: RequestOptions<never>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Challenge-Token` | Required | string | Challenge token from Flint's hosted bot check on the page that offers the demo. Flint identifies the demo client by its IP address. |
| `body` | Required | [CreateDemoSessionRequestInput](../models/ResetDemoSessionRequest.md#resetdemosessionrequest) | The request body for: Create demo session. |

Body model: [CreateDemoSessionRequestInput](../models/ResetDemoSessionRequest.md#resetdemosessionrequest).

#### demoSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `template` | Optional | string | Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: `"quickstart"`. Values: `"quickstart"`. |

#### Response

Returned payload: [DemoSession](../models/DemoSession.md#demosession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.demoSessions.create({template: "quickstart", "Flint-Challenge-Token": "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/demoSessions-create.mjs)

### demoSessions.reset

Ends the active or provisioning demo session identified by demo_session_id for this client and provisions a fresh one. A client that lost its create response gets the current session ID from current_resource.resource_id on ALREADY_EXISTS. A retry with the same Idempotency-Key and body replays the replacement before checking the current session, including its secret during the secret delivery window. After that window, the retry returns ALREADY_EXISTS with the current session reference. The daily cap applies only to fresh executions. Omit template to use quickstart; an explicit empty or unsupported value is invalid.

`POST /v1/demo-sessions/{demo_session_id}/reset`

Signature: `reset(demo_session_id: InputValue<string>, params: DemoSessionsResetParams, options?: RequestOptions<never>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demo_session_id` | Required | string | The active or provisioning demo session to reset for this client. |
| `Flint-Challenge-Token` | Required | string | Challenge token from Flint's hosted bot check on the page that offers the demo. Flint identifies the demo client by its IP address. |
| `body` | Required | [ResetDemoSessionRequestInput](../models/ResetDemoSessionRequest.md#resetdemosessionrequest) | The request body for: Reset demo session. |

Body model: [ResetDemoSessionRequestInput](../models/ResetDemoSessionRequest.md#resetdemosessionrequest).

#### demoSessions.reset body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `template` | Optional | string | Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: `"quickstart"`. Values: `"quickstart"`. |

#### Response

Returned payload: [DemoSession](../models/DemoSession.md#demosession).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.demoSessions.reset("demo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {template: "quickstart", "Flint-Challenge-Token": "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/demoSessions-reset.mjs)

