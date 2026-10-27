[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionRecurringShippingInput

Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_name` | Required | string |  |
| `price_type` | Required | string | Values: `"fixed"`, `"quoted"`. |
| `shipping_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

