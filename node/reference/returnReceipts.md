[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnReceipts

### returnReceipts.get

Retrieve one merchandise receipt with its line items and its current or superseded observation status.

`GET /v1/return-receipts/{return_receipt_id}`

Signature: `get(return_receipt_id: InputValue<string>, params?: ReturnReceiptsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string | Flint return receipt id. |

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
const result = await client.returnReceipts.get("retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnReceipts-get.mjs)

### returnReceipts.list

List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant. Default order: created_at descending, then return_receipt_id descending.

`GET /v1/return-receipts`

Signature: `list(params?: ReturnReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return receipt ID or external reference ID. |
| `received_after` | Optional | string | Inclusive lower bound on received_at. Format: `date-time`. |
| `received_before` | Optional | string | Exclusive upper bound on received_at. Format: `date-time`. |
| `receiving_location_id` | Optional | string | Filter by receiving location id. |
| `return_id` | Optional | string | Filter by return id. |
| `return_line_item_id` | Optional | string | Filter by return line item id. |
| `shipment_id` | Optional | string | Filter by shipment id. |
| `source_system_type` | Optional | Array of string or string | Filter by source system type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"current"`, `"superseded"`. Values: `"current"`, `"superseded"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `verification_status` | Optional | Array of string or string | Filter by verification status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"matched"`, `"unverified"`, `"excess"`. Values: `"matched"`, `"unverified"`, `"excess"`. |

#### Response

Returned payload: [ListReturnReceiptsResponse](../models/ListReturnReceiptsResponse.md#listreturnreceiptsresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
 params: ReturnReceiptsVerifyLineItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string | Flint return receipt id. |
| `return_receipt_line_item_id` | Required | string | Flint return receipt line item id. |
| `body` | Required | [VerifyReturnReceiptLineItemRequestInput](../models/VerifyReturnReceiptLineItemRequest.md#verifyreturnreceiptlineitemrequest) | The request body for: Verify return receipt line item. |

Body model: [VerifyReturnReceiptLineItemRequestInput](../models/VerifyReturnReceiptLineItemRequest.md#verifyreturnreceiptlineitemrequest).

#### returnReceipts.verifyLineItem body fields

Field definitions: [shared fields](../models/VerifyReturnReceiptLineItemRequest.md#verifyreturnreceiptlineitemrequest).

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

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

const result = await client.returnReceipts.verifyLineItem("retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", verification_reason: "order_match_confirmed"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnReceipts-verifyLineItem.mjs)

