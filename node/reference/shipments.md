[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# shipments

### shipments.createPackage

Creates a package record under a shipment. Change package status with POST /v1/packages/{package_id}/transitions; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/shipments/{shipment_id}/packages`

Signature:

```typescript
createPackage(shipment_id: InputValue<string>,
 params: (InputValue<PackageCreateRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PackageCreateRequestInput](../models/PackageCreateRequest.md#packagecreaterequest) | The request body for: Create package. |

Body model: [PackageCreateRequestInput](../models/PackageCreateRequest.md#packagecreaterequest).

#### shipments.createPackage body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) | Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `items` | Optional | Array of [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest) | Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: `1`. maxItems: `100`. |
| `label_url` | Optional | string | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) | Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. |
| `service_code` | Optional | string | minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Values: `"created"`, `"shipped"`. |
| `status_reason` | Optional | string | minLength: `1`. |
| `tracking_number` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/Weight.md#weight) | A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### shipments.createPackage body oneOf variant 1

The `created` variant of `PackageCreateInput`.

Body model: [PackageCreateInputCreatedInput](../models/PackageCreateInputCreated.md#packagecreateinputcreated).

#### shipments.createPackage body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) | Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `items` | Optional | Array of [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest) | Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: `1`. maxItems: `100`. |
| `label_url` | Optional | string | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) | Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. |
| `service_code` | Optional | string | minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Values: `"created"`. |
| `status_reason` | Optional | string | minLength: `1`. |
| `tracking_number` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/Weight.md#weight) | A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### shipments.createPackage body oneOf variant 2

The `shipped` variant of `PackageCreateInput`.

Body model: [PackageCreateInputShippedInput](../models/PackageCreateInputShipped.md#packagecreateinputshipped).

#### shipments.createPackage body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) | Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `items` | Optional | Array of [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest) | Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: `1`. maxItems: `100`. |
| `label_url` | Optional | string | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) | Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. |
| `service_code` | Optional | string | minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Values: `"shipped"`. |
| `status_reason` | Optional | string | minLength: `1`. |
| `tracking_number` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/Weight.md#weight) | A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### Response

Returned payload: [Package](../models/Package.md#package).

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

Complete body and metadata: `createPackageWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shipments.createPackage("example", {status: "created"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shipments-createPackage.mjs)

### shipments.get

Retrieves one shipment execution record by ID.

`GET /v1/shipments/{shipment_id}`

Signature:

```typescript
get(shipment_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.shipments.get("example", {}, {  });
```

[Complete runnable example](../examples/shipments-get.mjs)

### shipments.list

Lists shipment execution records, newest created first.

`GET /v1/shipments`

Signature:

```typescript
list(params?: {
  "order_id"?: InputValue<string>;
  "fulfillment_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "external_system"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "handed_off_after"?: InputValue<string | globalThis.Date>;
  "handed_off_before"?: InputValue<string | globalThis.Date>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "status"?: InputValue<Array<"created" |
    "packed" |
    "shipped" |
    "in_transit" |
    "out_for_delivery" |
    "delivered" |
    "delivery_attempted" |
    "exception" |
    "returned" |
    "voided">>;
  "direction"?: InputValue<Array<"outbound" | "return">>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `external_system` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `return_id` | Optional | string |  |
| `handed_off_after` | Optional | string | Format: `date-time`. |
| `handed_off_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `direction` | Optional | Array of string | minItems: `1`. Items values: `"outbound"`, `"return"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [ShipmentListResponse](../models/ShipmentListResponse.md#shipmentlistresponse).

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

```typescript
const result = await client.shipments.list({}, {  });
```

[Complete runnable example](../examples/shipments-list.mjs)

### shipments.update

Updates shipment metadata and caller-owned external references. Shipment status is derived from package statuses and cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/shipments/{shipment_id}`

Signature:

```typescript
update(shipment_id: InputValue<string>,
 params: (InputValue<UpdateShipmentRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateShipmentRequestInput](../models/UpdateShipmentRequest.md#updateshipmentrequest) | The request body for: Update shipment. |

Body model: [UpdateShipmentRequestInput](../models/UpdateShipmentRequest.md#updateshipmentrequest).

#### shipments.update body fields

Field definitions: [shared fields](../models/UpdateShipmentRequest.md#updateshipmentrequest).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shipments.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shipments-update.mjs)

### shipments.voidResource

Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/shipments/{shipment_id}/void`

Signature:

```typescript
voidResource(shipment_id: InputValue<string>,
 params?: (InputValue<VoidShipmentRequestInput> | {
  "buyer_notification_behavior"?: never;
  "expected_version"?: never;
  "occurred_at"?: never;
  "reason_message"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [VoidShipmentRequestInput](../models/VoidPackageRequest.md#voidpackagerequest) | The request body for: Void shipment. |

Body model: [VoidShipmentRequestInput](../models/VoidPackageRequest.md#voidpackagerequest).

#### shipments.voidResource body fields

Field definitions: [shared fields](../models/VoidPackageRequest.md#voidpackagerequest).

#### Response

Returned payload: [VoidShipmentResult](../models/VoidShipmentResult.md#voidshipmentresult).

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

Complete body and metadata: `voidResourceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shipments.voidResource("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shipments-voidResource.mjs)

