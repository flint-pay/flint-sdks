[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscribedLine

The subscription offer and billing interval an order line was bought under, with the recurring amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `recurring_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `recurring_amount_money`: [field definitions](../models/SubscribedLine.md#subscribedlinerecurring_amount_money). |
| `subscription_offer_id` | Required | string |  |

### SubscribedLine.recurring_amount_money

Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

