[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRuleRequestInput

Replaced as a whole: send every field you want to keep.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `fixed_fee_money`: [field definitions](../models/PlatformFeeRuleInput.md#platformfeeruleinputfixed_fee_money). |
| `maximum_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_fee_money`: [field definitions](../models/PlatformFeeRuleInput.md#platformfeeruleinputmaximum_fee_money). |
| `percent` | Required | number | Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### PlatformFeeRuleRequestInput.fixed_fee_money

Field definitions: [PlatformFeeRuleInput.fixed_fee_money](../models/PlatformFeeRuleInput.md#platformfeeruleinputfixed_fee_money).

### PlatformFeeRuleRequestInput.maximum_fee_money

Field definitions: [PlatformFeeRuleInput.maximum_fee_money](../models/PlatformFeeRuleInput.md#platformfeeruleinputmaximum_fee_money).

