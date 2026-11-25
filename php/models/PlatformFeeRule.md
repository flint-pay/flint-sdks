[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRule

The rule that sets the platform fee for each payment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | [PlatformFeeRuleFixedFeeMoney](../models/PlatformFeeRuleFixedFeeMoney.md#platformfeerulefixedfeemoney) | The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `maximum_fee_money` | Optional | [PlatformFeeRuleMaximumFeeMoney](../models/PlatformFeeRuleMaximumFeeMoney.md#platformfeerulemaximumfeemoney) | The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `partner_app_id` | Required | string | The partner app whose install set the rule. |
| `percent` | Required | number | Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

