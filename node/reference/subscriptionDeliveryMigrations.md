[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionDeliveryMigrations

### subscriptionDeliveryMigrations.create

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`POST /v1/subscription-delivery-migrations`

Signature:

```typescript
create(params: (InputValue<CreateSubscriptionDeliveryMigrationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequest.md#createsubscriptiondeliverymigrationrequest) | The request body for: Move subscribers to another delivery method. |

Body model: [CreateSubscriptionDeliveryMigrationRequestInput](../models/CreateSubscriptionDeliveryMigrationRequest.md#createsubscriptiondeliverymigrationrequest).

#### subscriptionDeliveryMigrations.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionDeliveryMigrationRequest.md#createsubscriptiondeliverymigrationrequest).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionDeliveryMigrations.create({from_delivery_method_id: "example", to_delivery_method_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-create.mjs)

### subscriptionDeliveryMigrations.get

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}`

Signature: `get(subscription_delivery_migration_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptionDeliveryMigrations.get("example", {}, {  });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-get.mjs)

### subscriptionDeliveryMigrations.list

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "from_delivery_method_id"?: InputValue<string>;
  "status"?: InputValue<Array<"pending" | "running" | "completed">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `from_delivery_method_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"running"`, `"completed"`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationListResponse](../models/SubscriptionDeliveryMigrationListResponse.md#subscriptiondeliverymigrationlistresponse).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.subscriptionDeliveryMigrations.list({}, {  });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-list.mjs)

### subscriptionDeliveryMigrations.listFailures

Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.

`GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures`

Signature:

```typescript
listFailures(subscription_delivery_migration_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "reason"?: InputValue<Array<"method_not_offered" |
    "destination_not_served" |
    "rate_unavailable" |
    "method_unavailable" |
    "no_longer_applicable" |
    "not_movable">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_delivery_migration_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |

#### Response

Returned payload: [SubscriptionDeliveryMigrationFailureListResponse](../models/SubscriptionDeliveryMigrationFailureListResponse.md#subscriptiondeliverymigrationfailurelistresponse).

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

Complete body and metadata: `listFailuresWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listFailuresItems`, `listFailuresPages`, `listFailuresPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.subscriptionDeliveryMigrations.listFailures("example", {}, {  });
```

[Complete runnable example](../examples/subscriptionDeliveryMigrations-listFailures.mjs)

