[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAllocationPolicies

### inventoryAllocationPolicies.create

Create an allocation policy with its routing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-allocation-policies`

Signature:

```typescript
create(params: (InputValue<CreateInventoryAllocationPolicyRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequest.md#createinventoryallocationpolicyrequest) | The request body for: Create inventory allocation policy. |

Body model: [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequest.md#createinventoryallocationpolicyrequest).

#### inventoryAllocationPolicies.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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

const result = await client.inventoryAllocationPolicies.create({configuration: {location_groups: [{group_priority: 1, location_id: "example"}], splitting_behavior: "single_location"}, name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-create.mjs)

### inventoryAllocationPolicies.get

Retrieve an allocation policy by ID, including archived policies.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `get(inventory_allocation_policy_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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
const result = await client.inventoryAllocationPolicies.get("example", {}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-get.mjs)

### inventoryAllocationPolicies.getRevision

Retrieve the immutable routing configuration captured by one allocation policy revision.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions/{inventory_allocation_policy_revision_id}`

Signature:

```typescript
getRevision(inventory_allocation_policy_id: InputValue<string>,
 inventory_allocation_policy_revision_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |
| `inventory_allocation_policy_revision_id` | Required | string |  |

#### Response

Returned payload: [InventoryAllocationPolicyRevision](../models/InventoryAllocationPolicyRevision.md#inventoryallocationpolicyrevision).

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

Complete body and metadata: `getRevisionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.inventoryAllocationPolicies.getRevision("example", "example", {}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-getRevision.mjs)

### inventoryAllocationPolicies.list

List allocation policies. Archived policies are excluded unless you filter by status archived.

`GET /v1/inventory-allocation-policies`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
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
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [InventoryAllocationPolicyListResponse](../models/InventoryAllocationPolicyListResponse.md#inventoryallocationpolicylistresponse).

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
const result = await client.inventoryAllocationPolicies.list({}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-list.mjs)

### inventoryAllocationPolicies.listRevisions

List immutable revisions of an allocation policy, newest first by default.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions`

Signature:

```typescript
listRevisions(inventory_allocation_policy_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryAllocationPolicyRevisionListResponse](../models/InventoryAllocationPolicyRevisionListResponse.md#inventoryallocationpolicyrevisionlistresponse).

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

Complete body and metadata: `listRevisionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRevisionsItems`, `listRevisionsPages`, `listRevisionsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.inventoryAllocationPolicies.listRevisions("example", {}, {  });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-listRevisions.mjs)

### inventoryAllocationPolicies.remove

Retire an allocation policy. The policy is archived: it stays readable by ID and appears in lists only when you filter by status archived.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature:

```typescript
remove(inventory_allocation_policy_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<number>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |
| `expected_version` | Optional | integer | minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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

const result = await client.inventoryAllocationPolicies.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-remove.mjs)

### inventoryAllocationPolicies.update

Update policy fields, availability, or atomically replace its routing configuration. expected_version is optional and enforced when sent, and is required when replacing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature:

```typescript
update(inventory_allocation_policy_id: InputValue<string>,
 params: (InputValue<UpdateInventoryAllocationPolicyRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequest.md#updateinventoryallocationpolicyrequest) | The request body for: Update inventory allocation policy. |

Body model: [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequest.md#updateinventoryallocationpolicyrequest).

#### inventoryAllocationPolicies.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Requires expected_version. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `expected_version` | Optional | integer string | Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy).

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

const result = await client.inventoryAllocationPolicies.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAllocationPolicies-update.mjs)

