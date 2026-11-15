[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateDiscount

An estimated renewal discount from a promotion or credit for a subscription plan change.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the discount takes off the estimate. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | Customer-facing name of the discount, or its internal name when it has none. |
| `promotion_id` | Required | string or null | Promotion ID for a promotion discount. `null` when the discount is unused-time credit or proration, which have no promotion. |
| `source` | Required | string | What the discount comes from. Each value says what it means. Values: `"promotion"`, `"plan_change_credit"`, `"proration"`. |

