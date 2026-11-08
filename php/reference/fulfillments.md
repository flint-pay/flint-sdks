[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillments

### fulfillments.accept

Accepts pending fulfillment work so preparation can begin. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/accept`

Signature: `accept(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [AcceptFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Accepts pending fulfillment work so preparation can begin. |

Body model: [AcceptFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.accept body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

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

$result = $client->fulfillments->accept('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-accept.php)

### fulfillments.cancel

Cancels fulfillment work that has not completed. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/cancel`

Signature: `cancel(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CancelFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Cancels fulfillment work that has not completed. |

Body model: [CancelFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.cancel body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->cancel('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-cancel.php)

### fulfillments.complete

Completes the fulfillment and records its completion time. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/complete`

Signature: `complete(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CompleteFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Completes the fulfillment and records its completion time. |

Body model: [CompleteFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.complete body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->complete('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-complete.php)

### fulfillments.createEvent

Records an observational event for a fulfillment or one of its shipments or packages. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/events`

Signature: `createEvent(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput) | The request body for: Create fulfillment event. |

Body model: [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput).

#### fulfillments.createEvent body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_details` | Optional | Map of string | Free-form details attached to the event. Map values: minLength: `1`. |
| `event_type` | Required | string | What kind of event this records. Values: `"carrier_scan"`, `"custom"`. |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. Flint records a repeated pair of `external_system` and `external_event_id` once. minLength: `1`. |
| `external_status` | Optional | string | Status supplied by that integration. minLength: `1`. |
| `external_system` | Optional | string | Integration that supplied the event. minLength: `1`. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. minLength: `1`. |
| `message` | Optional | string | Human-readable text describing the event. minLength: `1`. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. minLength: `1`. |
| `package_id` | Optional | string | Nested package associated with this observational event. Flint resolves and validates its shipment and fulfillment ownership. minLength: `1`. |
| `shipment_id` | Optional | string | Nested shipment associated with this observational event. Flint validates that it belongs to the fulfillment in the path. minLength: `1`. |

#### Response

Returned payload: [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent).

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

$result = $client->fulfillments->createEvent('ful_01KEZF7C00F24WVSTTWR1FQX5T', [
  'custom_details' => (object) [
    'facility' => 'east',
  ],
  'event_type' => 'custom',
  'external_event_id' => 'evt_7f3df2',
  'external_status' => 'work_started',
  'external_system' => 'shippo',
  'message' => 'The fulfillment partner started work.',
  'occurred_at' => '2026-05-13T16:05:00Z',
  'package_id' => 'pkg_01KEZF7C008VJBE6BT0CWZT296',
  'shipment_id' => 'shp_01KEZF7C006DZPA7FGH42HTBY8',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-createEvent.php)

### fulfillments.createShipment

Creates a shipment under a shipment fulfillment. For outbound shipments, include 1 to 20 packages to create the parcels atomically and return their IDs. Set each package's status to shipped to report handoff in the same call. Return shipments cannot include packages.

`POST /v1/fulfillments/{fulfillment_id}/shipments`

Signature: `createShipment(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint shipment fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateShipmentRequestInput](../models/CreateShipmentRequestInput.md#createshipmentrequestinput) | The request body for: Create shipment. |

Body model: [CreateShipmentRequestInput](../models/CreateShipmentRequestInput.md#createshipmentrequestinput).

#### fulfillments.createShipment body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Required | string | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `packages` | Optional | Array of [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | Creates packages atomically with an outbound shipment. Items are optional per package. Created packages are included in the response. minItems: `1`. maxItems: `20`. |
| `return_id` | Optional | string | Return associated with this shipment, when its direction is return. minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationRequestInput](../models/ReturnShipmentLineItemAllocationRequestInput.md#returnshipmentlineitemallocationrequestinput) | Return lines and quantities the shipment carries. minItems: `1`. |

#### fulfillments.createShipment with `direction: "outbound"`

The `outbound` variant of `CreateShipmentRequest`.

Body model: [CreateShipmentRequestOutboundInput](../models/CreateShipmentRequestOutboundInput.md#createshipmentrequestoutboundinput).

#### fulfillments.createShipment with `direction: "return"`

The `return` variant of `CreateShipmentRequest`.

Body model: [CreateShipmentRequestReturnInput](../models/CreateShipmentRequestReturnInput.md#createshipmentrequestreturninput).

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

$result = $client->fulfillments->createShipment('ful_01KEZF7C00F24WVSTTWR1FQX5T', [
  'direction' => 'outbound',
  'external_reference_id' => 'ship_789',
  'external_system' => 'merchant_wms',
  'metadata' => (object) [
    'warehouse' => 'east',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-createShipment.php)

### fulfillments.dispatch

Records that a shipment or local delivery fulfillment has left for its destination. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/dispatch`

Signature: `dispatch(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [DispatchFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Records that a shipment or local delivery fulfillment has left for its destination. |

Body model: [DispatchFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.dispatch body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->dispatch('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-dispatch.php)

### fulfillments.fail

Records fulfillment failure and explicitly releases or preserves the allocated quantities. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/fail`

Signature: `fail(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [FailFulfillmentRequestInput](../models/FailFulfillmentRequestInput.md#failfulfillmentrequestinput) | Records fulfillment failure and explicitly releases or preserves the allocated quantities. |

Body model: [FailFulfillmentRequestInput](../models/FailFulfillmentRequestInput.md#failfulfillmentrequestinput).

#### fulfillments.fail body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `release_quantity` | Required | boolean | Whether the failed fulfillment releases its quantities for another fulfillment. false preserves the allocation. |

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

$result = $client->fulfillments->fail('ful_01KEZF7C00F24WVSTTWR1FQX5T', [
  'expected_version' => 4,
  'occurred_at' => '2026-05-13T11:00:00Z',
  'release_quantity' => false,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-fail.php)

### fulfillments.get

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Signature: `get(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Items values: `"order"`, `"packages"`, `"shipments"`. Values: `"order"`, `"packages"`, `"shipments"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->fulfillments->get('ful_01KEZF7C00F24WVSTTWR1FQX5T', [], new RequestOptions());
```

[Complete runnable example](../examples/fulfillments-get.php)

### fulfillments.hold

Pauses fulfillment work with a required merchant hold reason. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/hold`

Signature: `hold(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [HoldFulfillmentRequestInput](../models/HoldFulfillmentRequestInput.md#holdfulfillmentrequestinput) | Pauses fulfillment work with a required merchant hold reason. |

Body model: [HoldFulfillmentRequestInput](../models/HoldFulfillmentRequestInput.md#holdfulfillmentrequestinput).

#### fulfillments.hold body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Why fulfillment work is paused or the service appointment was missed. Values: `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

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

$result = $client->fulfillments->hold('ful_01KEZF7C00F24WVSTTWR1FQX5T', [
  'expected_version' => 4,
  'occurred_at' => '2026-05-13T11:00:00Z',
  'reason' => 'inventory_issue',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-hold.php)

### fulfillments.list

Returns a paginated list of fulfillments. scheduled_start_at uses the service scheduled start or the start of the pickup, local delivery, or shipment window. For scheduled_start_at and terminal_at, null values sort first ascending and last descending. Default order: created_at descending, then fulfillment_id descending.

`GET /v1/fulfillments`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `order_id` | Optional | string | Filter by order ID. |
| `customer_id` | Optional | string | Exact match on customer_id. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across fulfillment_id and external_reference_id. Also matches an exact order number. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ful_01. |
| `status` | Optional | Array of string or string | Filter by exact fulfillment status. Values within this filter are ORed; combined with other filters using AND. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [14 declared values](#fulfillmentslist-input-status--values). Values: [14 declared values](#fulfillmentslist-input-status-values). |
| `type` | Optional | Array of string or string | Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `location_id` | Optional | string | Filter by assigned Location ID. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by fulfillment_id. Default: `"created_at"`. Values: `"created_at"`, `"scheduled_start_at"`, `"terminal_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->fulfillments->list([], new RequestOptions());
```

[Complete runnable example](../examples/fulfillments-list.php)

### fulfillments.markNoShow

Records a missed service appointment with a required no-show reason. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-no-show`

Signature: `markNoShow(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [MarkFulfillmentNoShowRequestInput](../models/MarkFulfillmentNoShowRequestInput.md#markfulfillmentnoshowrequestinput) | Records a missed service appointment with a required no-show reason. |

Body model: [MarkFulfillmentNoShowRequestInput](../models/MarkFulfillmentNoShowRequestInput.md#markfulfillmentnoshowrequestinput).

#### fulfillments.markNoShow body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Why fulfillment work is paused or the service appointment was missed. Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

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

$result = $client->fulfillments->markNoShow('ful_01KEZF7C00F24WVSTTWR1FQX5T', [
  'expected_version' => 4,
  'occurred_at' => '2026-05-13T11:00:00Z',
  'reason' => 'customer_no_show',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-markNoShow.php)

### fulfillments.markPacked

Records that the items for a shipment fulfillment have been packed. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-packed`

Signature: `markPacked(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkFulfillmentPackedRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Records that the items for a shipment fulfillment have been packed. |

Body model: [MarkFulfillmentPackedRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.markPacked body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->markPacked('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-markPacked.php)

### fulfillments.markPicked

Records that the items for a shipment fulfillment have been picked. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-picked`

Signature: `markPicked(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkFulfillmentPickedRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Records that the items for a shipment fulfillment have been picked. |

Body model: [MarkFulfillmentPickedRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.markPicked body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->markPicked('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-markPicked.php)

### fulfillments.markPreparing

Records that preparation of a pickup or delivery fulfillment has begun. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-preparing`

Signature: `markPreparing(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkFulfillmentPreparingRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Records that preparation of a pickup or delivery fulfillment has begun. |

Body model: [MarkFulfillmentPreparingRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.markPreparing body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->markPreparing('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-markPreparing.php)

### fulfillments.markReady

Records that a pickup is ready for collection or a delivery is ready for dispatch. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-ready`

Signature: `markReady(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkFulfillmentReadyRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Records that a pickup is ready for collection or a delivery is ready for dispatch. |

Body model: [MarkFulfillmentReadyRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.markReady body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->markReady('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-markReady.php)

### fulfillments.releaseHold

Releases a merchant hold and restores the previous fulfillment status. An active payment hold must lift first. Schedules and progress timestamps are preserved and no buyer notification is sent. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/release-hold`

Signature: `releaseHold(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [ReleaseFulfillmentHoldRequestInput](../models/ReleaseFulfillmentHoldRequestInput.md#releasefulfillmentholdrequestinput) | Releases a merchant hold and restores the previous fulfillment status. An active payment hold must lift first. Schedules and progress timestamps are preserved and no buyer notification is sent. |

Body model: [ReleaseFulfillmentHoldRequestInput](../models/ReleaseFulfillmentHoldRequestInput.md#releasefulfillmentholdrequestinput).

#### fulfillments.releaseHold body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

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

$result = $client->fulfillments->releaseHold('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-releaseHold.php)

### fulfillments.schedule

Sets the start and end of a service fulfillment's appointment window. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/schedule`

Signature: `schedule(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ScheduleFulfillmentRequestInput](../models/ScheduleFulfillmentRequestInput.md#schedulefulfillmentrequestinput) | Sets the start and end of a service fulfillment's appointment window. |

Body model: [ScheduleFulfillmentRequestInput](../models/ScheduleFulfillmentRequestInput.md#schedulefulfillmentrequestinput).

#### fulfillments.schedule body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `scheduled_end_at` | Required | string | End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. |
| `scheduled_start_at` | Required | string | Start of the service appointment window, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | IANA timezone of the service appointment. minLength: `1`. |

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

$result = $client->fulfillments->schedule('ful_01KEZF7C00F24WVSTTWR1FQX5T', [
  'expected_version' => 4,
  'occurred_at' => '2026-05-13T11:00:00Z',
  'scheduled_end_at' => '2026-05-14T12:00:00Z',
  'scheduled_start_at' => '2026-05-14T11:00:00Z',
  'timezone' => 'America/New_York',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-schedule.php)

### fulfillments.start

Starts fulfillment work. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/start`

Signature: `start(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [StartFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput) | Starts fulfillment work. |

Body model: [StartFulfillmentRequestInput](../models/DispatchFulfillmentRequestInput.md#dispatchfulfillmentrequestinput).

#### fulfillments.start body fields

Field definitions: [shared fields](#fulfillmentsaccept-body-fields).

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

$result = $client->fulfillments->start('ful_01KEZF7C00F24WVSTTWR1FQX5T', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-start.php)

### fulfillments.update

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Signature: `update(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Items values: `"order"`, `"packages"`, `"shipments"`. Values: `"order"`, `"packages"`, `"shipments"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequestInput.md#updatefulfillmentrequestinput) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. A supplied detail field must match the stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count toward exclusivity. |

Body model: [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequestInput.md#updatefulfillmentrequestinput).

#### fulfillments.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | Completion evidence timestamp. Use only to correct completion evidence on an already completed fulfillment; complete pending fulfillments with POST /v1/fulfillments/{fulfillment_id}/complete. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `customer_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `device_id` | Optional | string or null | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. Send null to clear it. minLength: `1`. |
| `digital_details` | Optional | [UpdateDigitalFulfillmentDetailsInput](../models/UpdateDigitalFulfillmentDetailsInput.md#updatedigitalfulfillmentdetailsinput) or null | Details of a `digital` fulfillment, such as the download link. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `local_delivery_details` | Optional | [UpdateDeliveryFulfillmentDetailsInput](../models/UpdateDeliveryFulfillmentDetailsInput.md#updatedeliveryfulfillmentdetailsinput) or null | Details of a `local_delivery` fulfillment, such as the courier's tracking link. |
| `location_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `pickup_details` | Optional | [UpdatePickupFulfillmentDetailsInput](../models/UpdatePickupFulfillmentDetailsInput.md#updatepickupfulfillmentdetailsinput) or null | Details of a `pickup` fulfillment. |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput) or null | Who receives the fulfillment. |
| `service_details` | Optional | [UpdateServiceFulfillmentDetailsInput](../models/UpdateServiceFulfillmentDetailsInput.md#updateservicefulfillmentdetailsinput) or null | Details of a `service` fulfillment. |

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

$result = $client->fulfillments->update('ful_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'metadata' => (object) [
    'shipping_batch' => 'batch-001',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillments-update.php)

