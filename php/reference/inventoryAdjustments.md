[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAdjustments

### inventoryAdjustments.create

Record a stock change by what happened: stock received, returned, sold, stolen, lost, or moved between conditions, or an absolute count or correction. Flint computes the change against the current level. Returns the adjustment, its movement IDs, and the resulting level for every level touched. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-adjustments`

Signature: `create(InventoryAdjustmentsCreateInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryAdjustmentRequestInput](../models/CreateInventoryAdjustmentRequestInput.md#createinventoryadjustmentrequestinput) | The request body for: Create inventory adjustment. |

Body model: [CreateInventoryAdjustmentRequestInput](../models/CreateInventoryAdjustmentRequestInput.md#createinventoryadjustmentrequestinput).

#### inventoryAdjustments.create body oneOf variant 1

The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of `CreateInventoryAdjustmentRequest`. The `returned` variant of `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`. The `theft` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentQuantityRequestInput](../models/CreateInventoryAdjustmentQuantityRequestInput.md#createinventoryadjustmentquantityrequestinput).

#### inventoryAdjustments.create body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateInventoryAdjustmentQuantityRequestInput.md#createinventoryadjustmentquantityrequestinput). Models: [InventoryAdjustmentQuantityLineRequestInput](../models/InventoryAdjustmentQuantityLineRequestInput.md#inventoryadjustmentquantitylinerequestinput), [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput).

#### inventoryAdjustments.create body oneOf variant 2

The `condition_changed` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentConditionChangeRequestInput](../models/CreateInventoryAdjustmentConditionChangeRequestInput.md#createinventoryadjustmentconditionchangerequestinput).

#### inventoryAdjustments.create body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateInventoryAdjustmentConditionChangeRequestInput.md#createinventoryadjustmentconditionchangerequestinput). Models: [InventoryAdjustmentConditionChangeLineRequestInput](../models/InventoryAdjustmentConditionChangeLineRequestInput.md#inventoryadjustmentconditionchangelinerequestinput), [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput).

#### inventoryAdjustments.create body oneOf variant 3

The `counted` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentCountedRequestInput](../models/CreateInventoryAdjustmentCountedRequestInput.md#createinventoryadjustmentcountedrequestinput).

#### inventoryAdjustments.create body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"counted"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 3 anyOf variant 1



#### inventoryAdjustments.create body oneOf variant 3 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"counted"`. |
| `source_system` | Required | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 3 anyOf variant 2



Fields: [inventoryAdjustments.create body oneOf variant 3 fields](#inventoryadjustmentscreate-body-oneof-variant-3-fields).

#### inventoryAdjustments.create body oneOf variant 4

The `correction` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentCorrectionRequestInput](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput).

#### inventoryAdjustments.create body oneOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput) | minItems: `1`. maxItems: `100`. |
| `note` | Required | string | minLength: `1`. pattern: `\S`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"correction"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 4 anyOf variant 1



#### inventoryAdjustments.create body oneOf variant 4 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput) | minItems: `1`. maxItems: `100`. |
| `note` | Required | string | minLength: `1`. pattern: `\S`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"correction"`. |
| `source_system` | Required | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 4 anyOf variant 2



Fields: [inventoryAdjustments.create body oneOf variant 4 fields](#inventoryadjustmentscreate-body-oneof-variant-4-fields).

#### Response

Returned payload: [InventoryAdjustmentResult](../models/InventoryAdjustmentResult.md#inventoryadjustmentresult).

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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->inventoryAdjustments->create([
  'body' => (object) [
    'reason' => 'received',
    'lines' => [
      (object) [
        'inventory_item_id' => 'example',
        'location_id' => 'example',
        'quantity' => '1',
      ],
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/inventoryAdjustments-create.php)

### inventoryAdjustments.get

Retrieve an inventory adjustment and its lines by ID.

`GET /v1/inventory-adjustments/{inventory_adjustment_id}`

Signature: `get(string|Model $inventory_adjustment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_adjustment_id` | Required | string |  |

#### Response

Returned payload: [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
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
$result = $client->inventoryAdjustments->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAdjustments-get.php)

### inventoryAdjustments.list

List inventory adjustments.

`GET /v1/inventory-adjustments`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `source_system_type` | Optional | Array of string | minItems: `1`. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryAdjustmentsListResponse200](../models/InventoryAdjustmentsListResponse200.md#inventoryadjustmentslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
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
$result = $client->inventoryAdjustments->list([], new RequestOptions());
```

[Complete runnable example](../examples/inventoryAdjustments-list.php)

