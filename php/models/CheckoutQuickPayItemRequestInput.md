[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutQuickPayItemRequestInput

A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount the buyer pays for the item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | Name shown for the item. minLength: `1`. |
| `tax` | Optional | [OrderLineItemTaxRequestInput](../models/OrderLineItemTaxRequestInput.md#orderlineitemtaxrequestinput) | Tax settings for the item. A line item's tax category and whether it is taxable. |

