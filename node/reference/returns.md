[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returns

### returns.addLineItem

Add a line item to a requested Return. The response is the updated Return, not the new line.

`POST /v1/returns/{return_id}/line-items`

Signature:

```typescript
addLineItem(return_id: InputValue<string>,
 params: (InputValue<AddReturnLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AddReturnLineItemRequestInput](../models/AddReturnLineItemRequest.md#addreturnlineitemrequest) | The request body for: Add return line item. |

Body model: [AddReturnLineItemRequestInput](../models/AddReturnLineItemRequest.md#addreturnlineitemrequest).

#### returns.addLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_item` | Required | [ReturnLineItemRequestInput](../models/ReturnLineItemRequest.md#returnlineitemrequest) | An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `addLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.addLineItem("example", {line_item: {order_line_item_id: "example", requested_quantity: "100", return_reason_id: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-addLineItem.mjs)

### returns.cancel

Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/returns/{return_id}/cancel`

Signature:

```typescript
cancel(return_id: InputValue<string>,
 params: (InputValue<CancelReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields). Models: [CancelReturnRequestInput](../models/CancelReturnRequest.md#cancelreturnrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.cancel("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-cancel.mjs)

### returns.cancelLineItem

Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution, including a failed one, cannot be canceled, and the conflict response names what is blocking it. Omit handback_quantity to lower the expected handback only as far as the canceled quantity requires. An explicit value cannot leave more merchandise expected than the remaining approved quantity.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`

Signature:

```typescript
cancelLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params: (InputValue<CancelReturnLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CancelReturnLineItemRequestInput](../models/CancelReturnLineItemRequest.md#cancelreturnlineitemrequest) | The request body for: Cancel return line item. |

Body model: [CancelReturnLineItemRequestInput](../models/CancelReturnLineItemRequest.md#cancelreturnlineitemrequest).

#### returns.cancelLineItem body fields

Field definitions: [shared fields](../models/CancelReturnLineItemRequest.md#cancelreturnlineitemrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `cancelLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.cancelLineItem("example", "example", {quantity: "100", reason: "buyer_request"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-cancelLineItem.mjs)

### returns.complete

Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.

`POST /v1/returns/{return_id}/complete`

Signature:

```typescript
complete(return_id: InputValue<string>,
 params: (InputValue<CompleteReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CompleteReturnRequestInput](../models/CompleteReturnRequest.md#completereturnrequest) | The request body for: Complete return. |

Body model: [CompleteReturnRequestInput](../models/CompleteReturnRequest.md#completereturnrequest).

#### returns.complete body fields

Field definitions: [shared fields](../models/CompleteReturnRequest.md#completereturnrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `completeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.complete("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-complete.mjs)

### returns.create

Create a requested Return. Every line needs the return_reason_id of an active reason. With an API key, a Return that no policy matches stays available for merchant review rather than failing creation.

`POST /v1/returns`

Signature:

```typescript
create(params: (InputValue<CreateReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReturnRequestInput](../models/CreateReturnRequest.md#createreturnrequest) | The request body for: Create return. |

Body model: [CreateReturnRequestInput](../models/CreateReturnRequest.md#createreturnrequest).

#### returns.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequest.md#returnlineitemrequest) | minItems: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.create({line_items: [{order_line_item_id: "example", requested_quantity: "100", return_reason_id: "example"}], order_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-create.mjs)

### returns.createAccessLink

Creates the link Flint's email about a Return carries, to put in buyer email or messages you send yourself. It opens the Return and its order in your Flint-hosted customer account without a sign-in. Withdrawing the Return needs the buyer to sign in. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the Return. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED, and for a Return whose order has no customer, ACCESS_LINK_CUSTOMER_REQUIRED. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/returns/{return_id}/access-links`

Signature:

```typescript
createAccessLink(return_id: InputValue<string>,
 params?: (InputValue<{
}> | {
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

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

Complete body and metadata: `createAccessLinkWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createAccessLink.mjs)

### returns.createDisposition

Record an auditable merchandise disposition from either a receipt line or an inspection line. Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/dispositions`

Signature:

```typescript
createDisposition(return_id: InputValue<string>,
 params: (InputValue<CreateReturnDispositionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | minLength: `1`. |
| `return_inspection_line_item_id` | Optional | string | minLength: `1`. |
| `return_receipt_line_item_id` | Optional | string | minLength: `1`. |

#### returns.createDisposition body oneOf variant 1

The `Receipt line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestReceiptLineInput](../models/CreateReturnDispositionRequestReceiptLine.md#createreturndispositionrequestreceiptline).

#### returns.createDisposition body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | minLength: `1`. |
| `return_inspection_line_item_id` | Optional | string | minLength: `1`. |
| `return_receipt_line_item_id` | Required | string | minLength: `1`. |

#### returns.createDisposition body oneOf variant 2

The `Inspection line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestInspectionLineInput](../models/CreateReturnDispositionRequestInspectionLine.md#createreturndispositionrequestinspectionline).

#### returns.createDisposition body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | minLength: `1`. |
| `return_inspection_line_item_id` | Required | string | minLength: `1`. |
| `return_receipt_line_item_id` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

Complete body and metadata: `createDispositionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createDisposition("example", {disposition_type: "sellable", occurred_at: "2026-01-01T00:00:00Z", quantity: "100", reason: "inspection_result", return_receipt_line_item_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createDisposition.mjs)

### returns.createInspection

Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history. Read inspections with `GET /v1/return-inspections?return_id=` or expand `return_inspections` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/inspections`

Signature:

```typescript
createInspection(return_id: InputValue<string>,
 params: (InputValue<CreateReturnInspectionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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
| `line_items` | Required | Array of [ReturnInspectionLineItemRequestInput](../models/ReturnInspectionLineItemRequest.md#returninspectionlineitemrequest) | minItems: `1`. |
| `return_receipt_id` | Required | string | minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemInput](../models/ReturnSourceSystem.md#returnsourcesystem) | The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_inspection_id` | Optional | string | minLength: `1`. |

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createInspectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createInspection("example", {inspected_at: "2026-01-01T00:00:00Z", inspection_location_id: "example", line_items: [{acceptance_status: "accepted", condition: "new", quantity: "100", return_receipt_line_item_id: "example"}], return_receipt_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createInspection.mjs)

### returns.createReceipt

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or expand `return_receipts` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/receipts`

Signature:

```typescript
createReceipt(return_id: InputValue<string>,
 params: (InputValue<CreateReturnReceiptRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequest.md#createreturnreceiptrequest) | The request body for: Create return receipt. |

Body model: [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequest.md#createreturnreceiptrequest).

#### returns.createReceipt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnReceiptLineItemRequestInput](../models/ReturnReceiptLineItemRequest.md#returnreceiptlineitemrequest) | minItems: `1`. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `receiving_location_id` | Required | string | minLength: `1`. |
| `shipment_id` | Optional | string | minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemInput](../models/ReturnSourceSystem.md#returnsourcesystem) | The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_receipt_id` | Optional | string | minLength: `1`. |

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createReceiptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createReceipt("example", {line_items: [{type: "matched", quantity: "100", return_line_item_id: "example"}], received_at: "2026-01-01T00:00:00Z", receiving_location_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createReceipt.mjs)

### returns.createResolution

Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects. Read resolutions with `GET /v1/return-resolutions?return_id=` or expand `return_resolutions` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/resolutions`

Signature:

```typescript
createResolution(return_id: InputValue<string>,
 params: (InputValue<CreateReturnResolutionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReturnResolutionRequestInput](../models/CreateReturnResolutionRequest.md#createreturnresolutionrequest) | The request body for: Create return resolution. |

Body model: [CreateReturnResolutionRequestInput](../models/CreateReturnResolutionRequest.md#createreturnresolutionrequest).

#### returns.createResolution body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) |  |
| `corrects_return_resolution_id` | Optional | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Optional | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) |  |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |

#### returns.createResolution body oneOf variant 1

The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of `CreateReturnResolutionRequest`.

Body model: [CreateReturnResolutionRequestStandardInput](../models/CreateReturnResolutionRequestStandard.md#createreturnresolutionrequeststandard).

#### returns.createResolution body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) |  |
| `corrects_return_resolution_id` | Optional | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) | minItems: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`. |

#### returns.createResolution body oneOf variant 2

The `correction` variant of `CreateReturnResolutionRequest`.

Body model: [CreateReturnResolutionRequestCorrectionInput](../models/CreateReturnResolutionRequestCorrection.md#createreturnresolutionrequestcorrection).

#### returns.createResolution body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) | minItems: `1`. |
| `corrects_return_resolution_id` | Required | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Optional | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) |  |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"correction"`. |

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Complete body and metadata: `createResolutionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createResolution("example", {line_items: [{quantity: "1", return_line_item_id: "rtli_example"}], resolution_type: "refund"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-createResolution.mjs)

### returns.decide

Record one decision for every requested line atomically, then open the Return. To defer a line, decline its quantity or remove it with DELETE /v1/returns/{return_id}/line-items/{return_line_item_id} and open a separate Return for it. Omit completion_mode to use the shared pinned policy mode, or automatic when none sets a mode; disagreeing policies require an explicit completion_mode. completion_blockers reports uncovered approved quantity as resolution_not_selected alongside blockers for unfinished resolutions. Start from each buildable pinned policy proposal or the no-policy defaults, replace every supplied decision field, fill release_timing, and validate the result. When an automatic refund can no longer run through the original payment's provider, the request fails with 409 ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose no_monetary_action.

`POST /v1/returns/{return_id}/decide`

Signature:

```typescript
decide(return_id: InputValue<string>,
 params: (InputValue<DecideReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [DecideReturnRequestInput](../models/DecideReturnRequest.md#decidereturnrequest) | The request body for: Decide return. |

Body model: [DecideReturnRequestInput](../models/DecideReturnRequest.md#decidereturnrequest).

#### returns.decide body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ReturnLineDecisionInput](../models/ReturnLineDecision.md#returnlinedecision) | minItems: `1`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `decideWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.decide("ret_00000000000000000000000000", {line_items: [{approved_quantity: "1", receiving_location_id: "loc_00000000000000000000000000", return_line_item_id: "retli_00000000000000000000000000"}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-decide.mjs)

### returns.deleteLineItem

Remove a line item from a requested Return. Send optional expected_version as one query parameter to fence against the parent Return version. The response is the updated Return.

`DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature:

```typescript
deleteLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `deleteLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-deleteLineItem.mjs)

### returns.get

Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, customer, receipts, inspections, dispositions, resolutions, shipments, and each line item's reason and fulfillment.

`GET /v1/returns/{return_id}`

Signature:

```typescript
get(return_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"customer" |
    "line_items.fulfillment" |
    "line_items.return_reason" |
    "order" |
    "return_dispositions" |
    "return_inspections" |
    "return_receipts" |
    "return_resolutions" |
    "shipments">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: [9 declared values](#returnsget-input-expand--values). |

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

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

```typescript
const result = await client.returns.get("example", {}, {  });
```

[Complete runnable example](../examples/returns-get.mjs)

### returns.getLineItem

Retrieve one Return line item, including its quantity counters and the reason the buyer selected.

`GET /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature:

```typescript
getLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |

#### Response

Returned payload: [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem).

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

Complete body and metadata: `getLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.returns.getLineItem("example", "example", {}, {  });
```

[Complete runnable example](../examples/returns-getLineItem.mjs)

### returns.list

List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived. Newest first: created_at descending, with return_id descending as the tiebreak. Set sort_direction to asc for oldest first, with return_id ascending as the tiebreak. Default order: created_at descending, then return_id descending.

`GET /v1/returns`

Signature:

```typescript
list(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "customer_id"?: InputValue<string>;
  "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
  "external_reference_id"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "merchandise_status"?: InputValue<Array<"not_required" |
    "awaiting_handoff" |
    "in_transit" |
    "partially_received" |
    "inspection_required" |
    "partially_inspected" |
    "inspection_review_required" |
    "disposition_required" |
    "resolved" |
    "exception">>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "receiving_location_id"?: InputValue<string>;
  "resolution_status"?: InputValue<Array<"not_selected" |
    "pending" |
    "partially_fulfilled" |
    "requires_action" |
    "fulfilled" |
    "failed">>;
  "resolution_type"?: InputValue<Array<"refund" |
    "exchange" |
    "replacement" |
    "store_credit" |
    "no_monetary_action" |
    "correction">>;
  "return_number"?: InputValue<string>;
  "return_reason_id"?: InputValue<string>;
  "sort_by"?: InputValue<"created_at">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "work_type"?: InputValue<Array<"decision" |
    "handoff" |
    "receipt" |
    "inspection" |
    "disposition" |
    "resolution" |
    "exception">>;
  "expand"?: InputValue<Array<"customer" | "order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `customer_id` | Optional | string |  |
| `decision_status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `merchandise_status` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](#returnslist-input-merchandise_status--values). |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `receiving_location_id` | Optional | string |  |
| `resolution_status` | Optional | Array of string | minItems: `1`. Items values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `resolution_type` | Optional | Array of string | minItems: `1`. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_number` | Optional | string |  |
| `return_reason_id` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `work_type` | Optional | Array of string | minItems: `1`. Items values: `"decision"`, `"handoff"`, `"receipt"`, `"inspection"`, `"disposition"`, `"resolution"`, `"exception"`. |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`. |

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

#### Response

Returned payload: [ListReturnsResponse](../models/ListReturnsResponse.md#listreturnsresponse).

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

```typescript
const result = await client.returns.list({}, {  });
```

[Complete runnable example](../examples/returns-list.mjs)

### returns.listActivities

Read the merchant history of a Return for timelines and audit. Read the referenced resources for current state. Activities are newest first by default; use sort_direction=asc for chronological order. Newest first: created_at descending, with return_activity_id descending as the tiebreak. Default order: created_at descending, then return_activity_id descending.

`GET /v1/returns/{return_id}/activities`

Signature:

```typescript
listActivities(return_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "sort_direction"?: InputValue<"asc" | "desc">
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [ListReturnActivitiesResponse](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponse).

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

Complete body and metadata: `listActivitiesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listActivitiesItems`, `listActivitiesPages`, `listActivitiesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returns.listActivities("example", {}, {  });
```

[Complete runnable example](../examples/returns-listActivities.mjs)

### returns.listLineItems

List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value. Newest first: created_at descending, with return_line_item_id descending as the tiebreak. Default order: created_at descending, then return_line_item_id descending.

`GET /v1/returns/{return_id}/line-items`

Signature:

```typescript
listLineItems(return_id: InputValue<string>,
 params?: {
  "fulfillment_id"?: InputValue<string>;
  "merchandise_status"?: InputValue<Array<"not_required" |
    "awaiting_handoff" |
    "in_transit" |
    "partially_received" |
    "inspection_required" |
    "partially_inspected" |
    "inspection_review_required" |
    "disposition_required" |
    "resolved" |
    "exception">>;
  "order_line_item_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "resolution_status"?: InputValue<Array<"not_selected" |
    "pending" |
    "requires_action" |
    "fulfilled" |
    "failed">>;
  "return_reason_id"?: InputValue<string>;
  "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `fulfillment_id` | Optional | string |  |
| `merchandise_status` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](#returnslistlineitems-input-merchandise_status--values). |
| `order_line_item_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `resolution_status` | Optional | Array of string | minItems: `1`. Items values: `"not_selected"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_reason_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |

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

#### Response

Returned payload: [ListReturnLineItemsResponse](../models/ListReturnLineItemsResponse.md#listreturnlineitemsresponse).

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

Complete body and metadata: `listLineItemsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listLineItemsItems`, `listLineItemsPages`, `listLineItemsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returns.listLineItems("example", {}, {  });
```

[Complete runnable example](../examples/returns-listLineItems.mjs)

### returns.processExisting

Record decisions, receipts, inspections, dispositions, and resolutions for an existing requested or open Return in one request. On a requested Return, send one decision for every requested line; missing decisions return 409 ACTION_NOT_ALLOWED with reason status_not_reached. Omit completion_mode to use the shared pinned policy mode, or automatic when none sets a mode; disagreeing policies require an explicit completion_mode. On an open Return, omit decision and completion_mode to keep committed values, or send those values unchanged; changed values return 409 ACTION_NOT_ALLOWED with reason field_locked. completion_blockers includes resolution_not_selected for any uncovered approved quantity alongside blockers for unfinished resolutions. Refunds, payments, replacement orders, and inventory updates complete asynchronously. expected_version is optional and checked only when sent. If the Return has changed since that version, the request fails with VERSION_CONFLICT. When an automatic refund can no longer run through the original payment's provider, the request fails with 409 ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose no_monetary_action. Requires Idempotency-Key and all three scopes: commerce.returns.write, commerce.returns.operations.write, and commerce.returns.resolutions.write.

`POST /v1/returns/{return_id}/process`

Signature:

```typescript
processExisting(return_id: InputValue<string>,
 params: (InputValue<ProcessExistingReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ProcessExistingReturnRequestInput](../models/ProcessExistingReturnRequest.md#processexistingreturnrequest) | The request body for: Process existing return. |

Body model: [ProcessExistingReturnRequestInput](../models/ProcessExistingReturnRequest.md#processexistingreturnrequest).

#### returns.processExisting body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param completion_mode. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ProcessExistingReturnLineItemRequestInput](../models/ProcessExistingReturnLineItemRequest.md#processexistingreturnlineitemrequest) | minItems: `1`. |
| `receipt` | Optional | [ReturnProcessReceiptRequestInput](../models/ReturnProcessReceiptRequest.md#returnprocessreceiptrequest) | The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return. |

#### Response

Returned payload: [ReturnProcessResult](../models/ReturnProcessResult.md#returnprocessresult).

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

Complete body and metadata: `processExistingWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.processExisting("example", {line_items: [{return_line_item_id: "example"}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-processExisting.mjs)

### returns.reopen

Reopen a completed Return to record late compensating facts. Reopening sets completion_mode to manual, so complete the Return again with /complete once completion_blockers is empty. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.

`POST /v1/returns/{return_id}/reopen`

Signature:

```typescript
reopen(return_id: InputValue<string>,
 params: (InputValue<ReopenReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ReopenReturnRequestInput](../models/ReopenReturnRequest.md#reopenreturnrequest) | The request body for: Reopen return. |

Body model: [ReopenReturnRequestInput](../models/ReopenReturnRequest.md#reopenreturnrequest).

#### returns.reopen body fields

Field definitions: [shared fields](../models/ReopenReturnRequest.md#reopenreturnrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `reopenWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.reopen("example", {reason: "linked_effect_changed"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-reopen.mjs)

### returns.update

Update caller-owned fields on a Return. Only external_reference_id and metadata are writable. Send optional expected_version to reject a stale Return version; every other change goes through a decision, operation, or resolution command.

`PATCH /v1/returns/{return_id}`

Signature:

```typescript
update(return_id: InputValue<string>,
 params: (InputValue<UpdateReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateReturnRequestInput](../models/UpdateReturnRequestInput.md#updatereturnrequestinput) | The request body for: Update return. |

Body model: [UpdateReturnRequestInput](../models/UpdateReturnRequestInput.md#updatereturnrequestinput).

#### returns.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional version of the Return. A stale value returns VERSION_CONFLICT with the current Return version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-update.mjs)

### returns.updateLineItem

Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.

`PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature:

```typescript
updateLineItem(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params: (InputValue<UpdateReturnLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateReturnLineItemRequestInput](../models/UpdateReturnLineItemRequest.md#updatereturnlineitemrequest) | The request body for: Update return line item. |

Body model: [UpdateReturnLineItemRequestInput](../models/UpdateReturnLineItemRequest.md#updatereturnlineitemrequest).

#### returns.updateLineItem body fields

Field definitions: [shared fields](../models/UpdateReturnLineItemRequest.md#updatereturnlineitemrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `updateLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-updateLineItem.mjs)

### returns.waiveLineInspection

Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation. Received quantity on a waived line satisfies after_inspection release timing.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`

Signature:

```typescript
waiveLineInspection(return_id: InputValue<string>,
 return_line_item_id: InputValue<string>,
 params: (InputValue<WaiveReturnLineInspectionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [WaiveReturnLineInspectionRequestInput](../models/WaiveReturnLineInspectionRequest.md#waivereturnlineinspectionrequest) | The request body for: Waive return line inspection. |

Body model: [WaiveReturnLineInspectionRequestInput](../models/WaiveReturnLineInspectionRequest.md#waivereturnlineinspectionrequest).

#### returns.waiveLineInspection body fields

Field definitions: [shared fields](../models/WaiveReturnLineInspectionRequest.md#waivereturnlineinspectionrequest).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Complete body and metadata: `waiveLineInspectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.waiveLineInspection("example", "example", {reason: "policy_override"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returns-waiveLineInspection.mjs)

