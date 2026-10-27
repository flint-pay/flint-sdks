[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryCounts

### inventoryCounts.create

Open a physical count for selected inventory items at one Location. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-counts`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryCountRequestInput](../models/CreateInventoryCountRequestInput.md#createinventorycountrequestinput) | The request body for: Create inventory count. |

Body model: [CreateInventoryCountRequestInput](../models/CreateInventoryCountRequestInput.md#createinventorycountrequestinput).

#### inventoryCounts.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_item_ids` | Required | Array of string | minItems: `1`. maxItems: `100`. Items: minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [InventoryCount](../models/InventoryCount.md#inventorycount).

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

$result = $client->inventoryCounts->create([
  'inventory_item_ids' => [
    'example',
  ],
  'location_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryCounts-create.php)

### inventoryCounts.get

Retrieve an inventory count and its saved observations by ID.

`GET /v1/inventory-counts/{inventory_count_id}`

Signature: `get(string|Model $inventory_count_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count_id` | Required | string |  |

#### Response

Returned payload: [InventoryCount](../models/InventoryCount.md#inventorycount).

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
$result = $client->inventoryCounts->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryCounts-get.php)

### inventoryCounts.list

List inventory counts.

`GET /v1/inventory-counts`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"draft"`, `"applied"`, `"canceled"`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `applied_after` | Optional | string | Format: `date-time`. |
| `applied_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryCountsListResponse200](../models/InventoryCountsListResponse200.md#inventorycountslistresponse200).

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
$result = $client->inventoryCounts->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryCounts-list.php)

### inventoryCounts.transition

Set action to apply or cancel an open physical count. The apply action sets inventory levels to the counted quantities and needs an observation on every line. The cancel action closes the count without changing stock. VERSION_CONFLICT on apply also covers a stale saved physical observation with no corresponding field in this request; these details omit param. Recount affected items and save the complete observations before applying again. Physical changes after observation require recounts, including at a trading location; holds and commitments alone do not invalidate observations. Stock-moving transitions return a result with inventory_count as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-counts/{inventory_count_id}/transitions`

Signature: `transition(InventoryCountsTransitionInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [InventoryCountTransitionRequestInput](../models/InventoryCountTransitionRequestInput.md#inventorycounttransitionrequestinput) | The request body for: Transition inventory count. |

Body model: [InventoryCountTransitionRequestInput](../models/InventoryCountTransitionRequestInput.md#inventorycounttransitionrequestinput).

#### inventoryCounts.transition body oneOf variant 1

The `apply` variant of `InventoryCountTransitionRequest`.

Body model: [InventoryCountTransitionRequestApplyInput](../models/InventoryCountTransitionRequestApplyInput.md#inventorycounttransitionrequestapplyinput).

#### inventoryCounts.transition body oneOf variant 1 fields

Field definitions: [shared fields](../models/InventoryCountTransitionRequestApplyInput.md#inventorycounttransitionrequestapplyinput).

#### inventoryCounts.transition body oneOf variant 2

The `cancel` variant of `InventoryCountTransitionRequest`.

Body model: [InventoryCountTransitionRequestCancelInput](../models/InventoryCountTransitionRequestCancelInput.md#inventorycounttransitionrequestcancelinput).

#### inventoryCounts.transition body oneOf variant 2 fields

Field definitions: [shared fields](../models/InventoryCountTransitionRequestCancelInput.md#inventorycounttransitionrequestcancelinput).

#### Response

Returned payload: [InventoryCountResult](../models/InventoryCountResult.md#inventorycountresult).

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

Complete body and metadata: `transitionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryCounts->transition([
  'inventory_count_id' => 'example',
  'body' => (object) [
    'action' => 'apply',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryCounts-transition.php)

### inventoryCounts.update

Replace a count's complete observation set atomically. expected_version is required when replacing observations. Send every item exactly once with the count's current expected_version and each observation's required expected_physical_version. Read the level before physically counting; zero is valid for a missing level. Every assertion must match locked current stock or the whole save is refused. Preserve saved quantities and fences for unchanged lines. Recount affected items before supplying fresh fences, even when quantities are unchanged. Omitted condition quantities retain the matching level snapshot's values. occurred_at records provenance and does not reconstruct historical stock. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`PATCH /v1/inventory-counts/{inventory_count_id}`

Signature: `update(string|Model $inventory_count_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInventoryCountRequestInput](../models/UpdateInventoryCountRequestInput.md#updateinventorycountrequestinput) | The request body for: Update inventory count. |

Body model: [UpdateInventoryCountRequestInput](../models/UpdateInventoryCountRequestInput.md#updateinventorycountrequestinput).

#### inventoryCounts.update body fields

Field definitions: [shared fields](../models/UpdateInventoryCountRequestInput.md#updateinventorycountrequestinput). Models: [InventoryCountObservationRequestInput](../models/InventoryCountObservationRequestInput.md#inventorycountobservationrequestinput), [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput).

#### Response

Returned payload: [InventoryCount](../models/InventoryCount.md#inventorycount).

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

$result = $client->inventoryCounts->update('example', [
  'expected_version' => '2',
  'observations' => [
    (object) [
      'counted_damaged_quantity' => '0',
      'counted_on_hand_quantity' => '12',
      'counted_quality_control_quantity' => '0',
      'counted_quarantined_quantity' => '0',
      'expected_physical_version' => '0',
      'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
    ],
  ],
  'source_system' => (object) [
    'type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryCounts-update.php)

