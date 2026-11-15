[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscribedLine

The subscription offer and billing interval an order line was bought under, with the recurring amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges, from 1 to 365. Format: `int32`. |
| `recurring_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_offer_id` | Required | string | ID of the subscription offer the line was bought under. |

