[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryProfiles

### deliveryProfiles.assignToUnconfigured

Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.

`POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`

Signature:

```typescript
assignToUnconfigured(delivery_profile_id: InputValue<string>,
 params: (InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AssignToUnconfiguredDeliveryProfileRequestInput](../models/AssignToUnconfiguredDeliveryProfileRequestInput.md#assigntounconfigureddeliveryprofilerequestinput) | The request body for: Assign unconfigured catalog entries. |

Body model: [AssignToUnconfiguredDeliveryProfileRequestInput](../models/AssignToUnconfiguredDeliveryProfileRequestInput.md#assigntounconfigureddeliveryprofilerequestinput).

#### deliveryProfiles.assignToUnconfigured body fields

Field definitions: [shared fields](../models/AssignToUnconfiguredDeliveryProfileRequestInput.md#assigntounconfigureddeliveryprofilerequestinput).

#### Response

Returned payload: [DeliveryProfileAssignment](../models/DeliveryProfileAssignment.md#deliveryprofileassignment).

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

Complete body and metadata: `assignToUnconfiguredWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryProfiles.assignToUnconfigured("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryProfiles-assignToUnconfigured.mjs)

### deliveryProfiles.create

Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-profiles`

Signature:

```typescript
create(params: (InputValue<CreateDeliveryProfileRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateDeliveryProfileRequestInput](../models/CreateDeliveryProfileRequest.md#createdeliveryprofilerequest) | The request body for: Create delivery profile. |

Body model: [CreateDeliveryProfileRequestInput](../models/CreateDeliveryProfileRequest.md#createdeliveryprofilerequest).

#### deliveryProfiles.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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

const result = await client.deliveryProfiles.create({name: "example", configuration: {requirement: "none"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryProfiles-create.mjs)

### deliveryProfiles.get

Returns the current revision and lifecycle state for one delivery profile.

`GET /v1/delivery-profiles/{delivery_profile_id}`

Signature:

```typescript
get(delivery_profile_id: InputValue<string>,
 params?: {
  "include_diagnostics"?: InputValue<boolean>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `include_diagnostics` | Optional | boolean | Default: `false`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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
const result = await client.deliveryProfiles.get("example", {}, {  });
```

[Complete runnable example](../examples/deliveryProfiles-get.mjs)

### deliveryProfiles.list

Returns delivery profiles in a stable, cursor-paginated order. Archived resources are excluded by default.

`GET /v1/delivery-profiles`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "archived">>;
  "is_default"?: InputValue<boolean>;
  "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
  "include_diagnostics"?: InputValue<boolean>
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
| `is_default` | Optional | boolean |  |
| `resolution_mode` | Optional | Array of string | minItems: `1`. Items values: `"quote"`, `"manual"`. |
| `include_diagnostics` | Optional | boolean | Default: `false`. |

#### Response

Returned payload: [DeliveryProfileListResponse](../models/DeliveryProfileListResponse.md#deliveryprofilelistresponse).

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
const result = await client.deliveryProfiles.list({}, {  });
```

[Complete runnable example](../examples/deliveryProfiles-list.mjs)

### deliveryProfiles.remove

Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-profiles/{delivery_profile_id}`

Signature:

```typescript
remove(delivery_profile_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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

const result = await client.deliveryProfiles.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryProfiles-remove.mjs)

### deliveryProfiles.update

Sparsely updates mutable fields. Send is_default true to make this active profile the physical catalog default, together with any other mutable fields in one atomic update. Sending only is_default true for the current default leaves its version unchanged and emits no events. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-profiles/{delivery_profile_id}`

Signature:

```typescript
update(delivery_profile_id: InputValue<string>,
 params: (InputValue<UpdateDeliveryProfileRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateDeliveryProfileRequestInput](../models/UpdateDeliveryProfileRequest.md#updatedeliveryprofilerequest) | The request body for: Update delivery profile. |

Body model: [UpdateDeliveryProfileRequestInput](../models/UpdateDeliveryProfileRequest.md#updatedeliveryprofilerequest).

#### deliveryProfiles.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 1



#### deliveryProfiles.update body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 2



#### deliveryProfiles.update body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 3



#### deliveryProfiles.update body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 4



#### deliveryProfiles.update body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Required | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 5



#### deliveryProfiles.update body anyOf variant 5 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Required | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryProfiles.update("example", {name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryProfiles-update.mjs)

