[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateInput

Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscountInput](../models/SubscriptionRenewalEstimateDiscountInput.md#subscriptionrenewalestimatediscountinput) |  |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItemInput](../models/SubscriptionRenewalEstimateLineItemInput.md#subscriptionrenewalestimatelineiteminput) |  |
| `shipping_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Estimated shipping; null for a digital subscription. |
| `subscription_cycle` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Estimated tax; null when no tax address is available. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

