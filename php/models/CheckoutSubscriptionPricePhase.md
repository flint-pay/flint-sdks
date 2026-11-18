[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionPricePhase

One consecutive price window in a checkout subscription's paid billing periods.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_period_count` | Required | integer or null | Number of paid billing periods at this price. Null when the price continues until cancellation. Format: `int32`. minimum: `1`. |
| `recurring_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Recurring merchandise charge per billing period after discounts, before tax and shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `starts_at` | Required | string or null | Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: `date-time`. |

