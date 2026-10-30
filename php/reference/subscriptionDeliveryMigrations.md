[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionDeliveryMigrations

### subscriptionDeliveryMigrations.create

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`POST /v1/subscription-delivery-migrations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput) | The request body for: Move subscribers to another delivery method. |

Body model: [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput).

#### subscriptionDeliveryMigrations.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput).

#### Response

Returned payload: [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigration.md#subscriptiondeliverymigration).

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

$result = $client->subscriptionDeliveryMigrations->create([
  'from_delivery_method_id' => 'dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV',
  'to_delivery_method_id' => 'dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-create.php)

### subscriptionDeliveryMigrations.get

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}`

Signature: `get(string|Model $subscription_delivery_migration_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_delivery_migration_id` | Required | string | Subscription delivery migration ID. |

#### Response

Returned payload: [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigration.md#subscriptiondeliverymigration).

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
$result = $client->subscriptionDeliveryMigrations->get('sdmig_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-get.php)

### subscriptionDeliveryMigrations.list

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion. Default order: created_at descending, then subscription_delivery_migration_id descending.

`GET /v1/subscription-delivery-migrations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `from_delivery_method_id` | Optional | string | Filter by the delivery method subscriptions are moving from. |
| `status` | Optional | Array of string or string | Filter by migration status: pending, running, or completed. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"running"`, `"completed"`. Values: `"pending"`, `"running"`, `"completed"`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationListResponse](../models/SubscriptionDeliveryMigrationListResponse.md#subscriptiondeliverymigrationlistresponse).

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

```php
$result = $client->subscriptionDeliveryMigrations->list([], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-list.php)

### subscriptionDeliveryMigrations.listFailures

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion. Default order: subscription_id ascending; this key uniquely orders the results.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures`

Signature: `listFailures(string|Model $subscription_delivery_migration_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_delivery_migration_id` | Required | string | Subscription delivery migration ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `reason` | Optional | Array of string or string | Filter by the reason a subscription could not be moved. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationFailureListResponse](../models/SubscriptionDeliveryMigrationFailureListResponse.md#subscriptiondeliverymigrationfailurelistresponse).

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

Pagination: `listFailuresItems`, `listFailuresPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptionDeliveryMigrations->listFailures('sdmig_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-listFailures.php)

