[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferDiscount

The discount a subscription offer gives, as a fixed amount or a percentage.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_off_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent_off` | Optional | number | multipleOf: `0.0001`. |

### OrderLineSubscriptionOfferDiscount.amount_off_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

