[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryCounts

### inventoryCounts.create

Open a physical count for selected inventory items at one Location. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory counts with the same idempotency_key.

`POST /v1/inventory-counts`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
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

$result = $client->inventoryCounts->create([
  'inventory_item_ids' => [
    'invi_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  ],
  'location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
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
| `inventory_count_id` | Required | string | Flint inventory count ID. |

#### Response

Returned payload: [InventoryCount](../models/InventoryCount.md#inventorycount).

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
$result = $client->inventoryCounts->get('invc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryCounts-get.php)

### inventoryCounts.list

List inventory counts. Default order: inventory_count_id ascending; this key uniquely orders the results.

`GET /v1/inventory-counts`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by a counted inventory item. |
| `location_id` | Optional | string | Filter by Location. |
| `status` | Optional | Array of string or string | Filter by count status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"draft"`, `"applied"`, `"canceled"`. Values: `"draft"`, `"applied"`, `"canceled"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `applied_after` | Optional | string | Inclusive lower bound on applied_at. Format: `date-time`. |
| `applied_before` | Optional | string | Exclusive upper bound on applied_at. Format: `date-time`. |

#### Response

Returned payload: [InventoryCountListResponse](../models/InventoryCountListResponse.md#inventorycountlistresponse).

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
$result = $client->inventoryCounts->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryCounts-list.php)

### inventoryCounts.transition

Set action to apply or cancel an open physical count. The apply action sets inventory levels to the counted quantities and needs an observation on every line. The cancel action closes the count without changing stock. VERSION_CONFLICT on apply also covers a stale saved physical observation with no corresponding field in this request; these details omit param. Recount affected items and save the complete observations before applying again. Physical changes after observation require recounts, including at a trading location; holds and commitments alone do not invalidate observations. Stock-moving transitions return a result with inventory_count as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory count by ID.

`POST /v1/inventory-counts/{inventory_count_id}/transitions`

Signature: `transition(string|Model $inventory_count_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count_id` | Required | string | Flint inventory count ID. |
| `body` | Required | [InventoryCountTransitionRequestInput](../models/InventoryCountTransitionRequestInput.md#inventorycounttransitionrequestinput) | The request body for: Transition inventory count. |

Body model: [InventoryCountTransitionRequestInput](../models/InventoryCountTransitionRequestInput.md#inventorycounttransitionrequestinput).

#### inventoryCounts.transition with `action: "apply"`

The `apply` variant of `InventoryCountTransitionRequest`.

Body model: [InventoryCountTransitionRequestApplyInput](../models/InventoryCountTransitionRequestApplyInput.md#inventorycounttransitionrequestapplyinput).

#### inventoryCounts.transition with `action: "cancel"`

The `cancel` variant of `InventoryCountTransitionRequest`.

Body model: [InventoryCountTransitionRequestCancelInput](../models/InventoryCountTransitionRequestCancelInput.md#inventorycounttransitionrequestcancelinput).

#### Response

Returned payload: [InventoryCountResult](../models/InventoryCountResult.md#inventorycountresult).

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

$result = $client->inventoryCounts->transition('invc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'action' => 'apply',
  'expected_version' => 2,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryCounts-transition.php)

### inventoryCounts.update

Replace a count's complete observation set atomically. expected_version is required when replacing observations. Send every item exactly once with the count's current expected_version and each observation's required expected_physical_version. Read the level before physically counting; zero is valid for a missing level. Every assertion must match locked current stock or the whole save is refused. Preserve saved quantities and fences for unchanged lines. Recount affected items before supplying fresh fences, even when quantities are unchanged. Omitted condition quantities retain the matching level snapshot's values. occurred_at records provenance and does not reconstruct historical stock. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory count by ID.

`PATCH /v1/inventory-counts/{inventory_count_id}`

Signature: `update(string|Model $inventory_count_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count_id` | Required | string | Flint inventory count ID. |
| `body` | Required | [UpdateInventoryCountRequestInput](../models/UpdateInventoryCountRequestInput.md#updateinventorycountrequestinput) | The request body for: Update inventory count. |

Body model: [UpdateInventoryCountRequestInput](../models/UpdateInventoryCountRequestInput.md#updateinventorycountrequestinput).

#### inventoryCounts.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Required | integer | Format: `uint64`. minimum: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `observations` | Required | Array of [InventoryCountObservationRequestInput](../models/InventoryCountObservationRequestInput.md#inventorycountobservationrequestinput) | Complete replacement containing every count item exactly once. Every physical version must match current stock or the entire save is refused. Recount affected items before submitting fresh fences. minItems: `1`. maxItems: `100`. Items: A counted quantity for one item in an inventory count, with the physical version it was read at. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### Response

Returned payload: [InventoryCount](../models/InventoryCount.md#inventorycount).

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

$result = $client->inventoryCounts->update('invc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'expected_version' => 2,
  'observations' => [
    (object) [
      'counted_damaged_quantity' => 0,
      'counted_on_hand_quantity' => 12,
      'counted_quality_control_quantity' => 0,
      'counted_quarantined_quantity' => 0,
      'expected_physical_version' => 0,
      'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
    ],
  ],
  'source_system' => (object) [
    'type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryCounts-update.php)

