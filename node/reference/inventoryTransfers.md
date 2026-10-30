[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryTransfers

### inventoryTransfers.create

Create a planned stock transfer between two Locations. Creates a draft and moves no stock, so the Idempotency-Key is optional: each request without a key creates a separate draft. With a key, idempotency is scoped to the authenticated merchant, environment, and endpoint, and the fingerprint includes the canonical request body. To recover a keyed create after a lost response, list inventory transfers with idempotency_key.

`POST /v1/inventory-transfers`

Signature: `create(params: InventoryTransfersCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInventoryTransferRequestInput](../models/CreateInventoryTransferRequest.md#createinventorytransferrequest) | The request body for: Create inventory transfer. |

Body model: [CreateInventoryTransferRequestInput](../models/CreateInventoryTransferRequest.md#createinventorytransferrequest).

#### inventoryTransfers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination_location_id` | Required | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryTransferLineRequestInput](../models/InventoryTransferLineRequest.md#inventorytransferlinerequest) | minItems: `1`. maxItems: `100`. Items: One line of an inventory transfer you create: an item and the requested quantity. |
| `note` | Optional | string | minLength: `1`. |
| `origin_location_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

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

const result = await client.inventoryTransfers.create({destination_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", lines: [{inventory_item_id: "invi_01K1P6G4M7H2N8Q9R3S5T6V7WX", requested_quantity: 1}], origin_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-create.mjs)

### inventoryTransfers.get

Retrieve an inventory transfer, its lines, and supported_actions by ID.

`GET /v1/inventory-transfers/{inventory_transfer_id}`

Signature:

```typescript
get(inventory_transfer_id: InputValue<string>,
 params?: InventoryTransfersGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

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
const result = await client.inventoryTransfers.get("invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryTransfers-get.mjs)

### inventoryTransfers.list

List inventory transfers. Default order: inventory_transfer_id ascending; this key uniquely orders the results.

`GET /v1/inventory-transfers`

Signature: `list(params?: InventoryTransfersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by inventory item. |
| `origin_location_id` | Optional | string | Filter by origin Location. |
| `destination_location_id` | Optional | string | Filter by destination Location. |
| `status` | Optional | Array of string or string | Filter by transfer status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search by inventory_transfer_id, external_reference_id, or note. maxLength: `255`. |
| `closed_reason` | Optional | Array of string or string | Filter by how the transfer ended. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `departed_after` | Optional | string | Inclusive lower bound on departed_at. Format: `date-time`. |
| `departed_before` | Optional | string | Exclusive upper bound on departed_at. Format: `date-time`. |
| `received_after` | Optional | string | Inclusive lower bound on received_at. Format: `date-time`. |
| `received_before` | Optional | string | Exclusive upper bound on received_at. Format: `date-time`. |

#### Response

Returned payload: [InventoryTransferListResponse](../models/InventoryTransferListResponse.md#inventorytransferlistresponse).

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
const result = await client.inventoryTransfers.list({}, {  });
```

[Complete runnable example](../examples/inventoryTransfers-list.mjs)

### inventoryTransfers.transition

Run one action from supported_actions using cumulative line targets. Send expected_version to reject the request if the transfer changed after you read it. The response includes the updated transfer and its inventory effects. Stock-moving transitions return a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory transfer by ID.

`POST /v1/inventory-transfers/{inventory_transfer_id}/transitions`

Signature: `transition(inventory_transfer_id: InputValue<string>, params: InventoryTransfersTransitionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `body` | Required | [InventoryTransferTransitionRequestInput](../models/InventoryTransferTransitionRequest.md#inventorytransfertransitionrequest) | The request body for: Transition inventory transfer. |

Body model: [InventoryTransferTransitionRequestInput](../models/InventoryTransferTransitionRequest.md#inventorytransfertransitionrequest).

#### inventoryTransfers.transition with `action: "depart"`

The `depart` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestDepartInput](../models/InventoryTransferTransitionRequestDepart.md#inventorytransfertransitionrequestdepart).

#### inventoryTransfers.transition with `action: "receive"`

The `receive` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestReceiveInput](../models/InventoryTransferTransitionRequestReceive.md#inventorytransfertransitionrequestreceive).

#### inventoryTransfers.transition with `action: "return_to_origin"`

The `return_to_origin` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestReturnToOriginInput](../models/InventoryTransferTransitionRequestReturnToOrigin.md#inventorytransfertransitionrequestreturntoorigin).

#### inventoryTransfers.transition with `action: "report_loss"`

The `report_loss` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestReportLossInput](../models/InventoryTransferTransitionRequestReportLoss.md#inventorytransfertransitionrequestreportloss).

#### inventoryTransfers.transition with `action: "cancel"`

The `cancel` variant of `InventoryTransferTransitionRequest`.

Body model: [InventoryTransferTransitionRequestCancelInput](../models/InventoryTransferTransitionRequestCancel.md#inventorytransfertransitionrequestcancel).

#### Response

Returned payload: [InventoryTransferResult](../models/InventoryTransferResult.md#inventorytransferresult).

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

const result = await client.inventoryTransfers.transition("invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "depart", expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_departed_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-transition.mjs)

### inventoryTransfers.update

Update an open transfer's planning details. Sending lines replaces the owned collection atomically and requires expected_version. For metadata-only edits, expected_version is optional and enforced when sent. Omitted fields stay unchanged. Send external_reference_id: null to clear it.

`PATCH /v1/inventory-transfers/{inventory_transfer_id}`

Signature: `update(inventory_transfer_id: InputValue<string>, params: InventoryTransfersUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `body` | Required | [UpdateInventoryTransferRequestInput](../models/UpdateInventoryTransferRequest.md#updateinventorytransferrequest) | The request body for: Update inventory transfer. |

Body model: [UpdateInventoryTransferRequestInput](../models/UpdateInventoryTransferRequest.md#updateinventorytransferrequest).

#### inventoryTransfers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Required when any of these fields is present: lines. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `lines` | Optional | Array of object | Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity must remain. Requires expected_version when present. minItems: `1`. maxItems: `100`. |
| `note` | Optional | string or null | Send null to clear it. minLength: `1`. |

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

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

const result = await client.inventoryTransfers.update("invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {note: "Transfer to the main warehouse"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-update.mjs)

