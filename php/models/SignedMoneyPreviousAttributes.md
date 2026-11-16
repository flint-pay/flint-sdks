[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedMoneyPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | integer string or null | Signed amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/SignedMoneyPreviousAttributes.md#signedmoneypreviousattributesamount). |
| `currency` | Optional | string or null | ISO 4217 currency code for this amount. `currency`: [declared alternatives](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributescurrency). |

### SignedMoneyPreviousAttributes.amount

### SignedMoneyPreviousAttributes.amount variant 1

anyOf variant 1: Signed amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Signed amount in the currency's minor unit, such as cents for USD. Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. 

### SignedMoneyPreviousAttributes.amount variant 2

anyOf variant 2.

- Value shape: null. Signed amount in the currency's minor unit, such as cents for USD. 

### SignedMoneyPreviousAttributes.currency

Declared alternatives: [MoneyValuePreviousAttributes.currency](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributescurrency).

