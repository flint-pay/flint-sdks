[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanResponse

A response containing `SubscriptionPlan` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan) | Resource, collection, or operation result returned by this request. The recurring price and billing terms offered to customers. `data`: [field definitions](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPlanResponse.data

Resource, collection, or operation result returned by this request. The recurring price and billing terms offered to customers.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_interval` | Required | string or null | Delivery cadence. Null when no separate delivery cadence is set; one delivery is made per billing period. Every billing option must be a whole multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions keep their frozen cadence. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `delivery_method_subscription_counts` | Required | Array of [SubscriptionDeliveryMethodCounts](../models/SubscriptionDeliveryMethodCounts.md#subscriptiondeliverymethodcounts) | `delivery_method_subscription_counts[]`: [field definitions](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedatadelivery_method_subscription_counts). |
| `delivery_required` | Required | boolean |  |
| `description` | Optional | string |  |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `end_after` | Required | [SubscriptionEndAfterCycles](../models/SubscriptionEndAfterCycles.md#subscriptionendaftercycles) or null | Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gifts_enabled` | Required | boolean | Whether checkout buyers can name a gift recipient. Checkout sessions freeze it when they are created. Defaults to false. You can set gift_recipient on a subscription through the API either way. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where tracked demand from this plan is routed. New subscriptions and payment links for the plan copy it. Absent when the plan has no source. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedatainventory_routing_source). |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_items). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string |  |
| `plan_change_options` | Required | Array of [SubscriptionPlanChangeOption](../models/SubscriptionPlanChangeOption.md#subscriptionplanchangeoption) | Plans subscribers may switch to, in display order, with the billing timing for each target. Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces them and requires expected_version. Send [] to clear. Null is invalid. maxItems: `25`. `plan_change_options[]`: [field definitions](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedataplan_change_options). |
| `quantity_options` | Required | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_delivery_method_ids` | Required | Array of string | Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `subscription_plan_id` | Required | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Format: `int32`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `0`. |

### SubscriptionPlanResponse.data.delivery_method_subscription_counts[]

Subscription counts by status for one delivery method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Live subscriptions that use the method, by status. Counts of subscriptions by status: active, past due, and paused. |

### SubscriptionPlanResponse.data.images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### SubscriptionPlanResponse.data.inventory_routing_source

Where tracked demand from this plan is routed. New subscriptions and payment links for the plan copy it. Absent when the plan has no source. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Field definitions: [shared fields](InventoryRoutingSourceInput.md#inventoryroutingsourceinput).

### SubscriptionPlanResponse.data.line_items[]

Declared alternatives: [OrderResponse.data.subscription_plan variant 1.line_items[]](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_items).

### SubscriptionPlanResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionPlanResponse.data.plan_change_options[]

A target plan subscribers may switch to and the billing timing for that change.

Field definitions: [shared fields](SubscriptionPlanChangeOptionInput.md#subscriptionplanchangeoptioninput).

### SubscriptionPlanResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

