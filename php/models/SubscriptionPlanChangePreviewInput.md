[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangePreviewInput

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_starts` | Required | string | Values: `"now"`, `"next_renewal"`. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Unused paid item time credited when billing_starts is now; null for next_renewal. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionRenewalEstimateInput](../models/SubscriptionRenewalEstimateInput.md#subscriptionrenewalestimateinput) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |
| `subscription_plan_id` | Required | string |  |

