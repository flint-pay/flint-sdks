[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# locations

### locations.create

Create a Location. Sending inventory_allocation_enabled also requires commerce.inventory_locations.write. Omitted inventory_allocation_enabled defaults to false. Every Location can hold stock. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`POST /v1/locations`

Signature: `create(params: (InputValue<CreateLocationRequestInput>) & { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateLocationRequestInput](../models/CreateLocationRequest.md#createlocationrequest) | The request body for: Create location. |

Body model: [CreateLocationRequestInput](../models/CreateLocationRequest.md#createlocationrequest).

#### locations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [LocationAddressRequestInput](../models/LocationAddressRequest.md#locationaddressrequest) | The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it. |
| `coordinate` | Optional | [LocationCoordinateInput](../models/LocationCoordinateInput.md#locationcoordinateinput) | A latitude and longitude for a merchant location. |
| `coordinate_source` | Optional | string or null | Send null to clear it. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory_locations.write in addition to the route scope. Default: `false`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Required | string | minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.create({address: {city: "example", country: "US", line1: "example"}, name: "example", timezone: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/locations-create.mjs)

### locations.get

Get location.

`GET /v1/locations/{location_id}`

Signature: `get(location_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.locations.get("example", {}, {  });
```

[Complete runnable example](../examples/locations-get.mjs)

### locations.list

List Locations. inventory_allocation_enabled is always included and can be filtered with the Location read scope. The false filter includes Locations without an inventory allocation configuration.

`GET /v1/locations`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
  "inventory_allocation_enabled"?: InputValue<boolean>;
  "external_reference_id"?: InputValue<string>;
  "query"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

Returned payload: [LocationListResponse](../models/LocationListResponse.md#locationlistresponse).

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

```typescript
const result = await client.locations.list({}, {  });
```

[Complete runnable example](../examples/locations-list.mjs)

### locations.remove

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Signature:

```typescript
remove(location_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<number>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/locations-remove.mjs)

### locations.update

Update a Location's profile, availability, geography, and inventory allocation in one call. Sending inventory_allocation_enabled also requires commerce.inventory_locations.write. The version advances on every change. expected_version is optional and compared with version when sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body.

`PATCH /v1/locations/{location_id}`

Signature:

```typescript
update(location_id: InputValue<string>,
 params: (InputValue<UpdateLocationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateLocationRequestInput](../models/UpdateLocationRequest.md#updatelocationrequest) | Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change. |

Body model: [UpdateLocationRequestInput](../models/UpdateLocationRequest.md#updatelocationrequest).

#### locations.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [LocationAddressRequestInput](../models/LocationAddressRequest.md#locationaddressrequest) | Complete replacement postal address, validated as on create. Requires coordinate in the same request, including null to clear it. The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it. |
| `coordinate` | Optional | [LocationCoordinateInput](../models/LocationCoordinateInput.md#locationcoordinateinput) or null | Complete replacement coordinate. Send null to clear both coordinate and coordinate_source. A non-null value requires coordinate_source in the same request. |
| `coordinate_source` | Optional | string or null | Source of the coordinate sent in the same request. A non-null coordinate requires merchant_supplied or geocoded. Send null only with coordinate: null to clear both fields. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory_locations.write in addition to the route scope. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA timezone for local schedules, validated as on create. Can be updated without address. minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/locations-update.mjs)

