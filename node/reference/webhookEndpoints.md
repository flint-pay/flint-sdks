[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookEndpoints

### webhookEndpoints.create

Creates a webhook endpoint and returns the signing secret once.

`POST /v1/webhook-endpoints`

Signature:

```typescript
create(params: (InputValue<CreateWebhookEndpointRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateWebhookEndpointRequestInput](../models/CreateWebhookEndpointRequest.md#createwebhookendpointrequest) | The request body for: Create webhook endpoint. |

Body model: [CreateWebhookEndpointRequestInput](../models/CreateWebhookEndpointRequest.md#createwebhookendpointrequest).

#### webhookEndpoints.create body fields

Field definitions: [shared fields](../models/CreateWebhookEndpointRequest.md#createwebhookendpointrequest).

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecret.md#webhookendpointwithsecret).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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

const result = await client.webhookEndpoints.create({url: "example", enabled_events: ["example"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-create.mjs)

### webhookEndpoints.createWebhookTestEvent

Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`

Signature:

```typescript
createWebhookTestEvent(webhook_endpoint_id: InputValue<string>,
 params: (InputValue<CreateWebhookTestEventRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateWebhookTestEventRequestInput](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest) | The request body for: Create webhook test event. |

Body model: [CreateWebhookTestEventRequestInput](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest).

#### webhookEndpoints.createWebhookTestEvent body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Required | string | Current event type to send. merchant delivers merchant events; partner_app delivers partner lifecycle events; installed_merchants delivers merchant events permitted by the install read scopes. The event catalog lists event_sources for each type. Values: [245 declared values](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |

#### Response

Returned payload: [WebhookDeliveryAction](../models/WebhookDeliveryAction.md#webhookdeliveryaction).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWebhookTestEventWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.createWebhookTestEvent("example", {event_type: "balance.updated"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-createWebhookTestEvent.mjs)

### webhookEndpoints.get

Returns a single webhook endpoint by ID. The signing secret is omitted after creation.

`GET /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature: `get(webhook_endpoint_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpoint.md#webhookendpoint).

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

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.webhookEndpoints.get("example", {}, {  });
```

[Complete runnable example](../examples/webhookEndpoints-get.mjs)

### webhookEndpoints.list

Returns a page of webhook endpoints for the authenticated merchant.

`GET /v1/webhook-endpoints`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
  "partner_app_id"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `event_sources` | Optional | Array of string | minItems: `1`. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `partner_app_id` | Optional | string |  |

#### Response

Returned payload: [WebhookEndpointListResponse](../models/WebhookEndpointListResponse.md#webhookendpointlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.webhookEndpoints.list({}, {  });
```

[Complete runnable example](../examples/webhookEndpoints-list.mjs)

### webhookEndpoints.remove

Permanently deletes the webhook endpoint and returns it with status deleted. Its pending deliveries are suppressed. The endpoint cannot be retrieved afterward, and its past deliveries keep its webhook_endpoint_id.

`DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature:

```typescript
remove(webhook_endpoint_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpoint.md#webhookendpoint).

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

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-remove.mjs)

### webhookEndpoints.rotateWebhookSecret

Issues a new signing secret, returned once. The replaced secret keeps signing deliveries until previous_secret_expires_at: 24 hours by default, or expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the replaced secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`

Signature:

```typescript
rotateWebhookSecret(webhook_endpoint_id: InputValue<string>,
 params?: (InputValue<RotateWebhookSecretRequestInput> |
  {
  "expected_version"?: never;
  "expire_previous_secret_at"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [RotateWebhookSecretRequestInput](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput) | The request body for: Rotate webhook secret. |

Body model: [RotateWebhookSecretRequestInput](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput).

#### webhookEndpoints.rotateWebhookSecret body fields

Field definitions: [shared fields](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput).

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecret.md#webhookendpointwithsecret).

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

Complete body and metadata: `rotateWebhookSecretWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.rotateWebhookSecret("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-rotateWebhookSecret.mjs)

### webhookEndpoints.update

Updates the mutable fields on a webhook endpoint.

`PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature:

```typescript
update(webhook_endpoint_id: InputValue<string>,
 params: (InputValue<UpdateWebhookEndpointRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateWebhookEndpointRequestInput](../models/UpdateWebhookEndpointRequest.md#updatewebhookendpointrequest) | The request body for: Update webhook endpoint. |

Body model: [UpdateWebhookEndpointRequestInput](../models/UpdateWebhookEndpointRequest.md#updatewebhookendpointrequest).

#### webhookEndpoints.update body fields

Field definitions: [shared fields](../models/UpdateWebhookEndpointRequest.md#updatewebhookendpointrequest).

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpoint.md#webhookendpoint).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookEndpoints-update.mjs)

