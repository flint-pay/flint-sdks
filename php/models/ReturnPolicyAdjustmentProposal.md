[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyAdjustmentProposal

A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `based_on_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `calculated_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount worked out for the line's returned quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_type` | Required | string | How the amount is worked out. Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed amount proposed for the line, whatever the quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Percentage points of the returned units' subtotal, such as `10` for 10%. Format: `double`. multipleOf: `0.0001`. |
| `value_effect` | Required | string | Whether the amount reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. |

