[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionChargeEstimateInput

Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected collection time. Null when billing is not scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscountInput](../models/SubscriptionRenewalEstimateDiscountInput.md#subscriptionrenewalestimatediscountinput) | Promotions and credits applied to this estimated collection; [] when none apply. |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItemInput](../models/SubscriptionRenewalEstimateLineItemInput.md#subscriptionrenewalestimatelineiteminput) | Items and quantities included in this estimated collection. |
| `shipping_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Estimated shipping. Null when this collection has no delivery. |
| `subscription_cycle` | Required | integer | The paid collection cycle, continuing imported completed_cycles; 0 for a separate setup fee. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Estimated tax; `null` when tax can't be calculated yet. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated collection total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

