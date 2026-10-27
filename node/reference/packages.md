[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# packages

### packages.createItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Signature:

```typescript
createItem(package_id: InputValue<string>,
 params: (InputValue<CreatePackageItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest) | The request body for: Create package item. |

Body model: [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest).

#### packages.createItem body fields

Field definitions: [shared fields](../models/CreatePackageItemRequest.md#createpackageitemrequest).

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

Complete body and metadata: `createItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.createItem("example", {order_line_item_id: "example", quantity: "100"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-createItem.mjs)

### packages.deleteItem

Removes an order line quantity from a package while the package is still mutable.

`DELETE /v1/packages/{package_id}/items/{package_item_id}`

Signature:

```typescript
deleteItem(package_id: InputValue<string>,
 package_item_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

Complete body and metadata: `deleteItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.deleteItem("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-deleteItem.mjs)

### packages.get

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Signature:

```typescript
get(package_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

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
const result = await client.packages.get("example", {}, {  });
```

[Complete runnable example](../examples/packages-get.mjs)

### packages.getItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Signature:

```typescript
getItem(package_id: InputValue<string>,
 package_item_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

Complete body and metadata: `getItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.packages.getItem("example", "example", {}, {  });
```

[Complete runnable example](../examples/packages-getItem.mjs)

### packages.list

Lists package records, newest created first.

`GET /v1/packages`

Signature:

```typescript
list(params?: {
  "shipment_id"?: InputValue<string>;
  "fulfillment_id"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "external_system"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "query"?: InputValue<string>;
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
  "tracking_number"?: InputValue<string>;
  "carrier"?: InputValue<string>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `external_system` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `tracking_number` | Optional | string | minLength: `1`. maxLength: `255`. |
| `carrier` | Optional | string | minLength: `1`. maxLength: `255`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [PackageListResponse](../models/PackageListResponse.md#packagelistresponse).

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
const result = await client.packages.list({}, {  });
```

[Complete runnable example](../examples/packages-list.mjs)

### packages.listPackageItems

Lists order line quantities contained in packages.

`GET /v1/packages/{package_id}/items`

Signature:

```typescript
listPackageItems(package_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [PackageItemListResponse](../models/PackageItemListResponse.md#packageitemlistresponse).

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

Complete body and metadata: `listPackageItemsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPackageItemsItems`, `listPackageItemsPages`, `listPackageItemsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.packages.listPackageItems("example", {}, {  });
```

[Complete runnable example](../examples/packages-listPackageItems.mjs)

### packages.transition

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/transitions`

Signature: `transition(input: PackagesTransitionInput, options?: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PackageTransitionRequestInput](../models/PackageTransitionRequest.md#packagetransitionrequest) | The request body for: Transition package. |

Body model: [PackageTransitionRequestInput](../models/PackageTransitionRequest.md#packagetransitionrequest).

#### packages.transition body oneOf variant 1

The `mark_delivered` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkDeliveredInput](../models/PackageTransitionRequestMarkDelivered.md#packagetransitionrequestmarkdelivered).

#### packages.transition body oneOf variant 1 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkDelivered.md#packagetransitionrequestmarkdelivered).

#### packages.transition body oneOf variant 2

The `mark_delivery_attempted` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkDeliveryAttemptedInput](../models/PackageTransitionRequestMarkDeliveryAttempted.md#packagetransitionrequestmarkdeliveryattempted).

#### packages.transition body oneOf variant 2 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkDeliveryAttempted.md#packagetransitionrequestmarkdeliveryattempted).

#### packages.transition body oneOf variant 3

The `mark_exception` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkExceptionInput](../models/PackageTransitionRequestMarkException.md#packagetransitionrequestmarkexception).

#### packages.transition body oneOf variant 3 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkException.md#packagetransitionrequestmarkexception).

#### packages.transition body oneOf variant 4

The `mark_in_transit` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkInTransitInput](../models/PackageTransitionRequestMarkInTransit.md#packagetransitionrequestmarkintransit).

#### packages.transition body oneOf variant 4 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkInTransit.md#packagetransitionrequestmarkintransit).

#### packages.transition body oneOf variant 5

The `mark_out_for_delivery` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkOutForDeliveryInput](../models/PackageTransitionRequestMarkOutForDelivery.md#packagetransitionrequestmarkoutfordelivery).

#### packages.transition body oneOf variant 5 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkOutForDelivery.md#packagetransitionrequestmarkoutfordelivery).

#### packages.transition body oneOf variant 6

The `mark_packed` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkPackedInput](../models/PackageTransitionRequestMarkPacked.md#packagetransitionrequestmarkpacked).

#### packages.transition body oneOf variant 6 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkPacked.md#packagetransitionrequestmarkpacked).

#### packages.transition body oneOf variant 7

The `mark_returned` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkReturnedInput](../models/PackageTransitionRequestMarkReturned.md#packagetransitionrequestmarkreturned).

#### packages.transition body oneOf variant 7 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkReturned.md#packagetransitionrequestmarkreturned).

#### packages.transition body oneOf variant 8

The `mark_shipped` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkShippedInput](../models/PackageTransitionRequestMarkShipped.md#packagetransitionrequestmarkshipped).

#### packages.transition body oneOf variant 8 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkShipped.md#packagetransitionrequestmarkshipped).

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

Complete body and metadata: `transitionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.transition({package_id: "example", body: {action: "mark_delivered"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-transition.mjs)

### packages.update

Updates non-lifecycle package fields such as carrier, tracking, expected_delivery_at, label access, measurements, metadata, and caller-owned external references. Descriptive fields can be corrected until the package is voided, regardless of shipment or fulfillment status. Corrections never email the buyer. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`PATCH /v1/packages/{package_id}`

Signature:

```typescript
update(package_id: InputValue<string>,
 params: (InputValue<UpdatePackageRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePackageRequestInput](../models/UpdatePackageRequest.md#updatepackagerequest) | The request body for: Update package. |

Body model: [UpdatePackageRequestInput](../models/UpdatePackageRequest.md#updatepackagerequest).

#### packages.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) or null |  |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer string | Optional resource version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. |
| `label_url` | Optional | string or null | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. Send null to clear it. minLength: `1`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `service_code` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status_reason` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_number` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/Weight.md#weight) or null |  |

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-update.mjs)

### packages.updateItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Signature:

```typescript
updateItem(package_id: InputValue<string>,
 package_item_id: InputValue<string>,
 params: (InputValue<UpdatePackageItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequest.md#updatepackageitemrequest) | The request body for: Update package item. |

Body model: [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequest.md#updatepackageitemrequest).

#### packages.updateItem body fields

Field definitions: [shared fields](../models/UpdatePackageItemRequest.md#updatepackageitemrequest).

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

Complete body and metadata: `updateItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.updateItem("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-updateItem.mjs)

### packages.voidResource

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/void`

Signature:

```typescript
voidResource(package_id: InputValue<string>,
 params?: (InputValue<VoidPackageRequestInput> | {
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
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [VoidPackageRequestInput](../models/VoidPackageRequest.md#voidpackagerequest) | The request body for: Void package. |

Body model: [VoidPackageRequestInput](../models/VoidPackageRequest.md#voidpackagerequest).

#### packages.voidResource body fields

Field definitions: [shared fields](../models/VoidPackageRequest.md#voidpackagerequest).

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

Complete body and metadata: `voidResourceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.voidResource("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-voidResource.mjs)

