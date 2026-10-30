[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryProfiles

### deliveryProfiles.assignToUnconfigured

Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.

`POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`

Signature: `assignToUnconfigured(string|Model $delivery_profile_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string | Flint delivery profile ID. |
| `body` | Required | [AssignToUnconfiguredDeliveryProfileRequestInput](../models/AssignToUnconfiguredDeliveryProfileRequestInput.md#assigntounconfigureddeliveryprofilerequestinput) | The request body for: Assign unconfigured catalog entries. |

Body model: [AssignToUnconfiguredDeliveryProfileRequestInput](../models/AssignToUnconfiguredDeliveryProfileRequestInput.md#assigntounconfigureddeliveryprofilerequestinput).

#### deliveryProfiles.assignToUnconfigured body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Current version of the delivery profile. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [DeliveryProfileAssignment](../models/DeliveryProfileAssignmentInput.md#deliveryprofileassignmentinput).

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

$result = $client->deliveryProfiles->assignToUnconfigured('dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-assignToUnconfigured.php)

### deliveryProfiles.create

Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-profiles`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryProfileRequestInput](../models/CreateDeliveryProfileRequestInput.md#createdeliveryprofilerequestinput) | The request body for: Create delivery profile. |

Body model: [CreateDeliveryProfileRequestInput](../models/CreateDeliveryProfileRequestInput.md#createdeliveryprofilerequestinput).

#### deliveryProfiles.create body fields

Field definitions: [shared fields](../models/CreateDeliveryProfileRequestInput.md#createdeliveryprofilerequestinput). Models: [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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

$result = $client->deliveryProfiles->create([
  'configuration' => (object) [
    'requirement' => 'none',
  ],
  'name' => 'Standard delivery',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-create.php)

### deliveryProfiles.delete

Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects.

`DELETE /v1/delivery-profiles/{delivery_profile_id}`

Signature: `delete(string|Model $delivery_profile_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string | Flint delivery profile ID. |
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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

$result = $client->deliveryProfiles->delete('dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-delete.php)

### deliveryProfiles.get

Returns the current revision and lifecycle state for one delivery profile.

`GET /v1/delivery-profiles/{delivery_profile_id}`

Signature: `get(string|Model $delivery_profile_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string | Flint delivery profile ID. |
| `include_diagnostics` | Optional | boolean | Compute catalog and delivery-configuration diagnostics for this profile. Default: `false`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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
$result = $client->deliveryProfiles->get('dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryProfiles-get.php)

### deliveryProfiles.list

Returns delivery profiles in a stable, cursor-paginated order. Archived resources are excluded by default. Default order: created_at ascending, then delivery_profile_id ascending.

`GET /v1/delivery-profiles`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_profile_id, name, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dprof_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `is_default` | Optional | boolean | Filter by whether the profile is the current physical catalog default. Accepts a single true or false value. |
| `resolution_mode` | Optional | Array of string or string | Filter by profile resolution mode. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"quote"`, `"manual"`. Values: `"quote"`, `"manual"`. |
| `include_diagnostics` | Optional | boolean | Compute catalog and delivery-configuration diagnostics for every profile returned. Default: `false`. |

#### Response

Returned payload: [DeliveryProfileListResponse](../models/DeliveryProfileListResponse.md#deliveryprofilelistresponse).

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
$result = $client->deliveryProfiles->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryProfiles-list.php)

### deliveryProfiles.update

Sparsely updates mutable fields. Send is_default true to make this active profile the physical catalog default, together with any other mutable fields in one atomic update. Sending only is_default true for the current default leaves its version unchanged and emits no events. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead.

`PATCH /v1/delivery-profiles/{delivery_profile_id}`

Signature: `update(string|Model $delivery_profile_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string | Flint delivery profile ID. |
| `body` | Required | [UpdateDeliveryProfileRequestInput](../models/UpdateDeliveryProfileRequestInput.md#updatedeliveryprofilerequestinput) | The request body for: Update delivery profile. |

Body model: [UpdateDeliveryProfileRequestInput](../models/UpdateDeliveryProfileRequestInput.md#updatedeliveryprofilerequestinput).

#### deliveryProfiles.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Required | string | minLength: `1`. |

#### deliveryProfiles.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Optional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### deliveryProfiles.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Required | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile).

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

$result = $client->deliveryProfiles->update('dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Standard delivery',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryProfiles-update.php)

