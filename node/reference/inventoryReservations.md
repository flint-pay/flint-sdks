[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryReservations

### inventoryReservations.create

Route standalone merchant demand and hold stock in one atomic command. A hold defaults to 15 minutes and can last up to 24 hours. Set expires_at when creating it or PATCH the reservation to change its deadline. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-reservations`

Signature:

```typescript
create(params: (InputValue<CreateInventoryReservationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryReservationRequestInput](../models/CreateInventoryReservationRequest.md#createinventoryreservationrequest) | The request body for: Create inventory reservation. |

Body model: [CreateInventoryReservationRequestInput](../models/CreateInventoryReservationRequest.md#createinventoryreservationrequest).

#### inventoryReservations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [InventoryRoutingDemandInput](../models/InventoryRoutingDemand.md#inventoryroutingdemand) |  |
| `expires_at` | Optional | string | Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: `date-time`. minLength: `1`. |
| `inventory_routing_source` | Required | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `owner` | Required | [InventoryReservationOwnerRequestInput](../models/InventoryReservationOwnerRequest.md#inventoryreservationownerrequest) | The owner of a merchant inventory reservation you create: your `key` for what holds the stock. |

#### Response

Returned payload: [InventoryReservationResult](../models/InventoryReservationResult.md#inventoryreservationresult).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.create({demands: [], inventory_routing_source: {type: "fixed_location", location_id: "example"}, owner: {key: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryReservations-create.mjs)

### inventoryReservations.get

Retrieve an inventory reservation and its lines by ID, including merchant and order owners.

`GET /v1/inventory-reservations/{inventory_reservation_id}`

Signature: `get(inventory_reservation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string |  |

#### Response

Returned payload: [InventoryReservation](../models/InventoryReservation.md#inventoryreservation).

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
const result = await client.inventoryReservations.get("example", {}, {  });
```

[Complete runnable example](../examples/inventoryReservations-get.mjs)

### inventoryReservations.list

List inventory reservations in ascending inventory_reservation_id order. Omit owner_type to include merchant and order owners. owner_key matches merchant owners only.

`GET /v1/inventory-reservations`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "inventory_item_id"?: InputValue<string>;
  "location_id"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "closed">>;
  "owner_type"?: InputValue<Array<"merchant" | "order">>;
  "owner_key"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "has_at_risk_quantity"?: InputValue<boolean>;
  "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
  "expires_after"?: InputValue<string | globalThis.Date>;
  "expires_before"?: InputValue<string | globalThis.Date>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
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
| `order_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"closed"`. |
| `owner_type` | Optional | Array of string | minItems: `1`. Items values: `"merchant"`, `"order"`. |
| `owner_key` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `has_at_risk_quantity` | Optional | boolean |  |
| `closed_reason` | Optional | Array of string | minItems: `1`. Items values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`. |
| `expires_after` | Optional | string | Format: `date-time`. |
| `expires_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryReservationListResponse](../models/InventoryReservationListResponse.md#inventoryreservationlistresponse).

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
const result = await client.inventoryReservations.list({}, {  });
```

[Complete runnable example](../examples/inventoryReservations-list.mjs)

### inventoryReservations.transition

Set action to commit held quantity, consume committed quantity, or release held or committed quantity. Lines carry cumulative targets: resending targets already applied succeeds even after the reservation closes. supported_actions lists actions available for new changes. Stock-moving transitions return a result with inventory_reservation as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-reservations/{inventory_reservation_id}/transitions`

Signature: `transition(input: InventoryReservationsTransitionInput, options?: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [InventoryReservationTransitionRequestInput](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest) | The request body for: Transition inventory reservation. |

Body model: [InventoryReservationTransitionRequestInput](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest).

#### inventoryReservations.transition body oneOf variant 1

The `commit` variant of `InventoryReservationTransitionRequest`.

Body model: [InventoryReservationTransitionRequestCommitInput](../models/InventoryReservationTransitionRequestCommit.md#inventoryreservationtransitionrequestcommit).

#### inventoryReservations.transition body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"commit"`. |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |

#### inventoryReservations.transition body oneOf variant 2

The `consume` variant of `InventoryReservationTransitionRequest`.

Body model: [InventoryReservationTransitionRequestConsumeInput](../models/InventoryReservationTransitionRequestConsume.md#inventoryreservationtransitionrequestconsume).

#### inventoryReservations.transition body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"consume"`. |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time. |

#### inventoryReservations.transition body oneOf variant 3

The `release` variant of `InventoryReservationTransitionRequest`.

Body model: [InventoryReservationTransitionRequestReleaseInput](../models/InventoryReservationTransitionRequestRelease.md#inventoryreservationtransitionrequestrelease).

#### inventoryReservations.transition body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"release"`. |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `lines` | Required | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. |

#### Response

Returned payload: [InventoryReservationResult](../models/InventoryReservationResult.md#inventoryreservationresult).

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

Complete body and metadata: `transitionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.transition({inventory_reservation_id: "example", body: {action: "commit", lines: [{inventory_reservation_line_id: "example", target_committed_quantity: "0"}]}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryReservations-transition.mjs)

### inventoryReservations.update

Change the hold deadline of a reservation you created. The new expires_at must be after now and at most 24 hours from now, and can be earlier or later than the current one. A lapsed hold cannot be extended, and reservations Flint holds for orders cannot be changed. Committed and consumed quantity never expire.

`PATCH /v1/inventory-reservations/{inventory_reservation_id}`

Signature:

```typescript
update(inventory_reservation_id: InputValue<string>,
 params: (InputValue<UpdateInventoryReservationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInventoryReservationRequestInput](../models/UpdateInventoryReservationRequest.md#updateinventoryreservationrequest) | The request body for: Update inventory reservation. |

Body model: [UpdateInventoryReservationRequestInput](../models/UpdateInventoryReservationRequest.md#updateinventoryreservationrequest).

#### inventoryReservations.update body fields

Field definitions: [shared fields](../models/UpdateInventoryReservationRequest.md#updateinventoryreservationrequest).

#### Response

Returned payload: [InventoryReservation](../models/InventoryReservation.md#inventoryreservation).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.update("example", {expires_at: "2026-01-01T00:00:00Z"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryReservations-update.mjs)

