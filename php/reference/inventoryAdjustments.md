[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAdjustments

### inventoryAdjustments.create

Record a stock change by what happened: stock received, returned, sold, stolen, lost, or moved between conditions, or an absolute count or correction. Flint computes the change against the current level. Returns the adjustment, its movement IDs, and the resulting level for every level touched. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory adjustments with the same idempotency_key, or list inventory movements with that idempotency_key.

`POST /v1/inventory-adjustments`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInventoryAdjustmentRequestInput](../models/CreateInventoryAdjustmentRequestInput.md#createinventoryadjustmentrequestinput) | The request body for: Create inventory adjustment. |

Body model: [CreateInventoryAdjustmentRequestInput](../models/CreateInventoryAdjustmentRequestInput.md#createinventoryadjustmentrequestinput).

#### inventoryAdjustments.create with `reason: "loss" | "received" | "returned" | "sold" | "theft"`

The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of `CreateInventoryAdjustmentRequest`. The `returned` variant of `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`. The `theft` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentQuantityRequestInput](../models/CreateInventoryAdjustmentQuantityRequestInput.md#createinventoryadjustmentquantityrequestinput).

#### inventoryAdjustments.create with `reason: "condition_changed"`

The `condition_changed` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentConditionChangeRequestInput](../models/CreateInventoryAdjustmentConditionChangeRequestInput.md#createinventoryadjustmentconditionchangerequestinput).

#### inventoryAdjustments.create with `reason: "counted"`

The `counted` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentCountedRequestInput](../models/CreateInventoryAdjustmentCountedRequestInput.md#createinventoryadjustmentcountedrequestinput).

#### inventoryAdjustments.create with `reason: "correction"`

The `correction` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentCorrectionRequestInput](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput).

#### Response

Returned payload: [InventoryAdjustmentResult](../models/InventoryAdjustmentResult.md#inventoryadjustmentresult).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAdjustments->create([
  'lines' => [
    (object) [
      'expected_physical_version' => 7,
      'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'location_id' => 'loc_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'on_hand_quantity' => 40,
    ],
  ],
  'reason' => 'counted',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAdjustments-create.php)

### inventoryAdjustments.get

Retrieve an inventory adjustment and its lines by ID.

`GET /v1/inventory-adjustments/{inventory_adjustment_id}`

Signature: `get(string|Model $inventory_adjustment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_adjustment_id` | Required | string | Flint inventory adjustment ID. |

#### Response

Returned payload: [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment).

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
$result = $client->inventoryAdjustments->get('invadj_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAdjustments-get.php)

### inventoryAdjustments.list

List inventory adjustments. Default order: inventory_adjustment_id ascending; this key uniquely orders the results.

`GET /v1/inventory-adjustments`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by inventory item. |
| `location_id` | Optional | string | Filter by Location. |
| `reason` | Optional | Array of string or string | Filter by adjustment reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `source_system_type` | Optional | Array of string or string | Filter by source-system type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string | Filter by external source ID. |
| `external_actor_id` | Optional | string | Filter by external actor ID. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [InventoryAdjustmentListResponse](../models/InventoryAdjustmentListResponse.md#inventoryadjustmentlistresponse).

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
$result = $client->inventoryAdjustments->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAdjustments-list.php)

