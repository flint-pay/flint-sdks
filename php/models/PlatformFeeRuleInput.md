[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRuleInput

The rule that sets the platform fee for each payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `fixed_fee_money`: [field definitions](../models/PlatformFeeRuleInput.md#platformfeeruleinputfixed_fee_money). |
| `maximum_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_fee_money`: [field definitions](../models/PlatformFeeRuleInput.md#platformfeeruleinputmaximum_fee_money). |
| `partner_app_id` | Required | string | The partner app whose install set the rule. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `percent` | Required | number | Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### PlatformFeeRuleInput.fixed_fee_money

The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](PlatformFeeRuleMaximumFeeMoney.md#platformfeerulemaximumfeemoney).

### PlatformFeeRuleInput.maximum_fee_money

The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](PlatformFeeRuleMaximumFeeMoney.md#platformfeerulemaximumfeemoney).

