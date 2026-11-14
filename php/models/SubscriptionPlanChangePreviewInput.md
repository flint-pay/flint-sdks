[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangePreviewInput

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_starts` | Required | string | Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `effective_at` | Required | string or null | When the plan is expected to take effect. Null when no billing time is scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionRenewalEstimateInput](../models/SubscriptionRenewalEstimateInput.md#subscriptionrenewalestimateinput) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string | Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan_id` | Required | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

