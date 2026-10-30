[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryZones

### deliveryZones.create

Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-zones`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryZoneRequestInput](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinput) | The request body for: Create delivery zone. |

Body model: [CreateDeliveryZoneRequestInput](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinput).

#### deliveryZones.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryZone](../models/DeliveryZone.md#deliveryzone).

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

$result = $client->deliveryZones->create([
  'configuration' => (object) [
    'country' => (object) [
      'values' => [
        'example',
      ],
    ],
  ],
  'name' => 'Standard delivery',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryZones-create.php)

### deliveryZones.delete

Retires the delivery zone after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-zones/{delivery_zone_id}`

Signature: `delete(string|Model $delivery_zone_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | Flint delivery zone ID. |
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [DeliveryZone](../models/DeliveryZone.md#deliveryzone).

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

$result = $client->deliveryZones->delete('dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryZones-delete.php)

### deliveryZones.get

Returns the current revision and lifecycle state for one delivery zone.

`GET /v1/delivery-zones/{delivery_zone_id}`

Signature: `get(string|Model $delivery_zone_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | Flint delivery zone ID. |

#### Response

Returned payload: [DeliveryZone](../models/DeliveryZone.md#deliveryzone).

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
$result = $client->deliveryZones->get('dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryZones-get.php)

### deliveryZones.list

Returns delivery zones in a stable, cursor-paginated order. Archived resources are excluded by default. Default order: created_at ascending, then delivery_zone_id ascending.

`GET /v1/delivery-zones`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_zone_id, name, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dzone_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `delivery_method_id` | Optional | string | Filter by an active current method that references this resource. |

#### Response

Returned payload: [DeliveryZoneListResponse](../models/DeliveryZoneListResponse.md#deliveryzonelistresponse).

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
$result = $client->deliveryZones->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryZones-list.php)

### deliveryZones.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-zones/{delivery_zone_id}`

Signature: `update(string|Model $delivery_zone_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | Flint delivery zone ID. |
| `body` | Required | [UpdateDeliveryZoneRequestInput](../models/UpdateDeliveryZoneRequestInput.md#updatedeliveryzonerequestinput) | The request body for: Update delivery zone. |

Body model: [UpdateDeliveryZoneRequestInput](../models/UpdateDeliveryZoneRequestInput.md#updatedeliveryzonerequestinput).

#### deliveryZones.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Send the whole geography. It replaces the zone's current geography; leave configuration out to keep it. Null and an empty object are invalid. Requires expected_version. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryZones.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Send the whole geography. It replaces the zone's current geography; leave configuration out to keep it. Null and an empty object are invalid. Requires expected_version. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Required | string | minLength: `1`. |

#### deliveryZones.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Send the whole geography. It replaces the zone's current geography; leave configuration out to keep it. Null and an empty object are invalid. Requires expected_version. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryZones.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Send the whole geography. It replaces the zone's current geography; leave configuration out to keep it. Null and an empty object are invalid. Requires expected_version. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryZones.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Send the whole geography. It replaces the zone's current geography; leave configuration out to keep it. Null and an empty object are invalid. Requires expected_version. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryZone](../models/DeliveryZone.md#deliveryzone).

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

$result = $client->deliveryZones->update('dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Standard delivery',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryZones-update.php)

