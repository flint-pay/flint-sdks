[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryMovements

### inventoryMovements.get

Retrieve an inventory movement and its stock changes by ID.

`GET /v1/inventory-movements/{inventory_movement_id}`

Signature:

```typescript
get(inventory_movement_id: InputValue<string>,
 params?: InventoryMovementsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string or string | Supported expansions: inventory_item. Include the full inventory item with expand=inventory_item. Requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. Items values: `"inventory_item"`. Values: `"inventory_item"`. |
| `inventory_movement_id` | Required | string | Flint inventory movement ID. |

#### Response

Returned payload: [InventoryMovement](../models/InventoryMovement.md#inventorymovement).

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
const result = await client.inventoryMovements.get("invm_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryMovements-get.mjs)

### inventoryMovements.list

List inventory movements, oldest recorded first. Send expand=inventory_item to render each movement's inventory item inline, so a history table needs no read per row. Filter by idempotency_key to recover the movements a command produced. Send sort_direction=desc to read the newest movements first. Default order: created_at ascending, then inventory_movement_id ascending.

`GET /v1/inventory-movements`

Signature: `list(params?: InventoryMovementsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by inventory item. |
| `location_id` | Optional | string | Filter by Location. |
| `type` | Optional | Array of string or string | Filter by movement type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [16 declared values](../models/InventoryMovement.md#inventorymovement-type-values). Values: [16 declared values](../models/InventoryMovement.md#inventorymovement-type-values). |
| `reason` | Optional | Array of string or string | Filter adjustment movements by the adjustment reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `return_id` | Optional | string | Filter by the customer Return that produced the movement. |
| `return_disposition_id` | Optional | string | Filter by the Return disposition that produced the movement. |
| `sort_direction` | Optional | string | Sort direction. Defaults to asc. Default: `"asc"`. Values: `"asc"`, `"desc"`. |
| `expand` | Optional | Array of string or string | Supported expansions: inventory_item. The expansion resolves with one batched lookup per page. Expansion requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. Items values: `"inventory_item"`. Values: `"inventory_item"`. |
| `source_system_type` | Optional | Array of string or string | Filter by source-system type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string | Filter by external source ID. |
| `external_actor_id` | Optional | string | Filter by external actor ID. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `source_reference_type` | Optional | Array of string or string | Filter by source_reference.resource_type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [7 declared values](#inventorymovementslist-input-source_reference_type--values). Values: [7 declared values](#inventorymovementslist-input-source_reference_type-values). |
| `source_reference_id` | Optional | string | Filter by source_reference.resource_id. |

#### inventoryMovements.list input source_reference_type [] values

- `"fulfillment"`
- `"inventory_adjustment"`
- `"inventory_count"`
- `"inventory_level"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_transfer"`

#### inventoryMovements.list input source_reference_type values

- `"fulfillment"`
- `"inventory_adjustment"`
- `"inventory_count"`
- `"inventory_level"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_transfer"`

#### Response

Returned payload: [InventoryMovementListResponse](../models/InventoryMovementListResponse.md#inventorymovementlistresponse).

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
const result = await client.inventoryMovements.list({}, {  });
```

[Complete runnable example](../examples/inventoryMovements-list.mjs)

