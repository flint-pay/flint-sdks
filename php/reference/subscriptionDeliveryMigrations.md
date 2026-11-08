[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionDeliveryMigrations

### subscriptionDeliveryMigrations.create

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`POST /v1/subscription-delivery-migrations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput) | The request body for: Move subscribers to another delivery method. |

Body model: [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequestInput.md#createsubscriptiondeliverymigrationrequestinput).

#### subscriptionDeliveryMigrations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `from_delivery_method_id` | Required | string | minLength: `1`. |
| `subscription_plan_id` | Optional | string | Limit the migration to this plan's live subscriptions. minLength: `1`. |
| `to_delivery_method_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataObject.md#subscriptiondeliverymigrationcompletedmerchanteventdataobject).

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

$result = $client->subscriptionDeliveryMigrations->create([
  'from_delivery_method_id' => 'dmet_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'subscription_plan_id' => 'plan_01KEZF7C00S177Q3KK6BKXGXV7',
  'to_delivery_method_id' => 'dmet_01KEZF7C00F34Q6CJF6MF7HWGT',
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionDeliveryMigration](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataObject.md#subscriptiondeliverymigrationcompletedmerchanteventdataobject).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->subscriptionDeliveryMigrations->get('sdmig_01KEZF7C00H8KGVKXANJWJVDH7', [], new RequestOptions());
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
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `from_delivery_method_id` | Optional | string | Filter by the delivery method subscriptions are moving from. |
| `status` | Optional | Array of string or string | Filter by migration status: pending, processing, or completed. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"processing"`, `"completed"`. Values: `"pending"`, `"processing"`, `"completed"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationListResponse](../models/SubscriptionDeliveryMigrationListResponse.md#subscriptiondeliverymigrationlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `reason` | Optional | Array of string or string | Filter by the reason a subscription could not be moved. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationFailureListResponse](../models/SubscriptionDeliveryMigrationFailureListResponse.md#subscriptiondeliverymigrationfailurelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->subscriptionDeliveryMigrations->listFailures('sdmig_01KEZF7C00H8KGVKXANJWJVDH7', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-listFailures.php)

