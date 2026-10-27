[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryMovements

### inventoryMovements.get

Retrieve an inventory movement and its stock changes by ID.

`GET /v1/inventory-movements/{inventory_movement_id}`

Signature:

```typescript
get(inventory_movement_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"inventory_item">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string | Items values: `"inventory_item"`. |
| `inventory_movement_id` | Required | string |  |

#### Response

Returned payload: [InventoryMovement](../models/InventoryMovement.md#inventorymovement).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.inventoryMovements.get("example", {}, {  });
```

[Complete runnable example](../examples/inventoryMovements-get.mjs)

### inventoryMovements.list

List inventory movements, oldest recorded first. Send expand=inventory_item to render each movement's inventory item inline, so a history table needs no read per row. Filter by idempotency_key to recover the movements a command produced. Send sort_direction=desc to read the newest movements first.

`GET /v1/inventory-movements`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "inventory_item_id"?: InputValue<string>;
  "location_id"?: InputValue<string>;
  "type"?: InputValue<Array<"adjustment" |
    "count_applied" |
    "reservation_consumed" |
    "reservation_committed" |
    "reservation_commitment_released" |
    "reservation_expired" |
    "reservation_held" |
    "reservation_hold_released" |
    "reservation_reallocated_in" |
    "reservation_reallocated_out" |
    "return_received" |
    "safety_stock_change" |
    "transfer_departed" |
    "transfer_received" |
    "transfer_returned" |
    "transfer_lost">>;
  "reason"?: InputValue<Array<"received" |
    "returned" |
    "sold" |
    "theft" |
    "loss" |
    "condition_changed" |
    "counted" |
    "correction">>;
  "idempotency_key"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "return_disposition_id"?: InputValue<string>;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "expand"?: InputValue<Array<"inventory_item">>;
  "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
  "external_source_id"?: InputValue<string>;
  "external_actor_id"?: InputValue<string>;
  "occurred_after"?: InputValue<string | globalThis.Date>;
  "occurred_before"?: InputValue<string | globalThis.Date>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "source_reference_type"?: InputValue<Array<"fulfillment" |
    "inventory_adjustment" |
    "inventory_count" |
    "inventory_level" |
    "inventory_receipt" |
    "inventory_reservation" |
    "inventory_transfer">>;
  "source_reference_id"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `type` | Optional | Array of string | minItems: `1`. Items values: [16 declared values](../models/InventoryMovement.md#inventorymovement-type-values). |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `idempotency_key` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_disposition_id` | Optional | string |  |
| `sort_direction` | Optional | string | Default: `"asc"`. Values: `"asc"`, `"desc"`. |
| `expand` | Optional | Array of string | Items values: `"inventory_item"`. |
| `source_system_type` | Optional | Array of string | minItems: `1`. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `source_reference_type` | Optional | Array of string | minItems: `1`. Items values: [7 declared values](#inventorymovementslist-input-source_reference_type--values). |
| `source_reference_id` | Optional | string |  |

#### inventoryMovements.list input source_reference_type [] values

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.inventoryMovements.list({}, {  });
```

[Complete runnable example](../examples/inventoryMovements-list.mjs)

