[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRuleRequest

Replaced as a whole: send every field you want to keep.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `fixed_fee_money`: [field definitions](../models/PlatformFeeRule.md#platformfeerulefixed_fee_money). |
| `maximum_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_fee_money`: [field definitions](../models/PlatformFeeRule.md#platformfeerulemaximum_fee_money). |
| `percent` | Required | number | Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### PlatformFeeRuleRequest.fixed_fee_money

Field definitions: [PlatformFeeRule.fixed_fee_money](../models/PlatformFeeRule.md#platformfeerulefixed_fee_money).

### PlatformFeeRuleRequest.maximum_fee_money

Field definitions: [PlatformFeeRule.maximum_fee_money](../models/PlatformFeeRule.md#platformfeerulemaximum_fee_money).

