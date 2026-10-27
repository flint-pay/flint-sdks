[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# promotions

### promotions.create

Creates a promotion for the authenticated merchant.

`POST /v1/promotions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePromotionRequestInput](../models/CreatePromotionRequestInput.md#createpromotionrequestinput) | The request body for: Create promotion. |

Body model: [CreatePromotionRequestInput](../models/CreatePromotionRequestInput.md#createpromotionrequestinput).

#### promotions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | [PromotionApplicationMethodRequestInput](../models/PromotionApplicationMethodRequestInput.md#promotionapplicationmethodrequestinput) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. |
| `codes` | Optional | Array of [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequestInput.md#createpromotioncoderequestinput) | Codes to create with a code-gated promotion, at most 100. The create response returns them in `codes`. Add more later with `POST /v1/promotions/{promotion_id}/codes`, and manage each code through the `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems: `100`. |
| `combines_with` | Optional | [PromotionCombinesWithRequestInput](../models/PromotionCombinesWithPatchInput.md#promotioncombineswithpatchinput) | Which discount classes this promotion can combine with. Omitted classes default to true. Which promotion discount classes this promotion can combine with. Omitted classes default to true. |
| `description` | Optional | string | Optional description of the promotion for your own records. minLength: `1`. maxLength: `500`. |
| `discount_class` | Optional | string | Defaults to order when omitted. Default: `"order"`. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Optional | string | Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name when omitted. minLength: `1`. maxLength: `255`. |
| `eligibility_rules` | Optional | [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput) | Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `exclusivity` | Optional | [PromotionExclusivityRequestInput](../models/PromotionExclusivityRequestInput.md#promotionexclusivityrequestinput) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `max_uses` | Optional | integer string | Maximum number of redemptions across all codes and automatic applications. Omit for no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. This is not intended for buyer-facing checkout or receipt copy. minLength: `1`. maxLength: `255`. |
| `redemption_type` | Optional | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionScheduleInput](../models/PromotionScheduleInput.md#promotionscheduleinput) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a promotion that is switched off. Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->promotions->create([
  'application_method' => (object) [
    'type' => 'percent_off',
    'percent_off' => 1,
  ],
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/promotions-create.php)

### promotions.createCode

Creates a code for a code-gated promotion. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`POST /v1/promotions/{promotion_id}/codes`

Signature: `createCode(string|Model $promotion_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequestInput.md#createpromotioncoderequestinput) | The request body for: Create promotion code. |

Body model: [CreatePromotionCodeRequestInput](../models/CreatePromotionCodeRequestInput.md#createpromotioncoderequestinput).

#### promotions.createCode body fields

Field definitions: [shared fields](../models/CreatePromotionCodeRequestInput.md#createpromotioncoderequestinput).

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

Complete body and metadata: `createCodeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->promotions->createCode('example', [
  'code' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/promotions-createCode.php)

### promotions.deleteCode

Archives a promotion code. The code remains readable with status archived. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references.

`DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Signature: `deleteCode(string|Model $promotion_id, string|Model $promotion_code_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `promotion_code_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteCodeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->promotions->deleteCode('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/promotions-deleteCode.php)

### promotions.get

Returns a single promotion by ID.

`GET /v1/promotions/{promotion_id}`

Signature: `get(string|Model $promotion_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

```php
$result = $client->promotions->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/promotions-get.php)

### promotions.getCode

Returns a single promotion code by promotion ID and code ID. Archived codes remain readable, including codes of an archived promotion. Returns 404 when the code does not exist or belongs to another promotion, merchant, or environment.

`GET /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Signature: `getCode(string|Model $promotion_id, string|Model $promotion_code_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `promotion_code_id` | Required | string |  |

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

Complete body and metadata: `getCodeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->promotions->getCode('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/promotions-getCode.php)

### promotions.list

Returns a paginated list of promotions for the authenticated merchant.

`GET /v1/promotions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `availability` | Optional | Array of string | minItems: `1`. Items values: `"available"`, `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `product_id` | Optional | string |  |
| `variant_id` | Optional | string |  |
| `bundle_id` | Optional | string |  |
| `category_handle` | Optional | string | maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `redemption_type` | Optional | Array of string | minItems: `1`. Items values: `"automatic"`, `"code"`. |
| `discount_class` | Optional | Array of string | minItems: `1`. Items values: `"order"`, `"line_item"`, `"service_charge"`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [PromotionsListResponse200](../models/PromotionsListResponse200.md#promotionslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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

```php
$result = $client->promotions->list([], new RequestOptions());
```

[Complete runnable example](../examples/promotions-list.php)

### promotions.listCodes

Returns a paginated list of promotion codes in every status, ordered by created_at descending, then promotion_code_id descending. Archived codes are excluded unless status=archived.

`GET /v1/promotion-codes`

Signature: `listCodes(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Optional | string |  |
| `code` | Optional | string | minLength: `1`. maxLength: `100`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `availability` | Optional | Array of string | minItems: `1`. Items values: `"available"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"promotion"`. |

#### Response

Returned payload: [PromotionsListCodesResponse200](../models/PromotionsListCodesResponse200.md#promotionslistcodesresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listCodesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listCodesItems`, `listCodesPages`, `listCodesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->promotions->listCodes([], new RequestOptions());
```

[Complete runnable example](../examples/promotions-listCodes.php)

### promotions.remove

Archives a promotion and returns the resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references.

`DELETE /v1/promotions/{promotion_id}`

Signature: `remove(string|Model $promotion_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->promotions->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/promotions-remove.php)

### promotions.update

Applies a sparse update to promotion fields. application_method, schedule, and exclusivity patch by subfield presence. Omitted fields retain stored values; null clears only nullable fields. Sending a different application_method.type replaces the effect while preserving omitted shared settings, including discounted_item_rules. Archived promotions cannot be changed. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/promotions/{promotion_id}`

Signature: `update(string|Model $promotion_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePromotionRequestInput](../models/UpdatePromotionRequestInput.md#updatepromotionrequestinput) | The request body for: Update promotion. |

Body model: [UpdatePromotionRequestInput](../models/UpdatePromotionRequestInput.md#updatepromotionrequestinput).

#### promotions.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | [PromotionApplicationMethodPatchInput](../models/PromotionApplicationMethodPatchInput.md#promotionapplicationmethodpatchinput) | Fields of the discount effect to change. Omitted fields keep their stored values. Send only application_method fields to change. Omitted fields keep their stored values. Sending a different type replaces the effect with the supplied effect fields; allocation, calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y. minProperties: `1`. |
| `combines_with` | Optional | [PromotionCombinesWithPatchInput](../models/PromotionCombinesWithPatchInput.md#promotioncombineswithpatchinput) | Send only the classes to change. Omitted classes keep their current value. null, an empty object, and null classes are invalid. Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values. minProperties: `1`. |
| `description` | Optional | string or null | Description of the promotion for your own records. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `discount_class` | Optional | string | Promotion discount class. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Optional | string | Buyer-facing promotion name shown in checkout and order discount surfaces. minLength: `1`. maxLength: `255`. |
| `eligibility_rules` | Optional | [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput) or null | Replaces the promotion's eligibility conditions. Send null to remove all eligibility conditions. |
| `exclusivity` | Optional | [PromotionExclusivityPatchInput](../models/PromotionExclusivityPatchInput.md#promotionexclusivitypatchinput) or null | Fields of the exclusivity group and priority to change. Send null to remove the promotion from its exclusivity group. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when application_method or eligibility_rules is present, including an empty collection or a supported null clear. Optional for scalar updates. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `max_uses` | Optional | integer string or null | Maximum number of redemptions across all codes and automatic applications. Send null to remove the redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | Internal promotion name for dashboards, searching, and reporting. minLength: `1`. maxLength: `255`. |
| `schedule` | Optional | [PromotionSchedulePatchInput](../models/PromotionSchedulePatchInput.md#promotionschedulepatchinput) or null | Fields of the promotion schedule to change. Send null to remove the schedule. |
| `status` | Optional | string | Lifecycle status to set: active or inactive. Archived promotions cannot be updated. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [Promotion](../models/Promotion.md#promotion).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->promotions->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/promotions-update.php)

### promotions.updateCode

Applies a sparse update to a promotion code. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Signature: `updateCode(string|Model $promotion_id, string|Model $promotion_code_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `promotion_code_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePromotionCodeRequestInput](../models/UpdatePromotionCodeRequestInput.md#updatepromotioncoderequestinput) | The request body for: Update promotion code. |

Body model: [UpdatePromotionCodeRequestInput](../models/UpdatePromotionCodeRequestInput.md#updatepromotioncoderequestinput).

#### promotions.updateCode body fields

Field definitions: [shared fields](../models/UpdatePromotionCodeRequestInput.md#updatepromotioncoderequestinput).

#### Response

Returned payload: [PromotionCode](../models/PromotionCode.md#promotioncode).

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

Complete body and metadata: `updateCodeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->promotions->updateCode('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/promotions-updateCode.php)

