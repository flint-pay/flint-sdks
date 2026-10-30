[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookEndpoints

### webhookEndpoints.create

Creates a webhook endpoint. signing_methods defaults to ["jwt"]. A shared secret is issued and returned once only when hmac is included.

`POST /v1/webhook-endpoints`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateWebhookEndpointRequestInput](../models/CreateWebhookEndpointRequestInput.md#createwebhookendpointrequestinput) | The request body for: Create webhook endpoint. |

Body model: [CreateWebhookEndpointRequestInput](../models/CreateWebhookEndpointRequestInput.md#createwebhookendpointrequestinput).

#### webhookEndpoints.create body fields

Field definitions: [shared fields](../models/CreateWebhookEndpointRequestInput.md#createwebhookendpointrequestinput). Models: [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput).

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecretInput.md#webhookendpointwithsecretinput).

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

$result = $client->webhookEndpoints->create([
  'description' => 'Primary production endpoint',
  'enabled_events' => [
    'order.paid',
    'payment_intent.succeeded',
  ],
  'event_sources' => [
    'merchant',
  ],
  'status' => 'active',
  'url' => 'https://example.com/webhooks/flint',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookEndpoints-create.php)

### webhookEndpoints.createTestEvent

Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`

Signature: `createTestEvent(string|Model $webhook_endpoint_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `body` | Required | [CreateWebhookTestEventRequestInput](../models/CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput) | The request body for: Create webhook test event. |

Body model: [CreateWebhookTestEventRequestInput](../models/CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput).

#### webhookEndpoints.createTestEvent body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Required | string | Current event type to send. merchant delivers merchant events; partner_app delivers partner lifecycle events; installed_merchants delivers merchant events permitted by the install read scopes. The event catalog lists event_sources for each type. Values: [251 declared values](../models/CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |

#### Response

Returned payload: [WebhookDeliveryAction](../models/WebhookDeliveryActionInput.md#webhookdeliveryactioninput).

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

$result = $client->webhookEndpoints->createTestEvent('whep_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'event_type' => 'payment_intent.succeeded',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookEndpoints-createTestEvent.php)

### webhookEndpoints.delete

Permanently deletes the webhook endpoint and returns it with status deleted. Its pending deliveries are suppressed. The endpoint cannot be retrieved afterward, and its past deliveries keep its webhook_endpoint_id.

`DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature: `delete(string|Model $webhook_endpoint_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `expected_version` | Optional | integer | Optional configuration version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpointInput.md#webhookendpointinput).

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

$result = $client->webhookEndpoints->delete('whep_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookEndpoints-delete.php)

### webhookEndpoints.get

Returns a single webhook endpoint by ID. The signing secret is omitted after creation.

`GET /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature: `get(string|Model $webhook_endpoint_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpointInput.md#webhookendpointinput).

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

```php
$result = $client->webhookEndpoints->get('whep_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/webhookEndpoints-get.php)

### webhookEndpoints.list

Returns a page of webhook endpoints for the authenticated merchant. Default order: created_at descending, then webhook_endpoint_id descending.

`GET /v1/webhook-endpoints`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out deleted rows; name deleted to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"deleted"`. Values: `"active"`, `"inactive"`, `"deleted"`. |
| `event_sources` | Optional | Array of string or string | Filter by webhook endpoint event sources. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `partner_app_id` | Optional | string | Filter by partner app ID for partner-source webhook endpoints. |

#### Response

Returned payload: [WebhookEndpointListResponse](../models/WebhookEndpointListResponse.md#webhookendpointlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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

```php
$result = $client->webhookEndpoints->list([], new RequestOptions());
```

[Complete runnable example](../examples/webhookEndpoints-list.php)

### webhookEndpoints.rotateSecret

Issues a first shared secret and adds hmac, or rotates an existing shared secret. The secret is returned once. The replaced secret keeps signing deliveries until previous_secret_expires_at: 24 hours by default, or expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the replaced secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`

Signature: `rotateSecret(string|Model $webhook_endpoint_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `body` | Optional | [RotateWebhookSecretRequestInput](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput) | The request body for: Rotate webhook secret. |

Body model: [RotateWebhookSecretRequestInput](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput).

#### webhookEndpoints.rotateSecret body fields

Field definitions: [shared fields](../models/RotateWebhookSecretRequestInput.md#rotatewebhooksecretrequestinput).

#### Response

Returned payload: [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecretInput.md#webhookendpointwithsecretinput).

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

$result = $client->webhookEndpoints->rotateSecret('whep_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookEndpoints-rotateSecret.php)

### webhookEndpoints.update

Updates the mutable fields on a webhook endpoint.

`PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`

Signature: `update(string|Model $webhook_endpoint_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string | Flint webhook endpoint ID. |
| `body` | Required | [UpdateWebhookEndpointRequestInput](../models/UpdateWebhookEndpointRequestInput.md#updatewebhookendpointrequestinput) | The request body for: Update webhook endpoint. |

Body model: [UpdateWebhookEndpointRequestInput](../models/UpdateWebhookEndpointRequestInput.md#updatewebhookendpointrequestinput).

#### webhookEndpoints.update body fields

Field definitions: [shared fields](../models/UpdateWebhookEndpointRequestInput.md#updatewebhookendpointrequestinput). Models: [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput).

#### Response

Returned payload: [WebhookEndpoint](../models/WebhookEndpointInput.md#webhookendpointinput).

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

$result = $client->webhookEndpoints->update('whep_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'description' => 'Example endpoint',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookEndpoints-update.php)

