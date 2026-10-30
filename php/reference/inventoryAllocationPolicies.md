[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAllocationPolicies

### inventoryAllocationPolicies.create

Create an allocation policy with its routing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory allocation policies and identify the matching policy.

`POST /v1/inventory-allocation-policies`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequestInput.md#createinventoryallocationpolicyrequestinput) | The request body for: Create inventory allocation policy. |

Body model: [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequestInput.md#createinventoryallocationpolicyrequestinput).

#### inventoryAllocationPolicies.create body fields

Field definitions: [shared fields](../models/CreateInventoryAllocationPolicyRequestInput.md#createinventoryallocationpolicyrequestinput). Models: [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValueInput.md#inventoryallocationconfigurationvalueinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAllocationPolicies->create([
  'configuration' => (object) [
    'location_groups' => [
      (object) [
        'group_priority' => 1,
        'location_id' => 'loc_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      ],
    ],
    'maximum_locations_per_assignment' => 3,
    'splitting_behavior' => 'split_when_required',
    'within_group_order' => 'location_id_ascending',
  ],
  'name' => 'US retail routing',
  'status' => 'active',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAllocationPolicies-create.php)

### inventoryAllocationPolicies.delete

Retire an allocation policy. The policy is archived: it stays readable by ID and appears in lists only when you filter by status archived.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `delete(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAllocationPolicies->delete('invp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAllocationPolicies-delete.php)

### inventoryAllocationPolicies.get

Retrieve an allocation policy by ID, including archived policies.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `get(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->inventoryAllocationPolicies->get('invp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-get.php)

### inventoryAllocationPolicies.getRevision

Retrieve the immutable routing configuration captured by one allocation policy revision.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions/{inventory_allocation_policy_revision_id}`

Signature:

```text
getRevision(string|
  Model $inventory_allocation_policy_id,
 string|
  Model $inventory_allocation_policy_revision_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

```php
$result = $client->inventoryAllocationPolicies->getRevision('invp_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'invpv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-getRevision.php)

### inventoryAllocationPolicies.list

List allocation policies. Archived policies are excluded unless you filter by status archived. Default order: inventory_allocation_policy_id ascending; this key uniquely orders the results.

`GET /v1/inventory-allocation-policies`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->inventoryAllocationPolicies->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-list.php)

### inventoryAllocationPolicies.listRevisions

List immutable revisions of an allocation policy, newest first by default. Default order: inventory_allocation_policy_revision_id descending; this key uniquely orders the results.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions`

Signature: `listRevisions(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->inventoryAllocationPolicies->listRevisions('invp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-listRevisions.php)

### inventoryAllocationPolicies.update

Update policy fields, availability, or atomically replace its routing configuration. expected_version is optional and enforced when sent, and is required when replacing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory allocation policy by ID.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `update(string|Model $inventory_allocation_policy_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | Flint inventory allocation policy ID. |
| `body` | Required | [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequestInput.md#updateinventoryallocationpolicyrequestinput) | The request body for: Update inventory allocation policy. |

Body model: [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequestInput.md#updateinventoryallocationpolicyrequestinput).

#### inventoryAllocationPolicies.update body fields

Field definitions: [shared fields](../models/UpdateInventoryAllocationPolicyRequestInput.md#updateinventoryallocationpolicyrequestinput). Models: [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValueInput.md#inventoryallocationconfigurationvalueinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAllocationPolicies->update('invp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Warehouse allocation',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAllocationPolicies-update.php)

