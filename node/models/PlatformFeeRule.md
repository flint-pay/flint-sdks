[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRule

The rule that sets the platform fee for each payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `fixed_fee_money`: [field definitions](../models/PlatformFeeRule.md#platformfeerulefixed_fee_money). |
| `maximum_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_fee_money`: [field definitions](../models/PlatformFeeRule.md#platformfeerulemaximum_fee_money). |
| `partner_app_id` | Required | string | The partner app whose install set the rule. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `percent` | Required | number | Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### PlatformFeeRule.fixed_fee_money

The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `1000000`. minimum: `0`. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `1000000`. minimum: `0`. |
| `currency` | Required | string | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### PlatformFeeRule.maximum_fee_money

The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](#platformfeerulefixed_fee_money).

