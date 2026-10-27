[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# locations

### locations.create

Create a Location. Sending inventory_allocation_enabled also requires commerce.inventory_locations.write. Omitted inventory_allocation_enabled defaults to false. Every Location can hold stock. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`POST /v1/locations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateLocationRequestInput](../models/CreateLocationRequestInput.md#createlocationrequestinput) | The request body for: Create location. |

Body model: [CreateLocationRequestInput](../models/CreateLocationRequestInput.md#createlocationrequestinput).

#### locations.create body fields

Field definitions: [shared fields](../models/CreateLocationRequestInput.md#createlocationrequestinput). Models: [LocationAddressRequestInput](../models/LocationAddressRequestInput.md#locationaddressrequestinput), [LocationCoordinateInput](../models/LocationCoordinateInput.md#locationcoordinateinput).

#### Response

Returned payload: [Location](../models/Location.md#location).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->locations->create([
  'address' => (object) [
    'city' => 'example',
    'country' => 'US',
    'line1' => 'example',
  ],
  'name' => 'example',
  'timezone' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/locations-create.php)

### locations.get

Get location.

`GET /v1/locations/{location_id}`

Signature: `get(string|Model $location_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string |  |

#### Response

Returned payload: [Location](../models/Location.md#location).

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

```php
$result = $client->locations->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/locations-get.php)

### locations.list

List Locations. inventory_allocation_enabled is always included and can be filtered with the Location read scope. The false filter includes Locations without an inventory allocation configuration.

`GET /v1/locations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `inventory_allocation_enabled` | Optional | boolean |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [LocationsListResponse200](../models/LocationsListResponse200.md#locationslistresponse200).

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

```php
$result = $client->locations->list([], new RequestOptions());
```

[Complete runnable example](../examples/locations-list.php)

### locations.remove

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Signature: `remove(string|Model $location_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string |  |
| `expected_version` | Optional | integer | minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Location](../models/Location.md#location).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->locations->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/locations-remove.php)

### locations.update

Update a Location's profile, availability, geography, and inventory allocation in one call. Sending inventory_allocation_enabled also requires commerce.inventory_locations.write. The version advances on every change. expected_version is optional and compared with version when sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`PATCH /v1/locations/{location_id}`

Signature: `update(string|Model $location_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateLocationRequestInput](../models/UpdateLocationRequestInput.md#updatelocationrequestinput) | Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change. |

Body model: [UpdateLocationRequestInput](../models/UpdateLocationRequestInput.md#updatelocationrequestinput).

#### locations.update body fields

Field definitions: [shared fields](../models/UpdateLocationRequestInput.md#updatelocationrequestinput). Models: [LocationAddressRequestInput](../models/LocationAddressRequestInput.md#locationaddressrequestinput), [LocationCoordinateInput](../models/LocationCoordinateInput.md#locationcoordinateinput).

#### Response

Returned payload: [Location](../models/Location.md#location).

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

Deprecated aliases: publishGeography, updateInventory.

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->locations->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/locations-update.php)

