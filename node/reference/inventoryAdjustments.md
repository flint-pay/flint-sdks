[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# inventoryAdjustments

### inventoryAdjustments.create

Record a stock change by what happened: stock received, returned, sold, stolen, lost, or moved between conditions, or an absolute count or correction. Flint computes the change against the current level. Returns the adjustment, its movement IDs, and the resulting level for every level touched. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To recover the command's effects after a lost response, read the relevant resource or inventory movement list.

`POST /v1/inventory-adjustments`

Signature: `create(input: InventoryAdjustmentsCreateInput, options: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInventoryAdjustmentRequestInput](../models/CreateInventoryAdjustmentRequest.md#createinventoryadjustmentrequest) | The request body for: Create inventory adjustment. |

Body model: [CreateInventoryAdjustmentRequestInput](../models/CreateInventoryAdjustmentRequest.md#createinventoryadjustmentrequest).

#### inventoryAdjustments.create body oneOf variant 1

The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of `CreateInventoryAdjustmentRequest`. The `returned` variant of `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`. The `theft` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentQuantityRequestInput](../models/CreateInventoryAdjustmentQuantityRequest.md#createinventoryadjustmentquantityrequest).

#### inventoryAdjustments.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentQuantityLineRequestInput](../models/InventoryAdjustmentQuantityLineRequest.md#inventoryadjustmentquantitylinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 2

The `condition_changed` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentConditionChangeRequestInput](../models/CreateInventoryAdjustmentConditionChangeRequest.md#createinventoryadjustmentconditionchangerequest).

#### inventoryAdjustments.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentConditionChangeLineRequestInput](../models/InventoryAdjustmentConditionChangeLineRequest.md#inventoryadjustmentconditionchangelinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"condition_changed"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 3

The `counted` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentCountedRequestInput](../models/CreateInventoryAdjustmentCountedRequest.md#createinventoryadjustmentcountedrequest).

#### inventoryAdjustments.create body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequest.md#inventoryadjustmentsetlinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"counted"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 3 anyOf variant 1



#### inventoryAdjustments.create body oneOf variant 3 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequest.md#inventoryadjustmentsetlinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"counted"`. |
| `source_system` | Required | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 3 anyOf variant 2



Fields: [inventoryAdjustments.create body oneOf variant 3 fields](#inventoryadjustmentscreate-body-oneof-variant-3-fields).

#### inventoryAdjustments.create body oneOf variant 4

The `correction` variant of `CreateInventoryAdjustmentRequest`.

Body model: [CreateInventoryAdjustmentCorrectionRequestInput](../models/CreateInventoryAdjustmentCorrectionRequest.md#createinventoryadjustmentcorrectionrequest).

#### inventoryAdjustments.create body oneOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequest.md#inventoryadjustmentsetlinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Required | string | minLength: `1`. pattern: `\S`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"correction"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

#### inventoryAdjustments.create body oneOf variant 4 anyOf variant 1



#### inventoryAdjustments.create body oneOf variant 4 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequest.md#inventoryadjustmentsetlinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Required | string | minLength: `1`. pattern: `\S`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"correction"`. |
| `source_system` | Required | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryAdjustments.create({body: {reason: "received", lines: [{inventory_item_id: "example", location_id: "example", quantity: "1"}]}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/inventoryAdjustments-create.mjs)

### inventoryAdjustments.get

Retrieve an inventory adjustment and its lines by ID.

`GET /v1/inventory-adjustments/{inventory_adjustment_id}`

Signature: `get(inventory_adjustment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.inventoryAdjustments.get("example", {}, {  });
```

[Complete runnable example](../examples/inventoryAdjustments-get.mjs)

### inventoryAdjustments.list

List inventory adjustments.

`GET /v1/inventory-adjustments`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "inventory_item_id"?: InputValue<string>;
  "location_id"?: InputValue<string>;
  "reason"?: InputValue<Array<"received" |
    "returned" |
    "sold" |
    "theft" |
    "loss" |
    "condition_changed" |
    "counted" |
    "correction">>;
  "idempotency_key"?: InputValue<string>;
  "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
  "external_source_id"?: InputValue<string>;
  "external_actor_id"?: InputValue<string>;
  "occurred_after"?: InputValue<string | globalThis.Date>;
  "occurred_before"?: InputValue<string | globalThis.Date>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `idempotency_key` | Optional | string |  |
| `source_system_type` | Optional | Array of string | minItems: `1`. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [InventoryAdjustmentListResponse](../models/InventoryAdjustmentListResponse.md#inventoryadjustmentlistresponse).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.inventoryAdjustments.list({}, {  });
```

[Complete runnable example](../examples/inventoryAdjustments-list.mjs)

