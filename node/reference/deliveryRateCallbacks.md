[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryRateCallbacks

### deliveryRateCallbacks.checkConnection

Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation. The Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body. A retry replays the original result even after the callback changes or is archived.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`

Signature:

```typescript
checkConnection(delivery_rate_callback_id: InputValue<string>,
 params?: DeliveryRateCallbacksCheckConnectionParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryRateCallbackConnectionCheck](../models/DeliveryRateCallbackConnectionCheck.md#deliveryratecallbackconnectioncheck).

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
| 504 | ServerError |

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

const result = await client.deliveryRateCallbacks.checkConnection("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-checkConnection.mjs)

### deliveryRateCallbacks.create

Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. signing_methods defaults to ["jwt"]. JWTs use Flint's public JWKS and this callback's delivery_rate_callback_id as aud. Verify body_sha256 against the exact request bytes. The jwt method sends Authorization: Bearer, and the hmac method sends webhook-signature and Flint-Signing-Key-Ids. Every request includes webhook-id and webhook-timestamp. When hmac is included, the response returns the shared secret and its delivery_rate_callback_signing_key_id once; no later response returns them. It starts inactive.

`POST /v1/delivery-rate-callbacks`

Signature: `create(params: DeliveryRateCallbacksCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateDeliveryRateCallbackRequestInput](../models/CreateDeliveryRateCallbackRequest.md#createdeliveryratecallbackrequest) | The request body for: Create delivery rate callback. |

Body model: [CreateDeliveryRateCallbackRequestInput](../models/CreateDeliveryRateCallbackRequest.md#createdeliveryratecallbackrequest).

#### deliveryRateCallbacks.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfigurationRequestInput](../models/DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration) | The settings that define this resource. Changing them publishes a new revision. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Signing methods for callback requests. Defaults to JWT verification with Flint's public JWKS. When hmac is included, the response returns the shared secret and its delivery_rate_callback_signing_key_id once. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether active delivery methods can price with this callback. Defaults to inactive. Default: `"inactive"`. Values: `"inactive"`, `"active"`. |

#### Response

Returned payload: [DeliveryRateCallbackWithSecret](../models/DeliveryRateCallbackWithSecret.md#deliveryratecallbackwithsecret).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.create({configuration: {url: "https://merchant.example/delivery-rates"}, name: "Live delivery rates", signing_methods: ["jwt"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-create.mjs)

### deliveryRateCallbacks.createTestDelivery

Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result. The Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body. A retry replays the original result even after the callback changes or is archived.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`

Signature:

```typescript
createTestDelivery(delivery_rate_callback_id: InputValue<string>,
 params?: DeliveryRateCallbacksCreateTestDeliveryParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

Field definitions: [shared fields](#request-fields).

#### Response

Returned payload: [DeliveryRateCallbackTestDelivery](../models/DeliveryRateCallbackTestDelivery.md#deliveryratecallbacktestdelivery).

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
| 504 | ServerError |

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

const result = await client.deliveryRateCallbacks.createTestDelivery("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-createTestDelivery.mjs)

### deliveryRateCallbacks.delete

Retires the delivery rate callback. An active delivery method whose current revision still prices with the rate callback blocks deletion: the request returns 409 RESOURCE_IN_USE with the blocking methods. Move those methods to another pricing strategy first. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature: `delete(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.delete("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-delete.mjs)

### deliveryRateCallbacks.get

Returns the current revision and lifecycle state for one delivery rate callback.

`GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature:

```typescript
get(delivery_rate_callback_id: InputValue<string>,
 params?: DeliveryRateCallbacksGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

Field definitions: [shared fields](#request-fields).

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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

```typescript
const result = await client.deliveryRateCallbacks.get("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, {  });
```

[Complete runnable example](../examples/deliveryRateCallbacks-get.mjs)

### deliveryRateCallbacks.list

Returns delivery rate callbacks in a stable, cursor-paginated order. Archived resources are excluded by default. Default order: created_at ascending, then delivery_rate_callback_id ascending.

`GET /v1/delivery-rate-callbacks`

Signature: `list(params?: DeliveryRateCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_rate_callback_id, name, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dcb_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `delivery_method_id` | Optional | string | Filter by an active current method that references this resource. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryRateCallbackListResponse](../models/DeliveryRateCallbackListResponse.md#deliveryratecallbacklistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.deliveryRateCallbacks.list({}, {  });
```

[Complete runnable example](../examples/deliveryRateCallbacks-list.mjs)

### deliveryRateCallbacks.rotateSecret

Replaces the callback's shared secret and returns the callback with the new secret and its delivery_rate_callback_signing_key_id once. Flint signs with both keys for one hour. A callback without hmac returns ACTION_NOT_ALLOWED with reason secret_not_issued; PATCH signing_methods to include hmac to issue the first secret.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`

Signature:

```typescript
rotateSecret(delivery_rate_callback_id: InputValue<string>,
 params?: DeliveryRateCallbacksRotateSecretParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

Field definitions: [shared fields](#request-fields).

#### Response

Returned payload: [DeliveryRateCallbackWithSecret](../models/DeliveryRateCallbackWithSecret.md#deliveryratecallbackwithsecret).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.rotateSecret("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-rotateSecret.mjs)

### deliveryRateCallbacks.update

Sparsely updates mutable fields. A request that carries configuration or signing_methods publishes a new immutable revision, even when its values are unchanged, and requires expected_version. Other fields, such as name, external_reference_id, and status, advance version and keep the current revision, so they never replace a revoked revision. signing_methods replaces the set. Adding hmac when the callback has no shared secret issues one and returns it once, with its delivery_rate_callback_signing_key_id, in this response. Removing hmac deletes all shared secrets. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature: `update(delivery_rate_callback_id: InputValue<string>, params: DeliveryRateCallbacksUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateDeliveryRateCallbackRequestInput](../models/UpdateDeliveryRateCallbackRequest.md#updatedeliveryratecallbackrequest) | The request body for: Update delivery rate callback. minProperties: `1`. |

Body model: [UpdateDeliveryRateCallbackRequestInput](../models/UpdateDeliveryRateCallbackRequest.md#updatedeliveryratecallbackrequest).

#### deliveryRateCallbacks.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Required | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### Response

Returned payload: [DeliveryRateCallbackWithSecret](../models/DeliveryRateCallbackWithSecret.md#deliveryratecallbackwithsecret).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.update("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Delivery rates"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRateCallbacks-update.mjs)

