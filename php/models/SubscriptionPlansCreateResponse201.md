[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlansCreateResponse201

A response containing `SubscriptionPlan` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan) | The recurring price and billing terms offered to customers. `data`: [field definitions](../models/SubscriptionPlansCreateResponse201.md#subscriptionplanscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPlansCreateResponse201.data

The recurring price and billing terms offered to customers.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | maxItems: `12`. uniqueItems: `true`. |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_subscription_counts` | Required | Array of [SubscriptionDeliveryMethodCounts](../models/SubscriptionDeliveryMethodCounts.md#subscriptiondeliverymethodcounts) |  |
| `delivery_required` | Required | boolean |  |
| `description` | Optional | string |  |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) |  |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where tracked demand from this plan is routed. New subscriptions and payment links for the plan copy it. Absent when the plan has no source. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_items). |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200datametadata). |
| `name` | Required | string |  |
| `quantity_options` | Required | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_delivery_method_ids` | Required | Array of string |  |
| `subscription_plan_id` | Required | string |  |
| `trial_period_days` | Optional | integer | Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

### SubscriptionPlansCreateResponse201.data.line_items[]

Declared alternatives: [OrdersApplyDiscountResponse200.data.subscription_plan variant 1.line_items[]](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_items).

### SubscriptionPlansCreateResponse201.data.metadata

Field definitions: [ReturnsCancelResponse200.data.metadata](../models/ReturnsCancelResponse200.md#returnscancelresponse200datametadata).

