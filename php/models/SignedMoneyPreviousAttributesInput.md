[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedMoneyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | integer string or null | Signed amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinputamount). |
| `currency` | Optional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputcurrency). |

### SignedMoneyPreviousAttributesInput.amount

### SignedMoneyPreviousAttributesInput.amount variant 1

anyOf variant 1: Signed amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Signed amount in the currency's minor unit, such as cents for USD. Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. 

### SignedMoneyPreviousAttributesInput.amount variant 2

anyOf variant 2.

- Value shape: null. Signed amount in the currency's minor unit, such as cents for USD. 

### SignedMoneyPreviousAttributesInput.currency

Declared alternatives: [MoneyValuePreviousAttributesInput.currency](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputcurrency).

