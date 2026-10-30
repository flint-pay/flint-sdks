[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyAdjustmentProposal

A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `based_on_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `calculated_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `calculated_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `calculation_type` | Required | string | Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent` | Optional | number | Format: `double`. multipleOf: `0.0001`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |

### ReturnPolicyAdjustmentProposal.calculated_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnPolicyAdjustmentProposal.flat_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

