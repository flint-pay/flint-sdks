[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# packages

### packages.createItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Signature: `createItem(package_id: InputValue<string>, params: PackagesCreateItemParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `body` | Required | [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest) | The request body for: Create package item. |

Body model: [CreatePackageItemRequestInput](../models/CreatePackageItemRequest.md#createpackageitemrequest).

#### packages.createItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

const result = await client.packages.createItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {slot: "A"}, order_line_item_id: "li_01KEZF7C0003GP5Y88KW1687AP", quantity: 1}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-createItem.mjs)

### packages.deleteItem

Removes an order line quantity from a package while the package is still mutable.

`DELETE /v1/packages/{package_id}/items/{package_item_id}`

Signature:

```typescript
deleteItem(package_id: InputValue<string>,
 package_item_id: InputValue<string>,
 params?: PackagesDeleteItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `package_item_id` | Required | string | Flint package item ID. |
| `expected_version` | Optional | integer | Optional item version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.packages.deleteItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-deleteItem.mjs)

### packages.get

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Signature: `get(package_id: InputValue<string>, params?: PackagesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [Package](../models/Package.md#package).

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
const result = await client.packages.get("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/packages-get.mjs)

### packages.getItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Signature:

```typescript
getItem(package_id: InputValue<string>,
 package_item_id: InputValue<string>,
 params?: PackagesGetItemParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `package_item_id` | Required | string | Flint package item ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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
const result = await client.packages.getItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/packages-getItem.mjs)

### packages.list

Lists package records, newest created first. Default order: created_at descending, then package_id descending.

`GET /v1/packages`

Signature: `list(params?: PackagesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string | Optional shipment ID filter. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `order_id` | Optional | string | Optional order ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `external_system` | Optional | string | Filter by external system identifier. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across package ID, external reference ID, and tracking number. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as pkg_01. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package status. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `tracking_number` | Optional | string | Byte-sensitive full tracking-number match. Whitespace and commas are literal; combine with carrier to identify a carrier-specific tracking number. minLength: `1`. maxLength: `255`. |
| `carrier` | Optional | string | Byte-sensitive full carrier match. Whitespace and commas are literal. minLength: `1`. maxLength: `255`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [PackageListResponse](../models/PackageListResponse.md#packagelistresponse).

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
const result = await client.packages.list({}, {  });
```

[Complete runnable example](../examples/packages-list.mjs)

### packages.listPackageItems

Lists order line quantities contained in packages. Default order: created_at descending, then package_item_id descending.

`GET /v1/packages/{package_id}/items`

Signature:

```typescript
listPackageItems(package_id: InputValue<string>,
 params?: PackagesListPackageItemsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [PackageItemListResponse](../models/PackageItemListResponse.md#packageitemlistresponse).

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

Pagination: `listPackageItemsItems`, `listPackageItemsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.packages.listPackageItems("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/packages-listPackageItems.mjs)

### packages.transition

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/transitions`

Signature: `transition(package_id: InputValue<string>, params: PackagesTransitionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `body` | Required | [PackageTransitionRequestInput](../models/PackageTransitionRequest.md#packagetransitionrequest) | The request body for: Transition package. |

Body model: [PackageTransitionRequestInput](../models/PackageTransitionRequest.md#packagetransitionrequest).

#### packages.transition with `action: "mark_delivered"`

The `mark_delivered` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkDeliveredInput](../models/PackageTransitionRequestMarkDelivered.md#packagetransitionrequestmarkdelivered).

#### packages.transition with `action: "mark_delivery_attempted"`

The `mark_delivery_attempted` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkDeliveryAttemptedInput](../models/PackageTransitionRequestMarkDeliveryAttempted.md#packagetransitionrequestmarkdeliveryattempted).

#### packages.transition with `action: "mark_exception"`

The `mark_exception` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkExceptionInput](../models/PackageTransitionRequestMarkException.md#packagetransitionrequestmarkexception).

#### packages.transition with `action: "mark_in_transit"`

The `mark_in_transit` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkInTransitInput](../models/PackageTransitionRequestMarkInTransit.md#packagetransitionrequestmarkintransit).

#### packages.transition with `action: "mark_out_for_delivery"`

The `mark_out_for_delivery` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkOutForDeliveryInput](../models/PackageTransitionRequestMarkOutForDelivery.md#packagetransitionrequestmarkoutfordelivery).

#### packages.transition with `action: "mark_packed"`

The `mark_packed` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkPackedInput](../models/PackageTransitionRequestMarkPacked.md#packagetransitionrequestmarkpacked).

#### packages.transition with `action: "mark_returned"`

The `mark_returned` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkReturnedInput](../models/PackageTransitionRequestMarkReturned.md#packagetransitionrequestmarkreturned).

#### packages.transition with `action: "mark_shipped"`

The `mark_shipped` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkShippedInput](../models/PackageTransitionRequestMarkShipped.md#packagetransitionrequestmarkshipped).

#### Response

Returned payload: [Package](../models/Package.md#package).

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

const result = await client.packages.transition("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "mark_out_for_delivery", buyer_notification_behavior: "send", expected_delivery_at: "2026-05-15T18:00:00Z", expected_version: 3}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-transition.mjs)

### packages.update

Updates non-lifecycle package fields such as carrier, tracking, expected_delivery_at, label access, measurements, metadata, and caller-owned external references. Descriptive fields can be corrected until the package is voided, regardless of shipment or fulfillment status. Corrections never email the buyer. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`PATCH /v1/packages/{package_id}`

Signature: `update(package_id: InputValue<string>, params: PackagesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `body` | Required | [UpdatePackageRequestInput](../models/UpdatePackageRequest.md#updatepackagerequest) | The request body for: Update package. |

Body model: [UpdatePackageRequestInput](../models/UpdatePackageRequest.md#updatepackagerequest).

#### packages.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/Dimensions.md#dimensions) or null |  |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. |
| `label_url` | Optional | string or null | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `service_code` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status_reason` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_number` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/Weight.md#weight) or null |  |

#### Response

Returned payload: [Package](../models/Package.md#package).

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

const result = await client.packages.update("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {tracking_number: "SYNTHETIC-TRACKING-001"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-update.mjs)

### packages.updateItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Signature:

```typescript
updateItem(package_id: InputValue<string>,
 package_item_id: InputValue<string>,
 params: PackagesUpdateItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `package_item_id` | Required | string | Flint package item ID. |
| `body` | Required | [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequest.md#updatepackageitemrequest) | The request body for: Update package item. |

Body model: [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequest.md#updatepackageitemrequest).

#### packages.updateItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

#### Response

Returned payload: [PackageItem](../models/PackageItem.md#packageitem).

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

const result = await client.packages.updateItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 1}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-updateItem.mjs)

### packages.void

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/void`

Signature: `void(package_id: InputValue<string>, params?: PackagesVoidParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `body` | Optional | [VoidPackageRequestInput](../models/VoidPackageRequest.md#voidpackagerequest) | The request body for: Void package. |

Body model: [VoidPackageRequestInput](../models/VoidPackageRequest.md#voidpackagerequest).

#### packages.void body fields

Field definitions: [shared fields](../models/VoidPackageRequest.md#voidpackagerequest).

#### Response

Returned payload: [Package](../models/Package.md#package).

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

const result = await client.packages.void("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/packages-void.mjs)

