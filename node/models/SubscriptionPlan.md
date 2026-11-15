[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlan

The recurring price and billing terms offered to customers.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of `billing_interval` units between charges on the plan's default pair. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. `billing_interval_options[]`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options). |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_interval` | Required | string or null | Delivery cadence. Null when no separate delivery cadence is set; one delivery is made per billing period. Every billing option must be a whole multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions keep their frozen cadence. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `delivery_method_subscription_counts` | Required | Array of [SubscriptionDeliveryMethodCounts](../models/SubscriptionDeliveryMethodCounts.md#subscriptiondeliverymethodcounts) | How many of this plan's subscriptions use each delivery method, by status. Counts only subscriptions that are active, paused, or past due and have a delivery method. |
| `delivery_required` | Required | boolean | Whether any line on the plan needs delivery, so each renewal ships or delivers items. Flint works it out from the lines and sets it; you can't send it. |
| `description` | Optional | string | Description of the plan. Omitted when none is set. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `early_termination_fee_money`: [field definitions](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestearly_termination_fee_money). |
| `end_after` | Required | [SubscriptionEndAfterCycles](../models/SubscriptionEndAfterCycles.md#subscriptionendaftercycles) or null | Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. `end_after`: [declared alternatives](../models/SubscriptionPlan.md#subscriptionplanend_after). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gifts_enabled` | Required | boolean | Whether checkout buyers can name a gift recipient. Checkout sessions freeze it when they are created. Defaults to false. You can set gift_recipient on a subscription through the API either way. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images of the plan in display order. The first image is the plan's primary image. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where tracked demand from this plan is routed. New subscriptions and payment links for the plan copy it. Absent when the plan has no source. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `line_items` | Optional | Array of [SubscriptionPlanLineItem](../models/SubscriptionPlanLineItem.md#subscriptionplanlineitem) | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutSession.md#checkoutsessionmetadata). |
| `name` | Required | string | Name of the plan. Buyers see it at checkout and on their subscription. |
| `plan_change_options` | Required | Array of [SubscriptionPlanChangeOption](../models/SubscriptionPlanChangeOption.md#subscriptionplanchangeoption) | Plans subscribers may switch to, in display order, with the billing timing for each target. Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces them and requires expected_version. Send [] to clear. Null is invalid. maxItems: `25`. `plan_change_options[]`: [field definitions](../models/SubscriptionPlan.md#subscriptionplanplan_change_options). |
| `quantity_options` | Required | Array of integer | Quantities of the whole subscription that this plan lists, from 1 to 100, in ascending order. Flint accepts only a subscription quantity of 1, so you can set this list only to `[1]`. To let buyers choose a seat count, set `allow_quantity_adjustment` on a plan line item. A plan saved before that rule can still list up to 10 quantities. maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `setup_fee_money`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarysetup_fee_money). |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_delivery_method_ids` | Required | Array of string | IDs of the delivery methods a subscriber can choose for this plan's lines that ship. When empty, the delivery methods in your checkout settings apply. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `subscription_plan_id` | Required | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: `int32`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `0`. |

### SubscriptionPlan.billing_interval_options[]

Field definitions: [BuyerExpandedSubscriptionPlanSummary.billing_interval_options[]](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options).

### SubscriptionPlan.early_termination_fee_money

Field definitions: [CreateSubscriptionPlanRequest.early_termination_fee_money](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestearly_termination_fee_money).

### SubscriptionPlan.end_after

Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set.

Field definitions: [shared fields](CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestend_after).

### SubscriptionPlan.end_after variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfterCycles: A subscription automatic end measured by the total number of charged billing cycles..

- Required: `cycle_count`, `type`.

### SubscriptionPlan.end_after variant 2

anyOf variant 2.

- Undeclared: `cycle_count`, `type`.
- Value shape: null. Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. 

### SubscriptionPlan.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### SubscriptionPlan.plan_change_options[]

A target plan subscribers may switch to and the billing timing for that change.

Field definitions: [shared fields](SubscriptionPlanChangeOption.md#subscriptionplanchangeoption).

### SubscriptionPlan.setup_fee_money

Field definitions: [BuyerExpandedSubscriptionPlanSummary.setup_fee_money](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarysetup_fee_money).

