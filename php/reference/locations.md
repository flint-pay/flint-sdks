[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# locations

### locations.create

Create a Location. Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. Omitted inventory_allocation_enabled defaults to false. Every Location can hold stock. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`POST /v1/locations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateLocationRequestInput](../models/CreateLocationRequestInput.md#createlocationrequestinput) | The request body for: Create location. |

Body model: [CreateLocationRequestInput](../models/CreateLocationRequestInput.md#createlocationrequestinput).

#### locations.create body fields

Field definitions: [shared fields](../models/CreateLocationRequestInput.md#createlocationrequestinput). Models: [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [LocationCoordinateRequestInput](../models/LocationCoordinateRequestInput.md#locationcoordinaterequestinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

#### Response

Returned payload: [Location](../models/Location.md#location).

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

$result = $client->locations->create([
  'address' => (object) [
    'city' => 'Springfield',
    'country' => 'US',
    'line1' => '100 Example Street',
    'postal_code' => '62701',
    'state' => 'IL',
  ],
  'name' => 'Main Street',
  'timezone' => 'America/Chicago',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/locations-create.php)

### locations.delete

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Signature: `delete(string|Model $location_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Flint Location ID. |
| `expected_version` | Optional | integer | Current resource version used as a concurrency fence. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Location](../models/Location.md#location).

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

$result = $client->locations->delete('loc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/locations-delete.php)

### locations.get

Get location.

`GET /v1/locations/{location_id}`

Signature: `get(string|Model $location_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Flint Location ID. |

#### Response

Returned payload: [Location](../models/Location.md#location).

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
$result = $client->locations->get('loc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/locations-get.php)

### locations.list

List Locations. inventory_allocation_enabled is always included and can be filtered with the Location read scope. The false filter includes Locations without an inventory allocation configuration. Default order: location_id ascending; this key uniquely orders the results.

`GET /v1/locations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `inventory_allocation_enabled` | Optional | boolean | Filter by whether the Location accepts inventory allocation. false includes Locations without an inventory allocation configuration. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search Location ID, external reference ID, or name. maxLength: `255`. |

#### Response

Returned payload: [LocationListResponse](../models/LocationListResponse.md#locationlistresponse).

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
$result = $client->locations->list([], new RequestOptions());
```

[Complete runnable example](../examples/locations-list.php)

### locations.update

Update a Location's profile, availability, geography, and inventory allocation in one call. Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. The version advances on every change. expected_version is optional and compared with version when sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`PATCH /v1/locations/{location_id}`

Signature: `update(string|Model $location_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Flint Location ID. |
| `body` | Required | [UpdateLocationRequestInput](../models/UpdateLocationRequestInput.md#updatelocationrequestinput) | Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change. |

Body model: [UpdateLocationRequestInput](../models/UpdateLocationRequestInput.md#updatelocationrequestinput).

#### locations.update body fields

Field definitions: [shared fields](../models/UpdateLocationRequestInput.md#updatelocationrequestinput). Models: [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [LocationCoordinateRequestInput](../models/LocationCoordinateRequestInput.md#locationcoordinaterequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [Location](../models/Location.md#location).

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

$result = $client->locations->update('loc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Main warehouse',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/locations-update.php)

