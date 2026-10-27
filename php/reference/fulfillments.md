[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillments

### fulfillments.createEvent

Records an observational event for a fulfillment or one of its shipments or packages. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/events`

Signature: `createEvent(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput) | The request body for: Create fulfillment event. |

Body model: [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput).

#### fulfillments.createEvent body fields

Field definitions: [shared fields](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput).

#### Response

Returned payload: [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent).

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

Complete body and metadata: `createEventWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->fulfillments->createEvent('example', [
  'event_type' => 'carrier_scan',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-createEvent.php)

### fulfillments.createShipment

Creates a shipment execution record under a shipment-type fulfillment. A shipment groups one carrier leg. Create one package under it for each physical parcel, including single-parcel shipments.

`POST /v1/fulfillments/{fulfillment_id}/shipments`

Signature: `createShipment(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateShipmentRequestInput](../models/CreateShipmentRequestInput.md#createshipmentrequestinput) | The request body for: Create shipment. |

Body model: [CreateShipmentRequestInput](../models/CreateShipmentRequestInput.md#createshipmentrequestinput).

#### fulfillments.createShipment body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Optional | string | Values: `"outbound"`, `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_id` | Optional | string | minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) |  |

#### fulfillments.createShipment body oneOf variant 1



#### fulfillments.createShipment body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Optional | string | Values: `"outbound"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_id` | Optional | string | minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) |  |

#### fulfillments.createShipment body oneOf variant 2



#### fulfillments.createShipment body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Required | string | Values: `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_id` | Required | string | minLength: `1`. |
| `return_line_items` | Required | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) | minItems: `1`. |

#### Response

Returned payload: [Shipment](../models/Shipment.md#shipment).

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

Complete body and metadata: `createShipmentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->fulfillments->createShipment('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-createShipment.php)

### fulfillments.get

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Signature: `get(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`, `"packages"`, `"shipments"`. |

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
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
$result = $client->fulfillments->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/fulfillments-get.php)

### fulfillments.list

Returns a paginated list of fulfillments. Results default to created_at descending, with fulfillment_id descending as the tiebreaker. scheduled_start_at uses the service scheduled start or the start of the pickup, local delivery, or shipment window. For scheduled_start_at and terminal_at, null values sort first ascending and last descending.

`GET /v1/fulfillments`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |
| `order_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: [14 declared values](#fulfillmentslist-input-status--values). |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `location_id` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"scheduled_start_at"`, `"terminal_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### fulfillments.list input status [] values

- `"pending"`
- `"on_hold"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### Response

Returned payload: [FulfillmentsListResponse200](../models/FulfillmentsListResponse200.md#fulfillmentslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
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
$result = $client->fulfillments->list([], new RequestOptions());
```

[Complete runnable example](../examples/fulfillments-list.php)

### fulfillments.transition

Performs one action from the fulfillment's supported_actions. Every action accepts occurred_at for the transition time. For complete, occurred_at also records completion evidence. The hold and mark_no_show actions accept reason plus an optional reason_message note. Each action accepts only its action-specific fields. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/transitions`

Signature: `transition(FulfillmentsTransitionInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [FulfillmentTransitionRequestInput](../models/FulfillmentTransitionRequestInput.md#fulfillmenttransitionrequestinput) | The request body for: Transition fulfillment. |

Body model: [FulfillmentTransitionRequestInput](../models/FulfillmentTransitionRequestInput.md#fulfillmenttransitionrequestinput).

#### fulfillments.transition body oneOf variant 1

The `release_hold` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestReleaseHoldInput](../models/FulfillmentTransitionRequestReleaseHoldInput.md#fulfillmenttransitionrequestreleaseholdinput).

#### fulfillments.transition body oneOf variant 1 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestReleaseHoldInput.md#fulfillmenttransitionrequestreleaseholdinput).

#### fulfillments.transition body oneOf variant 2

The `complete` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestCompleteInput](../models/FulfillmentTransitionRequestCompleteInput.md#fulfillmenttransitionrequestcompleteinput).

#### fulfillments.transition body oneOf variant 2 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestCompleteInput.md#fulfillmenttransitionrequestcompleteinput).

#### fulfillments.transition body oneOf variant 3

The `cancel` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestCancelInput](../models/FulfillmentTransitionRequestCancelInput.md#fulfillmenttransitionrequestcancelinput).

#### fulfillments.transition body oneOf variant 3 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestCancelInput.md#fulfillmenttransitionrequestcancelinput).

#### fulfillments.transition body oneOf variant 4

The `hold` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestHoldInput](../models/FulfillmentTransitionRequestHoldInput.md#fulfillmenttransitionrequestholdinput).

#### fulfillments.transition body oneOf variant 4 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestHoldInput.md#fulfillmenttransitionrequestholdinput).

#### fulfillments.transition body oneOf variant 5

The `start` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestStartInput](../models/FulfillmentTransitionRequestStartInput.md#fulfillmenttransitionrequeststartinput).

#### fulfillments.transition body oneOf variant 5 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestStartInput.md#fulfillmenttransitionrequeststartinput).

#### fulfillments.transition body oneOf variant 6

The `mark_ready` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkReadyInput](../models/FulfillmentTransitionRequestMarkReadyInput.md#fulfillmenttransitionrequestmarkreadyinput).

#### fulfillments.transition body oneOf variant 6 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestMarkReadyInput.md#fulfillmenttransitionrequestmarkreadyinput).

#### fulfillments.transition body oneOf variant 7

The `fail` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestFailInput](../models/FulfillmentTransitionRequestFailInput.md#fulfillmenttransitionrequestfailinput).

#### fulfillments.transition body oneOf variant 7 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestFailInput.md#fulfillmenttransitionrequestfailinput).

#### fulfillments.transition body oneOf variant 8

The `schedule` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestScheduleInput](../models/FulfillmentTransitionRequestScheduleInput.md#fulfillmenttransitionrequestscheduleinput).

#### fulfillments.transition body oneOf variant 8 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestScheduleInput.md#fulfillmenttransitionrequestscheduleinput).

#### fulfillments.transition body oneOf variant 9

The `accept` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestAcceptInput](../models/FulfillmentTransitionRequestAcceptInput.md#fulfillmenttransitionrequestacceptinput).

#### fulfillments.transition body oneOf variant 9 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestAcceptInput.md#fulfillmenttransitionrequestacceptinput).

#### fulfillments.transition body oneOf variant 10

The `mark_preparing` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkPreparingInput](../models/FulfillmentTransitionRequestMarkPreparingInput.md#fulfillmenttransitionrequestmarkpreparinginput).

#### fulfillments.transition body oneOf variant 10 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestMarkPreparingInput.md#fulfillmenttransitionrequestmarkpreparinginput).

#### fulfillments.transition body oneOf variant 11

The `mark_picked` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkPickedInput](../models/FulfillmentTransitionRequestMarkPickedInput.md#fulfillmenttransitionrequestmarkpickedinput).

#### fulfillments.transition body oneOf variant 11 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestMarkPickedInput.md#fulfillmenttransitionrequestmarkpickedinput).

#### fulfillments.transition body oneOf variant 12

The `mark_packed` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkPackedInput](../models/FulfillmentTransitionRequestMarkPackedInput.md#fulfillmenttransitionrequestmarkpackedinput).

#### fulfillments.transition body oneOf variant 12 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestMarkPackedInput.md#fulfillmenttransitionrequestmarkpackedinput).

#### fulfillments.transition body oneOf variant 13

The `dispatch` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestDispatchInput](../models/FulfillmentTransitionRequestDispatchInput.md#fulfillmenttransitionrequestdispatchinput).

#### fulfillments.transition body oneOf variant 13 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestDispatchInput.md#fulfillmenttransitionrequestdispatchinput).

#### fulfillments.transition body oneOf variant 14

The `mark_no_show` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkNoShowInput](../models/FulfillmentTransitionRequestMarkNoShowInput.md#fulfillmenttransitionrequestmarknoshowinput).

#### fulfillments.transition body oneOf variant 14 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestMarkNoShowInput.md#fulfillmenttransitionrequestmarknoshowinput).

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

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

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->fulfillments->transition([
  'fulfillment_id' => 'example',
  'body' => (object) [
    'action' => 'release_hold',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-transition.php)

### fulfillments.update

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Signature: `update(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`, `"packages"`, `"shipments"`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequestInput.md#updatefulfillmentrequestinput) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. A supplied detail field must match the stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count toward exclusivity. |

Body model: [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequestInput.md#updatefulfillmentrequestinput).

#### fulfillments.update body fields

Field definitions: [shared fields](../models/UpdateFulfillmentRequestInput.md#updatefulfillmentrequestinput). Models: [UpdateDigitalFulfillmentDetailsInput](../models/UpdateDigitalFulfillmentDetailsInput.md#updatedigitalfulfillmentdetailsinput), [UpdateDeliveryFulfillmentDetailsInput](../models/UpdateDeliveryFulfillmentDetailsInput.md#updatedeliveryfulfillmentdetailsinput), [UpdatePickupFulfillmentDetailsInput](../models/UpdatePickupFulfillmentDetailsInput.md#updatepickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [UpdateServiceFulfillmentDetailsInput](../models/UpdateServiceFulfillmentDetailsInput.md#updateservicefulfillmentdetailsinput).

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

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

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->fulfillments->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-update.php)

