[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# packages

### packages.createItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Signature: `createItem(string|Model $package_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput) | The request body for: Create package item. |

Body model: [CreatePackageItemRequestInput](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput).

#### packages.createItem body fields

Field definitions: [shared fields](../models/CreatePackageItemRequestInput.md#createpackageitemrequestinput). Models: [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->packages->createItem('example', [
  'order_line_item_id' => 'example',
  'quantity' => '100',
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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->packages->deleteItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-deleteItem.php)

### packages.get

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Signature: `get(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->packages->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/packages-get.php)

### packages.getItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Signature: `getItem(string|Model $package_id, string|Model $package_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->packages->getItem('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/packages-getItem.php)

### packages.list

Lists package records, newest created first. Default order: created_at descending, then package_id descending.

`GET /v1/packages`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

Returned payload: [PackagesListResponse200](../models/PackagesListResponse200.md#packageslistresponse200).

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
| `package_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [PackagesListPackageItemsResponse200](../models/PackagesListPackageItemsResponse200.md#packageslistpackageitemsresponse200).

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

```php
$result = $client->packages->listPackageItems('example', [], new RequestOptions());
```

[Complete runnable example](../examples/packages-listPackageItems.php)

### packages.transition

Performs one action from the package's supported_actions. mark_shipped accepts carrier, service_code, tracking_number, and tracking_url; present fields replace tracking before the status change and shipped email in one transaction. Omitted tracking is unchanged and null is invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery preserves the estimate as history. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/transitions`

Signature: `transition(PackagesTransitionInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PackageTransitionRequestInput](../models/PackageTransitionRequestInput.md#packagetransitionrequestinput) | The request body for: Transition package. |

Body model: [PackageTransitionRequestInput](../models/PackageTransitionRequestInput.md#packagetransitionrequestinput).

#### packages.transition body oneOf variant 1

The `mark_delivered` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkDeliveredInput](../models/PackageTransitionRequestMarkDeliveredInput.md#packagetransitionrequestmarkdeliveredinput).

#### packages.transition body oneOf variant 1 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkDeliveredInput.md#packagetransitionrequestmarkdeliveredinput).

#### packages.transition body oneOf variant 2

The `mark_delivery_attempted` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkDeliveryAttemptedInput](../models/PackageTransitionRequestMarkDeliveryAttemptedInput.md#packagetransitionrequestmarkdeliveryattemptedinput).

#### packages.transition body oneOf variant 2 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkDeliveryAttemptedInput.md#packagetransitionrequestmarkdeliveryattemptedinput).

#### packages.transition body oneOf variant 3

The `mark_exception` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkExceptionInput](../models/PackageTransitionRequestMarkExceptionInput.md#packagetransitionrequestmarkexceptioninput).

#### packages.transition body oneOf variant 3 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkExceptionInput.md#packagetransitionrequestmarkexceptioninput).

#### packages.transition body oneOf variant 4

The `mark_in_transit` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkInTransitInput](../models/PackageTransitionRequestMarkInTransitInput.md#packagetransitionrequestmarkintransitinput).

#### packages.transition body oneOf variant 4 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkInTransitInput.md#packagetransitionrequestmarkintransitinput).

#### packages.transition body oneOf variant 5

The `mark_out_for_delivery` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkOutForDeliveryInput](../models/PackageTransitionRequestMarkOutForDeliveryInput.md#packagetransitionrequestmarkoutfordeliveryinput).

#### packages.transition body oneOf variant 5 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkOutForDeliveryInput.md#packagetransitionrequestmarkoutfordeliveryinput).

#### packages.transition body oneOf variant 6

The `mark_packed` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkPackedInput](../models/FulfillmentTransitionRequestMarkPackedInput.md#fulfillmenttransitionrequestmarkpackedinput).

#### packages.transition body oneOf variant 6 fields

Field definitions: [shared fields](../models/FulfillmentTransitionRequestMarkPackedInput.md#fulfillmenttransitionrequestmarkpackedinput).

#### packages.transition body oneOf variant 7

The `mark_returned` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkReturnedInput](../models/PackageTransitionRequestMarkReturnedInput.md#packagetransitionrequestmarkreturnedinput).

#### packages.transition body oneOf variant 7 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkReturnedInput.md#packagetransitionrequestmarkreturnedinput).

#### packages.transition body oneOf variant 8

The `mark_shipped` variant of `PackageTransitionRequest`.

Body model: [PackageTransitionRequestMarkShippedInput](../models/PackageTransitionRequestMarkShippedInput.md#packagetransitionrequestmarkshippedinput).

#### packages.transition body oneOf variant 8 fields

Field definitions: [shared fields](../models/PackageTransitionRequestMarkShippedInput.md#packagetransitionrequestmarkshippedinput).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->packages->transition([
  'package_id' => 'example',
  'body' => (object) [
    'action' => 'mark_delivered',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-transition.php)

### packages.update

Updates non-lifecycle package fields such as carrier, tracking, expected_delivery_at, label access, measurements, metadata, and caller-owned external references. Descriptive fields can be corrected until the package is voided, regardless of shipment or fulfillment status. Corrections never email the buyer. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`PATCH /v1/packages/{package_id}`

Signature: `update(string|Model $package_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePackageRequestInput](../models/UpdatePackageRequestInput.md#updatepackagerequestinput) | The request body for: Update package. |

Body model: [UpdatePackageRequestInput](../models/UpdatePackageRequestInput.md#updatepackagerequestinput).

#### packages.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `dimensions` | Optional | [DimensionsInput](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantunitdimensions) or null |  |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer string | Optional resource version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. |
| `label_url` | Optional | string or null | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `service_code` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status_reason` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_number` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: `1`. |
| `weight` | Optional | [WeightInput](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantunitweight) or null |  |

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->packages->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-update.php)

### packages.updateItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Signature: `updateItem(string|Model $package_id, string|Model $package_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequestInput.md#updatepackageitemrequestinput) | The request body for: Update package item. |

Body model: [UpdatePackageItemRequestInput](../models/UpdatePackageItemRequestInput.md#updatepackageitemrequestinput).

#### packages.updateItem body fields

Field definitions: [shared fields](../models/UpdatePackageItemRequestInput.md#updatepackageitemrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->packages->updateItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-updateItem.php)

### packages.voidResource

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/packages/{package_id}/void`

Signature: `voidResource(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [VoidPackageRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput) | The request body for: Void package. |

Body model: [VoidPackageRequestInput](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

#### packages.voidResource body fields

Field definitions: [shared fields](../models/VoidShipmentRequestInput.md#voidshipmentrequestinput).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->packages->voidResource('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/packages-voidResource.php)

