[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryReservations

### inventoryReservations.create

Route standalone merchant demand and hold stock in one atomic command. A hold defaults to 15 minutes and can last up to 24 hours. Set expires_at when creating it or PATCH the reservation to change its deadline. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory reservations with the same idempotency_key.

`POST /v1/inventory-reservations`

Signature: `create(params: InventoryReservationsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInventoryReservationRequestInput](../models/CreateInventoryReservationRequest.md#createinventoryreservationrequest) | The request body for: Create inventory reservation. |

Body model: [CreateInventoryReservationRequestInput](../models/CreateInventoryReservationRequest.md#createinventoryreservationrequest).

#### inventoryReservations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [InventoryRoutingDemandInput](../models/InventoryRoutingDemand.md#inventoryroutingdemand) | minItems: `1`. maxItems: `100`. Items: Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and splitting behavior. |
| `expires_at` | Optional | string | Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: `date-time`. minLength: `1`. |
| `inventory_routing_source` | Required | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `owner` | Required | [InventoryReservationOwnerRequestInput](../models/InventoryReservationOwnerRequest.md#inventoryreservationownerrequest) | The owner of a merchant inventory reservation you create: your `key` for what holds the stock. |

#### Response

Returned payload: [InventoryReservationResult](../models/InventoryReservationResult.md#inventoryreservationresult).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.create({demands: [{inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM", quantity: 2}], inventory_routing_source: {inventory_allocation_policy_id: "invp_01K0P7W6A4N9F3J2T8Q5R1C6XM", type: "policy"}, owner: {key: "cart_1842"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryReservations-create.mjs)

### inventoryReservations.get

Retrieve an inventory reservation and its lines by ID, including merchant and order owners.

`GET /v1/inventory-reservations/{inventory_reservation_id}`

Signature:

```typescript
get(inventory_reservation_id: InputValue<string>,
 params?: InventoryReservationsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |

#### Response

Returned payload: [InventoryReservation](../models/InventoryReservation.md#inventoryreservation).

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
const result = await client.inventoryReservations.get("invr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/inventoryReservations-get.mjs)

### inventoryReservations.list

List inventory reservations in ascending inventory_reservation_id order. Omit owner_type to include merchant and order owners. owner_key matches merchant owners only. Default order: inventory_reservation_id ascending; this key uniquely orders the results.

`GET /v1/inventory-reservations`

Signature: `list(params?: InventoryReservationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by an inventory item on a reservation line. |
| `location_id` | Optional | string | Filter by a location on a reservation line. Combined with inventory_item_id, the same line must match both. |
| `order_id` | Optional | string | Filter by the reservation's resolved owner order. |
| `status` | Optional | Array of string or string | Filter by reservation status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"closed"`. Values: `"active"`, `"closed"`. |
| `owner_type` | Optional | Array of string or string | Filter by merchant or order ownership. Omit to return every owner type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"merchant"`, `"order"`. Values: `"merchant"`, `"order"`. |
| `owner_key` | Optional | string | Filter merchant-owned reservations by exact owner key. Combined with owner_type=order, returns an empty page. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `has_at_risk_quantity` | Optional | boolean | True selects reservations with at-risk quantity; false selects reservations with none on any line. Omit for all reservations. |
| `closed_reason` | Optional | Array of string or string | Filter by how the reservation ended. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`. |
| `expires_after` | Optional | string | Inclusive lower bound on expires_at. Format: `date-time`. |
| `expires_before` | Optional | string | Exclusive upper bound on expires_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [InventoryReservationListResponse](../models/InventoryReservationListResponse.md#inventoryreservationlistresponse).

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
const result = await client.inventoryReservations.list({}, {  });
```

[Complete runnable example](../examples/inventoryReservations-list.mjs)

### inventoryReservations.transition

Set action to commit held quantity, consume committed quantity, or release held or committed quantity. Lines carry cumulative targets: resending targets already applied succeeds even after the reservation closes. supported_actions lists actions available for new changes. Stock-moving transitions return a result with inventory_reservation as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory reservation by ID.

`POST /v1/inventory-reservations/{inventory_reservation_id}/transitions`

Signature:

```typescript
transition(inventory_reservation_id: InputValue<string>,
 params: InventoryReservationsTransitionParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `body` | Required | [InventoryReservationTransitionRequestInput](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest) | The request body for: Transition inventory reservation. |

Body model: [InventoryReservationTransitionRequestInput](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest).

#### inventoryReservations.transition with `action: "commit"`

The `commit` variant of `InventoryReservationTransitionRequest`.

Body model: [InventoryReservationTransitionRequestCommitInput](../models/InventoryReservationTransitionRequestCommit.md#inventoryreservationtransitionrequestcommit).

#### inventoryReservations.transition with `action: "consume"`

The `consume` variant of `InventoryReservationTransitionRequest`.

Body model: [InventoryReservationTransitionRequestConsumeInput](../models/InventoryReservationTransitionRequestConsume.md#inventoryreservationtransitionrequestconsume).

#### inventoryReservations.transition with `action: "release"`

The `release` variant of `InventoryReservationTransitionRequest`.

Body model: [InventoryReservationTransitionRequestReleaseInput](../models/InventoryReservationTransitionRequestRelease.md#inventoryreservationtransitionrequestrelease).

#### Response

Returned payload: [InventoryReservationResult](../models/InventoryReservationResult.md#inventoryreservationresult).

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

const result = await client.inventoryReservations.transition("invr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "commit", expected_version: 3, lines: [{inventory_reservation_line_id: "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_committed_quantity: 2}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryReservations-transition.mjs)

### inventoryReservations.update

Change the hold deadline of a reservation you created. The new expires_at must be after now and at most 24 hours from now, and can be earlier or later than the current one. A lapsed hold cannot be extended, and reservations Flint holds for orders cannot be changed. Committed and consumed quantity never expire.

`PATCH /v1/inventory-reservations/{inventory_reservation_id}`

Signature: `update(inventory_reservation_id: InputValue<string>, params: InventoryReservationsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `body` | Required | [UpdateInventoryReservationRequestInput](../models/UpdateInventoryReservationRequest.md#updateinventoryreservationrequest) | The request body for: Update inventory reservation. |

Body model: [UpdateInventoryReservationRequestInput](../models/UpdateInventoryReservationRequest.md#updateinventoryreservationrequest).

#### inventoryReservations.update body fields

Field definitions: [shared fields](../models/UpdateInventoryReservationRequest.md#updateinventoryreservationrequest).

#### Response

Returned payload: [InventoryReservation](../models/InventoryReservation.md#inventoryreservation).

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

const result = await client.inventoryReservations.update("invr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expires_at: "2026-12-01T00:00:00Z"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryReservations-update.mjs)

