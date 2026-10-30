[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutQuickPayItemRequest

A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `name` | Required | string | minLength: `1`. |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |

### CheckoutQuickPayItemRequest.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

