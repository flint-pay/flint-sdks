[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookDeliveries

### webhookDeliveries.create

Creates a delivery for a retained event and an endpoint that currently subscribes to it, then attempts delivery now. A failed attempt starts the automatic retry schedule. Each event and endpoint pair can have only one delivery.

`POST /v1/webhook-deliveries`

Signature: `create(params: WebhookDeliveriesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateWebhookDeliveryRequestInput](../models/CreateWebhookDeliveryRequest.md#createwebhookdeliveryrequest) | The request body for: Create webhook delivery. |

Body model: [CreateWebhookDeliveryRequestInput](../models/CreateWebhookDeliveryRequest.md#createwebhookdeliveryrequest).

#### webhookDeliveries.create body fields

Field definitions: [shared fields](../models/CreateWebhookDeliveryRequest.md#createwebhookdeliveryrequest).

#### Response

Returned payload: [WebhookDelivery](../models/WebhookDelivery.md#webhookdelivery).

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

const result = await client.webhookDeliveries.create({reason_message: "Recovering after an endpoint outage", webhook_endpoint_id: "whep_01KEZF7C00940MBDY86SCZ1NW9", webhook_event_id: "whev_01KEZF7C00BW7XQJ98PQ8EHA81"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookDeliveries-create.mjs)

### webhookDeliveries.get

Returns one endpoint delivery and its current retry state.

`GET /v1/webhook-deliveries/{webhook_delivery_id}`

Signature:

```typescript
get(webhook_delivery_id: InputValue<string>,
 params?: WebhookDeliveriesGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string | Flint webhook delivery ID. |

#### Response

Returned payload: [WebhookDelivery](../models/WebhookDelivery.md#webhookdelivery).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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

```typescript
const result = await client.webhookDeliveries.get("wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/webhookDeliveries-get.mjs)

### webhookDeliveries.list

Returns webhook deliveries, newest first (`created_at` descending, then `webhook_delivery_id`). Includes deliveries of synthetic test events. Default order: created_at descending, then webhook_delivery_id descending.

`GET /v1/webhook-deliveries`

Signature: `list(params?: WebhookDeliveriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Optional | string | Filter by an exact webhook event ID. Returns 404 if the event is not visible. |
| `webhook_endpoint_id` | Optional | string | Filter by an exact webhook endpoint ID. Returns 404 if the endpoint is not visible. |
| `status` | Optional | Array of string or string | Filter by delivery status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [WebhookDeliveryListResponse](../models/WebhookDeliveryListResponse.md#webhookdeliverylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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

```typescript
const result = await client.webhookDeliveries.list({}, {  });
```

[Complete runnable example](../examples/webhookDeliveries-list.mjs)

### webhookDeliveries.listAttempts

Returns the attempts recorded for a specific webhook delivery. Default order: attempt_number ascending; this key uniquely orders the results.

`GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`

Signature:

```typescript
listAttempts(webhook_delivery_id: InputValue<string>,
 params?: WebhookDeliveriesListAttemptsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string | Flint webhook delivery ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [WebhookDeliveryAttemptListResponse](../models/WebhookDeliveryAttemptListResponse.md#webhookdeliveryattemptlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAttemptsItems`, `listAttemptsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.webhookDeliveries.listAttempts("wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/webhookDeliveries-listAttempts.mjs)

### webhookDeliveries.resend

Sends the event to the delivery's endpoint now, including while automatic retries are pending. A failed resend doesn't change the automatic schedule.

`POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`

Signature: `resend(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesResendParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string | Flint webhook delivery ID. |
| `body` | Optional | [ResendWebhookDeliveryRequestInput](../models/ResendWebhookDeliveryRequestInput.md#resendwebhookdeliveryrequestinput) | The request body for: Resend webhook delivery. |

Body model: [ResendWebhookDeliveryRequestInput](../models/ResendWebhookDeliveryRequestInput.md#resendwebhookdeliveryrequestinput).

#### webhookDeliveries.resend body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. maxLength: `500`. |

#### Response

Returned payload: [WebhookDeliveryAction](../models/WebhookDeliveryAction.md#webhookdeliveryaction).

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

const result = await client.webhookDeliveries.resend("wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/webhookDeliveries-resend.mjs)

