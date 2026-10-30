[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAllocationPolicies

### inventoryAllocationPolicies.create

Create an allocation policy with its routing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory allocation policies and identify the matching policy.

`POST /v1/inventory-allocation-policies`

Signature: `create(params: InventoryAllocationPoliciesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequest.md#createinventoryallocationpolicyrequest) | The request body for: Create inventory allocation policy. |

Body model: [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequest.md#createinventoryallocationpolicyrequest).

#### inventoryAllocationPolicies.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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

const result = await client.inventoryAllocationPolicies.create({configuration: {location_groups: [{group_priority: 1, location_id: "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM"}], maximum_locations_per_assignment: 3, splitting_behavior: "split_when_required", within_group_order: "location_id_ascending"}, name: "US retail routing", status: "active"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-create.mjs)

### inventoryAllocationPolicies.delete

Retire an allocation policy. The policy is archived: it stays readable by ID and appears in lists only when you filter by status archived.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature:

```typescript
delete(inventory_allocation_policy_id: InputValue<string>,
 params?: InventoryAllocationPoliciesDeleteParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | Flint inventory allocation policy ID. |
| `expected_version` | Optional | integer | Current resource version used as a concurrency fence. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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

const result = await client.inventoryAllocationPolicies.delete("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-delete.mjs)

### inventoryAllocationPolicies.get

Retrieve an allocation policy by ID, including archived policies.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature:

```typescript
get(inventory_allocation_policy_id: InputValue<string>,
 params?: InventoryAllocationPoliciesGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | Flint inventory allocation policy ID. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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
const result = await client.inventoryAllocationPolicies.get("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-get.mjs)

### inventoryAllocationPolicies.getRevision

Retrieve the immutable routing configuration captured by one allocation policy revision.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions/{inventory_allocation_policy_revision_id}`

Signature:

```typescript
getRevision(inventory_allocation_policy_id: InputValue<string>,
 inventory_allocation_policy_revision_id: InputValue<string>,
 params?: InventoryAllocationPoliciesGetRevisionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | Flint inventory allocation policy ID. |
| `inventory_allocation_policy_revision_id` | Required | string | Flint inventory allocation policy revision ID. |

#### Response

Returned payload: [InventoryAllocationPolicyRevision](../models/InventoryAllocationPolicyRevision.md#inventoryallocationpolicyrevision).

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
const result = await client.inventoryAllocationPolicies.getRevision("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", "invpv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-getRevision.mjs)

### inventoryAllocationPolicies.list

List allocation policies. Archived policies are excluded unless you filter by status archived. Default order: inventory_allocation_policy_id ascending; this key uniquely orders the results.

`GET /v1/inventory-allocation-policies`

Signature: `list(params?: InventoryAllocationPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search allocation policy ID, external reference ID, or name. maxLength: `255`. |

#### Response

Returned payload: [InventoryAllocationPolicyListResponse](../models/InventoryAllocationPolicyListResponse.md#inventoryallocationpolicylistresponse).

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
const result = await client.inventoryAllocationPolicies.list({}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-list.mjs)

### inventoryAllocationPolicies.listRevisions

List immutable revisions of an allocation policy, newest first by default. Default order: inventory_allocation_policy_revision_id descending; this key uniquely orders the results.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions`

Signature:

```typescript
listRevisions(inventory_allocation_policy_id: InputValue<string>,
 params?: InventoryAllocationPoliciesListRevisionsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | Flint inventory allocation policy ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [InventoryAllocationPolicyRevisionListResponse](../models/InventoryAllocationPolicyRevisionListResponse.md#inventoryallocationpolicyrevisionlistresponse).

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

Pagination: `listRevisionsItems`, `listRevisionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.inventoryAllocationPolicies.listRevisions("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-listRevisions.mjs)

### inventoryAllocationPolicies.update

Update policy fields, availability, or atomically replace its routing configuration. expected_version is optional and enforced when sent, and is required when replacing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory allocation policy by ID.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature:

```typescript
update(inventory_allocation_policy_id: InputValue<string>,
 params: InventoryAllocationPoliciesUpdateParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | Flint inventory allocation policy ID. |
| `body` | Required | [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequest.md#updateinventoryallocationpolicyrequest) | The request body for: Update inventory allocation policy. |

Body model: [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequest.md#updateinventoryallocationpolicyrequest).

#### inventoryAllocationPolicies.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Requires expected_version. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `expected_version` | Optional | integer | Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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

const result = await client.inventoryAllocationPolicies.update("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Warehouse allocation"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-update.mjs)

