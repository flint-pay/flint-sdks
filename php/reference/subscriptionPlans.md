[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionPlans

### subscriptionPlans.create

Creates a subscription plan for the authenticated merchant.

`POST /v1/subscription-plans`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionPlanRequestInput](../models/CreateSubscriptionPlanRequestInput.md#createsubscriptionplanrequestinput) | The request body for: Create subscription plan. |

Body model: [CreateSubscriptionPlanRequestInput](../models/CreateSubscriptionPlanRequestInput.md#createsubscriptionplanrequestinput).

#### subscriptionPlans.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | maxItems: `12`. uniqueItems: `true`. |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `description` | Optional | string | minLength: `1`. |
| `early_termination_fee_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Where tracked demand from this plan is routed: a fixed Location, an allocation policy, or an immutable policy revision. Required when any line item tracks inventory. New subscriptions and payment links for the plan copy it, unless the payment link sends its own. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Required | Array of [SubscriptionPlanLineItemRequestInput](../models/SubscriptionPlanLineItemRequestInput.md#subscriptionplanlineitemrequestinput) | minItems: `1`. Items: A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and price. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Optional | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Items: minLength: `1`. |
| `trial_period_days` | Optional | integer | Format: `int32`. |

#### Response

Returned payload: [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionPlans->create([
  'billing_interval' => 'daily',
  'billing_interval_count' => 1,
  'currency' => 'USD',
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'var_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    ],
  ],
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionPlans-create.php)

### subscriptionPlans.delete

Permanently archives a subscription plan from active or inactive status. Returns RESOURCE_IN_USE while active subscriptions, active payment links, or open checkout sessions reference the plan. To stop selling a plan while keeping its subscribers, set status to inactive.

`DELETE /v1/subscription-plans/{subscription_plan_id}`

Signature: `delete(string|Model $subscription_plan_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_plan_id` | Required | string | Flint subscription plan ID. |
| `expected_version` | Optional | integer | Optional subscription plan version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionPlans->delete('plan_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionPlans-delete.php)

### subscriptionPlans.get

Returns a single subscription plan by ID.

`GET /v1/subscription-plans/{subscription_plan_id}`

Signature: `get(string|Model $subscription_plan_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_plan_id` | Required | string | Flint subscription plan ID. |

#### Response

Returned payload: [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan).

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

```php
$result = $client->subscriptionPlans->get('plan_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionPlans-get.php)

### subscriptionPlans.list

Returns a paginated list of subscription plans for the authenticated merchant. Default order: created_at descending, then subscription_plan_id descending.

`GET /v1/subscription-plans`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across subscription plan ID, external reference ID, name, and description. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as plan_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by subscription_plan_id. Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [SubscriptionPlanListResponse](../models/SubscriptionPlanListResponse.md#subscriptionplanlistresponse).

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

```php
$result = $client->subscriptionPlans->list([], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionPlans-list.php)

### subscriptionPlans.update

Applies a sparse update to mutable subscription plan fields. Setting status to inactive returns RESOURCE_IN_USE while active payment links use the plan. Open checkout sessions do not block this change; buyers in those sessions are refused with ACTION_NOT_ALLOWED when they pay. Send line_items with expected_version to replace the plan's line items; omit line_items to keep them.

`PATCH /v1/subscription-plans/{subscription_plan_id}`

Signature: `update(string|Model $subscription_plan_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_plan_id` | Required | string | Flint subscription plan ID. |
| `body` | Required | [UpdateSubscriptionPlanRequestInput](../models/UpdateSubscriptionPlanRequestInput.md#updatesubscriptionplanrequestinput) | The request body for: Update subscription plan. |

Body model: [UpdateSubscriptionPlanRequestInput](../models/UpdateSubscriptionPlanRequestInput.md#updatesubscriptionplanrequestinput).

#### subscriptionPlans.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | Omission leaves the choices unchanged. Send [] to reset to the plan’s default billing interval and count. Null is invalid. maxItems: `12`. uniqueItems: `true`. |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `description` | Optional | string or null | Omission leaves this field unchanged. Null clears it. minLength: `1`. |
| `early_termination_fee_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing an owned collection. Required when any of these fields is present: images, line_items. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omission leaves this field unchanged. Null clears it. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. Items: An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Replaces the plan's routing source. Subscriptions and payment links that already exist keep the source they copied. It can't be cleared. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Optional | Array of [UpdateSubscriptionPlanLineItemRequestInput](../models/UpdateSubscriptionPlanLineItemRequestInput.md#updatesubscriptionplanlineitemrequestinput) | Replaces all owned plan line items atomically. Requires expected_version. Omission leaves items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id to retain an item; omit it for a new server-generated ID. Omitted members are removed. Existing subscriptions keep their snapshots. Retained catalog items with the same source keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: `1`. Items: A line item to keep or add when updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing one. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | minLength: `1`. |
| `quantity_options` | Optional | Array of integer | Omission leaves the choices unchanged. Send [] to reset to [1]. Null is invalid. maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Optional | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null is invalid. Items: minLength: `1`. |
| `trial_period_days` | Optional | integer | Format: `int32`. |

#### Response

Returned payload: [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionPlans->update('plan_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'description' => 'Recurring membership',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionPlans-update.php)

