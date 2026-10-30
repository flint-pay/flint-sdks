[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# devices

### devices.create

Creates a device. If an active device already has the hardware_fingerprint, returns 409 ALREADY_EXISTS with reason hardware_fingerprint_already_exists and changes nothing. The details[0].current_resource field names the existing device.

`POST /v1/devices`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeviceRequestInput](../models/CreateDeviceRequestInput.md#createdevicerequestinput) | The request body for: Create device. |

Body model: [CreateDeviceRequestInput](../models/CreateDeviceRequestInput.md#createdevicerequestinput).

#### devices.create body fields

Field definitions: [shared fields](../models/CreateDeviceRequestInput.md#createdevicerequestinput). Models: [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

#### Response

Returned payload: [Device](../models/Device.md#device).

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

$result = $client->devices->create([
  'hardware_fingerprint' => 'ios-device-uuid-123',
  'location_id' => 'loc_01KEZF7C00G0VBJJ8VMFCQ5YVG',
  'metadata' => (object) [
    'register' => 'front_counter',
  ],
  'name' => 'Front Counter iPad',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/devices-create.php)

### devices.delete

Archives a device and releases its hardware_fingerprint for reuse. The archived device no longer returns hardware_fingerprint.

`DELETE /v1/devices/{device_id}`

Signature: `delete(string|Model $device_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string | Flint device ID. |
| `expected_version` | Optional | integer | Optional device version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Device](../models/Device.md#device).

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

$result = $client->devices->delete('dev_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/devices-delete.php)

### devices.get

Returns a single device by ID.

`GET /v1/devices/{device_id}`

Signature: `get(string|Model $device_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string | Flint device ID. |

#### Response

Returned payload: [Device](../models/Device.md#device).

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
$result = $client->devices->get('dev_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/devices-get.php)

### devices.list

Returns a paginated list of devices for the authenticated merchant. Default order: created_at descending, then device_id descending.

`GET /v1/devices`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `location_id` | Optional | string | Filter by assigned Flint location ID. |
| `hardware_fingerprint` | Optional | string | Exact, case-sensitive match. Archived devices release their fingerprint, so this finds at most the one active device that holds it. minLength: `1`. maxLength: `255`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by device_id. Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [DeviceListResponse](../models/DeviceListResponse.md#devicelistresponse).

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
$result = $client->devices->list([], new RequestOptions());
```

[Complete runnable example](../examples/devices-list.php)

### devices.update

Applies a sparse update to a device. Send null to clear location_id or all metadata. The name field cannot be null. Archived devices return ACTION_NOT_ALLOWED with reason archived and current_status archived.

`PATCH /v1/devices/{device_id}`

Signature: `update(string|Model $device_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string | Flint device ID. |
| `body` | Required | [UpdateDeviceRequestInput](../models/UpdateDeviceRequestInput.md#updatedevicerequestinput) | The request body for: Update device. |

Body model: [UpdateDeviceRequestInput](../models/UpdateDeviceRequestInput.md#updatedevicerequestinput).

#### devices.update body fields

Field definitions: [shared fields](../models/UpdateDeviceRequestInput.md#updatedevicerequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [Device](../models/Device.md#device).

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

$result = $client->devices->update('dev_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Front counter',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/devices-update.php)

