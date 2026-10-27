[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryLocationSets

### deliveryLocationSets.create

Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-location-sets`

Signature:

```typescript
create(params: (InputValue<CreateDeliveryLocationSetRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateDeliveryLocationSetRequestInput](../models/CreateDeliveryLocationSetRequest.md#createdeliverylocationsetrequest) | The request body for: Create delivery location set. |

Body model: [CreateDeliveryLocationSetRequestInput](../models/CreateDeliveryLocationSetRequest.md#createdeliverylocationsetrequest).

#### deliveryLocationSets.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | The location IDs in a delivery location set. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryLocationSets.create({name: "example", configuration: {location_ids: []}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryLocationSets-create.mjs)

### deliveryLocationSets.get

Returns the current revision and lifecycle state for one delivery location set.

`GET /v1/delivery-location-sets/{delivery_location_set_id}`

Signature: `get(delivery_location_set_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string |  |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

```typescript
const result = await client.deliveryLocationSets.get("example", {}, {  });
```

[Complete runnable example](../examples/deliveryLocationSets-get.mjs)

### deliveryLocationSets.list

Returns delivery location sets in a stable, cursor-paginated order. Archived resources are excluded by default.

`GET /v1/delivery-location-sets`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "archived">>;
  "delivery_method_id"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: `255`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |
| `delivery_method_id` | Optional | string |  |

#### Response

Returned payload: [DeliveryLocationSetListResponse](../models/DeliveryLocationSetListResponse.md#deliverylocationsetlistresponse).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.deliveryLocationSets.list({}, {  });
```

[Complete runnable example](../examples/deliveryLocationSets-list.mjs)

### deliveryLocationSets.remove

Retires the delivery location set after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-location-sets/{delivery_location_set_id}`

Signature:

```typescript
remove(delivery_location_set_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryLocationSets.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryLocationSets-remove.mjs)

### deliveryLocationSets.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-location-sets/{delivery_location_set_id}`

Signature:

```typescript
update(delivery_location_set_id: InputValue<string>,
 params: (InputValue<UpdateDeliveryLocationSetRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateDeliveryLocationSetRequestInput](../models/UpdateDeliveryLocationSetRequest.md#updatedeliverylocationsetrequest) | The request body for: Update delivery location set. |

Body model: [UpdateDeliveryLocationSetRequestInput](../models/UpdateDeliveryLocationSetRequest.md#updatedeliverylocationsetrequest).

#### deliveryLocationSets.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryLocationSets.update body anyOf variant 1



#### deliveryLocationSets.update body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

#### deliveryLocationSets.update body anyOf variant 2



#### deliveryLocationSets.update body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryLocationSets.update body anyOf variant 3



#### deliveryLocationSets.update body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryLocationSets.update body anyOf variant 4



#### deliveryLocationSets.update body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Required | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryLocationSets.update("example", {name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryLocationSets-update.mjs)

