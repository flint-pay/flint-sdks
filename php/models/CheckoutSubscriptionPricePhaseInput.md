[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionPricePhaseInput

One consecutive price window in a checkout subscription's paid billing periods.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_period_count` | Required | integer or null | Number of paid billing periods at this price. Null when the price continues until cancellation. Format: `int32`. minimum: `1`. |
| `recurring_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Recurring merchandise charge per billing period after discounts, before tax and shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `starts_at` | Required | string or null | Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

