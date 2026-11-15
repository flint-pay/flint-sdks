[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryReservations

### inventoryReservations.commit

Commits held quantity, usually once the buyer pays. Commit before expires_at: after the deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status. Call it only when commit is in supported_actions. Lines carry cumulative targets: resending targets already applied succeeds even after the reservation closes. Returns a result with inventory_reservation as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory reservation by ID.

`POST /v1/inventory-reservations/{inventory_reservation_id}/commit`

Signature: `commit(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CommitInventoryReservationRequestInput](../models/CommitInventoryReservationRequestInput.md#commitinventoryreservationrequestinput) | Commits held quantity, usually once the buyer pays. Commit before expires_at: after the deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status. |

Body model: [CommitInventoryReservationRequestInput](../models/CommitInventoryReservationRequestInput.md#commitinventoryreservationrequestinput).

#### inventoryReservations.commit body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. |

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryReservations->commit('invr_01KEZF7C0041ENRR0C2NF3AP12', [
  'expected_version' => 3,
  'lines' => [
    (object) [
      'inventory_reservation_line_id' => 'invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'target_committed_quantity' => 2,
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryReservations-commit.php)

### inventoryReservations.consume

Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts provenance describing the handoff. Call it only when consume is in supported_actions. Lines carry cumulative targets: resending targets already applied succeeds even after the reservation closes. Returns a result with inventory_reservation as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory reservation by ID.

`POST /v1/inventory-reservations/{inventory_reservation_id}/consume`

Signature: `consume(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ConsumeInventoryReservationRequestInput](../models/ConsumeInventoryReservationRequestInput.md#consumeinventoryreservationrequestinput) | Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts provenance describing the handoff. |

Body model: [ConsumeInventoryReservationRequestInput](../models/ConsumeInventoryReservationRequestInput.md#consumeinventoryreservationrequestinput).

#### inventoryReservations.consume body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time. |

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryReservations->consume('invr_01KEZF7C0041ENRR0C2NF3AP12', [
  'expected_version' => 4,
  'lines' => [
    (object) [
      'inventory_reservation_line_id' => 'invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'target_consumed_quantity' => 2,
    ],
  ],
  'provenance' => (object) [
    'source_system' => (object) [
      'type' => 'manual',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryReservations-consume.php)

### inventoryReservations.create

Route standalone merchant demand and hold stock in one atomic command. A hold defaults to 15 minutes and can last up to 24 hours. Set expires_at when creating it or PATCH the reservation to change its deadline. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, list inventory reservations with the same idempotency_key.

`POST /v1/inventory-reservations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateInventoryReservationRequestInput](../models/CreateInventoryReservationRequestInput.md#createinventoryreservationrequestinput) | The request body for: Create inventory reservation. |

Body model: [CreateInventoryReservationRequestInput](../models/CreateInventoryReservationRequestInput.md#createinventoryreservationrequestinput).

#### inventoryReservations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [InventoryRoutingDemandInput](../models/InventoryRoutingDemandInput.md#inventoryroutingdemandinput) | Items and quantities to reserve. minItems: `1`. maxItems: `100`. Items: Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and splitting behavior. |
| `expires_at` | Optional | string | Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: `date-time`. minLength: `1`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. When omitted, the reservation uses and stores `settings.inventory.default_routing_source`; without that default the request returns `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `owner` | Required | [InventoryReservationOwnerRequestInput](../models/InventoryReservationOwnerRequestInput.md#inventoryreservationownerrequestinput) | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The owner of a merchant inventory reservation you create: your `key` for what holds the stock. |

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

$result = $client->inventoryReservations->create([
  'demands' => [
    (object) [
      'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'quantity' => 2,
    ],
  ],
  'inventory_routing_source' => (object) [
    'inventory_allocation_policy_id' => 'invp_01K0P7W6A4N9F3J2T8Q5R1C6XM',
    'type' => 'policy',
  ],
  'owner' => (object) [
    'key' => 'cart_1842',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryReservations-create.php)

### inventoryReservations.get

Retrieve an inventory reservation and its lines by ID, including merchant and order owners.

`GET /v1/inventory-reservations/{inventory_reservation_id}`

Signature: `get(string|Model $inventory_reservation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->inventoryReservations->get('invr_01KEZF7C0041ENRR0C2NF3AP12', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryReservations-get.php)

### inventoryReservations.list

List inventory reservations in ascending inventory_reservation_id order. Omit owner_type to include merchant and order owners. owner_key matches merchant owners only. Default order: inventory_reservation_id ascending; this key uniquely orders the results.

`GET /v1/inventory-reservations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `inventory_item_id` | Optional | string | Filter by an inventory item on a reservation line. pattern: `^invi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `location_id` | Optional | string | Filter by a location on a reservation line. Combined with inventory_item_id, the same line must match both. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | Filter by the reservation's resolved owner order. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by reservation status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"closed"`. Values: `"active"`, `"closed"`. |
| `owner_type` | Optional | Array of string or string | Filter by merchant or order ownership. Omit to return every owner type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"merchant"`, `"order"`. Values: `"merchant"`, `"order"`. |
| `owner_key` | Optional | string | Filter merchant-owned reservations by exact owner key. Combined with owner_type=order, returns an empty page. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `has_at_risk_quantity` | Optional | boolean | True selects reservations with at-risk quantity; false selects reservations with none on any line. Omit for all reservations. |
| `closed_reason` | Optional | Array of string or string | Filter by how the reservation ended. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`, `"adopted"`. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`, `"adopted"`. |
| `expires_after` | Optional | string | Inclusive lower bound on expires_at. Format: `date-time`. |
| `expires_before` | Optional | string | Exclusive upper bound on expires_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [InventoryReservationListResponse](../models/InventoryReservationListResponse.md#inventoryreservationlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
$result = $client->inventoryReservations->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryReservations-list.php)

### inventoryReservations.release

Releases held or committed quantity back to available stock, for example when the buyer leaves or you cancel after payment. Call it only when release is in supported_actions. Lines carry cumulative targets: resending targets already applied succeeds even after the reservation closes. Returns a result with inventory_reservation as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the inventory reservation by ID.

`POST /v1/inventory-reservations/{inventory_reservation_id}/release`

Signature: `release(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ReleaseInventoryReservationRequestInput](../models/ReleaseInventoryReservationRequestInput.md#releaseinventoryreservationrequestinput) | Releases held or committed quantity back to available stock, for example when the buyer leaves or you cancel after payment. |

Body model: [ReleaseInventoryReservationRequestInput](../models/ReleaseInventoryReservationRequestInput.md#releaseinventoryreservationrequestinput).

#### inventoryReservations.release body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of (object and Alternative shapes (see declared variants)) | Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. |

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryReservations->release('invr_01KEZF7C0041ENRR0C2NF3AP12', [
  'lines' => [
    (object) [
      'inventory_reservation_line_id' => 'invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'target_released_from_held_quantity' => 2,
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryReservations-release.php)

### inventoryReservations.update

Change the hold deadline of a reservation you created. The new expires_at must be after now and at most 24 hours from now, and can be earlier or later than the current one. A lapsed hold cannot be extended, and reservations Flint holds for orders cannot be changed. Committed and consumed quantity never expire.

`PATCH /v1/inventory-reservations/{inventory_reservation_id}`

Signature: `update(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_id` | Required | string | Flint inventory reservation ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateInventoryReservationRequestInput](../models/UpdateInventoryReservationRequestInput.md#updateinventoryreservationrequestinput) | The request body for: Update inventory reservation. minProperties: `1`. |

Body model: [UpdateInventoryReservationRequestInput](../models/UpdateInventoryReservationRequestInput.md#updateinventoryreservationrequestinput).

#### inventoryReservations.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `expires_at` | Required | string | New hold deadline: after now and at most 24 hours from now. It can be earlier or later than the current deadline. Format: `date-time`. minLength: `1`. |

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryReservations->update('invr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'expires_at' => '2026-12-01T00:00:00Z',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryReservations-update.php)

