[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutQuickPayItemRequestInput

A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | minLength: `1`. |
| `tax` | Optional | [OrderLineItemTaxInput](../models/OrderLineItemTaxInput.md#orderlineitemtaxinput) | A line item's tax category and whether it is taxable. |

