[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryReceipts

### inventoryReceipts.create

Record a completed inventory receipt and disposition. This is a downstream stock effect, not the customer Return lifecycle. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory receipts with the same idempotency_key, or list inventory movements with that idempotency_key.

`POST /v1/inventory-receipts`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInventoryReceiptRequestInput](../models/CreateInventoryReceiptRequestInput.md#createinventoryreceiptrequestinput) | The request body for: Create inventory receipt. |

Body model: [CreateInventoryReceiptRequestInput](../models/CreateInventoryReceiptRequestInput.md#createinventoryreceiptrequestinput).

#### inventoryReceipts.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryReceiptLineRequestInput](../models/InventoryReceiptLineRequestInput.md#inventoryreceiptlinerequestinput) | Items: One line of an inventory receipt you supply: a quantity of an item received at a Location with its disposition. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### Response

Returned payload: [InventoryReceiptResult](../models/InventoryReceiptResult.md#inventoryreceiptresult).

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

$result = $client->inventoryReceipts->create([
  'external_actor_id' => 'receiver_204',
  'lines' => [
    (object) [
      'disposition' => 'sellable',
      'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'inventory_reservation_id' => 'invr_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'inventory_reservation_line_id' => 'invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'quantity' => 1,
      'receiving_location_id' => 'loc_01K0P7W6A4N9F3J2T8Q5R1C6XM',
    ],
  ],
  'occurred_at' => '2026-07-21T14:18:00Z',
  'source_system' => (object) [
    'external_source_id' => 'east-coast-wms',
    'type' => 'wms',
  ],
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
| `inventory_receipt_id` | Required | string | Flint inventory receipt ID. |

#### Response

Returned payload: [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt).

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
$result = $client->inventoryReceipts->get('invrec_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryReceipts-get.php)

### inventoryReceipts.list

List completed inventory receipt effects. Use typed Return filters for reconciliation when the receipt was created by Returns. Default order: inventory_receipt_id ascending; this key uniquely orders the results.

`GET /v1/inventory-receipts`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by inventory item. |
| `receiving_location_id` | Optional | string | Filter by receiving Location. |
| `inventory_reservation_id` | Optional | string | Filter by source reservation. |
| `return_id` | Optional | string | Filter by the customer Return that produced the receipt. |
| `return_disposition_id` | Optional | string | Filter by the Return disposition that produced the receipt. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `source_system_type` | Optional | Array of string or string | Filter by source-system type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string | Filter by external source ID. |
| `external_actor_id` | Optional | string | Filter by external actor ID. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [InventoryReceiptListResponse](../models/InventoryReceiptListResponse.md#inventoryreceiptlistresponse).

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
$result = $client->inventoryReceipts->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryReceipts-list.php)

