[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeMoneyComparison

The `Money comparison` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `attribute` | Required | string | Values: `"amount_money"`. |
| `operator` | Required | string | Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |

### RiskPredicateNodeMoneyComparison.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

