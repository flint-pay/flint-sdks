[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookDeliveries

### webhookDeliveries.create

Creates a delivery for a retained event and an endpoint that currently subscribes to it, then attempts delivery now. A failed attempt starts the automatic retry schedule. Each event and endpoint pair can have only one delivery. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`POST /v1/webhook-deliveries`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateWebhookDeliveryRequestInput](../models/CreateWebhookDeliveryRequestInput.md#createwebhookdeliveryrequestinput) | The request body for: Create webhook delivery. |

Body model: [CreateWebhookDeliveryRequestInput](../models/CreateWebhookDeliveryRequestInput.md#createwebhookdeliveryrequestinput).

#### webhookDeliveries.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. maxLength: `500`. |
| `webhook_endpoint_id` | Required | string | Active endpoint that currently subscribes to the event. minLength: `1`. |
| `webhook_event_id` | Required | string | Retained webhook event to deliver. minLength: `1`. |

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

$result = $client->webhookDeliveries->create([
  'reason_message' => 'Recovering after an endpoint outage',
  'webhook_endpoint_id' => 'whep_01KEZF7C00940MBDY86SCZ1NW9',
  'webhook_event_id' => 'whev_01KEZF7C00BW7XQJ98PQ8EHA81',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookDeliveries-create.php)

### webhookDeliveries.get

Returns one endpoint delivery and its current retry state. Global partner-source records are invisible in sandbox mode; a direct reference returns 404 RESOURCE_NOT_FOUND.

`GET /v1/webhook-deliveries/{webhook_delivery_id}`

Signature: `get(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string | Flint webhook delivery ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->webhookDeliveries->get('wdel_01KEZF7C001DWSNDCDZHCTBN0A', [], new RequestOptions());
```

[Complete runnable example](../examples/webhookDeliveries-get.php)

### webhookDeliveries.list

Returns webhook deliveries, newest first (`created_at` descending, then `webhook_delivery_id`). Includes deliveries of synthetic test events. Sandbox reads omit global partner-source records. Default order: created_at descending, then webhook_delivery_id descending.

`GET /v1/webhook-deliveries`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Optional | string | Filter by an exact webhook event ID. Returns an empty page when no visible deliveries match. pattern: `^whev_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `webhook_endpoint_id` | Optional | string | Filter by an exact webhook endpoint ID, including deleted endpoints. Returns an empty page when no visible deliveries match. pattern: `^whep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by delivery status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [WebhookDeliveryListResponse](../models/WebhookDeliveryListResponse.md#webhookdeliverylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
$result = $client->webhookDeliveries->list([], new RequestOptions());
```

[Complete runnable example](../examples/webhookDeliveries-list.php)

### webhookDeliveries.listAttempts

Returns the attempts recorded for a specific webhook delivery. Global partner-source records are invisible in sandbox mode; a direct reference returns 404 RESOURCE_NOT_FOUND. Default order: attempt_number ascending; this key uniquely orders the results.

`GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`

Signature: `listAttempts(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `webhook_delivery_id` | Required | string | Flint webhook delivery ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [WebhookDeliveryAttemptListResponse](../models/WebhookDeliveryAttemptListResponse.md#webhookdeliveryattemptlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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

```php
$result = $client->webhookDeliveries->listAttempts('wdel_01KEZF7C001DWSNDCDZHCTBN0A', [], new RequestOptions());
```

[Complete runnable example](../examples/webhookDeliveries-listAttempts.php)

### webhookDeliveries.resend

Sends the event to the delivery's endpoint now, including while automatic retries are pending. A failed resend doesn't change the automatic schedule. Partner-source endpoints are global configuration. Changes to them or their events and deliveries require a live-mode credential or a Dashboard session, including test events and endpoints subscribed only to test installed-merchant events. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.

`POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`

Signature: `resend(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

$result = $client->webhookDeliveries->resend('wdel_01KEZF7C001DWSNDCDZHCTBN0A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/webhookDeliveries-resend.php)

