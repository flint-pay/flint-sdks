[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryProfiles

### deliveryProfiles.assignToUnconfigured

Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.

`POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`

Signature: `assignToUnconfigured(string|Model $delivery_profile_id, array|Model $params, ?RequestOptions $options = null)`

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

Returned payload: [DeliveryProfileAssignment](../models/DeliveryProfileAssignmentInput.md#deliveryprofileassignmentinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryProfiles->assignToUnconfigured('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-assignToUnconfigured.php)

### deliveryProfiles.create

Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-profiles`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateDeliveryProfileRequestInput](../models/CreateDeliveryProfileRequestInput.md#createdeliveryprofilerequestinput) | The request body for: Create delivery profile. |

Body model: [CreateDeliveryProfileRequestInput](../models/CreateDeliveryProfileRequestInput.md#createdeliveryprofilerequestinput).

#### deliveryProfiles.create body fields

Field definitions: [shared fields](../models/CreateDeliveryProfileRequestInput.md#createdeliveryprofilerequestinput). Models: [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryProfiles->create([
  'name' => 'example',
  'configuration' => (object) [
    'requirement' => 'none',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-create.php)

### deliveryProfiles.get

Returns the current revision and lifecycle state for one delivery profile.

`GET /v1/delivery-profiles/{delivery_profile_id}`

Signature: `get(string|Model $delivery_profile_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->deliveryProfiles->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryProfiles-get.php)

### deliveryProfiles.list

Returns delivery profiles in a stable, cursor-paginated order. Archived resources are excluded by default.

`GET /v1/delivery-profiles`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

Returned payload: [DeliveryProfilesListResponse200](../models/DeliveryProfilesListResponse200.md#deliveryprofileslistresponse200).

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
$result = $client->deliveryProfiles->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryProfiles-list.php)

### deliveryProfiles.remove

Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-profiles/{delivery_profile_id}`

Signature: `remove(string|Model $delivery_profile_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryProfiles->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-remove.php)

### deliveryProfiles.update

Sparsely updates mutable fields. Send is_default true to make this active profile the physical catalog default, together with any other mutable fields in one atomic update. Sending only is_default true for the current default leaves its version unchanged and emits no events. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-profiles/{delivery_profile_id}`

Signature: `update(string|Model $delivery_profile_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateDeliveryProfileRequestInput](../models/UpdateDeliveryProfileRequestInput.md#updatedeliveryprofilerequestinput) | The request body for: Update delivery profile. |

Body model: [UpdateDeliveryProfileRequestInput](../models/UpdateDeliveryProfileRequestInput.md#updatedeliveryprofilerequestinput).

#### deliveryProfiles.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 1



#### deliveryProfiles.update body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 2



#### deliveryProfiles.update body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 3



#### deliveryProfiles.update body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 4



#### deliveryProfiles.update body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Required | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update body anyOf variant 5



#### deliveryProfiles.update body anyOf variant 5 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryProfiles->update('example', [
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-update.php)

