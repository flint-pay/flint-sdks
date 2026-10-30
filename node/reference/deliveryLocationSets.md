[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryLocationSets

### deliveryLocationSets.create

Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-location-sets`

Signature: `create(params: DeliveryLocationSetsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryLocationSetRequestInput](../models/CreateDeliveryLocationSetRequest.md#createdeliverylocationsetrequest) | The request body for: Create delivery location set. |

Body model: [CreateDeliveryLocationSetRequestInput](../models/CreateDeliveryLocationSetRequest.md#createdeliverylocationsetrequest).

#### deliveryLocationSets.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | The location IDs in a delivery location set. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

const result = await client.deliveryLocationSets.create({name: "example", configuration: {location_ids: []}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryLocationSets-create.mjs)

### deliveryLocationSets.delete

Retires the delivery location set after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-location-sets/{delivery_location_set_id}`

Signature: `delete(delivery_location_set_id: InputValue<string>, params?: DeliveryLocationSetsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string | Flint delivery location set ID. |
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

const result = await client.deliveryLocationSets.delete("dls_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryLocationSets-delete.mjs)

### deliveryLocationSets.get

Returns the current revision and lifecycle state for one delivery location set.

`GET /v1/delivery-location-sets/{delivery_location_set_id}`

Signature:

```typescript
get(delivery_location_set_id: InputValue<string>,
 params?: DeliveryLocationSetsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string | Flint delivery location set ID. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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
const result = await client.deliveryLocationSets.get("dls_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/deliveryLocationSets-get.mjs)

### deliveryLocationSets.list

Returns delivery location sets in a stable, cursor-paginated order. Archived resources are excluded by default. Default order: created_at ascending, then delivery_location_set_id ascending.

`GET /v1/delivery-location-sets`

Signature: `list(params?: DeliveryLocationSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_location_set_id, name, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dls_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `delivery_method_id` | Optional | string | Filter by an active current method that references this resource. |

#### Response

Returned payload: [DeliveryLocationSetListResponse](../models/DeliveryLocationSetListResponse.md#deliverylocationsetlistresponse).

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
const result = await client.deliveryLocationSets.list({}, {  });
```

[Complete runnable example](../examples/deliveryLocationSets-list.mjs)

### deliveryLocationSets.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-location-sets/{delivery_location_set_id}`

Signature: `update(delivery_location_set_id: InputValue<string>, params: DeliveryLocationSetsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string | Flint delivery location set ID. |
| `body` | Required | [UpdateDeliveryLocationSetRequestInput](../models/UpdateDeliveryLocationSetRequest.md#updatedeliverylocationsetrequest) | The request body for: Update delivery location set. |

Body model: [UpdateDeliveryLocationSetRequestInput](../models/UpdateDeliveryLocationSetRequest.md#updatedeliverylocationsetrequest).

#### deliveryLocationSets.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryLocationSets.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Required | string | minLength: `1`. |

#### deliveryLocationSets.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryLocationSets.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryLocationSets.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset).

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

const result = await client.deliveryLocationSets.update("dls_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Standard delivery"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryLocationSets-update.mjs)

