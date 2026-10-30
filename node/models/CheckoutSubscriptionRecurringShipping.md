[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionRecurringShipping

Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_name` | Required | string |  |
| `price_type` | Required | string | Values: `"fixed"`, `"quoted"`. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `shipping_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### CheckoutSubscriptionRecurringShipping.shipping_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

