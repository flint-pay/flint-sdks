[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnInspections

### returnInspections.decideLineItem

Record the accept or reject outcome for inspected quantity. expected_version compares against the inspection version. Accepted quantity becomes dispositionable and satisfies after_inspection release timing.

`POST /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`

Signature:

```typescript
decideLineItem(return_inspection_id: InputValue<string>,
 return_inspection_line_item_id: InputValue<string>,
 params: (InputValue<DecideReturnInspectionLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_inspection_id` | Required | string |  |
| `return_inspection_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [DecideReturnInspectionLineItemRequestInput](../models/DecideReturnInspectionLineItemRequest.md#decidereturninspectionlineitemrequest) | The request body for: Decide return inspection line item. |

Body model: [DecideReturnInspectionLineItemRequestInput](../models/DecideReturnInspectionLineItemRequest.md#decidereturninspectionlineitemrequest).

#### returnInspections.decideLineItem body fields

Field definitions: [shared fields](../models/DecideReturnInspectionLineItemRequest.md#decidereturninspectionlineitemrequest).

#### Response

Returned payload: [ReturnInspection](../models/ReturnInspection.md#returninspection).

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

Complete body and metadata: `decideLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnInspections.decideLineItem("example", "example", {acceptance_decision_reason: "inspection_result", acceptance_status: "accepted"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnInspections-decideLineItem.mjs)

### returnInspections.get

Retrieve one inspection with its line items, findings, and current or superseded observation status.

`GET /v1/return-inspections/{return_inspection_id}`

Signature: `get(return_inspection_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_inspection_id` | Required | string |  |

#### Response

Returned payload: [ReturnInspection](../models/ReturnInspection.md#returninspection).

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
const result = await client.returnInspections.get("example", {}, {  });
```

[Complete runnable example](../examples/returnInspections-get.mjs)

### returnInspections.list

List inspection observations. Omitting return_id lists inspections across every Return for the merchant. Newest first: created_at descending, with return_inspection_id descending as the tiebreak.

`GET /v1/return-inspections`

Signature:

```typescript
list(params?: {
  "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "external_reference_id"?: InputValue<string>;
  "inspected_after"?: InputValue<string | globalThis.Date>;
  "inspected_before"?: InputValue<string | globalThis.Date>;
  "inspection_location_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "return_line_item_id"?: InputValue<string>;
  "return_receipt_id"?: InputValue<string>;
  "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
  "status"?: InputValue<Array<"current" | "superseded">>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_status` | Optional | Array of string | minItems: `1`. Items values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `inspected_after` | Optional | string | Format: `date-time`. |
| `inspected_before` | Optional | string | Format: `date-time`. |
| `inspection_location_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_id` | Optional | string |  |
| `source_system_type` | Optional | Array of string | minItems: `1`. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"current"`, `"superseded"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [ListReturnInspectionsResponse](../models/ListReturnInspectionsResponse.md#listreturninspectionsresponse).

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
const result = await client.returnInspections.list({}, {  });
```

[Complete runnable example](../examples/returnInspections-list.mjs)

