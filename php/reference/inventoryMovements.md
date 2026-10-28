[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryMovements

### inventoryMovements.get

Retrieve an inventory movement and its stock changes by ID.

`GET /v1/inventory-movements/{inventory_movement_id}`

Signature: `get(string|Model $inventory_movement_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->inventoryMovements->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryMovements-get.php)

### inventoryMovements.list

List inventory movements, oldest recorded first. Send expand=inventory_item to render each movement's inventory item inline, so a history table needs no read per row. Filter by idempotency_key to recover the movements a command produced. Send sort_direction=desc to read the newest movements first. Default order: created_at ascending, then inventory_movement_id ascending.

`GET /v1/inventory-movements`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `type` | Optional | Array of string | minItems: `1`. Items values: [16 declared values](../models/InventoryMovementInput.md#inventorymovementinput-type-values). |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
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

Returned payload: [InventoryMovementsListResponse200](../models/InventoryMovementsListResponse200.md#inventorymovementslistresponse200).

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
$result = $client->inventoryMovements->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryMovements-list.php)

