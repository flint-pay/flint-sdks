[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRestockingFeePolicy

A restocking fee in a return policy, charged as a flat amount or a percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent` | Optional | number | Format: `double`. multipleOf: `0.0001`. |

### ReturnRestockingFeePolicy.flat_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

