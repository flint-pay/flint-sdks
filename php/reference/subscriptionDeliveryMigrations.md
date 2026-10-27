[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionDeliveryMigrations

### subscriptionDeliveryMigrations.create

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`POST /v1/subscription-delivery-migrations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput) | The request body for: Move subscribers to another delivery method. |

Body model: [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput).

#### subscriptionDeliveryMigrations.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput).

#### Response

Returned payload: [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigration.md#subscriptiondeliverymigration).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionDeliveryMigrations->create([
  'from_delivery_method_id' => 'example',
  'to_delivery_method_id' => 'example',
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
| `subscription_delivery_migration_id` | Required | string |  |

#### Response

Returned payload: [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigration.md#subscriptiondeliverymigration).

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

```php
$result = $client->subscriptionDeliveryMigrations->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-get.php)

### subscriptionDeliveryMigrations.list

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `from_delivery_method_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"running"`, `"completed"`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationsListResponse200](../models/SubscriptionDeliveryMigrationsListResponse200.md#subscriptiondeliverymigrationslistresponse200).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptionDeliveryMigrations->list([], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-list.php)

### subscriptionDeliveryMigrations.listFailures

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures`

Signature: `listFailures(string|Model $subscription_delivery_migration_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_delivery_migration_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationsListFailuresResponse200](../models/SubscriptionDeliveryMigrationsListFailuresResponse200.md#subscriptiondeliverymigrationslistfailuresresponse200).

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

Complete body and metadata: `listFailuresWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listFailuresItems`, `listFailuresPages`, `listFailuresPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptionDeliveryMigrations->listFailures('example', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-listFailures.php)

