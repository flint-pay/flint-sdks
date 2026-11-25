[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRulePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | object and [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed amount per payment. `fixed_fee_money`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributesfixed_fee_money). |
| `maximum_fee_money` | Optional | object and [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The maximum fee per payment, at least the fixed amount. `maximum_fee_money`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributesmaximum_fee_money). |
| `partner_app_id` | Optional | string or null | The partner app whose install set the rule. `partner_app_id`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributespartner_app_id). |
| `percent` | Optional | number or null | Percent of the amount collected. Zero requires fixed_fee_money. `percent`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributespercent). |

### PlatformFeeRulePreviousAttributes.fixed_fee_money

The fixed amount per payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | (integer string or null) | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributesfixed_fee_money-variant-1amount). |
| `currency` | Conditional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency). |

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1

anyOf variant 1.

- Optional: `amount`, `currency`.

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fixed amount per payment. 

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.amount

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.amount variant 1

anyOf group 1 variant 1.

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `1000000`. 

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.amount variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.amount variant 3

anyOf group 2 variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PlatformFeeRulePreviousAttributes.maximum_fee_money

The maximum fee per payment, at least the fixed amount.

Field definitions: [shared fields](#platformfeerulepreviousattributesfixed_fee_money).

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 1

anyOf variant 1.

- Optional: `amount`, `currency`.

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The maximum fee per payment, at least the fixed amount. 

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 1.amount

Declared alternatives: [PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.amount](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributesfixed_fee_money-variant-1amount).

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PlatformFeeRulePreviousAttributes.partner_app_id

### PlatformFeeRulePreviousAttributes.partner_app_id variant 1

anyOf variant 1: The partner app whose install set the rule..

- Value shape: string. The partner app whose install set the rule. The partner app whose install set the rule. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PlatformFeeRulePreviousAttributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app whose install set the rule. 

### PlatformFeeRulePreviousAttributes.percent

### PlatformFeeRulePreviousAttributes.percent variant 1

anyOf variant 1: Percent of the amount collected. Zero requires fixed_fee_money..

- Value shape: number. Percent of the amount collected. Zero requires fixed_fee_money. Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. 

### PlatformFeeRulePreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Percent of the amount collected. Zero requires fixed_fee_money. 

