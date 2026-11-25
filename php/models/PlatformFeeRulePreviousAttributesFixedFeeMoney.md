[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRulePreviousAttributesFixedFeeMoney

The fixed amount per payment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | (integer string or null) or null | `amount`: [declared alternatives](../models/PlatformFeeRulePreviousAttributesFixedFeeMoney.md#platformfeerulepreviousattributesfixedfeemoneyamount). |
| `currency` | Optional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency). |

### PlatformFeeRulePreviousAttributesFixedFeeMoney.amount

### PlatformFeeRulePreviousAttributesFixedFeeMoney.amount variant 1

anyOf variant 1; anyOf group 1 variant 1.

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `1000000`. 

### PlatformFeeRulePreviousAttributesFixedFeeMoney.amount variant 2, 4

anyOf variant 1; anyOf group 1 variant 2; anyOf variant 1; anyOf group 2 variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### PlatformFeeRulePreviousAttributesFixedFeeMoney.amount variant 3

anyOf variant 1; anyOf group 2 variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### PlatformFeeRulePreviousAttributesFixedFeeMoney.amount variant 5

anyOf variant 2.

- Value shape: null.  

### PlatformFeeRulePreviousAttributesFixedFeeMoney.currency

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency).

