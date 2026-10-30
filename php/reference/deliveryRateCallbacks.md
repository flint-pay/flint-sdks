[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryRateCallbacks

### deliveryRateCallbacks.checkConnection

Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation. The Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body. A retry replays the original result even after the callback changes or is archived.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`

Signature: `checkConnection(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |

#### Response

Returned payload: [DeliveryRateCallbackConnectionCheck](../models/DeliveryRateCallbackConnectionCheckInput.md#deliveryratecallbackconnectioncheckinput).

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

$result = $client->deliveryRateCallbacks->checkConnection('dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRateCallbacks-checkConnection.php)

### deliveryRateCallbacks.create

Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. signing_methods defaults to ["jwt"]. JWTs use Flint's public JWKS and this callback's delivery_rate_callback_id as aud. Verify body_sha256 against the exact request bytes. The jwt method sends Authorization: Bearer, and the hmac method sends webhook-signature and Flint-Signing-Key-Ids. Every request includes webhook-id and webhook-timestamp. A shared secret and key_id are issued and returned once only when hmac is included. It starts inactive.

`POST /v1/delivery-rate-callbacks`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryRateCallbackRequestInput](../models/CreateDeliveryRateCallbackRequestInput.md#createdeliveryratecallbackrequestinput) | The request body for: Create delivery rate callback. |

Body model: [CreateDeliveryRateCallbackRequestInput](../models/CreateDeliveryRateCallbackRequestInput.md#createdeliveryratecallbackrequestinput).

#### deliveryRateCallbacks.create body fields

Field definitions: [shared fields](../models/CreateDeliveryRateCallbackRequestInput.md#createdeliveryratecallbackrequestinput). Models: [DeliveryRateCallbackConfigurationInput](../models/DeliveryRateCallbackConfigurationInput.md#deliveryratecallbackconfigurationinput), [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput).

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

$result = $client->deliveryRateCallbacks->create([
  'name' => 'example',
  'configuration' => (object) [
    'url' => 'example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRateCallbacks-create.php)

### deliveryRateCallbacks.createTestDelivery

Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result. The Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body. A retry replays the original result even after the callback changes or is archived.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`

Signature: `createTestDelivery(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |

#### Response

Returned payload: [DeliveryRateCallbackTestDelivery](../models/DeliveryRateCallbackTestDeliveryInput.md#deliveryratecallbacktestdeliveryinput).

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

$result = $client->deliveryRateCallbacks->createTestDelivery('dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRateCallbacks-createTestDelivery.php)

### deliveryRateCallbacks.delete

Retires the delivery rate callback after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature: `delete(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. |

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

$result = $client->deliveryRateCallbacks->delete('dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRateCallbacks-delete.php)

### deliveryRateCallbacks.get

Returns the current revision and lifecycle state for one delivery rate callback.

`GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature: `get(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |

#### Response

Returned payload: [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback).

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
$result = $client->deliveryRateCallbacks->get('dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryRateCallbacks-get.php)

### deliveryRateCallbacks.list

Returns delivery rate callbacks in a stable, cursor-paginated order. Archived resources are excluded by default. Default order: created_at ascending, then delivery_rate_callback_id ascending.

`GET /v1/delivery-rate-callbacks`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_rate_callback_id, name, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dcb_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `delivery_method_id` | Optional | string | Filter by an active current method that references this resource. |

#### Response

Returned payload: [DeliveryRateCallbackListResponse](../models/DeliveryRateCallbackListResponse.md#deliveryratecallbacklistresponse).

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
$result = $client->deliveryRateCallbacks->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryRateCallbacks-list.php)

### deliveryRateCallbacks.rotateSecret

Issues a first shared secret and adds hmac when no secret exists, and increments the callback's version. Otherwise rotates the shared secret and accepts both keys for one hour. Returns the new secret and key_id once.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`

Signature: `rotateSecret(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |

#### Response

Returned payload: [DeliveryRateCallbackSigningKeyRotation](../models/DeliveryRateCallbackSigningKeyRotationInput.md#deliveryratecallbacksigningkeyrotationinput).

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

$result = $client->deliveryRateCallbacks->rotateSecret('dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRateCallbacks-rotateSecret.php)

### deliveryRateCallbacks.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision. Configuration and signing_methods changes require expected_version. signing_methods replaces the set; removing hmac deletes all shared secrets. Use rotate-secret to issue a first shared secret before adding hmac. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Signature: `update(string|Model $delivery_rate_callback_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Flint delivery rate callback ID. |
| `body` | Required | [UpdateDeliveryRateCallbackRequestInput](../models/UpdateDeliveryRateCallbackRequestInput.md#updatedeliveryratecallbackrequestinput) | The request body for: Update delivery rate callback. |

Body model: [UpdateDeliveryRateCallbackRequestInput](../models/UpdateDeliveryRateCallbackRequestInput.md#updatedeliveryratecallbackrequestinput).

#### deliveryRateCallbacks.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequestInput.md#deliveryratecallbackconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequestInput.md#deliveryratecallbackconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequestInput.md#deliveryratecallbackconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequestInput.md#deliveryratecallbackconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequestInput.md#deliveryratecallbackconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `signing_methods` | Required | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryRateCallbacks.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationPatchRequestInput](../models/DeliveryRateCallbackConfigurationPatchRequestInput.md#deliveryratecallbackconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Values: `"inactive"`, `"active"`. |

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

$result = $client->deliveryRateCallbacks->update('dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Delivery rates',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRateCallbacks-update.php)

