[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# demoSessions

### demoSessions.create

Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is displayed only at creation time and for a short idempotent retry window. Omit template to use quickstart; an explicit empty or unsupported value is invalid.

`POST /v1/demo-sessions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Challenge-Token` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateDemoSessionRequestInput](../models/CreateDemoSessionRequestInput.md#createdemosessionrequestinput) | The request body for: Create demo session. |

Body model: [CreateDemoSessionRequestInput](../models/CreateDemoSessionRequestInput.md#createdemosessionrequestinput).

#### demoSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `template` | Optional | string | Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: `"quickstart"`. Values: `"quickstart"`. |

#### Response

Returned payload: [DemoSession](../models/DemoSession.md#demosession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->demoSessions->create([
  'Flint-Challenge-Token' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/demoSessions-create.php)

### demoSessions.reset

Ends the active or provisioning demo session identified by demo_session_id for this client and provisions a fresh one. A client that lost its create response gets the current session ID from current_resource.resource_id on ALREADY_EXISTS. A retry with the same Idempotency-Key and body replays the replacement before checking the current session, including its secret during the secret delivery window. After that window, the retry returns ALREADY_EXISTS with the current session reference. The daily cap applies only to fresh executions. Omit template to use quickstart; an explicit empty or unsupported value is invalid.

`POST /v1/demo-sessions/{demo_session_id}/reset`

Signature: `reset(string|Model $demo_session_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demo_session_id` | Required | string |  |
| `Flint-Challenge-Token` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ResetDemoSessionRequestInput](../models/CreateDemoSessionRequestInput.md#createdemosessionrequestinput) | The request body for: Reset demo session. |

Body model: [ResetDemoSessionRequestInput](../models/CreateDemoSessionRequestInput.md#createdemosessionrequestinput).

#### demoSessions.reset body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `template` | Optional | string | Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: `"quickstart"`. Values: `"quickstart"`. |

#### Response

Returned payload: [DemoSession](../models/DemoSession.md#demosession).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `resetWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->demoSessions->reset('example', [
  'Flint-Challenge-Token' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/demoSessions-reset.php)

