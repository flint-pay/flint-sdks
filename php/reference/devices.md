[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# devices

### devices.create

Creates a device. If an active device already has the hardware_fingerprint, fails with `ALREADY_EXISTS` and reason `hardware_fingerprint_already_exists`, and changes nothing. The details[0].current_resource field names the existing device.

`POST /v1/devices`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeviceRequestInput](../models/CreateDeviceRequestInput.md#createdevicerequestinput) | The request body for: Create device. |

Body model: [CreateDeviceRequestInput](../models/CreateDeviceRequestInput.md#createdevicerequestinput).

#### devices.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `hardware_fingerprint` | Optional | string | Stable hardware identity. Must have no leading or trailing whitespace and is compared exactly, including case and accents. Only one active device in this merchant and environment can hold it. minLength: `1`. maxLength: `255`. |
| `location_id` | Optional | string | An active Location to assign the device to. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name for the device, such as Front register. minLength: `1`. |

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

Archives a device and releases its hardware_fingerprint for reuse. The archived device no longer returns hardware_fingerprint. A device that an active reader names returns `409 RESOURCE_IN_USE` with those readers in `blocking_resources`: archive them or clear their `device_id` first.

`DELETE /v1/devices/{device_id}`

Signature: `delete(string|Model $device_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string | Flint device ID. |
| `expected_version` | Optional | integer | Optional device version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |

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

$result = $client->devices->delete('dev_01KEZF7C0051ZP8MZSGHP989F6', [], new RequestOptions(idempotencyKey: $idempotencyKey));
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

```php
$result = $client->devices->get('dev_01KEZF7C0051ZP8MZSGHP989F6', [], new RequestOptions());
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
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `location_id` | Optional | string | Filter by assigned Flint location ID. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
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
| `body` | Required | [UpdateDeviceRequestInput](../models/UpdateDeviceRequestInput.md#updatedevicerequestinput) | The request body for: Update device. minProperties: `1`. |

Body model: [UpdateDeviceRequestInput](../models/UpdateDeviceRequestInput.md#updatedevicerequestinput).

#### devices.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The device version you last read. A different current version returns `409 VERSION_CONFLICT`. Format: `uint64`. minimum: `1`. |
| `location_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | New name for the device. minLength: `1`. |

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

