[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryTransfers

### inventoryTransfers.create

Create a planned stock transfer between two Locations. Creates a draft and moves no stock, so the Idempotency-Key is optional: each request without a key creates a separate draft. With a key, idempotency is scoped to the authenticated merchant, environment, and endpoint, and the fingerprint includes the canonical request body. To recover a keyed create after a lost response, list inventory transfers with idempotency_key.

`POST /v1/inventory-transfers`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryTransferRequestInput](../models/CreateInventoryTransferRequestInput.md#createinventorytransferrequestinput) | The request body for: Create inventory transfer. |

Body model: [CreateInventoryTransferRequestInput](../models/CreateInventoryTransferRequestInput.md#createinventorytransferrequestinput).

#### inventoryTransfers.create body fields

Field definitions: [shared fields](../models/CreateInventoryTransferRequestInput.md#createinventorytransferrequestinput). Models: [InventoryTransferLineRequestInput](../models/InventoryTransferLineRequestInput.md#inventorytransferlinerequestinput).

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryTransfers->create([
  'destination_location_id' => 'example',
  'lines' => [
    (object) [
      'inventory_item_id' => 'example',
      'requested_quantity' => '1',
    ],
  ],
  'origin_location_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryTransfers-create.php)

### inventoryTransfers.get

Retrieve an inventory transfer, its lines, and supported_actions by ID.

`GET /v1/inventory-transfers/{inventory_transfer_id}`

Signature: `get(string|Model $inventory_transfer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string |  |

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

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
$result = $client->inventoryTransfers->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryTransfers-get.php)

### inventoryTransfers.list

List inventory transfers. Default order: inventory_transfer_id ascending; this key uniquely orders the results.

`GET /v1/inventory-transfers`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `origin_location_id` | Optional | string |  |
| `destination_location_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | maxLength: `255`. |
| `closed_reason` | Optional | Array of string | minItems: `1`. Items values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `departed_after` | Optional | string | Format: `date-time`. |
| `departed_before` | Optional | string | Format: `date-time`. |
| `received_after` | Optional | string | Format: `date-time`. |
| `received_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryTransfersListResponse200](../models/InventoryTransfersListResponse200.md#inventorytransferslistresponse200).

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
$result = $client->inventoryTransfers->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryTransfers-list.php)

### inventoryTransfers.transition

Run one action from supported_actions using cumulative line targets. Send expected_version to reject the request if the transfer changed after you read it. The response includes the updated transfer and its inventory effects. Stock-moving transitions return a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-transfers/{inventory_transfer_id}/transitions`

Signature: `transition(InventoryTransfersTransitionInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [InventoryTransferTransitionRequestInput](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput) | The request body for: Transition inventory transfer. |

Body model: [InventoryTransferTransitionRequestInput](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput).

#### inventoryTransfers.transition body oneOf variant 1

The `depart` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestDepartInput](../models/InventoryTransferTransitionRequestDepartInput.md#inventorytransfertransitionrequestdepartinput).

#### inventoryTransfers.transition body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"depart"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

#### inventoryTransfers.transition body oneOf variant 2

The `receive` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestReceiveInput](../models/InventoryTransferTransitionRequestReceiveInput.md#inventorytransfertransitionrequestreceiveinput).

#### inventoryTransfers.transition body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"receive"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

#### inventoryTransfers.transition body oneOf variant 3

The `return_to_origin` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestReturnToOriginInput](../models/InventoryTransferTransitionRequestReturnToOriginInput.md#inventorytransfertransitionrequestreturntoorigininput).

#### inventoryTransfers.transition body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"return_to_origin"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

#### inventoryTransfers.transition body oneOf variant 4

The `report_loss` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestReportLossInput](../models/InventoryTransferTransitionRequestReportLossInput.md#inventorytransfertransitionrequestreportlossinput).

#### inventoryTransfers.transition body oneOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"report_loss"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

#### inventoryTransfers.transition body oneOf variant 5

The `cancel` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestCancelInput](../models/InventoryTransferTransitionRequestCancelInput.md#inventorytransfertransitionrequestcancelinput).

#### inventoryTransfers.transition body oneOf variant 5 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"cancel"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

#### Response

Returned payload: [InventoryTransferResult](../models/InventoryTransferResult.md#inventorytransferresult).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryTransfers->transition([
  'inventory_transfer_id' => 'example',
  'body' => (object) [
    'action' => 'depart',
    'lines' => [
      (object) [
        'inventory_transfer_line_id' => 'example',
        'target_departed_quantity' => '0',
      ],
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryTransfers-transition.php)

### inventoryTransfers.update

Update an open transfer's planning details. Sending lines replaces the owned collection atomically and requires expected_version. For metadata-only edits, expected_version is optional and enforced when sent. Omitted fields stay unchanged. Send external_reference_id: null to clear it.

`PATCH /v1/inventory-transfers/{inventory_transfer_id}`

Signature: `update(string|Model $inventory_transfer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInventoryTransferRequestInput](../models/UpdateInventoryTransferRequestInput.md#updateinventorytransferrequestinput) | The request body for: Update inventory transfer. |

Body model: [UpdateInventoryTransferRequestInput](../models/UpdateInventoryTransferRequestInput.md#updateinventorytransferrequestinput).

#### inventoryTransfers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Required when any of these fields is present: lines. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `lines` | Optional | Array of object | Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity must remain. Requires expected_version when present. minItems: `1`. maxItems: `100`. |
| `note` | Optional | string or null | Send null to clear it. minLength: `1`. |

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryTransfers->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryTransfers-update.php)

