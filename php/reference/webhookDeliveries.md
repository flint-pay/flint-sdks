[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookDeliveries

### webhookDeliveries.create

Creates a delivery for a retained event and an endpoint that currently subscribes to it, then attempts delivery now. A failed attempt starts the automatic retry schedule. Each event and endpoint pair can have only one delivery.

`POST /v1/webhook-deliveries`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateWebhookDeliveryRequestInput](../models/CreateWebhookDeliveryRequestInput.md#createwebhookdeliveryrequestinput) | The request body for: Create webhook delivery. |

Body model: [CreateWebhookDeliveryRequestInput](../models/CreateWebhookDeliveryRequestInput.md#createwebhookdeliveryrequestinput).

#### webhookDeliveries.create body fields

Field definitions: [shared fields](../models/CreateWebhookDeliveryRequestInput.md#createwebhookdeliveryrequestinput).

#### Response

Returned payload: [WebhookDelivery](../models/WebhookDeliveryInput.md#webhookdeliveryinput).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->webhookDeliveries->create([
  'webhook_endpoint_id' => 'example',
  'webhook_event_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookDeliveries-create.php)

### webhookDeliveries.get

Returns one endpoint delivery and its current retry state.

`GET /v1/webhook-deliveries/{webhook_delivery_id}`

Signature: `get(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string |  |

#### Response

Returned payload: [WebhookDelivery](../models/WebhookDeliveryInput.md#webhookdeliveryinput).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->webhookDeliveries->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/webhookDeliveries-get.php)

### webhookDeliveries.listAttempts

Returns the attempts recorded for a specific webhook delivery.

`GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`

Signature: `listAttempts(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [WebhookDeliveriesListAttemptsResponse200](../models/WebhookDeliveriesListAttemptsResponse200.md#webhookdeliverieslistattemptsresponse200).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listAttemptsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAttemptsItems`, `listAttemptsPages`, `listAttemptsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->webhookDeliveries->listAttempts('example', [], new RequestOptions());
```

[Complete runnable example](../examples/webhookDeliveries-listAttempts.php)

### webhookDeliveries.resend

Sends the event to the delivery's endpoint now, including while automatic retries are pending. A failed resend doesn't change the automatic schedule.

`POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`

Signature: `resend(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResendWebhookDeliveryRequestInput](../models/ResendWebhookDeliveryRequestInput.md#resendwebhookdeliveryrequestinput) | The request body for: Resend webhook delivery. |

Body model: [ResendWebhookDeliveryRequestInput](../models/ResendWebhookDeliveryRequestInput.md#resendwebhookdeliveryrequestinput).

#### webhookDeliveries.resend body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. maxLength: `500`. |

#### Response

Returned payload: [WebhookDeliveryAction](../models/WebhookDeliveryActionInput.md#webhookdeliveryactioninput).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `resendWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->webhookDeliveries->resend('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookDeliveries-resend.php)

