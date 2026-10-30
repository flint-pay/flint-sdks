[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionDeliveryMigrations

### subscriptionDeliveryMigrations.create

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`POST /v1/subscription-delivery-migrations`

Signature: `create(params: SubscriptionDeliveryMigrationsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequest.md#createsubscriptiondeliverymigrationrequest) | The request body for: Move subscribers to another delivery method. |

Body model: [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequest.md#createsubscriptiondeliverymigrationrequest).

#### subscriptionDeliveryMigrations.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionDeliveryMigrationRequest.md#createsubscriptiondeliverymigrationrequest).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionDeliveryMigrations.create({from_delivery_method_id: "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV", to_delivery_method_id: "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-create.mjs)

### subscriptionDeliveryMigrations.get

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}`

Signature:

```typescript
get(subscription_delivery_migration_id: InputValue<string>,
 params?: SubscriptionDeliveryMigrationsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

```typescript
const result = await client.subscriptionDeliveryMigrations.get("sdmig_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-get.mjs)

### subscriptionDeliveryMigrations.list

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion. Default order: created_at descending, then subscription_delivery_migration_id descending.

`GET /v1/subscription-delivery-migrations`

Signature: `list(params?: SubscriptionDeliveryMigrationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.subscriptionDeliveryMigrations.list({}, {  });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-list.mjs)

### subscriptionDeliveryMigrations.listFailures

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion. Default order: subscription_id ascending; this key uniquely orders the results.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures`

Signature:

```typescript
listFailures(subscription_delivery_migration_id: InputValue<string>,
 params?: SubscriptionDeliveryMigrationsListFailuresParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

```typescript
const result = await client.subscriptionDeliveryMigrations.listFailures("sdmig_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-listFailures.mjs)

