[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyValuePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributesamount). |
| `currency` | Optional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency). |

### MoneyValuePreviousAttributes.amount

### MoneyValuePreviousAttributes.amount variant 1

anyOf variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### MoneyValuePreviousAttributes.amount variant 2

anyOf variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### MoneyValuePreviousAttributes.currency

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency).

