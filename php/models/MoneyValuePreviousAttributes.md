[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyValuePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributesamount). |
| `currency` | Optional | string or null | ISO 4217 currency code for this amount. `currency`: [declared alternatives](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributescurrency). |

### MoneyValuePreviousAttributes.amount

### MoneyValuePreviousAttributes.amount variant 1

anyOf variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### MoneyValuePreviousAttributes.amount variant 2

anyOf variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### MoneyValuePreviousAttributes.currency

### MoneyValuePreviousAttributes.currency variant 1

anyOf variant 1: ISO 4217 currency code for this amount..

- Value shape: string. ISO 4217 currency code for this amount. ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### MoneyValuePreviousAttributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code for this amount. 

