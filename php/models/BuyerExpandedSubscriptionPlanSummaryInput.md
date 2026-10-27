[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedSubscriptionPlanSummaryInput

A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `line_items` | Optional | Array of [BuyerSubscriptionPlanLineItemInput](../models/BuyerSubscriptionPlanLineItemInput.md#buyersubscriptionplanlineiteminput) |  |
| `name` | Required | string |  |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Required | string |  |
| `trial_period_days` | Optional | integer | Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

