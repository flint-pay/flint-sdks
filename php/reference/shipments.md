[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# shipments

### shipments.createPackage

Creates a package record under a shipment. Change package status with POST /v1/packages/{package_id}/transitions; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/shipments/{shipment_id}/packages`

Signature: `createPackage(string|Model $shipment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string | Flint shipment ID. |
| `body` | Required | [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | The request body for: Create package. |

Body model: [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput).

#### shipments.createPackage body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantUnitDimensions.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantunitdimensions) | Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `items` | Optional | Array of [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput) | Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: `1`. maxItems: `100`. Items: The request body for: Create package item. |
| `label_url` | Optional | string | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationRequestInput](../models/ReturnShipmentLineItemAllocationRequestInput.md#returnshipmentlineitemallocationrequestinput) | Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. Items: A return line and the quantity placed in a return shipment or package. |
| `service_code` | Optional | string | minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Outbound packages can start as created or shipped. Return packages must start as created, omit items, and include return_line_items. Use mark_shipped after the buyer hands over the return package. Values: `"created"`, `"shipped"`. |
| `status_reason` | Optional | string | minLength: `1`. |
| `tracking_number` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantUnitWeight.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantunitweight) | A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### shipments.createPackage with `status: "created"`

The `created` variant of `PackageCreateInput`.

Body model: [PackageCreateInputCreatedInput](../models/PackageCreateInputCreatedInput.md#packagecreateinputcreatedinput).

#### shipments.createPackage with `status: "shipped"`

The `shipped` variant of `PackageCreateInput`.

Body model: [PackageCreateInputShippedInput](../models/PackageCreateInputShippedInput.md#packagecreateinputshippedinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->shipments->createPackage('shp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'carrier' => 'ups',
  'dimensions' => (object) [
    'height' => 4,
    'length' => 8,
    'unit' => 'inch',
    'width' => 6,
  ],
  'expected_delivery_at' => '2026-05-15T18:00:00Z',
  'external_reference_id' => 'pkg_789',
  'external_system' => 'merchant_wms',
  'metadata' => (object) [
    'box' => 'small',
  ],
  'service_code' => 'ground',
  'status' => 'shipped',
  'tracking_number' => '1Z999AA10123456784',
  'tracking_url' => 'https://track.example.com/1Z999AA10123456784',
  'weight' => (object) [
    'unit' => 'pound',
    'value' => 1.2,
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/shipments-createPackage.php)

### shipments.get

Retrieves one shipment execution record by ID.

`GET /v1/shipments/{shipment_id}`

Signature: `get(string|Model $shipment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string | Flint shipment ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order, packages. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=order&expand=packages, or pass one comma-separated value. Items values: `"order"`, `"packages"`. Values: `"order"`, `"packages"`. |

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
$result = $client->shipments->get('shp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/shipments-get.php)

### shipments.list

Lists shipment execution records, newest created first. Default order: created_at descending, then shipment_id descending.

`GET /v1/shipments`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string | Optional order ID filter. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `external_system` | Optional | string | Filter by external system identifier. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across shipment ID and external reference ID. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as shp_01. |
| `return_id` | Optional | string | Filter by linked Return ID. |
| `handed_off_after` | Optional | string | Inclusive lower bound on handed_off_at. Format: `date-time`. |
| `handed_off_before` | Optional | string | Exclusive upper bound on handed_off_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package-derived shipment status. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `direction` | Optional | Array of string or string | Filter by shipment direction. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"outbound"`, `"return"`. Values: `"outbound"`, `"return"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [ShipmentListResponse](../models/ShipmentListResponse.md#shipmentlistresponse).

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

```php
$result = $client->shipments->list([], new RequestOptions());
```

[Complete runnable example](../examples/shipments-list.php)

### shipments.update

Updates shipment metadata and caller-owned external references. Shipment status is derived from package statuses and cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/shipments/{shipment_id}`

Signature: `update(string|Model $shipment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string | Flint shipment ID. |
| `body` | Required | [UpdateShipmentRequestInput](../models/UpdateShipmentRequestInput.md#updateshipmentrequestinput) | The request body for: Update shipment. |

Body model: [UpdateShipmentRequestInput](../models/UpdateShipmentRequestInput.md#updateshipmentrequestinput).

#### shipments.update body fields

Field definitions: [shared fields](../models/UpdateShipmentRequestInput.md#updateshipmentrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->shipments->update('shp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'metadata' => (object) [
    'route' => 'A7',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/shipments-update.php)

### shipments.void

Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/shipments/{shipment_id}/void`

Signature: `void(string|Model $shipment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string | Flint shipment ID. |
| `body` | Optional | [VoidShipmentRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput) | The request body for: Void shipment. |

Body model: [VoidShipmentRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

#### shipments.void body fields

Field definitions: [shared fields](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

#### Response

Returned payload: [VoidShipmentResult](../models/VoidShipmentResult.md#voidshipmentresult).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->shipments->void('shp_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/shipments-void.php)

