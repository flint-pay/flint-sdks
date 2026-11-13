[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillments

### fulfillments.accept

Accepts pending fulfillment work so preparation can begin. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/accept`

Signature: `accept(fulfillment_id: InputValue<string>, params?: FulfillmentsAcceptParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.accept("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-accept.mjs)

### fulfillments.cancel

Cancels fulfillment work that has not completed. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/cancel`

Signature: `cancel(fulfillment_id: InputValue<string>, params?: FulfillmentsCancelParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.cancel("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-cancel.mjs)

### fulfillments.complete

Completes the fulfillment and records its completion time. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/complete`

Signature: `complete(fulfillment_id: InputValue<string>, params?: FulfillmentsCompleteParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.complete("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-complete.mjs)

### fulfillments.create

Creates a fulfillment for the specified quantities on a paid order. Idempotency-Key is required for every request because an inline shipped package can consume inventory. Save the key before sending and retry the same key and body after a lost response. GET /v1/fulfillments supports order_id and external_reference_id filters, but not idempotency_key; an empty list does not prove creation failed. If replay cannot recover the result, contact support with the original key and request ID instead of creating another fulfillment. A line that does not require fulfillment returns 400 INVALID_REQUEST with detail code NOT_ALLOWED at line_items[i].order_line_item_id; an unknown line ID returns 404 RESOURCE_NOT_FOUND. Use this when you manage fulfillment outside checkout; checkout creates fulfillments for the buyer's delivery selections. While Flint is creating those fulfillments, requests for their quantities return OPERATION_IN_PROGRESS with reason delivery_selection_materializing. Retrieve the order and use its fulfillments. Fails with `ACTION_NOT_ALLOWED` and reason `status_not_reached` when the order is not paid. See the fulfillment guide.

`POST /v1/fulfillments`

Signature: `create(params: FulfillmentsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateFulfillmentRequestInput](../models/CreateFulfillmentRequest.md#createfulfillmentrequest) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. |

Body model: [CreateFulfillmentRequestInput](../models/CreateFulfillmentRequest.md#createfulfillmentrequest).

#### fulfillments.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. minLength: `1`. |
| `device_id` | Optional | string | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. minLength: `1`. |
| `digital_details` | Optional | [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetails.md#createdigitalfulfillmentdetails) | Details of a `digital` fulfillment, such as the download link. Digital fulfillment details you supply when creating a fulfillment: the delivery URL. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequest.md#fulfillmentlineitemrequest) | Order line items, with the quantity of each, that this fulfillment covers. minItems: `1`. |
| `local_delivery_details` | Optional | [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetails.md#createdeliveryfulfillmentdetails) | Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking. |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | Paid order whose quantities this fulfillment delivers. minLength: `1`. |
| `pickup_details` | Optional | [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetails.md#createpickupfulfillmentdetails) | Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details. |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequest.md#fulfillmentrecipientrequest) | Who receives the fulfillment. Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions. |
| `service_details` | Optional | [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetails.md#createservicefulfillmentdetails) | Details of a `service` fulfillment. Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes. |
| `shipment` | Optional | [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequest.md#fulfillmentpackagingrequest) | Creates an outbound shipment and packages atomically with a shipment fulfillment. single_package assigns every submitted line quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in the same call. Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`. External reference and metadata are optional. |
| `type` | Required | string | The kind of fulfillment. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |

#### fulfillments.create with `type: "shipment"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestShipmentInput](../models/CreateFulfillmentRequestShipment.md#createfulfillmentrequestshipment).

#### fulfillments.create with `type: "pickup"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestPickupInput](../models/CreateFulfillmentRequestPickup.md#createfulfillmentrequestpickup).

#### fulfillments.create with `type: "local_delivery"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestLocalDeliveryInput](../models/CreateFulfillmentRequestLocalDelivery.md#createfulfillmentrequestlocaldelivery).

#### fulfillments.create with `type: "digital"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestDigitalInput](../models/CreateFulfillmentRequestDigital.md#createfulfillmentrequestdigital).

#### fulfillments.create with `type: "service"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestServiceInput](../models/CreateFulfillmentRequestService.md#createfulfillmentrequestservice).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.create({line_items: [{bundle_component_id: null, order_line_item_id: "li_01KEZF7C004XP0V220YVMGQ354", quantity: 1}], metadata: {source: "dispatch"}, order_id: "ord_01KEZF7C006M16GC2D8HRRC30T", shipment: {package: {carrier: "ups", status: "created", tracking_number: "1Z999AA10123456784"}, packaging: "single_package"}, type: "shipment"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-create.mjs)

### fulfillments.dispatch

Records that a shipment or local delivery fulfillment has left for its destination. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/dispatch`

Signature: `dispatch(fulfillment_id: InputValue<string>, params?: FulfillmentsDispatchParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.dispatch("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-dispatch.mjs)

### fulfillments.fail

Records fulfillment failure and explicitly releases or preserves the allocated quantities. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/fail`

Signature: `fail(fulfillment_id: InputValue<string>, params: FulfillmentsFailParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [FailFulfillmentRequestInput](../models/FailFulfillmentRequest.md#failfulfillmentrequest) | Records fulfillment failure and explicitly releases or preserves the allocated quantities. |

Body model: [FailFulfillmentRequestInput](../models/FailFulfillmentRequest.md#failfulfillmentrequest).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.fail("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4, occurred_at: "2026-05-13T11:00:00Z", release_quantity: false}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-fail.mjs)

### fulfillments.get

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Signature: `get(fulfillment_id: InputValue<string>, params?: FulfillmentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.fulfillments.get("ful_01KEZF7C00F24WVSTTWR1FQX5T", {}, {  });
```

[Complete runnable example](../examples/fulfillments-get.mjs)

### fulfillments.hold

Pauses fulfillment work with a required merchant hold reason. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/hold`

Signature: `hold(fulfillment_id: InputValue<string>, params: FulfillmentsHoldParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [HoldFulfillmentRequestInput](../models/HoldFulfillmentRequest.md#holdfulfillmentrequest) | Pauses fulfillment work with a required merchant hold reason. |

Body model: [HoldFulfillmentRequestInput](../models/HoldFulfillmentRequest.md#holdfulfillmentrequest).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.hold("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4, occurred_at: "2026-05-13T11:00:00Z", reason: "inventory_issue"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-hold.mjs)

### fulfillments.list

Returns a paginated list of fulfillments. scheduled_start_at uses the service scheduled start or the start of the pickup, local delivery, or shipment window. For scheduled_start_at and terminal_at, null values sort first ascending and last descending. Default order: created_at descending, then fulfillment_id descending.

`GET /v1/fulfillments`

Signature: `list(params?: FulfillmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `order_id` | Optional | string | Filter by order ID. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `customer_id` | Optional | string | Exact match on customer_id. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `query` | Optional | string | Search across fulfillment_id and external_reference_id. Also matches an exact order number. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ful_01. |
| `status` | Optional | Array of string or string | Filter by exact fulfillment status. Values within this filter are ORed; combined with other filters using AND. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [14 declared values](#fulfillmentslist-input-status--values). Values: [14 declared values](#fulfillmentslist-input-status-values). |
| `type` | Optional | Array of string or string | Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. |
| `location_id` | Optional | string | Filter by assigned Location ID. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
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

```typescript
const result = await client.fulfillments.list({}, {  });
```

[Complete runnable example](../examples/fulfillments-list.mjs)

### fulfillments.markNoShow

Records a missed service appointment with a required no-show reason. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-no-show`

Signature: `markNoShow(fulfillment_id: InputValue<string>, params: FulfillmentsMarkNoShowParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [MarkFulfillmentNoShowRequestInput](../models/MarkFulfillmentNoShowRequest.md#markfulfillmentnoshowrequest) | Records a missed service appointment with a required no-show reason. |

Body model: [MarkFulfillmentNoShowRequestInput](../models/MarkFulfillmentNoShowRequest.md#markfulfillmentnoshowrequest).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.markNoShow("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4, occurred_at: "2026-05-13T11:00:00Z", reason: "customer_no_show"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-markNoShow.mjs)

### fulfillments.markPacked

Records that the items for a shipment fulfillment have been packed. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-packed`

Signature: `markPacked(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkPackedParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.markPacked("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-markPacked.mjs)

### fulfillments.markPicked

Records that the items for a shipment fulfillment have been picked. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-picked`

Signature: `markPicked(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkPickedParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.markPicked("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-markPicked.mjs)

### fulfillments.markPreparing

Records that preparation of a pickup or delivery fulfillment has begun. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-preparing`

Signature: `markPreparing(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkPreparingParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.markPreparing("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-markPreparing.mjs)

### fulfillments.markReady

Records that a pickup is ready for collection or a delivery is ready for dispatch. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/mark-ready`

Signature: `markReady(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkReadyParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.markReady("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-markReady.mjs)

### fulfillments.releaseHold

Releases a merchant hold and restores the previous fulfillment status. An active payment hold must lift first. Schedules and progress timestamps are preserved and no buyer notification is sent. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/release-hold`

Signature: `releaseHold(fulfillment_id: InputValue<string>, params?: FulfillmentsReleaseHoldParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [ReleaseFulfillmentHoldRequestInput](../models/ReleaseFulfillmentHoldRequest.md#releasefulfillmentholdrequest) | Releases a merchant hold and restores the previous fulfillment status. An active payment hold must lift first. Schedules and progress timestamps are preserved and no buyer notification is sent. |

Body model: [ReleaseFulfillmentHoldRequestInput](../models/ReleaseFulfillmentHoldRequest.md#releasefulfillmentholdrequest).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.releaseHold("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-releaseHold.mjs)

### fulfillments.schedule

Sets the start and end of a service fulfillment's appointment window. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/schedule`

Signature: `schedule(fulfillment_id: InputValue<string>, params: FulfillmentsScheduleParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ScheduleFulfillmentRequestInput](../models/ScheduleFulfillmentRequest.md#schedulefulfillmentrequest) | Sets the start and end of a service fulfillment's appointment window. |

Body model: [ScheduleFulfillmentRequestInput](../models/ScheduleFulfillmentRequest.md#schedulefulfillmentrequest).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.schedule("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4, occurred_at: "2026-05-13T11:00:00Z", scheduled_end_at: "2026-05-14T12:00:00Z", scheduled_start_at: "2026-05-14T11:00:00Z", timezone: "America/New_York"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-schedule.mjs)

### fulfillments.start

Starts fulfillment work. Read supported_actions for actions available now. occurred_at records when the action occurred; on complete it also records completion evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillments/{fulfillment_id}/start`

Signature: `start(fulfillment_id: InputValue<string>, params?: FulfillmentsStartParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.start("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-start.mjs)

### fulfillments.update

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Signature: `update(fulfillment_id: InputValue<string>, params: FulfillmentsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequest.md#updatefulfillmentrequest) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. A supplied detail field must match the stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count toward exclusivity. minProperties: `1`. |

Body model: [UpdateFulfillmentRequestInput](../models/UpdateFulfillmentRequest.md#updatefulfillmentrequest).

#### fulfillments.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | Completion evidence timestamp. Use only to correct completion evidence on an already completed fulfillment; complete pending fulfillments with POST /v1/fulfillments/{fulfillment_id}/complete. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `customer_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `device_id` | Optional | string or null | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. Send null to clear it. minLength: `1`. |
| `digital_details` | Optional | [UpdateDigitalFulfillmentDetailsInput](../models/UpdateDigitalFulfillmentDetails.md#updatedigitalfulfillmentdetails) or null | Details of a `digital` fulfillment, such as the download link. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `local_delivery_details` | Optional | [UpdateDeliveryFulfillmentDetailsInput](../models/UpdateDeliveryFulfillmentDetails.md#updatedeliveryfulfillmentdetails) or null | Details of a `local_delivery` fulfillment, such as the courier's tracking link. |
| `location_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `pickup_details` | Optional | [UpdatePickupFulfillmentDetailsInput](../models/UpdatePickupFulfillmentDetails.md#updatepickupfulfillmentdetails) or null | Details of a `pickup` fulfillment. |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequest.md#fulfillmentrecipientrequest) or null | Who receives the fulfillment. |
| `service_details` | Optional | [UpdateServiceFulfillmentDetailsInput](../models/UpdateServiceFulfillmentDetails.md#updateservicefulfillmentdetails) or null | Details of a `service` fulfillment. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.update("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {shipping_batch: "batch-001"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/fulfillments-update.mjs)

