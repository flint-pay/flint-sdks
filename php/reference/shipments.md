[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# shipments

### shipments.createPackage

Creates a package record under a shipment. Change package status with POST /v1/packages/{package_id}/transitions; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/shipments/{shipment_id}/packages`

Signature: `createPackage(string|Model $shipment_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | The request body for: Create package. |

Body model: [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput).

#### shipments.createPackage body fields

Field definitions: [shared fields](../models/PackageCreateRequestInput.md#packagecreaterequestinput). Models: [DimensionsInput](../models/DimensionsInput.md#dimensionsinput), [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput), [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput), [WeightInput](../models/WeightInput.md#weightinput).

#### shipments.createPackage body oneOf variant 1

The `created` variant of `PackageCreateInput`.

Body model: [PackageCreateInputCreatedInput](../models/PackageCreateInputCreatedInput.md#packagecreateinputcreatedinput).

#### shipments.createPackage body oneOf variant 1 fields

Field definitions: [shared fields](../models/PackageCreateInputCreatedInput.md#packagecreateinputcreatedinput). Models: [DimensionsInput](../models/DimensionsInput.md#dimensionsinput), [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput), [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput), [WeightInput](../models/WeightInput.md#weightinput).

#### shipments.createPackage body oneOf variant 2

The `shipped` variant of `PackageCreateInput`.

Body model: [PackageCreateInputShippedInput](../models/PackageCreateInputShippedInput.md#packagecreateinputshippedinput).

#### shipments.createPackage body oneOf variant 2 fields

Field definitions: [shared fields](../models/PackageCreateInputShippedInput.md#packagecreateinputshippedinput). Models: [DimensionsInput](../models/DimensionsInput.md#dimensionsinput), [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput), [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput), [WeightInput](../models/WeightInput.md#weightinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createPackageWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->shipments->createPackage('example', [
  'status' => 'created',
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->shipments->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/shipments-get.php)

### shipments.list

Lists shipment execution records, newest created first.

`GET /v1/shipments`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

Returned payload: [ShipmentsListResponse200](../models/ShipmentsListResponse200.md#shipmentslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

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
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateShipmentRequestInput](../models/UpdateShipmentRequestInput.md#updateshipmentrequestinput) | The request body for: Update shipment. |

Body model: [UpdateShipmentRequestInput](../models/UpdateShipmentRequestInput.md#updateshipmentrequestinput).

#### shipments.update body fields

Field definitions: [shared fields](../models/UpdateShipmentRequestInput.md#updateshipmentrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->shipments->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/shipments-update.php)

### shipments.voidResource

Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/shipments/{shipment_id}/void`

Signature: `voidResource(string|Model $shipment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [VoidShipmentRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput) | The request body for: Void shipment. |

Body model: [VoidShipmentRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

#### shipments.voidResource body fields

Field definitions: [shared fields](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `voidResourceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->shipments->voidResource('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/shipments-voidResource.php)

