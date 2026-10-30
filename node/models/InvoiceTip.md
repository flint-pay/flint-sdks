[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTip

A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `description` | Optional | string |  |
| `name` | Optional | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |

### InvoiceTip.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

