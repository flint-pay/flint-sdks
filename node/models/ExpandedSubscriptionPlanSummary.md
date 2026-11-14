[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummary

A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of `billing_interval` units between charges on the plan's default pair. Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. `billing_interval_options[]`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Description of the plan. Omitted when none is set. |
| `line_items` | Optional | Array of [SubscriptionPlanLineItem](../models/SubscriptionPlanLineItem.md#subscriptionplanlineitem) | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. |
| `name` | Required | string | Name of the plan. Buyers see it at checkout and on their subscription. |
| `quantity_options` | Optional | Array of integer | Quantities of the whole subscription that this plan lists, from 1 to 100, in ascending order. Flint accepts only a subscription quantity of 1, so you can set this list only to `[1]`. To let buyers choose a seat count, set `allow_quantity_adjustment` on a plan line item. A plan saved before that rule can still list up to 10 quantities. maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `setup_fee_money`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarysetup_fee_money). |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Required | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### ExpandedSubscriptionPlanSummary.billing_interval_options[]

Field definitions: [BuyerExpandedSubscriptionPlanSummary.billing_interval_options[]](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options).

### ExpandedSubscriptionPlanSummary.setup_fee_money

Field definitions: [BuyerExpandedSubscriptionPlanSummary.setup_fee_money](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarysetup_fee_money).

