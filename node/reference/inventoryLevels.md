[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryLevels

### inventoryLevels.get

Retrieve an inventory level's current quantities and version by ID.

`GET /v1/inventory-levels/{inventory_level_id}`

Signature: `get(inventory_level_id: InputValue<string>, params?: InventoryLevelsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string or string | Supported expansions: inventory_item. Include the full inventory item with expand=inventory_item. Requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. Items values: `"inventory_item"`. Values: `"inventory_item"`. |
| `inventory_level_id` | Required | string | Flint inventory level ID. |

#### Response

Returned payload: [InventoryLevel](../models/InventoryLevel.md#inventorylevel).

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
const result = await client.inventoryLevels.get("invl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryLevels-get.mjs)

### inventoryLevels.list

List inventory levels. Send expand=inventory_item to render each level's inventory item inline, so a stock table needs no read per row. Filter by inventory_item_status to see only the levels behind items that can be sold. Levels are strongly consistent individually, but pages may reflect different committed instants. Default order: inventory_level_id ascending; this key uniquely orders the results.

`GET /v1/inventory-levels`

Signature: `list(params?: InventoryLevelsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by inventory item. |
| `location_id` | Optional | string | Filter by Location. |
| `inventory_item_status` | Optional | Array of string or string | Filter by the status of the inventory item the level belongs to. Only active items can be routed or reserved. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `has_available_quantity` | Optional | boolean | True selects levels with available quantity; false selects levels with zero available quantity. Omit for all levels. |
| `has_unavailable_condition` | Optional | boolean | True selects levels with unavailable physical stock; false selects levels with none. Omit for all levels. |
| `has_shortage` | Optional | boolean | True selects levels with a shortage; false selects levels with none. Omit for all levels. |
| `query` | Optional | string | Search inventory item ID, name, SKU, or barcode. Case-insensitive substring match. maxLength: `255`. |
| `min_available_quantity` | Optional | integer | Inclusive lower bound on available_quantity. Format: `int64`. minimum: `0`. |
| `max_available_quantity` | Optional | integer | Inclusive upper bound on available_quantity. Format: `int64`. minimum: `0`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: inventory_item. The expansion resolves with one batched lookup per page. Expansion requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. Items values: `"inventory_item"`. Values: `"inventory_item"`. |

#### Response

Returned payload: [InventoryLevelListResponse](../models/InventoryLevelListResponse.md#inventorylevellistresponse).

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
const result = await client.inventoryLevels.list({}, {  });
```

[Complete runnable example](../examples/inventoryLevels-list.mjs)

### inventoryLevels.update

Set one inventory level's safety_stock_quantity. expected_version is optional and enforced when sent. The version changes on every quantity or claim change, including holds and commits, so read the level immediately before a PATCH. Returns the updated inventory level. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory level by ID.

`PATCH /v1/inventory-levels/{inventory_level_id}`

Signature: `update(inventory_level_id: InputValue<string>, params: InventoryLevelsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_level_id` | Required | string | Flint inventory level ID. |
| `body` | Required | [UpdateInventoryLevelRequestInput](../models/UpdateInventoryLevelRequest.md#updateinventorylevelrequest) | The request body for: Update inventory level. |

Body model: [UpdateInventoryLevelRequestInput](../models/UpdateInventoryLevelRequest.md#updateinventorylevelrequest).

#### inventoryLevels.update body fields

Field definitions: [shared fields](../models/UpdateInventoryLevelRequest.md#updateinventorylevelrequest).

#### Response

Returned payload: [InventoryLevel](../models/InventoryLevel.md#inventorylevel).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryLevels.update("invl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {safety_stock_quantity: 5}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryLevels-update.mjs)

