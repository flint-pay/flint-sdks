[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returns

### returns.cancel

Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/returns/{return_id}/cancel`

Signature: `cancel(return_id: InputValue<string>, params: ReturnsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields). Models: [CancelReturnRequestInput](../models/CancelReturnRequest.md#cancelreturnrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.cancel("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-cancel.mjs)

### returns.cancelLineItem

Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution, including a failed one, cannot be canceled, and the conflict response names what is blocking it. Omit handback_quantity to lower the expected handback only as far as the canceled quantity requires. An explicit value cannot leave more merchandise expected than the remaining approved quantity.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`

Signature:

```typescript
cancelLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params: ReturnsCancelLineItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `body` | Required | [CancelReturnLineItemRequestInput](../models/CancelReturnLineItemRequest.md#cancelreturnlineitemrequest) | The request body for: Cancel return line item. |

Body model: [CancelReturnLineItemRequestInput](../models/CancelReturnLineItemRequest.md#cancelreturnlineitemrequest).

#### returns.cancelLineItem body fields

Field definitions: [shared fields](../models/CancelReturnLineItemRequest.md#cancelreturnlineitemrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.cancelLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 1, reason: "buyer_request"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-cancelLineItem.mjs)

### returns.complete

Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.

`POST /v1/returns/{return_id}/complete`

Signature: `complete(return_id: InputValue<string>, params: ReturnsCompleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [CompleteReturnRequestInput](../models/CompleteReturnRequest.md#completereturnrequest) | The request body for: Complete return. |

Body model: [CompleteReturnRequestInput](../models/CompleteReturnRequest.md#completereturnrequest).

#### returns.complete body fields

Field definitions: [shared fields](../models/CompleteReturnRequest.md#completereturnrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.complete("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-complete.mjs)

### returns.create

Create a requested Return. Every line needs the return_reason_id of an active reason. With an API key, a Return that no policy matches stays available for merchant review rather than failing creation.

`POST /v1/returns`

Signature: `create(params: ReturnsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateReturnRequestInput](../models/CreateReturnRequest.md#createreturnrequest) | The request body for: Create return. |

Body model: [CreateReturnRequestInput](../models/CreateReturnRequest.md#createreturnrequest).

#### returns.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequest.md#returnlineitemrequest) | minItems: `1`. Items: An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.create({line_items: [{order_line_item_id: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV", requested_quantity: 1, return_reason_id: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-create.mjs)

### returns.createAccessLink

Creates the link Flint's email about a Return carries, to put in buyer email or messages you send yourself. It opens the Return and its order in your Flint-hosted customer account without a sign-in. Withdrawing the Return needs the buyer to sign in. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the Return. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns 409 ACTION_NOT_ALLOWED with reason merchant_hosted_customer_accounts, and for a Return whose order has no customer, 409 ACTION_NOT_ALLOWED with reason configuration_required. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/returns/{return_id}/access-links`

Signature: `createAccessLink(return_id: InputValue<string>, params?: ReturnsCreateAccessLinkParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return ID. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

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

const result = await client.returns.createAccessLink("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createAccessLink.mjs)

### returns.createDisposition

Record an auditable merchandise disposition from either a receipt line or an inspection line. Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/dispositions`

Signature:

```typescript
createDisposition(return_id: InputValue<string>,
 params: ReturnsCreateDispositionParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [CreateReturnDispositionRequestInput](../models/CreateReturnDispositionRequest.md#createreturndispositionrequest) | The request body for: Create return disposition. |

Body model: [CreateReturnDispositionRequestInput](../models/CreateReturnDispositionRequest.md#createreturndispositionrequest).

#### returns.createDisposition body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | minLength: `1`. |
| `return_inspection_line_item_id` | Optional | string | minLength: `1`. |
| `return_receipt_line_item_id` | Optional | string | minLength: `1`. |

#### returns.createDisposition: CreateReturnDispositionRequestReceiptLine

The `Receipt line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestReceiptLineInput](../models/CreateReturnDispositionRequestReceiptLine.md#createreturndispositionrequestreceiptline).

#### returns.createDisposition: CreateReturnDispositionRequestInspectionLine

The `Inspection line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestInspectionLineInput](../models/CreateReturnDispositionRequestInspectionLine.md#createreturndispositionrequestinspectionline).

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createDisposition("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {disposition_type: "sellable", occurred_at: "2026-01-01T00:00:00Z", quantity: 1, reason: "inspection_result", return_receipt_line_item_id: "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createDisposition.mjs)

### returns.createInspection

Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history. Read inspections with `GET /v1/return-inspections?return_id=` or expand `return_inspections` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/inspections`

Signature:

```typescript
createInspection(return_id: InputValue<string>,
 params: ReturnsCreateInspectionParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [CreateReturnInspectionRequestInput](../models/CreateReturnInspectionRequest.md#createreturninspectionrequest) | The request body for: Create return inspection. |

Body model: [CreateReturnInspectionRequestInput](../models/CreateReturnInspectionRequest.md#createreturninspectionrequest).

#### returns.createInspection body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inspected_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. minLength: `1`. |
| `line_items` | Required | Array of [ReturnInspectionLineItemRequestInput](../models/ReturnInspectionLineItemRequest.md#returninspectionlineitemrequest) | minItems: `1`. Items: The inspection result for one received return line: acceptance status, condition, and findings. |
| `return_receipt_id` | Required | string | minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemRequestInput](../models/ReturnSourceSystemRequest.md#returnsourcesystemrequest) | The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_inspection_id` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [ReturnInspection](../models/ReturnInspection.md#returninspection).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createInspection("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {inspected_at: "2026-01-01T00:00:00Z", inspection_location_id: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", line_items: [{acceptance_status: "accepted", condition: "new", quantity: 1, return_receipt_line_item_id: "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], return_receipt_id: "retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createInspection.mjs)

### returns.createLineItem

Add a line item to a requested Return. The response is the updated Return, not the new line.

`POST /v1/returns/{return_id}/line-items`

Signature: `createLineItem(return_id: InputValue<string>, params: ReturnsCreateLineItemParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [AddReturnLineItemRequestInput](../models/AddReturnLineItemRequest.md#addreturnlineitemrequest) | The request body for: Add return line item. |

Body model: [AddReturnLineItemRequestInput](../models/AddReturnLineItemRequest.md#addreturnlineitemrequest).

#### returns.createLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `line_item` | Required | [ReturnLineItemRequestInput](../models/ReturnLineItemRequest.md#returnlineitemrequest) | An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.createLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_item: {order_line_item_id: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV", requested_quantity: 1, return_reason_id: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createLineItem.mjs)

### returns.createReceipt

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or expand `return_receipts` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/receipts`

Signature:

```typescript
createReceipt(return_id: InputValue<string>,
 params: ReturnsCreateReceiptParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequest.md#createreturnreceiptrequest) | The request body for: Create return receipt. |

Body model: [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequest.md#createreturnreceiptrequest).

#### returns.createReceipt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnReceiptLineItemRequestInput](../models/ReturnReceiptLineItemRequest.md#returnreceiptlineitemrequest) | minItems: `1`. Items: One line of received merchandise: a matched return line, excess quantity, or an unverified item. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `receiving_location_id` | Required | string | minLength: `1`. |
| `shipment_id` | Optional | string | minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemRequestInput](../models/ReturnSourceSystemRequest.md#returnsourcesystemrequest) | The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_receipt_id` | Optional | string | minLength: `1`. |

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createReceipt("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{type: "matched", quantity: 1, return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], received_at: "2026-01-01T00:00:00Z", receiving_location_id: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createReceipt.mjs)

### returns.createResolution

Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects. Read resolutions with `GET /v1/return-resolutions?return_id=` or expand `return_resolutions` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/resolutions`

Signature: `createResolution(return_id: InputValue<string>, params: ReturnsCreateResolutionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [CreateReturnResolutionRequestInput](../models/CreateReturnResolutionRequest.md#createreturnresolutionrequest) | The request body for: Create return resolution. |

Body model: [CreateReturnResolutionRequestInput](../models/CreateReturnResolutionRequest.md#createreturnresolutionrequest).

#### returns.createResolution body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) | Items: A fee or credit to apply to a return resolution, with the assessed and applied amounts and whether it is applied or waived. |
| `corrects_return_resolution_id` | Optional | string | minLength: `1`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Optional | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) | Items: A return line and quantity to include in a return resolution. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) | Items: A replacement item to include in a return resolution, from a variant, a bundle, or a custom name and price. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |

#### returns.createResolution with `resolution_type: "exchange" | "no_monetary_action" | "refund" | "replacement" | "store_credit"`

The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of `CreateReturnResolutionRequest`.

Body model: [CreateReturnResolutionRequestStandardInput](../models/CreateReturnResolutionRequestStandard.md#createreturnresolutionrequeststandard).

#### returns.createResolution with `resolution_type: "correction"`

The `correction` variant of `CreateReturnResolutionRequest`.

Body model: [CreateReturnResolutionRequestCorrectionInput](../models/CreateReturnResolutionRequestCorrection.md#createreturnresolutionrequestcorrection).

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

const result = await client.returns.createResolution("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{quantity: 1, return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], resolution_type: "refund"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createResolution.mjs)

### returns.decide

Record one decision for every requested line atomically, then open the Return. To defer a line, decline its quantity or remove it with DELETE /v1/returns/{return_id}/line-items/{return_line_item_id} and open a separate Return for it. Omit completion_mode to use the shared pinned policy mode, or automatic when none sets a mode; disagreeing policies require an explicit completion_mode. completion_blockers reports uncovered approved quantity as resolution_not_selected alongside blockers for unfinished resolutions. Start from each buildable pinned policy proposal or the no-policy defaults, replace every supplied decision field, fill release_timing, and validate the result. When an automatic refund can no longer run through the original payment's provider, the request fails with 409 ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose no_monetary_action.

`POST /v1/returns/{return_id}/decide`

Signature: `decide(return_id: InputValue<string>, params: ReturnsDecideParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [DecideReturnRequestInput](../models/DecideReturnRequest.md#decidereturnrequest) | The request body for: Decide return. |

Body model: [DecideReturnRequestInput](../models/DecideReturnRequest.md#decidereturnrequest).

#### returns.decide body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ReturnLineDecisionInput](../models/ReturnLineDecision.md#returnlinedecision) | minItems: `1`. Items: Start from the pinned policy proposal recomputed for approved_quantity when the line has a policy evaluation and the proposal can be built. Otherwise start with return_required_quantity equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless of whether the original payment is refundable, no automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise is required and inspection is required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. Validate the merged decision for quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned policy always requires override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal, other decision fields use these defaults and override_reason is otherwise optional. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.decide("ret_00000000000000000000000000", {line_items: [{approved_quantity: 1, receiving_location_id: "loc_00000000000000000000000000", return_line_item_id: "retli_00000000000000000000000000"}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-decide.mjs)

### returns.deleteLineItem

Remove a line item from a requested Return. Send optional expected_version as one query parameter to fence against the parent Return version. The response is the updated Return.

`DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature:

```typescript
deleteLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params?: ReturnsDeleteLineItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `expected_version` | Optional | integer | Optional version of the parent Return. Supply exactly once. A stale value returns VERSION_CONFLICT with the current Return version. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.deleteLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-deleteLineItem.mjs)

### returns.get

Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, customer, receipts, inspections, dispositions, resolutions, shipments, and each line item's reason and fulfillment.

`GET /v1/returns/{return_id}`

Signature: `get(return_id: InputValue<string>, params?: ReturnsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, line_items.fulfillment, line_items.return_reason, order, return_dispositions, return_inspections, return_receipts, return_resolutions, shipments. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped per path: at 100 related objects for return_dispositions, return_inspections, return_receipts, return_resolutions, and shipments; at 20 for line_items.fulfillment and line_items.return_reason. Repeat expand, for example expand=customer&expand=line_items.fulfillment, or pass one comma-separated value. Items values: [9 declared values](#returnsget-input-expand--values). Values: [9 declared values](#returnsget-input-expand-values). |

#### returns.get input expand [] values

- `"customer"`
- `"line_items.fulfillment"`
- `"line_items.return_reason"`
- `"order"`
- `"return_dispositions"`
- `"return_inspections"`
- `"return_receipts"`
- `"return_resolutions"`
- `"shipments"`

#### returns.get input expand values

- `"customer"`
- `"line_items.fulfillment"`
- `"line_items.return_reason"`
- `"order"`
- `"return_dispositions"`
- `"return_inspections"`
- `"return_receipts"`
- `"return_resolutions"`
- `"shipments"`

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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
const result = await client.returns.get("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returns-get.mjs)

### returns.getLineItem

Retrieve one Return line item, including its quantity counters and the reason the buyer selected.

`GET /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature:

```typescript
getLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params?: ReturnsGetLineItemParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |

#### Response

Returned payload: [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem).

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
const result = await client.returns.getLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returns-getLineItem.mjs)

### returns.list

List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived. Set sort_direction to asc for oldest first. Default order: created_at descending, then return_id descending.

`GET /v1/returns`

Signature: `list(params?: ReturnsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `customer_id` | Optional | string | Filter by customer id. |
| `decision_status` | Optional | Array of string or string | Filter by decision status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `merchandise_status` | Optional | Array of string or string | Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#returnslist-input-merchandise_status--values). Values: [10 declared values](#returnslist-input-merchandise_status-values). |
| `order_id` | Optional | string | Filter by order id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return ID, return number, external reference ID, the order's number, or the buyer's email. |
| `receiving_location_id` | Optional | string | Filter by receiving location id. |
| `resolution_status` | Optional | Array of string or string | Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `resolution_type` | Optional | Array of string or string | Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_number` | Optional | string | Filter by return number. |
| `return_reason_id` | Optional | string | Filter by return reason id. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by return_id. Default: `"created_at"`. Values: `"created_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `work_type` | Optional | Array of string or string | Filter by work type. Matches only returns that are still requested or open. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"decision"`, `"handoff"`, `"receipt"`, `"inspection"`, `"disposition"`, `"resolution"`, `"exception"`. Values: `"decision"`, `"handoff"`, `"receipt"`, `"inspection"`, `"disposition"`, `"resolution"`, `"exception"`. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`. Values: `"customer"`, `"order"`. |

#### returns.list input merchandise_status [] values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### returns.list input merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### Response

Returned payload: [ListReturnsResponse](../models/ListReturnsResponse.md#listreturnsresponse).

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
const result = await client.returns.list({}, {  });
```

[Complete runnable example](../examples/returns-list.mjs)

### returns.listActivities

Read the merchant history of a Return for timelines and audit. Read the referenced resources for current state. Activities are newest first by default; use sort_direction=asc for chronological order. Default order: created_at descending, then return_activity_id descending.

`GET /v1/returns/{return_id}/activities`

Signature:

```typescript
listActivities(return_id: InputValue<string>,
 params?: ReturnsListActivitiesParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [ListReturnActivitiesResponse](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponse).

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

Pagination: `listActivitiesItems`, `listActivitiesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returns.listActivities("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returns-listActivities.mjs)

### returns.listLineItems

List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value. Default order: created_at descending, then return_line_item_id descending.

`GET /v1/returns/{return_id}/line-items`

Signature:

```typescript
listLineItems(return_id: InputValue<string>,
 params?: ReturnsListLineItemsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `fulfillment_id` | Optional | string | Filter by fulfillment id. |
| `merchandise_status` | Optional | Array of string or string | Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#returnslistlineitems-input-merchandise_status--values). Values: [10 declared values](#returnslistlineitems-input-merchandise_status-values). |
| `order_line_item_id` | Optional | string | Filter by order line item id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `resolution_status` | Optional | Array of string or string | Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_selected"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_reason_id` | Optional | string | Filter by return reason id. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |

#### returns.listLineItems input merchandise_status [] values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### returns.listLineItems input merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### Response

Returned payload: [ListReturnLineItemsResponse](../models/ListReturnLineItemsResponse.md#listreturnlineitemsresponse).

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

Pagination: `listLineItemsItems`, `listLineItemsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returns.listLineItems("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returns-listLineItems.mjs)

### returns.process

Record decisions, receipts, inspections, dispositions, and resolutions for an existing requested or open Return in one request. On a requested Return, send one decision for every requested line; missing decisions return 409 ACTION_NOT_ALLOWED with reason status_not_reached. Omit completion_mode to use the shared pinned policy mode, or automatic when none sets a mode; disagreeing policies require an explicit completion_mode. On an open Return, omit decision and completion_mode to keep committed values, or send those values unchanged; changed values return 409 ACTION_NOT_ALLOWED with reason field_locked. completion_blockers includes resolution_not_selected for any uncovered approved quantity alongside blockers for unfinished resolutions. A line can be processed here only while it has no receipt, inspection, disposition, or resolution. For each line, received_quantity must equal its committed return_required_quantity. Send inspection exactly when the line requires inspection, with acceptance_status accepted. Refunds, payments, replacement orders, and inventory updates complete asynchronously. expected_version is optional and checked only when sent. If the Return has changed since that version, the request fails with VERSION_CONFLICT. When an automatic refund can no longer run through the original payment's provider, the request fails with 409 ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose no_monetary_action. Requires Idempotency-Key and all three scopes: commerce.returns.write, commerce.returns.operations.write, and commerce.returns.resolutions.write.

`POST /v1/returns/{return_id}/process`

Signature: `process(return_id: InputValue<string>, params: ReturnsProcessParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [ProcessExistingReturnRequestInput](../models/ProcessExistingReturnRequest.md#processexistingreturnrequest) | The request body for: Process existing return. |

Body model: [ProcessExistingReturnRequestInput](../models/ProcessExistingReturnRequest.md#processexistingreturnrequest).

#### returns.process body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param completion_mode. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ProcessExistingReturnLineItemRequestInput](../models/ProcessExistingReturnLineItemRequest.md#processexistingreturnlineitemrequest) | minItems: `1`. Items: How to process one line of an existing return: the received quantity, inspection, decision, disposition, and resolution. |
| `receipt` | Optional | [ReturnProcessReceiptRequestInput](../models/ReturnProcessReceiptRequest.md#returnprocessreceiptrequest) | The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return. |

#### Response

Returned payload: [ReturnProcessResult](../models/ReturnProcessResult.md#returnprocessresult).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.process("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-process.mjs)

### returns.reopen

Reopen a completed Return to record late compensating facts. Reopening sets completion_mode to manual, so complete the Return again with /complete once completion_blockers is empty. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.

`POST /v1/returns/{return_id}/reopen`

Signature: `reopen(return_id: InputValue<string>, params: ReturnsReopenParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [ReopenReturnRequestInput](../models/ReopenReturnRequest.md#reopenreturnrequest) | The request body for: Reopen return. |

Body model: [ReopenReturnRequestInput](../models/ReopenReturnRequest.md#reopenreturnrequest).

#### returns.reopen body fields

Field definitions: [shared fields](../models/ReopenReturnRequest.md#reopenreturnrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.reopen("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "linked_effect_changed"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-reopen.mjs)

### returns.update

Update caller-owned fields on a Return. Only external_reference_id and metadata are writable. Send optional expected_version to reject a stale Return version; every other change goes through a decision, operation, or resolution command.

`PATCH /v1/returns/{return_id}`

Signature: `update(return_id: InputValue<string>, params: ReturnsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [UpdateReturnRequestInput](../models/UpdateReturnRequestInput.md#updatereturnrequestinput) | The request body for: Update return. |

Body model: [UpdateReturnRequestInput](../models/UpdateReturnRequestInput.md#updatereturnrequestinput).

#### returns.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional version of the Return. A stale value returns VERSION_CONFLICT with the current Return version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.update("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id: "return-2026-001"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-update.mjs)

### returns.updateLineItem

Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.

`PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature:

```typescript
updateLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params: ReturnsUpdateLineItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `body` | Required | [UpdateReturnLineItemRequestInput](../models/UpdateReturnLineItemRequest.md#updatereturnlineitemrequest) | The request body for: Update return line item. |

Body model: [UpdateReturnLineItemRequestInput](../models/UpdateReturnLineItemRequest.md#updatereturnlineitemrequest).

#### returns.updateLineItem body fields

Field definitions: [shared fields](../models/UpdateReturnLineItemRequest.md#updatereturnlineitemrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.updateLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {buyer_note: "The size did not fit"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-updateLineItem.mjs)

### returns.waiveLineItemInspection

Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation. Received quantity on a waived line satisfies after_inspection release timing.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`

Signature:

```typescript
waiveLineItemInspection(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params: ReturnsWaiveLineItemInspectionParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `body` | Required | [WaiveReturnLineInspectionRequestInput](../models/WaiveReturnLineInspectionRequest.md#waivereturnlineinspectionrequest) | The request body for: Waive return line inspection. |

Body model: [WaiveReturnLineInspectionRequestInput](../models/WaiveReturnLineInspectionRequest.md#waivereturnlineinspectionrequest).

#### returns.waiveLineItemInspection body fields

Field definitions: [shared fields](../models/WaiveReturnLineInspectionRequest.md#waivereturnlineinspectionrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

const result = await client.returns.waiveLineItemInspection("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "policy_override"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-waiveLineItemInspection.mjs)

