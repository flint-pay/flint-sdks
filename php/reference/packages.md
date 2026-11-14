[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# packages

### packages.create

Creates a package record under a shipment. Change package status through its lifecycle action routes, such as POST /v1/packages/{package_id}/mark-shipped; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreatePackageRequestInput](../models/CreatePackageRequestInput.md#createpackagerequestinput) | Creates one package belonging to shipment_id. Inline packages omit shipment_id because their enclosing create supplies the shipment. |

Body model: [CreatePackageRequestInput](../models/CreatePackageRequestInput.md#createpackagerequestinput).

#### packages.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | Carrier that handles the package. minLength: `1`. |
| `dimensions` | Optional | [DimensionsRequestInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantUnitDimensions.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantunitdimensions) | Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `items` | Optional | Array of [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput) | Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line and bundle component pair may appear once. minItems: `1`. maxItems: `100`. |
| `label_url` | Optional | string | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationRequestInput](../models/ReturnShipmentLineItemAllocationRequestInput.md#returnshipmentlineitemallocationrequestinput) | Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. |
| `service_code` | Optional | string | Carrier's code for the shipping service used. minLength: `1`. |
| `shipment_id` | Required | string | Shipment that owns this package. minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Outbound packages can start as created or shipped. Return packages must start as created, omit items, and include return_line_items. Use mark_shipped after the buyer hands over the return package. Values: `"created"`, `"shipped"`. |
| `status_reason` | Optional | string | Additional explanation of the package's starting status. minLength: `1`. |
| `tracking_number` | Optional | string | Carrier tracking number for the package. minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [WeightRequestInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantUnitWeight.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantunitweight) | Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### packages.create with `status: "created"`

Creates one package belonging to shipment_id. Inline packages omit shipment_id because their enclosing create supplies the shipment.

Body model: [CreatePackageRequestCreatedInput](../models/CreatePackageRequestCreatedInput.md#createpackagerequestcreatedinput).

#### packages.create with `status: "shipped"`

Creates one package belonging to shipment_id. Inline packages omit shipment_id because their enclosing create supplies the shipment.

Body model: [CreatePackageRequestShippedInput](../models/CreatePackageRequestShippedInput.md#createpackagerequestshippedinput).

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

$result = $client->packages->create([
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
  'shipment_id' => 'shp_01KEZF7C006DZPA7FGH42HTBY8',
  'status' => 'shipped',
  'tracking_number' => '1Z999AA10123456784',
  'tracking_url' => 'https://track.example.com/1Z999AA10123456784',
  'weight' => (object) [
    'unit' => 'pound',
    'value' => 1.2,
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-create.php)

### packages.createItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Signature: `createItem(string|Model $package_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput) | The request body for: Create package item. |

Body model: [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput).

#### packages.createItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Bundle component to pack, from the order line's bundle_components. Required for every bundle line, including a line with only one component in the fulfillment. Send null for a non-bundle line. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. |

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

$result = $client->packages->createItem('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', [
  'metadata' => (object) [
    'slot' => 'A',
  ],
  'order_line_item_id' => 'li_01KEZF7C0003GP5Y88KW1687AP',
  'quantity' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-createItem.php)

### packages.deleteItem

Removes an order line quantity from a package while the package is still mutable.

`DELETE /v1/packages/{package_id}/items/{package_item_id}`

Signature: `deleteItem(string|Model $package_id, string|Model $package_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `package_item_id` | Required | string | Flint package item ID. |
| `expected_version` | Optional | integer | Optional item version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

$result = $client->packages->deleteItem('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', 'pki_01KEZF7C00CEFTYV5RD7XVYQ7B', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-deleteItem.php)

### packages.get

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Signature: `get(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->packages->get('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', [], new RequestOptions());
```

[Complete runnable example](../examples/packages-get.php)

### packages.getItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Signature: `getItem(string|Model $package_id, string|Model $package_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `package_item_id` | Required | string | Flint package item ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->packages->getItem('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', 'pki_01KEZF7C00CEFTYV5RD7XVYQ7B', [], new RequestOptions());
```

[Complete runnable example](../examples/packages-getItem.php)

### packages.list

Lists package records, newest created first. Default order: created_at descending, then package_id descending.

`GET /v1/packages`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string | Optional shipment ID filter. pattern: `^shp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. pattern: `^ful_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | Optional order ID filter. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `external_system` | Optional | string | Filter by external system identifier. |
| `external_reference_id` | Optional | string | Exact match on the package's `external_reference_id`. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across package ID, external reference ID, and tracking number. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as pkg_01. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package status. Values within this filter are combined with OR. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `tracking_number` | Optional | string | Byte-sensitive full tracking-number match. Whitespace and commas are literal; combine with carrier to identify a carrier-specific tracking number. minLength: `1`. maxLength: `255`. |
| `carrier` | Optional | string | Byte-sensitive full carrier match. Whitespace and commas are literal. minLength: `1`. maxLength: `255`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PackageListResponse](../models/PackageListResponse.md#packagelistresponse).

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
$result = $client->packages->list([], new RequestOptions());
```

[Complete runnable example](../examples/packages-list.php)

### packages.listPackageItems

Lists order line quantities contained in packages. Default order: created_at descending, then package_item_id descending.

`GET /v1/packages/{package_id}/items`

Signature: `listPackageItems(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

```php
$result = $client->packages->listPackageItems('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', [], new RequestOptions());
```

[Complete runnable example](../examples/packages-listPackageItems.php)

### packages.markDelivered

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-delivered`

Signature: `markDelivered(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageDeliveredRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput) | Records the package action mark_delivered. |

Body model: [MarkPackageDeliveredRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput).

#### packages.markDelivered body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

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

$result = $client->packages->markDelivered('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markDelivered.php)

### packages.markDeliveryAttempted

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-delivery-attempted`

Signature: `markDeliveryAttempted(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageDeliveryAttemptedRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput) | Records the package action mark_delivery_attempted. |

Body model: [MarkPackageDeliveryAttemptedRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput).

#### packages.markDeliveryAttempted body fields

Field definitions: [shared fields](#packagesmarkdelivered-body-fields).

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

$result = $client->packages->markDeliveryAttempted('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markDeliveryAttempted.php)

### packages.markException

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-exception`

Signature: `markException(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageExceptionRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput) | Records the package action mark_exception. |

Body model: [MarkPackageExceptionRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput).

#### packages.markException body fields

Field definitions: [shared fields](#packagesmarkdelivered-body-fields).

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

$result = $client->packages->markException('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markException.php)

### packages.markInTransit

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Reroutes from out_for_delivery or delivery_attempted require occurred_at at or after the package's latest recorded status time. An older scan is refused before any write with 409 ACTION_NOT_ALLOWED, reason out_of_order, param occurred_at, current_status, and latest_status_occurred_at. Discard it or send an occurred_at at or after that time; equal timestamps are accepted. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-in-transit`

Signature: `markInTransit(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageInTransitRequestInput](../models/MarkPackageOutForDeliveryRequestInput.md#markpackageoutfordeliveryrequestinput) | Records the package action mark_in_transit. |

Body model: [MarkPackageInTransitRequestInput](../models/MarkPackageOutForDeliveryRequestInput.md#markpackageoutfordeliveryrequestinput).

#### packages.markInTransit body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

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

$result = $client->packages->markInTransit('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markInTransit.php)

### packages.markOutForDelivery

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-out-for-delivery`

Signature: `markOutForDelivery(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageOutForDeliveryRequestInput](../models/MarkPackageOutForDeliveryRequestInput.md#markpackageoutfordeliveryrequestinput) | Records the package action mark_out_for_delivery. |

Body model: [MarkPackageOutForDeliveryRequestInput](../models/MarkPackageOutForDeliveryRequestInput.md#markpackageoutfordeliveryrequestinput).

#### packages.markOutForDelivery body fields

Field definitions: [shared fields](#packagesmarkintransit-body-fields).

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

$result = $client->packages->markOutForDelivery('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markOutForDelivery.php)

### packages.markPacked

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-packed`

Signature: `markPacked(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackagePackedRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput) | Records the package action mark_packed. |

Body model: [MarkPackagePackedRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput).

#### packages.markPacked body fields

Field definitions: [shared fields](#packagesmarkdelivered-body-fields).

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

$result = $client->packages->markPacked('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markPacked.php)

### packages.markReturned

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-returned`

Signature: `markReturned(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageReturnedRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput) | Records the package action mark_returned. |

Body model: [MarkPackageReturnedRequestInput](../models/MarkPackageDeliveryAttemptedRequestInput.md#markpackagedeliveryattemptedrequestinput).

#### packages.markReturned body fields

Field definitions: [shared fields](#packagesmarkdelivered-body-fields).

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

$result = $client->packages->markReturned('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markReturned.php)

### packages.markShipped

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/mark-shipped`

Signature: `markShipped(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [MarkPackageShippedRequestInput](../models/MarkPackageShippedRequestInput.md#markpackageshippedrequestinput) | Records the package action mark_shipped. |

Body model: [MarkPackageShippedRequestInput](../models/MarkPackageShippedRequestInput.md#markpackageshippedrequestinput).

#### packages.markShipped body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | Carrier handling this package. minLength: `1`. maxLength: `100`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `service_code` | Optional | string | Carrier service used for this package. minLength: `1`. maxLength: `100`. |
| `tracking_number` | Optional | string | Carrier tracking number for this package. minLength: `1`. maxLength: `255`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. maxLength: `2048`. |

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

$result = $client->packages->markShipped('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-markShipped.php)

### packages.update

Updates non-lifecycle package fields such as carrier, tracking, expected_delivery_at, label access, measurements, metadata, and caller-owned external references. Descriptive fields can be corrected until the package is voided, regardless of shipment or fulfillment status. Corrections never email the buyer. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`PATCH /v1/packages/{package_id}`

Signature: `update(string|Model $package_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePackageRequestInput](../models/UpdatePackageRequestInput.md#updatepackagerequestinput) | The request body for: Update package. minProperties: `1`. |

Body model: [UpdatePackageRequestInput](../models/UpdatePackageRequestInput.md#updatepackagerequestinput).

#### packages.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `dimensions` | Optional | [DimensionsRequestInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantUnitDimensions.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantunitdimensions) or null | Dimensions of the package. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. |
| `label_url` | Optional | string or null | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `service_code` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status_reason` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_number` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: `1`. |
| `weight` | Optional | [WeightRequestInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantUnitWeight.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantunitweight) or null | Weight of the package. |

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

$result = $client->packages->update('pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'tracking_number' => 'SYNTHETIC-TRACKING-001',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-update.php)

### packages.updateItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Signature: `updateItem(string|Model $package_id, string|Model $package_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `package_item_id` | Required | string | Flint package item ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequestInput.md#updatepackageitemrequestinput) | The request body for: Update package item. minProperties: `1`. |

Body model: [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequestInput.md#updatepackageitemrequestinput).

#### packages.updateItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Bundle component to pack on this order line in the fulfillment. Every PATCH of a bundle line requires its component ID, including when the fulfillment has only one component for the line. Send null for a non-bundle line. minLength: `1`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
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

$result = $client->packages->updateItem('pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'pki_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'quantity' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-updateItem.php)

### packages.void

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/void`

Signature: `void(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [VoidPackageRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput) | The request body for: Void package. |

Body model: [VoidPackageRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

#### packages.void body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | Void event timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. |

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

$result = $client->packages->void('pkg_01KEZF7C00ZZA16BJCEJBWKJ5R', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-void.php)

