[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedSubscriptionPlanSummary

A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. `billing_interval_options[]`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `line_items` | Optional | Array of [BuyerSubscriptionPlanLineItem](../models/BuyerSubscriptionPlanLineItem.md#buyersubscriptionplanlineitem) |  |
| `name` | Required | string |  |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `setup_fee_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Required | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerExpandedSubscriptionPlanSummary.billing_interval_options[]

A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.

Field definitions: [shared fields](SubscriptionIntervalOption.md#subscriptionintervaloption).

### BuyerExpandedSubscriptionPlanSummary.setup_fee_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

