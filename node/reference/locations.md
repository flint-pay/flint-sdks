[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# locations

### locations.create

Create a Location. Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. Omitted inventory_allocation_enabled defaults to false. Every Location can hold stock. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`POST /v1/locations`

Signature: `create(params: LocationsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateLocationRequestInput](../models/CreateLocationRequest.md#createlocationrequest) | The request body for: Create location. |

Body model: [CreateLocationRequestInput](../models/CreateLocationRequest.md#createlocationrequest).

#### locations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `coordinate` | Optional | [LocationCoordinateRequestInput](../models/LocationCoordinateRequestInput.md#locationcoordinaterequestinput) | A latitude and longitude for a merchant location. |
| `coordinate_source` | Optional | string or null | Send null to clear it. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory.allocation.write in addition to the route scope. Default: `false`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Required | string | minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.create({address: {city: "Springfield", country: "US", line1: "100 Example Street", postal_code: "62701", state: "IL"}, name: "Main Street", timezone: "America/Chicago"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/locations-create.mjs)

### locations.delete

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Signature: `delete(location_id: InputValue<string>, params?: LocationsDeleteParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.delete("loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/locations-delete.mjs)

### locations.get

Get location.

`GET /v1/locations/{location_id}`

Signature: `get(location_id: InputValue<string>, params?: LocationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.locations.get("loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/locations-get.mjs)

### locations.list

List Locations. inventory_allocation_enabled is always included and can be filtered with the Location read scope. The false filter includes Locations without an inventory allocation configuration. Default order: location_id ascending; this key uniquely orders the results.

`GET /v1/locations`

Signature: `list(params?: LocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.locations.list({}, {  });
```

[Complete runnable example](../examples/locations-list.mjs)

### locations.update

Update a Location's profile, availability, geography, and inventory allocation in one call. Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. The version advances on every change. expected_version is optional and compared with version when sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`PATCH /v1/locations/{location_id}`

Signature: `update(location_id: InputValue<string>, params: LocationsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Flint Location ID. |
| `body` | Required | [UpdateLocationRequestInput](../models/UpdateLocationRequest.md#updatelocationrequest) | Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change. |

Body model: [UpdateLocationRequestInput](../models/UpdateLocationRequest.md#updatelocationrequest).

#### locations.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | Complete replacement postal address, validated as on create. Requires coordinate in the same request, including null to clear it. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `coordinate` | Optional | [LocationCoordinateRequestInput](../models/LocationCoordinateRequestInput.md#locationcoordinaterequestinput) or null | Complete replacement coordinate. Send null to clear both coordinate and coordinate_source. A non-null value requires coordinate_source in the same request. |
| `coordinate_source` | Optional | string or null | Source of the coordinate sent in the same request. A non-null coordinate requires merchant_supplied or geocoded. Send null only with coordinate: null to clear both fields. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory.allocation.write in addition to the route scope. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA timezone for local schedules, validated as on create. Can be updated without address. minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.update("loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Main warehouse"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/locations-update.mjs)

