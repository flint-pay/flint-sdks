[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionRecurringShippingInput

Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_name` | Required | string | Name of the delivery method the buyer chose, as the buyer sees it. |
| `price_type` | Required | string | Whether the delivery method charges a flat price or a price worked out for each delivery. Values: `"fixed"`, `"quoted"`. |
| `shipping_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

