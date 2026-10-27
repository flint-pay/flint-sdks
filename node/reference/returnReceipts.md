[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnReceipts

### returnReceipts.get

Retrieve one merchandise receipt with its line items and its current or superseded observation status.

`GET /v1/return-receipts/{return_receipt_id}`

Signature: `get(return_receipt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string |  |

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.returnReceipts.get("example", {}, {  });
```

[Complete runnable example](../examples/returnReceipts-get.mjs)

### returnReceipts.list

List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant. Newest first: created_at descending, with return_receipt_id descending as the tiebreak.

`GET /v1/return-receipts`

Signature:

```typescript
list(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "external_reference_id"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "received_after"?: InputValue<string | globalThis.Date>;
  "received_before"?: InputValue<string | globalThis.Date>;
  "receiving_location_id"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "return_line_item_id"?: InputValue<string>;
  "shipment_id"?: InputValue<string>;
  "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
  "status"?: InputValue<Array<"current" | "superseded">>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `received_after` | Optional | string | Format: `date-time`. |
| `received_before` | Optional | string | Format: `date-time`. |
| `receiving_location_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `shipment_id` | Optional | string |  |
| `source_system_type` | Optional | Array of string | minItems: `1`. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"current"`, `"superseded"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `verification_status` | Optional | Array of string | minItems: `1`. Items values: `"matched"`, `"unverified"`, `"excess"`. |

#### Response

Returned payload: [ListReturnReceiptsResponse](../models/ListReturnReceiptsResponse.md#listreturnreceiptsresponse).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returnReceipts.list({}, {  });
```

[Complete runnable example](../examples/returnReceipts-list.mjs)

### returnReceipts.verifyLineItem

Establish the Return line identity for receipt quantity that arrived without one. expected_version compares against the receipt version. Unverified quantity counts toward no line and releases no release timing gate until it is verified.

`POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify`

Signature:

```typescript
verifyLineItem(return_receipt_id: InputValue<string>,
 return_receipt_line_item_id: InputValue<string>,
 params: (InputValue<VerifyReturnReceiptLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string |  |
| `return_receipt_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [VerifyReturnReceiptLineItemRequestInput](../models/VerifyReturnReceiptLineItemRequest.md#verifyreturnreceiptlineitemrequest) | The request body for: Verify return receipt line item. |

Body model: [VerifyReturnReceiptLineItemRequestInput](../models/VerifyReturnReceiptLineItemRequest.md#verifyreturnreceiptlineitemrequest).

#### returnReceipts.verifyLineItem body fields

Field definitions: [shared fields](../models/VerifyReturnReceiptLineItemRequest.md#verifyreturnreceiptlineitemrequest).

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

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

Complete body and metadata: `verifyLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnReceipts.verifyLineItem("example", "example", {return_line_item_id: "example", verification_reason: "order_match_confirmed"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReceipts-verifyLineItem.mjs)

