[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnDispositions

### returnDispositions.cancel

Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.

`POST /v1/return-dispositions/{return_disposition_id}/cancel`

Signature: `cancel(return_disposition_id: InputValue<string>, params: ReturnDispositionsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string | Flint return disposition id. Must be a valid ID with prefix retdsp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CancelReturnDispositionRequestInput](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest) | The request body for: Cancel return disposition. |

Body model: [CancelReturnDispositionRequestInput](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest).

#### returnDispositions.cancel body fields

Field definitions: [shared fields](../models/CancelReturnDispositionRequest.md#cancelreturndispositionrequest).

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

const result = await client.returnDispositions.cancel("retdsp_01KEZF7C007H87J66PH2EEK1VW", {expected_version: 1, reason: "created_in_error"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-cancel.mjs)

### returnDispositions.create

Record an auditable merchandise disposition from either a receipt line or an inspection line. Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions` on `GET /v1/returns/{return_id}`.

`POST /v1/return-dispositions`

Signature: `create(params: ReturnDispositionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnDispositionRequestInput](../models/CreateReturnDispositionRequest.md#createreturndispositionrequest) | The request body for: Create return disposition. |

Body model: [CreateReturnDispositionRequestInput](../models/CreateReturnDispositionRequest.md#createreturndispositionrequest).

#### returnDispositions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. minLength: `1`. |
| `return_id` | Required | string | ID of the Return the disposition belongs to. minLength: `1`. |
| `return_inspection_line_item_id` | Optional | string | ID of the inspection line the disposition covers. Absent when it covers a receipt line. minLength: `1`. |
| `return_receipt_line_item_id` | Optional | string | ID of the receipt line the disposition covers. Absent when it covers an inspection line. minLength: `1`. |

#### returnDispositions.create: CreateReturnDispositionRequestReceiptLine

The `Receipt line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestReceiptLineInput](../models/CreateReturnDispositionRequestReceiptLine.md#createreturndispositionrequestreceiptline).

#### returnDispositions.create: CreateReturnDispositionRequestInspectionLine

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

const result = await client.returnDispositions.create({disposition_type: "sellable", inventory_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", occurred_at: "2026-09-08T14:20:00Z", quantity: 1, reason: "return_policy", return_id: "ret_01KEZF7C00VDTZH2NK73DBK2HZ", return_receipt_line_item_id: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-create.mjs)

### returnDispositions.get

Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.

`GET /v1/return-dispositions/{return_disposition_id}`

Signature:

```typescript
get(return_disposition_id: InputValue<string>,
 params?: ReturnDispositionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string | Flint return disposition id. Must be a valid ID with prefix retdsp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
const result = await client.returnDispositions.get("retdsp_01KEZF7C007H87J66PH2EEK1VW", {}, {  });
```

[Complete runnable example](../examples/returnDispositions-get.mjs)

### returnDispositions.list

List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant. Default order: created_at descending, then return_disposition_id descending.

`GET /v1/return-dispositions`

Signature: `list(params?: ReturnDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `disposition_type` | Optional | Array of string or string | Filter by disposition type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns only resources created in your caller namespace, plus resources created before caller scoping under the original key. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. A match can show `idempotency_key: null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `inventory_location_id` | Optional | string | Filter by inventory location id. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return disposition ID or external reference ID. |
| `replaces_return_disposition_id` | Optional | string | Filter by replaces return disposition id. pattern: `^retdsp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_id` | Optional | string | Filter by return id. pattern: `^ret_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_inspection_line_item_id` | Optional | string | Filter by return inspection line item id. pattern: `^retinli_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_line_item_id` | Optional | string | Filter by return line item id. pattern: `^retli_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_receipt_line_item_id` | Optional | string | Filter by return receipt line item id. pattern: `^retrcli_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ListReturnDispositionsResponse](../models/ListReturnDispositionsResponse.md#listreturndispositionsresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
const result = await client.returnDispositions.list({}, {  });
```

[Complete runnable example](../examples/returnDispositions-list.mjs)

### returnDispositions.retry

Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.

`POST /v1/return-dispositions/{return_disposition_id}/retry`

Signature: `retry(return_disposition_id: InputValue<string>, params: ReturnDispositionsRetryParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string | Flint return disposition id. Must be a valid ID with prefix retdsp_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [RetryReturnDispositionRequestInput](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest) | The request body for: Retry return disposition. |

Body model: [RetryReturnDispositionRequestInput](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest).

#### returnDispositions.retry body fields

Field definitions: [shared fields](../models/RetryReturnDispositionRequest.md#retryreturndispositionrequest).

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

const result = await client.returnDispositions.retry("retdsp_01KEZF7C007H87J66PH2EEK1VW", {expected_version: 2, reason: "mapping_corrected"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnDispositions-retry.mjs)

