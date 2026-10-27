[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateDiscountInput

An estimated renewal discount from a promotion or credit for a subscription plan change.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `promotion_id` | Required | string or null | Promotion ID for a promotion discount; null for unused-time credit. |
| `source` | Required | string | Values: `"promotion"`, `"plan_change_credit"`. |

