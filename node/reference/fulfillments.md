[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillments

### fulfillments.createEvent

Records an observational event for a fulfillment or one of its shipments or packages. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/events`

Signature: `createEvent(fulfillment_id: InputValue<string>, params: FulfillmentsCreateEventParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `body` | Required | [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequest.md#createfulfillmenteventrequest) | The request body for: Create fulfillment event. |

Body model: [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequest.md#createfulfillmenteventrequest).

#### fulfillments.createEvent body fields

Field definitions: [shared fields](../models/CreateFulfillmentEventRequest.md#createfulfillmenteventrequest).

#### Response

Returned payload: [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent) | [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent).

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

const result = await client.fulfillments.createEvent("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {custom_details: {facility: "east"}, event_type: "custom", external_event_id: "evt_7f3df2", external_status: "work_started", external_system: "shippo", message: "The fulfillment partner started work.", occurred_at: "2026-05-13T16:05:00Z", package_id: "pkg_01KEZF7C008VJBE6BT0CWZT296", shipment_id: "shp_01KEZF7C006DZPA7FGH42HTBY8"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-createEvent.mjs)

### fulfillments.createShipment

Creates a shipment under a shipment fulfillment. For outbound shipments, include 1 to 20 packages to create the parcels atomically and return their IDs. Set each package's status to shipped to report handoff in the same call. Return shipments cannot include packages.

`POST /v1/fulfillments/{fulfillment_id}/shipments`

Signature: `createShipment(fulfillment_id: InputValue<string>, params: FulfillmentsCreateShipmentParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint shipment fulfillment ID. |
| `body` | Required | [CreateShipmentRequestInput](../models/CreateShipmentRequest.md#createshipmentrequest) | The request body for: Create shipment. |

Body model: [CreateShipmentRequestInput](../models/CreateShipmentRequest.md#createshipmentrequest).

#### fulfillments.createShipment body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Required | string | Values: `"outbound"`, `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `packages` | Optional | Array of [PackageCreateRequestInput](../models/PackageCreateRequest.md#packagecreaterequest) | Creates packages atomically with an outbound shipment. Items are optional per package. Created packages are included in the response. minItems: `1`. maxItems: `20`. Items: The request body for: Create package. |
| `return_id` | Optional | string | minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationRequestInput](../models/ReturnShipmentLineItemAllocationRequestInput.md#returnshipmentlineitemallocationrequestinput) | minItems: `1`. Items: A return line and the quantity placed in a return shipment or package. |

#### fulfillments.createShipment with `direction: "outbound"`

The `outbound` variant of `CreateShipmentRequest`.

Body model: [CreateShipmentRequestOutboundInput](../models/CreateShipmentRequestOutbound.md#createshipmentrequestoutbound).

#### fulfillments.createShipment with `direction: "return"`

The `return` variant of `CreateShipmentRequest`.

Body model: [CreateShipmentRequestReturnInput](../models/CreateShipmentRequestReturn.md#createshipmentrequestreturn).

#### Response

Returned payload: [Shipment](../models/Shipment.md#shipment).

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

const result = await client.fulfillments.createShipment("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {direction: "outbound", external_reference_id: "ship_789", external_system: "merchant_wms", metadata: {warehouse: "east"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-createShipment.mjs)

### fulfillments.get

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Signature: `get(fulfillment_id: InputValue<string>, params?: FulfillmentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=order&expand=packages, or pass one comma-separated value. Items values: `"order"`, `"packages"`, `"shipments"`. Values: `"order"`, `"packages"`, `"shipments"`. |

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
const result = await client.fulfillments.get("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/fulfillments-get.mjs)

### fulfillments.list

Returns a paginated list of fulfillments. scheduled_start_at uses the service scheduled start or the start of the pickup, local delivery, or shipment window. For scheduled_start_at and terminal_at, null values sort first ascending and last descending. Default order: created_at descending, then fulfillment_id descending.

`GET /v1/fulfillments`

Signature: `list(params?: FulfillmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |
| `order_id` | Optional | string | Filter by order ID. |
| `customer_id` | Optional | string | Exact match on customer_id. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across fulfillment_id and external_reference_id. Also matches an exact order number. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ful_01. |
| `status` | Optional | Array of string or string | Filter by exact fulfillment status. Values within this filter are ORed; combined with other filters using AND. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [14 declared values](#fulfillmentslist-input-status--values). Values: [14 declared values](#fulfillmentslist-input-status-values). |
| `type` | Optional | Array of string or string | Filter by fulfillment type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `location_id` | Optional | string | Filter by assigned Location ID. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by fulfillment_id. Default: `"created_at"`. Values: `"created_at"`, `"scheduled_start_at"`, `"terminal_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

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

#### fulfillments.list input status values

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

Returned payload: [FulfillmentListResponse](../models/FulfillmentListResponse.md#fulfillmentlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
const result = await client.fulfillments.list({}, {  });
```

[Complete runnable example](../examples/fulfillments-list.mjs)

### fulfillments.transition

Performs one action from the fulfillment's supported_actions. Every action accepts occurred_at for the transition time. For complete, occurred_at also records completion evidence. The hold and mark_no_show actions accept reason plus an optional reason_message note. Each action accepts only its action-specific fields. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/transitions`

Signature: `transition(fulfillment_id: InputValue<string>, params: FulfillmentsTransitionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `body` | Required | [FulfillmentTransitionRequestInput](../models/FulfillmentTransitionRequest.md#fulfillmenttransitionrequest) | The request body for: Transition fulfillment. |

Body model: [FulfillmentTransitionRequestInput](../models/FulfillmentTransitionRequest.md#fulfillmenttransitionrequest).

#### fulfillments.transition with `action: "release_hold"`

The `release_hold` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestReleaseHoldInput](../models/FulfillmentTransitionRequestReleaseHold.md#fulfillmenttransitionrequestreleasehold).

#### fulfillments.transition with `action: "complete"`

The `complete` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestCompleteInput](../models/FulfillmentTransitionRequestComplete.md#fulfillmenttransitionrequestcomplete).

#### fulfillments.transition with `action: "cancel"`

The `cancel` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestCancelInput](../models/FulfillmentTransitionRequestCancel.md#fulfillmenttransitionrequestcancel).

#### fulfillments.transition with `action: "hold"`

The `hold` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestHoldInput](../models/FulfillmentTransitionRequestHold.md#fulfillmenttransitionrequesthold).

#### fulfillments.transition with `action: "start"`

The `start` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestStartInput](../models/FulfillmentTransitionRequestStart.md#fulfillmenttransitionrequeststart).

#### fulfillments.transition with `action: "mark_ready"`

The `mark_ready` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkReadyInput](../models/FulfillmentTransitionRequestMarkReady.md#fulfillmenttransitionrequestmarkready).

#### fulfillments.transition with `action: "fail"`

The `fail` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestFailInput](../models/FulfillmentTransitionRequestFail.md#fulfillmenttransitionrequestfail).

#### fulfillments.transition with `action: "schedule"`

The `schedule` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestScheduleInput](../models/FulfillmentTransitionRequestSchedule.md#fulfillmenttransitionrequestschedule).

#### fulfillments.transition with `action: "accept"`

The `accept` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestAcceptInput](../models/FulfillmentTransitionRequestAccept.md#fulfillmenttransitionrequestaccept).

#### fulfillments.transition with `action: "mark_preparing"`

The `mark_preparing` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkPreparingInput](../models/FulfillmentTransitionRequestMarkPreparing.md#fulfillmenttransitionrequestmarkpreparing).

#### fulfillments.transition with `action: "mark_picked"`

The `mark_picked` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkPickedInput](../models/FulfillmentTransitionRequestMarkPicked.md#fulfillmenttransitionrequestmarkpicked).

#### fulfillments.transition with `action: "mark_packed"`

The `mark_packed` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkPackedInput](../models/PackageTransitionRequestMarkPacked.md#packagetransitionrequestmarkpacked).

#### fulfillments.transition with `action: "dispatch"`

The `dispatch` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestDispatchInput](../models/FulfillmentTransitionRequestDispatch.md#fulfillmenttransitionrequestdispatch).

#### fulfillments.transition with `action: "mark_no_show"`

The `mark_no_show` variant of `FulfillmentTransitionRequest`.

Body model: [FulfillmentTransitionRequestMarkNoShowInput](../models/FulfillmentTransitionRequestMarkNoShow.md#fulfillmenttransitionrequestmarknoshow).

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

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

const result = await client.fulfillments.transition("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "mark_packed", buyer_notification_behavior: "send", expected_version: 4, occurred_at: "2026-05-13T11:00:00Z"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-transition.mjs)

### fulfillments.update

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Signature: `update(fulfillment_id: InputValue<string>, params: FulfillmentsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=order&expand=packages, or pass one comma-separated value. Items values: `"order"`, `"packages"`, `"shipments"`. Values: `"order"`, `"packages"`, `"shipments"`. |
| `body` | Required | [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequest.md#updatefulfillmentrequest) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. A supplied detail field must match the stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count toward exclusivity. |

Body model: [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequest.md#updatefulfillmentrequest).

#### fulfillments.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | Completion evidence timestamp. Use only to correct completion evidence on an already completed fulfillment; complete pending fulfillments with POST /transitions. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `customer_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `device_id` | Optional | string or null | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. Send null to clear it. minLength: `1`. |
| `digital_details` | Optional | [UpdateDigitalFulfillmentDetailsInput](../models/UpdateDigitalFulfillmentDetails.md#updatedigitalfulfillmentdetails) or null |  |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `local_delivery_details` | Optional | [UpdateDeliveryFulfillmentDetailsInput](../models/UpdateDeliveryFulfillmentDetails.md#updatedeliveryfulfillmentdetails) or null |  |
| `location_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `pickup_details` | Optional | [UpdatePickupFulfillmentDetailsInput](../models/UpdatePickupFulfillmentDetails.md#updatepickupfulfillmentdetails) or null |  |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequest.md#fulfillmentrecipientrequest) or null |  |
| `service_details` | Optional | [UpdateServiceFulfillmentDetailsInput](../models/UpdateServiceFulfillmentDetails.md#updateservicefulfillmentdetails) or null |  |

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

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

const result = await client.fulfillments.update("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {shipping_batch: "batch-001"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-update.mjs)

