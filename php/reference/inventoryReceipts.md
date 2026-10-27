[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryReceipts

### inventoryReceipts.create

Record a completed inventory receipt and disposition. This is a downstream stock effect, not the customer Return lifecycle. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-receipts`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryReceiptRequestInput](../models/CreateInventoryReceiptRequestInput.md#createinventoryreceiptrequestinput) | The request body for: Create inventory receipt. |

Body model: [CreateInventoryReceiptRequestInput](../models/CreateInventoryReceiptRequestInput.md#createinventoryreceiptrequestinput).

#### inventoryReceipts.create body fields

Field definitions: [shared fields](../models/CreateInventoryReceiptRequestInput.md#createinventoryreceiptrequestinput). Models: [InventoryReceiptLineRequestInput](../models/InventoryReceiptLineRequestInput.md#inventoryreceiptlinerequestinput), [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput).

#### Response

Returned payload: [InventoryReceiptResult](../models/InventoryReceiptResult.md#inventoryreceiptresult).

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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryReceipts->create([
  'lines' => [],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryReceipts-create.php)

### inventoryReceipts.get

Retrieve a completed inventory receipt and its disposition lines by ID.

`GET /v1/inventory-receipts/{inventory_receipt_id}`

Signature: `get(string|Model $inventory_receipt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_receipt_id` | Required | string |  |

#### Response

Returned payload: [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt).

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
$result = $client->inventoryReceipts->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryReceipts-get.php)

### inventoryReceipts.list

List completed inventory receipt effects. Use typed Return filters for reconciliation when the receipt was created by Returns.

`GET /v1/inventory-receipts`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `receiving_location_id` | Optional | string |  |
| `inventory_reservation_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_disposition_id` | Optional | string |  |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `source_system_type` | Optional | Array of string | minItems: `1`. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryReceiptsListResponse200](../models/InventoryReceiptsListResponse200.md#inventoryreceiptslistresponse200).

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
$result = $client->inventoryReceipts->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryReceipts-list.php)

