[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateDiscount

An estimated renewal discount from a promotion or credit for a subscription plan change.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `promotion_id` | Required | string or null | Promotion ID for a promotion discount; null for unused-time credit. |
| `source` | Required | string | Values: `"promotion"`, `"plan_change_credit"`. |

