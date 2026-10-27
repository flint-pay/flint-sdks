[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryRevocations

### deliveryRevocations.get

Returns one permanent delivery revocation and its estimated impact at creation time.

`GET /v1/delivery-revocations/{delivery_revocation_id}`

Signature: `get(string|Model $delivery_revocation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_revocation_id` | Required | string |  |

#### Response

Returned payload: [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation).

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
$result = $client->deliveryRevocations->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryRevocations-get.php)

### deliveryRevocations.revokeDeliveryDependency

Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.

`POST /v1/delivery-revocations`

Signature: `revokeDeliveryDependency(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RevokeDeliveryDependencyRequestInput](../models/RevokeDeliveryDependencyRequestInput.md#revokedeliverydependencyrequestinput) | The request body for: Revoke delivery dependency. |

Body model: [RevokeDeliveryDependencyRequestInput](../models/RevokeDeliveryDependencyRequestInput.md#revokedeliverydependencyrequestinput).

#### deliveryRevocations.revokeDeliveryDependency body fields

Field definitions: [shared fields](../models/RevokeDeliveryDependencyRequestInput.md#revokedeliverydependencyrequestinput). Models: [RevokeDeliveryDependencyTargetInput](../models/RevokeDeliveryDependencyTargetInput.md#revokedeliverydependencytargetinput).

#### Response

Returned payload: [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation).

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

Complete body and metadata: `revokeDeliveryDependencyWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryRevocations->revokeDeliveryDependency([
  'reason' => 'unsafe_configuration',
  'target' => (object) [
    'target_type' => 'location_geography',
    'location_id' => 'example',
    'location_geography_version' => '1',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRevocations-revokeDeliveryDependency.php)

