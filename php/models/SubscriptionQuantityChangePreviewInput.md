[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionQuantityChangePreviewInput

Estimated pricing for a quantity change that keeps the billing period and anchor.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | When this quantity change is billed. Values: `"prorated_now"`. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Credit for unused paid subscription time. Null when there is no paid period to credit. |
| `effective_at` | Required | string or null | When the quantities are expected to take effect. Null when no billing time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `interval` | Required | string | The subscription billing interval after the quantity change. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `interval_count` | Required | integer | The number of interval units in each billing period. Format: `int32`. |
| `mode` | Required | string | The kind of subscription pricing estimate. Values: `"quantity_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionRenewalEstimateInput](../models/SubscriptionRenewalEstimateInput.md#subscriptionrenewalestimateinput) | Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string | The subscription whose quantities were estimated. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

