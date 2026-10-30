[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnResolutions

### returnResolutions.cancel

Cancel a resolution and release the line value it reserved. A failed resolution can be canceled only when it never created a Refund, PaymentIntent, or Order, or when it is an unpaid exchange. Effects that already succeeded are undone with a compensating correction instead.

`POST /v1/return-resolutions/{return_resolution_id}/cancel`

Signature: `cancel(return_resolution_id: InputValue<string>, params: ReturnResolutionsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Required | [CancelReturnResolutionRequestInput](../models/CancelReturnRequest.md#cancelreturnrequest) | The request body for: Cancel return resolution. |

Body model: [CancelReturnResolutionRequestInput](../models/CancelReturnRequest.md#cancelreturnrequest).

#### returnResolutions.cancel body fields

Field definitions: [shared fields](../models/CancelReturnRequest.md#cancelreturnrequest).

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

const result = await client.returnResolutions.cancel("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnResolutions-cancel.mjs)

### returnResolutions.confirm

Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind line-qualified execution blockers.

`POST /v1/return-resolutions/{return_resolution_id}/confirm`

Signature: `confirm(return_resolution_id: InputValue<string>, params: ReturnResolutionsConfirmParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Required | [ConfirmReturnResolutionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Confirm return resolution. |

Body model: [ConfirmReturnResolutionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### returnResolutions.confirm body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |

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

const result = await client.returnResolutions.confirm("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnResolutions-confirm.mjs)

### returnResolutions.createCheckoutSession

Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement order linked to this return resolution. Returns 200 when reusing an existing session and 201 when creating one. Omit surface to use hosted. The same surface reuses the open session; changing surface replaces an idle session and is refused while a payment is in progress. Use redirects to set where the buyer goes after paying or canceling. The return_url field is an alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout and must be an address of the merchant's customer account. A reused session takes a new success destination only until a payment starts, then keeps its existing destination.

`POST /v1/return-resolutions/{return_resolution_id}/checkout-sessions`

Signature:

```typescript
createCheckoutSession(return_resolution_id: InputValue<string>,
 params?: ReturnResolutionsCreateCheckoutSessionParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields-11). Models: [GetOrCreateReturnResolutionCheckoutSessionRequestInput](../models/GetOrCreateReturnResolutionCheckoutSessionRequest.md#getorcreatereturnresolutioncheckoutsessionrequest).

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret) | [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

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
| 504 | ServerError |

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

const result = await client.returnResolutions.createCheckoutSession("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnResolutions-createCheckoutSession.mjs)

### returnResolutions.get

Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds, payments, and replacement order. Supports expand for those links.

`GET /v1/return-resolutions/{return_resolution_id}`

Signature:

```typescript
get(return_resolution_id: InputValue<string>,
 params?: ReturnResolutionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `expand` | Optional | Array of string or string | Supported expansions: payment_intents, refunds, replacement_order. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=payment_intents&expand=refunds, or pass one comma-separated value. Items values: `"payment_intents"`, `"refunds"`, `"replacement_order"`. Values: `"payment_intents"`, `"refunds"`, `"replacement_order"`. |

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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
const result = await client.returnResolutions.get("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnResolutions-get.mjs)

### returnResolutions.list

List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for a resolution that already settled. Default order: created_at descending, then return_resolution_id descending.

`GET /v1/return-resolutions`

Signature: `list(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_required_by` | Optional | Array of string or string | Filter by action required by. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"buyer"`, `"merchant"`, `"integration"`. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `corrects_return_resolution_id` | Optional | string | Filter by corrects return resolution id. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return resolution ID or external reference ID. |
| `resolution_type` | Optional | Array of string or string | Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Optional | string | Filter by return id. |
| `return_line_item_id` | Optional | string | Filter by return line item id. |
| `return_policy_revision_id` | Optional | string | Filter by return policy revision id. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"proposed"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`, `"canceled"`. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`, `"canceled"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: replacement_order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=replacement_order. Items values: `"replacement_order"`. Values: `"replacement_order"`. |

#### Response

Returned payload: [ListReturnResolutionsResponse](../models/ListReturnResolutionsResponse.md#listreturnresolutionsresponse).

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
const result = await client.returnResolutions.list({}, {  });
```

[Complete runnable example](../examples/returnResolutions-list.mjs)

### returnResolutions.release

Release a confirmed resolution that is waiting on a manual release. Available only while action_reason is manual_release.

`POST /v1/return-resolutions/{return_resolution_id}/release`

Signature: `release(return_resolution_id: InputValue<string>, params: ReturnResolutionsReleaseParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Required | [ReleaseReturnResolutionRequestInput](../models/ReleaseReturnResolutionRequest.md#releasereturnresolutionrequest) | The request body for: Release return resolution. |

Body model: [ReleaseReturnResolutionRequestInput](../models/ReleaseReturnResolutionRequest.md#releasereturnresolutionrequest).

#### returnResolutions.release body fields

Field definitions: [shared fields](../models/ReleaseReturnResolutionRequest.md#releasereturnresolutionrequest).

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

const result = await client.returnResolutions.release("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "merchant_approved"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnResolutions-release.mjs)

### returnResolutions.retry

Retry a failed resolution. For gift_card_refund_destination_required, send gift_card_refund_destination: new_gift_card to persist the destination before starting the new attempt. The override is accepted for refund, exchange, and corrections of resolutions other than store_credit. A new attempt starts, historical payment and refund IDs stay on the resolution, and a late event from an earlier attempt cannot settle the new attempt. Fails with ACTION_NOT_ALLOWED, with the line's current_status, when a Return line the resolution covers is no longer approved, such as after it was canceled, and with RETURN_VALUE_EXCEEDED when an approved line no longer has the quantity the resolution covers. Retry is available only when failure_code allows it, and supported_actions includes retry in that case. A failure that retry cannot fix returns 409 ACTION_NOT_ALLOWED; cancel the resolution instead.

`POST /v1/return-resolutions/{return_resolution_id}/retry`

Signature: `retry(return_resolution_id: InputValue<string>, params: ReturnResolutionsRetryParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Required | [RetryReturnResolutionRequestInput](../models/RetryReturnResolutionRequest.md#retryreturnresolutionrequest) | The request body for: Retry return resolution. |

Body model: [RetryReturnResolutionRequestInput](../models/RetryReturnResolutionRequest.md#retryreturnresolutionrequest).

#### returnResolutions.retry body fields

Field definitions: [shared fields](../models/RetryReturnResolutionRequest.md#retryreturnresolutionrequest).

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

const result = await client.returnResolutions.retry("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "dependency_recovered"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnResolutions-retry.mjs)

### returnResolutions.update

Update a proposed resolution before confirmation. A present line_items, replacement_line_items, or adjustments array replaces that collection and requires expected_version.

`PATCH /v1/return-resolutions/{return_resolution_id}`

Signature: `update(return_resolution_id: InputValue<string>, params: ReturnResolutionsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Required | [UpdateReturnResolutionRequestInput](../models/UpdateReturnResolutionRequest.md#updatereturnresolutionrequest) | The request body for: Update return resolution. |

Body model: [UpdateReturnResolutionRequestInput](../models/UpdateReturnResolutionRequest.md#updatereturnresolutionrequest).

#### returnResolutions.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [UpdateReturnResolutionAdjustmentRequestInput](../models/UpdateReturnResolutionAdjustmentRequest.md#updatereturnresolutionadjustmentrequest) | Requires expected_version. Items: A fee or credit to keep or add when updating a return resolution. Include `return_resolution_adjustment_id` to update an existing one. |
| `expected_version` | Optional | integer | Required when any of these fields is present: line_items, replacement_line_items, adjustments. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Optional | Array of [UpdateReturnResolutionLineItemRequestInput](../models/UpdateReturnResolutionLineItemRequest.md#updatereturnresolutionlineitemrequest) | Requires expected_version. Items: A return line and quantity to keep or add when updating a return resolution. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [UpdateReturnReplacementLineItemRequestInput](../models/UpdateReturnReplacementLineItemRequest.md#updatereturnreplacementlineitemrequest) | Requires expected_version. Items: A replacement item to keep or add when updating a return resolution. Include `return_replacement_line_item_id` to keep an existing one. |

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

const result = await client.returnResolutions.update("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id: "resolution-2026-001"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnResolutions-update.mjs)

