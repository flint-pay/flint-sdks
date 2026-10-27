[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAllocationPolicies

### inventoryAllocationPolicies.create

Create an allocation policy with its routing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-allocation-policies`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequestInput.md#createinventoryallocationpolicyrequestinput) | The request body for: Create inventory allocation policy. |

Body model: [CreateInventoryAllocationPolicyRequestInput](../models/CreateInventoryAllocationPolicyRequestInput.md#createinventoryallocationpolicyrequestinput).

#### inventoryAllocationPolicies.create body fields

Field definitions: [shared fields](../models/CreateInventoryAllocationPolicyRequestInput.md#createinventoryallocationpolicyrequestinput). Models: [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValueInput.md#inventoryallocationconfigurationvalueinput).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

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
        'location_id' => 'example',
      ],
    ],
    'splitting_behavior' => 'single_location',
  ],
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAllocationPolicies-create.php)

### inventoryAllocationPolicies.get

Retrieve an allocation policy by ID, including archived policies.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `get(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->inventoryAllocationPolicies->get('example', [], new RequestOptions());
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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getRevisionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->inventoryAllocationPolicies->getRevision('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-getRevision.php)

### inventoryAllocationPolicies.list

List allocation policies. Archived policies are excluded unless you filter by status archived.

`GET /v1/inventory-allocation-policies`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [InventoryAllocationPoliciesListResponse200](../models/InventoryAllocationPoliciesListResponse200.md#inventoryallocationpolicieslistresponse200).

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
$result = $client->inventoryAllocationPolicies->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-list.php)

### inventoryAllocationPolicies.listRevisions

List immutable revisions of an allocation policy, newest first by default.

`GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions`

Signature: `listRevisions(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Returned payload: [InventoryAllocationPoliciesListRevisionsResponse200](../models/InventoryAllocationPoliciesListRevisionsResponse200.md#inventoryallocationpolicieslistrevisionsresponse200).

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

Complete body and metadata: `listRevisionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRevisionsItems`, `listRevisionsPages`, `listRevisionsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->inventoryAllocationPolicies->listRevisions('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAllocationPolicies-listRevisions.php)

### inventoryAllocationPolicies.remove

Retire an allocation policy. The policy is archived: it stays readable by ID and appears in lists only when you filter by status archived.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `remove(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAllocationPolicies->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAllocationPolicies-remove.php)

### inventoryAllocationPolicies.update

Update policy fields, availability, or atomically replace its routing configuration. expected_version is optional and enforced when sent, and is required when replacing configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Signature: `update(string|Model $inventory_allocation_policy_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequestInput.md#updateinventoryallocationpolicyrequestinput) | The request body for: Update inventory allocation policy. |

Body model: [UpdateInventoryAllocationPolicyRequestInput](../models/UpdateInventoryAllocationPolicyRequestInput.md#updateinventoryallocationpolicyrequestinput).

#### inventoryAllocationPolicies.update body fields

Field definitions: [shared fields](../models/UpdateInventoryAllocationPolicyRequestInput.md#updateinventoryallocationpolicyrequestinput). Models: [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValueInput.md#inventoryallocationconfigurationvalueinput).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAllocationPolicies->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAllocationPolicies-update.php)

