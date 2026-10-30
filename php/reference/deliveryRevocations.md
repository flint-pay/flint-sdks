[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryRevocations

### deliveryRevocations.create

Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.

`POST /v1/delivery-revocations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [RevokeDeliveryDependencyRequestInput](../models/RevokeDeliveryDependencyRequestInput.md#revokedeliverydependencyrequestinput) | The request body for: Revoke delivery dependency. |

Body model: [RevokeDeliveryDependencyRequestInput](../models/RevokeDeliveryDependencyRequestInput.md#revokedeliverydependencyrequestinput).

#### deliveryRevocations.create body fields

Field definitions: [shared fields](../models/RevokeDeliveryDependencyRequestInput.md#revokedeliverydependencyrequestinput). Models: [RevokeDeliveryDependencyTargetInput](../models/RevokeDeliveryDependencyTargetInput.md#revokedeliverydependencytargetinput).

#### Response

Returned payload: [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation).

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

$result = $client->deliveryRevocations->create([
  'reason' => 'unsafe_configuration',
  'target' => (object) [
    'location_geography_version' => 1,
    'location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
    'target_type' => 'location_geography',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryRevocations-create.php)

### deliveryRevocations.get

Returns one permanent delivery revocation and its estimated impact at creation time.

`GET /v1/delivery-revocations/{delivery_revocation_id}`

Signature: `get(string|Model $delivery_revocation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_revocation_id` | Required | string | Flint delivery revocation ID. |

#### Response

Returned payload: [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation).

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
$result = $client->deliveryRevocations->get('drev_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryRevocations-get.php)

### deliveryRevocations.list

Returns permanent delivery revocations, newest first by created_at and delivery_revocation_id. Default order: created_at descending, then delivery_revocation_id descending.

`GET /v1/delivery-revocations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `target_type` | Optional | Array of string or string | Filter by revocation target type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [6 declared values](#deliveryrevocationslist-input-target_type--values). Values: [6 declared values](#deliveryrevocationslist-input-target_type-values). |
| `reason` | Optional | Array of string or string | Filter by revocation reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### deliveryRevocations.list input target_type [] values

- `"location_geography"`
- `"delivery_rate_callback_signing_key"`
- `"delivery_rate_callback"`
- `"delivery_rate_callback_revision"`
- `"delivery_method"`
- `"delivery_method_revision"`

#### deliveryRevocations.list input target_type values

- `"location_geography"`
- `"delivery_rate_callback_signing_key"`
- `"delivery_rate_callback"`
- `"delivery_rate_callback_revision"`
- `"delivery_method"`
- `"delivery_method_revision"`

#### Response

Returned payload: [DeliveryRevocationListResponse](../models/DeliveryRevocationListResponse.md#deliveryrevocationlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
$result = $client->deliveryRevocations->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryRevocations-list.php)

