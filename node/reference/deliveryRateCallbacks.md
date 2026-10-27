[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryRateCallbacks

### deliveryRateCallbacks.checkConnection

Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation. The Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body. A retry replays the original result even after the callback changes or is archived.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`

Signature:

```typescript
checkConnection(delivery_rate_callback_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliveryRateCallbackConnectionCheck](../models/DeliveryRateCallbackConnectionCheck.md#deliveryratecallbackconnectioncheck).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `checkConnectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.checkConnection("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-checkConnection.mjs)

### deliveryRateCallbacks.create

Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. It starts inactive.

`POST /v1/delivery-rate-callbacks`

Signature:

```typescript
create(params: (InputValue<CreateDeliveryRateCallbackRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateDeliveryRateCallbackRequestInput](../models/CreateDeliveryRateCallbackRequest.md#createdeliveryratecallbackrequest) | The request body for: Create delivery rate callback. |

Body model: [CreateDeliveryRateCallbackRequestInput](../models/CreateDeliveryRateCallbackRequest.md#createdeliveryratecallbackrequest).

#### deliveryRateCallbacks.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfigurationInput](../models/DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration) | Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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

const result = await client.deliveryRateCallbacks.create({name: "example", configuration: {url: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-create.mjs)

### deliveryRateCallbacks.createTestDelivery

Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result. The Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body. A retry replays the original result even after the callback changes or is archived.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`

Signature:

```typescript
createTestDelivery(delivery_rate_callback_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliveryRateCallbackTestDelivery](../models/DeliveryRateCallbackTestDelivery.md#deliveryratecallbacktestdelivery).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createTestDeliveryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.createTestDelivery("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-createTestDelivery.mjs)

### deliveryRateCallbacks.get

Returns the current revision and lifecycle state for one delivery rate callback.

`GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature: `get(delivery_rate_callback_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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
const result = await client.deliveryRateCallbacks.get("example", {}, {  });
```

[Complete runnable example](../examples/deliveryRateCallbacks-get.mjs)

### deliveryRateCallbacks.list

Returns delivery rate callbacks in a stable, cursor-paginated order. Archived resources are excluded by default.

`GET /v1/delivery-rate-callbacks`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
  "delivery_method_id"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: `255`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `delivery_method_id` | Optional | string |  |

#### Response

Returned payload: [DeliveryRateCallbackListResponse](../models/DeliveryRateCallbackListResponse.md#deliveryratecallbacklistresponse).

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
const result = await client.deliveryRateCallbacks.list({}, {  });
```

[Complete runnable example](../examples/deliveryRateCallbacks-list.mjs)

### deliveryRateCallbacks.remove

Retires the delivery rate callback after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature:

```typescript
remove(delivery_rate_callback_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-remove.mjs)

### deliveryRateCallbacks.rotateSigningKey

Rotates the endpoint signing secret, accepts both keys for one hour, and returns the new secret once.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`

Signature:

```typescript
rotateSigningKey(delivery_rate_callback_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliveryRateCallbackSigningKeyRotation](../models/DeliveryRateCallbackSigningKeyRotation.md#deliveryratecallbacksigningkeyrotation).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `rotateSigningKeyWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.rotateSigningKey("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-rotateSigningKey.mjs)

### deliveryRateCallbacks.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature:

```typescript
update(delivery_rate_callback_id: InputValue<string>,
 params: (InputValue<UpdateDeliveryRateCallbackRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateDeliveryRateCallbackRequestInput](../models/UpdateDeliveryRateCallbackRequest.md#updatedeliveryratecallbackrequest) | The request body for: Update delivery rate callback. |

Body model: [UpdateDeliveryRateCallbackRequestInput](../models/UpdateDeliveryRateCallbackRequest.md#updatedeliveryratecallbackrequest).

#### deliveryRateCallbacks.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update body anyOf variant 1



#### deliveryRateCallbacks.update body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update body anyOf variant 2



#### deliveryRateCallbacks.update body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update body anyOf variant 3



#### deliveryRateCallbacks.update body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update body anyOf variant 4



#### deliveryRateCallbacks.update body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Required | string | Values: `"inactive"`, `"active"`. |

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.update("example", {name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-update.mjs)

