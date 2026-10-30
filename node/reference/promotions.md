[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# promotions

### promotions.create

Creates a promotion for the authenticated merchant.

`POST /v1/promotions`

Signature: `create(params: PromotionsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreatePromotionRequestInput](../models/CreatePromotionRequest.md#createpromotionrequest) | The request body for: Create promotion. |

Body model: [CreatePromotionRequestInput](../models/CreatePromotionRequest.md#createpromotionrequest).

#### promotions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | [PromotionApplicationMethodRequestInput](../models/PromotionApplicationMethodRequest.md#promotionapplicationmethodrequest) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. |
| `codes` | Optional | Array of [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequest.md#createpromotioncoderequest) | Codes to create with a code-gated promotion, at most 100. The create response returns them in `codes`. Add more later with `POST /v1/promotions/{promotion_id}/codes`, and manage each code through the `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems: `100`. |
| `combines_with` | Optional | [PromotionCombinesWithRequestInput](../models/PromotionCombinesWithPatch.md#promotioncombineswithpatch) | Which discount classes this promotion can combine with. Omitted classes default to true. Which promotion discount classes this promotion can combine with. Omitted classes default to true. |
| `description` | Optional | string | Optional description of the promotion for your own records. minLength: `1`. maxLength: `500`. |
| `discount_class` | Optional | string | Defaults to order when omitted. Default: `"order"`. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Optional | string | Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name when omitted. minLength: `1`. maxLength: `255`. |
| `eligibility_rules` | Optional | [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest) | Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `exclusivity` | Optional | [PromotionExclusivityRequestInput](../models/PromotionExclusivityRequest.md#promotionexclusivityrequest) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `max_uses` | Optional | integer | Maximum number of redemptions across all codes and automatic applications. Omit for no redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. This is not intended for buyer-facing checkout or receipt copy. minLength: `1`. maxLength: `255`. |
| `redemption_type` | Optional | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionScheduleRequestInput](../models/PromotionSchedule.md#promotionschedule) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a promotion that is switched off. Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

const result = await client.promotions.create({application_method: {type: "percent_off", percent_off: 1}, name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotions-create.mjs)

### promotions.createCode

Creates a code for a code-gated promotion. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`POST /v1/promotions/{promotion_id}/codes`

Signature: `createCode(promotion_id: InputValue<string>, params: PromotionsCreateCodeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |
| `body` | Required | [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequest.md#createpromotioncoderequest) | The request body for: Create promotion code. |

Body model: [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequest.md#createpromotioncoderequest).

#### promotions.createCode body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code a buyer enters to redeem the promotion. minLength: `1`. maxLength: `100`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry. Format: `date-time`. minLength: `1`. |
| `max_uses` | Optional | integer | Maximum number of times this code can be redeemed. Omit for no redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
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

const result = await client.promotions.createCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "VIP20", expires_at: "2026-04-01T00:00:00Z", max_uses: 100, metadata: {audience: "vip"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotions-createCode.mjs)

### promotions.delete

Archives a promotion and returns the resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references.

`DELETE /v1/promotions/{promotion_id}`

Signature: `delete(promotion_id: InputValue<string>, params?: PromotionsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

const result = await client.promotions.delete("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotions-delete.mjs)

### promotions.deleteCode

Archives a promotion code. The code remains readable with status archived. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references.

`DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Signature:

```typescript
deleteCode(promotion_id: InputValue<string>,
 promotion_code_id: InputValue<string>,
 params?: PromotionsDeleteCodeParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `promotion_code_id` | Required | string | Flint promotion code ID. |

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

const result = await client.promotions.deleteCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotions-deleteCode.mjs)

### promotions.get

Returns a single promotion by ID.

`GET /v1/promotions/{promotion_id}`

Signature: `get(promotion_id: InputValue<string>, params?: PromotionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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
const result = await client.promotions.get("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/promotions-get.mjs)

### promotions.getCode

Returns a single promotion code by promotion ID and code ID. Archived codes remain readable, including codes of an archived promotion. Returns 404 when the code does not exist or belongs to another promotion, merchant, or environment.

`GET /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Signature:

```typescript
getCode(promotion_id: InputValue<string>,
 promotion_code_id: InputValue<string>,
 params?: PromotionsGetCodeParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |
| `promotion_code_id` | Required | string | Flint promotion code ID. |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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
const result = await client.promotions.getCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/promotions-getCode.mjs)

### promotions.list

Returns a paginated list of promotions for the authenticated merchant. Default order: created_at descending, then promotion_id descending.

`GET /v1/promotions`

Signature: `list(params?: PromotionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `availability` | Optional | Array of string or string | Filter by whether a promotion can apply now or why it cannot. available matches available: true; every other value matches unavailable_reason. Repeat the parameter or pass comma-separated values; values are ORed. This filter is ANDed with status. Archived promotions still require status=archived. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"available"`, `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. Values: `"available"`, `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across promotion ID, external reference ID, name, display name, description, and promotion codes. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as promo_01. |
| `product_id` | Optional | string | Filter to promotions with an explicit product target rule. Universal promotions are not included by catalog target filters. |
| `variant_id` | Optional | string | Filter to promotions with an explicit variant target rule. Universal promotions are not included by catalog target filters. |
| `bundle_id` | Optional | string | Filter to promotions with an explicit bundle target rule. Universal promotions are not included by catalog target filters. |
| `category_handle` | Optional | string | Filter to promotions with an explicit category target rule. Universal promotions are not included by catalog target filters. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `redemption_type` | Optional | Array of string or string | Filter by promotion redemption type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"automatic"`, `"code"`. Values: `"automatic"`, `"code"`. |
| `discount_class` | Optional | Array of string or string | Filter by promotion discount class. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"order"`, `"line_item"`, `"service_charge"`. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by promotion_id. Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [PromotionListResponse](../models/PromotionListResponse.md#promotionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.promotions.list({}, {  });
```

[Complete runnable example](../examples/promotions-list.mjs)

### promotions.update

Applies a sparse update to promotion fields. application_method, schedule, and exclusivity patch by subfield presence. Omitted fields retain stored values; null clears only nullable fields. Sending a different application_method.type replaces the effect while preserving omitted shared settings, including discounted_item_rules. Archived promotions cannot be changed. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/promotions/{promotion_id}`

Signature: `update(promotion_id: InputValue<string>, params: PromotionsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |
| `body` | Required | [UpdatePromotionRequestInput](../models/UpdatePromotionRequest.md#updatepromotionrequest) | The request body for: Update promotion. |

Body model: [UpdatePromotionRequestInput](../models/UpdatePromotionRequest.md#updatepromotionrequest).

#### promotions.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | [PromotionApplicationMethodPatchInput](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatch) | Fields of the discount effect to change. Omitted fields keep their stored values. Send only application_method fields to change. Omitted fields keep their stored values. Sending a different type replaces the effect with the supplied effect fields; allocation, calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y. minProperties: `1`. |
| `combines_with` | Optional | [PromotionCombinesWithPatchInput](../models/PromotionCombinesWithPatch.md#promotioncombineswithpatch) | Send only the classes to change. Omitted classes keep their current value. null, an empty object, and null classes are invalid. Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values. minProperties: `1`. |
| `description` | Optional | string or null | Description of the promotion for your own records. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `discount_class` | Optional | string | Promotion discount class. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Optional | string | Buyer-facing promotion name shown in checkout and order discount surfaces. minLength: `1`. maxLength: `255`. |
| `eligibility_rules` | Optional | [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest) or null | Replaces the promotion's eligibility conditions. Send null to remove all eligibility conditions. |
| `exclusivity` | Optional | [PromotionExclusivityPatchInput](../models/PromotionExclusivityPatch.md#promotionexclusivitypatch) or null | Fields of the exclusivity group and priority to change. Send null to remove the promotion from its exclusivity group. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when application_method or eligibility_rules is present, including an empty collection or a supported null clear. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `max_uses` | Optional | integer or null | Maximum number of redemptions across all codes and automatic applications. Send null to remove the redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Internal promotion name for dashboards, searching, and reporting. minLength: `1`. maxLength: `255`. |
| `schedule` | Optional | [PromotionSchedulePatchInput](../models/PromotionSchedulePatch.md#promotionschedulepatch) or null | Fields of the promotion schedule to change. Send null to remove the schedule. |
| `status` | Optional | string | Lifecycle status to set: active or inactive. Archived promotions cannot be updated. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

const result = await client.promotions.update("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Selected spring products"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotions-update.mjs)

### promotions.updateCode

Applies a sparse update to a promotion code. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Signature:

```typescript
updateCode(promotion_id: InputValue<string>,
 promotion_code_id: InputValue<string>,
 params: PromotionsUpdateCodeParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string | Flint promotion ID. |
| `promotion_code_id` | Required | string | Flint promotion code ID. |
| `body` | Required | [UpdatePromotionCodeRequestInput](../models/UpdatePromotionCodeRequest.md#updatepromotioncoderequest) | The request body for: Update promotion code. |

Body model: [UpdatePromotionCodeRequestInput](../models/UpdatePromotionCodeRequest.md#updatepromotioncoderequest).

#### promotions.updateCode body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
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

const result = await client.promotions.updateCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {max_uses: 50}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/promotions-updateCode.mjs)

