[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryTransfers

### inventoryTransfers.cancel

Cancels requested quantity that hasn't departed. Call it only when cancel is in supported_actions. Lines carry cumulative targets, not deltas. Returns a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory transfer by ID.

`POST /v1/inventory-transfers/{inventory_transfer_id}/cancel`

Signature: `cancel(inventory_transfer_id: InputValue<string>, params: InventoryTransfersCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CancelInventoryTransferRequestInput](../models/CancelInventoryTransferRequest.md#cancelinventorytransferrequest) | Cancels requested quantity that hasn't departed. |

Body model: [CancelInventoryTransferRequestInput](../models/CancelInventoryTransferRequest.md#cancelinventorytransferrequest).

#### inventoryTransfers.cancel body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Transfer version the caller last read. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

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

const result = await client.inventoryTransfers.cancel("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_canceled_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-cancel.mjs)

### inventoryTransfers.create

Create a planned stock transfer between two Locations. Creates a draft and moves no stock, so an idempotency key is optional: each request without a key creates a separate draft. With a key, a retry must send the same request body, and idempotency is scoped to the authenticated merchant, environment, and endpoint. To recover a keyed create after a lost response, list inventory transfers with idempotency_key.

`POST /v1/inventory-transfers`

Signature: `create(params: InventoryTransfersCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateInventoryTransferRequestInput](../models/CreateInventoryTransferRequest.md#createinventorytransferrequest) | The request body for: Create inventory transfer. |

Body model: [CreateInventoryTransferRequestInput](../models/CreateInventoryTransferRequest.md#createinventorytransferrequest).

#### inventoryTransfers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination_location_id` | Required | string | ID of the Location the stock goes to. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryTransferLineRequestInput](../models/InventoryTransferLineRequest.md#inventorytransferlinerequest) | Items to transfer, from 1 to 100 lines. minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | Free-text note about the transfer. minLength: `1`. |
| `origin_location_id` | Required | string | ID of the Location the stock leaves. minLength: `1`. |

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

### inventoryTransfers.depart

Takes stock off the origin location and puts it in transit. Call it only when depart is in supported_actions. Lines carry cumulative targets, not deltas. Returns a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory transfer by ID.

`POST /v1/inventory-transfers/{inventory_transfer_id}/depart`

Signature: `depart(inventory_transfer_id: InputValue<string>, params: InventoryTransfersDepartParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [DepartInventoryTransferRequestInput](../models/DepartInventoryTransferRequest.md#departinventorytransferrequest) | Takes stock off the origin location and puts it in transit. |

Body model: [DepartInventoryTransferRequestInput](../models/DepartInventoryTransferRequest.md#departinventorytransferrequest).

#### inventoryTransfers.depart body fields

Field definitions: [shared fields](#inventorytransferscancel-body-fields). Models: [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest).

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

const result = await client.inventoryTransfers.depart("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_departed_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-depart.mjs)

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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
const result = await client.inventoryTransfers.get("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {}, {  });
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
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by inventory item. |
| `origin_location_id` | Optional | string | Filter by origin Location. |
| `destination_location_id` | Optional | string | Filter by destination Location. |
| `status` | Optional | Array of string or string | Filter by transfer status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact, case-sensitive match on the caller-owned external reference ID. Must contain 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search by inventory_transfer_id, external_reference_id, or note. maxLength: `255`. |
| `closed_reason` | Optional | Array of string or string | Filter by how the transfer ended. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `departed_after` | Optional | string | Inclusive lower bound on departed_at. Format: `date-time`. |
| `departed_before` | Optional | string | Exclusive upper bound on departed_at. Format: `date-time`. |
| `received_after` | Optional | string | Inclusive lower bound on received_at. Format: `date-time`. |
| `received_before` | Optional | string | Exclusive upper bound on received_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [InventoryTransferListResponse](../models/InventoryTransferListResponse.md#inventorytransferlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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

### inventoryTransfers.receive

Adds in-transit stock to the destination location. Optional condition targets split the received quantity by condition. Call it only when receive is in supported_actions. Lines carry cumulative targets, not deltas. Returns a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory transfer by ID.

`POST /v1/inventory-transfers/{inventory_transfer_id}/receive`

Signature: `receive(inventory_transfer_id: InputValue<string>, params: InventoryTransfersReceiveParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ReceiveInventoryTransferRequestInput](../models/ReceiveInventoryTransferRequest.md#receiveinventorytransferrequest) | Adds in-transit stock to the destination location. Optional condition targets split the received quantity by condition. |

Body model: [ReceiveInventoryTransferRequestInput](../models/ReceiveInventoryTransferRequest.md#receiveinventorytransferrequest).

#### inventoryTransfers.receive body fields

Field definitions: [shared fields](#inventorytransferscancel-body-fields). Models: [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest).

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

const result = await client.inventoryTransfers.receive("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_received_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-receive.mjs)

### inventoryTransfers.reportLoss

Records in-transit stock as lost. Call it only when report_loss is in supported_actions. Lines carry cumulative targets, not deltas. Returns a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory transfer by ID.

`POST /v1/inventory-transfers/{inventory_transfer_id}/report-loss`

Signature: `reportLoss(inventory_transfer_id: InputValue<string>, params: InventoryTransfersReportLossParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ReportInventoryTransferLossRequestInput](../models/ReportInventoryTransferLossRequest.md#reportinventorytransferlossrequest) | Records in-transit stock as lost. |

Body model: [ReportInventoryTransferLossRequestInput](../models/ReportInventoryTransferLossRequest.md#reportinventorytransferlossrequest).

#### inventoryTransfers.reportLoss body fields

Field definitions: [shared fields](#inventorytransferscancel-body-fields). Models: [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest).

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

const result = await client.inventoryTransfers.reportLoss("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_lost_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-reportLoss.mjs)

### inventoryTransfers.returnToOrigin

Puts in-transit stock back at the origin location. Call it only when return_to_origin is in supported_actions. Lines carry cumulative targets, not deltas. Returns a result with inventory_transfer as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory transfer by ID.

`POST /v1/inventory-transfers/{inventory_transfer_id}/return-to-origin`

Signature:

```typescript
returnToOrigin(inventory_transfer_id: InputValue<string>,
 params: InventoryTransfersReturnToOriginParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ReturnInventoryTransferToOriginRequestInput](../models/ReturnInventoryTransferToOriginRequest.md#returninventorytransfertooriginrequest) | Puts in-transit stock back at the origin location. |

Body model: [ReturnInventoryTransferToOriginRequestInput](../models/ReturnInventoryTransferToOriginRequest.md#returninventorytransfertooriginrequest).

#### inventoryTransfers.returnToOrigin body fields

Field definitions: [shared fields](#inventorytransferscancel-body-fields). Models: [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest).

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

const result = await client.inventoryTransfers.returnToOrigin("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_returned_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryTransfers-returnToOrigin.mjs)

### inventoryTransfers.update

Update an open transfer's planning details. Sending lines replaces the owned collection atomically and requires expected_version. For metadata-only edits, expected_version is optional and enforced when sent. Omitted fields stay unchanged. Send external_reference_id: null to clear it.

`PATCH /v1/inventory-transfers/{inventory_transfer_id}`

Signature: `update(inventory_transfer_id: InputValue<string>, params: InventoryTransfersUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_id` | Required | string | Flint inventory transfer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
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

