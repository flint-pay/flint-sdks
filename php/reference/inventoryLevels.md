[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryLevels

### inventoryLevels.get

Retrieve an inventory level's current quantities and version by ID.

`GET /v1/inventory-levels/{inventory_level_id}`

Signature: `get(string|Model $inventory_level_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string | Items values: `"inventory_item"`. |
| `inventory_level_id` | Required | string |  |

#### Response

Returned payload: [InventoryLevel](../models/InventoryLevel.md#inventorylevel).

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

```php
$result = $client->inventoryLevels->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryLevels-get.php)

### inventoryLevels.list

List inventory levels. Send expand=inventory_item to render each level's inventory item inline, so a stock table needs no read per row. Filter by inventory_item_status to see only the levels behind items that can be sold. Levels are strongly consistent individually, but pages may reflect different committed instants.

`GET /v1/inventory-levels`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `inventory_item_status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `has_available_quantity` | Optional | boolean |  |
| `has_unavailable_condition` | Optional | boolean |  |
| `has_shortage` | Optional | boolean |  |
| `query` | Optional | string | maxLength: `255`. |
| `min_available_quantity` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `max_available_quantity` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"inventory_item"`. |

#### Response

Returned payload: [InventoryLevelsListResponse200](../models/InventoryLevelsListResponse200.md#inventorylevelslistresponse200).

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

```php
$result = $client->inventoryLevels->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryLevels-list.php)

### inventoryLevels.update

Set one inventory level's safety_stock_quantity. expected_version is optional and enforced when sent. The version changes on every quantity or claim change, including holds and commits, so read the level immediately before a PATCH. Returns the updated inventory level. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`PATCH /v1/inventory-levels/{inventory_level_id}`

Signature: `update(string|Model $inventory_level_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_level_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInventoryLevelRequestInput](../models/UpdateInventoryLevelRequestInput.md#updateinventorylevelrequestinput) | The request body for: Update inventory level. |

Body model: [UpdateInventoryLevelRequestInput](../models/UpdateInventoryLevelRequestInput.md#updateinventorylevelrequestinput).

#### inventoryLevels.update body fields

Field definitions: [shared fields](../models/UpdateInventoryLevelRequestInput.md#updateinventorylevelrequestinput).

#### Response

Returned payload: [InventoryLevel](../models/InventoryLevel.md#inventorylevel).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryLevels->update('example', [
  'safety_stock_quantity' => '0',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryLevels-update.php)

