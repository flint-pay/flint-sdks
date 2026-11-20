[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyValuePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputamount). |
| `currency` | Optional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputcurrency). |

### MoneyValuePreviousAttributesInput.amount

### MoneyValuePreviousAttributesInput.amount variant 1

anyOf variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### MoneyValuePreviousAttributesInput.amount variant 2

anyOf variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### MoneyValuePreviousAttributesInput.currency

### MoneyValuePreviousAttributesInput.currency variant 1

anyOf variant 1: Three-letter uppercase ISO 4217 currency code for this amount, such as USD..

- Value shape: string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### MoneyValuePreviousAttributesInput.currency variant 2

anyOf variant 2.

- Value shape: null. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. 

