[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAddOnFee

A Flint fee added to a payment intent, with the fee type and amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `fee_type` | Required | string | The Flint feature this fee pays for. A payment carries at most one of invoice_collection and subscription_collection. Can gain values: sum every entry rather than matching only the types you know. Values: `"invoice_collection"`, `"subscription_collection"`, `"automatic_tax"`. |

### PaymentAddOnFee.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

