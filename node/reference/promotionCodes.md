[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# promotionCodes

### promotionCodes.create

Creates a code for a promotion whose `redemption_type` is code; adding a code to an automatic promotion fails with `INVALID_REQUEST`. A code that another resource already uses fails with `ALREADY_EXISTS`. Fails with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it belongs to, is archived. The error names the archived resource and its `current_status`.

`POST /v1/promotion-codes`

Signature: `create(params: PromotionCodesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequest.md#createpromotioncoderequest) | The request body for: Create promotion code. |

Body model: [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequest.md#createpromotioncoderequest).

#### promotionCodes.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code a buyer enters to redeem the promotion. minLength: `1`. maxLength: `100`. |
| `customer_id` | Optional | string or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Omit or send null to create an unbound code. minLength: `1`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry. Format: `date-time`. minLength: `1`. |
| `max_uses` | Optional | integer | Maximum number of times this code can be redeemed. Omit for no redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Key-value data you attach to the promotion code. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `promotion_id` | Required | string | Flint promotion ID that owns this code. minLength: `1`. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a code that cannot be redeemed. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

const result = await client.promotionCodes.create({code: "VIP20", expires_at: "2026-04-01T00:00:00Z", max_uses: 100, metadata: {audience: "vip"}, promotion_id: "promo_01HZYV7Q9Y0Y4H8Q3H9F6R7T8J"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotionCodes-create.mjs)

### promotionCodes.delete

Archives a promotion code. The code remains readable with status archived. Returns the archived resource as a read does. Deleting an already archived resource returns it again without changing its version or `updated_at`, sending a webhook, or checking references.

`DELETE /v1/promotion-codes/{promotion_code_id}`

Signature: `delete(promotion_code_id: InputValue<string>, params?: PromotionCodesDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `promotion_code_id` | Required | string | Flint promotion code ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.promotionCodes.delete("pcode_01KEZF7C00JCC7QXWC262EF05T", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotionCodes-delete.mjs)

### promotionCodes.get

Returns a single promotion code by code ID. Archived codes remain readable, including codes of an archived promotion. Fails with `RESOURCE_NOT_FOUND` when the code does not exist or belongs to another merchant or environment.

`GET /v1/promotion-codes/{promotion_code_id}`

Signature: `get(promotion_code_id: InputValue<string>, params?: PromotionCodesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code_id` | Required | string | Flint promotion code ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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
const result = await client.promotionCodes.get("pcode_01KEZF7C00JCC7QXWC262EF05T", {}, {  });
```

[Complete runnable example](../examples/promotionCodes-get.mjs)

### promotionCodes.list

Returns a paginated list of promotion codes in every status, ordered by created_at descending, then promotion_code_id descending. Archived codes are excluded unless status=archived. Default order: created_at descending, then promotion_code_id descending.

`GET /v1/promotion-codes`

Signature: `list(params?: PromotionCodesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Optional | string | Exact match on the parent promotion ID. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `customer_id` | Optional | string | Exact match on the customer bound to the code. Unbound codes are excluded. minLength: `1`. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `code` | Optional | string | Exact match that ignores case and accents: CAFÉ matches cafe. This is the same rule that makes promotion codes unique. Codes preserve their original spelling. Leading and trailing whitespace are rejected, not trimmed. minLength: `1`. maxLength: `100`. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `availability` | Optional | Array of string or string | Filter by whether a code can be redeemed now or why it cannot. available matches available: true; every other value matches unavailable_reason. Values are ORed and ANDed with status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"available"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. Values: `"available"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by promotion_code_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: promotion. Expand each code's parent promotion. Expansion requires commerce.promotions.read. Limits: at most 10 unique expand paths per request. Items values: `"promotion"`. Values: `"promotion"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PromotionCodeListResponse](../models/PromotionCodeListResponse.md#promotioncodelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.promotionCodes.list({}, {  });
```

[Complete runnable example](../examples/promotionCodes-list.mjs)

### promotionCodes.update

Applies a sparse update to a promotion code. Fails with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it belongs to, is archived. The error names the archived resource and its `current_status`.

`PATCH /v1/promotion-codes/{promotion_code_id}`

Signature: `update(promotion_code_id: InputValue<string>, params: PromotionCodesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code_id` | Required | string | Flint promotion code ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePromotionCodeRequestInput](../models/UpdatePromotionCodeRequest.md#updatepromotioncoderequest) | The request body for: Update promotion code. minProperties: `1`. |

Body model: [UpdatePromotionCodeRequestInput](../models/UpdatePromotionCodeRequest.md#updatepromotioncoderequest).

#### promotionCodes.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Omit to preserve the binding; send a customer ID to bind or rebind the code, or null to remove the binding. minLength: `1`. |
| `expected_version` | Optional | integer | Promotion code version last read by the caller. Optional for updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format: `date-time`. minLength: `1`. |
| `max_uses` | Optional | integer or null | Maximum number of times this code can be redeemed. Send null to remove the redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `status` | Optional | string | Lifecycle status: active or inactive. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string or null | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. Send null to clear it. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

const result = await client.promotionCodes.update("pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {max_uses: 50}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotionCodes-update.mjs)

