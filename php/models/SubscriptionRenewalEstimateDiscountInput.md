[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateDiscountInput

An estimated renewal discount from a promotion or credit for a subscription plan change.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount the discount takes off the estimate. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | Customer-facing name of the discount, or its internal name when it has none. |
| `promotion_id` | Required | string or null | Promotion ID for a promotion discount. `null` when the discount is unused-time credit or proration, which have no promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `source` | Required | string | What the discount comes from. Each value says what it means. Values: `"promotion"`, `"plan_change_credit"`, `"proration"`. |

