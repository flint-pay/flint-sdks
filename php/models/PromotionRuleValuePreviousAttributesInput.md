[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleValuePreviousAttributesInput

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputamount). |
| `currency` | Conditional | string or null | ISO 4217 currency code for this amount. `currency`: [declared alternatives](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputcurrency). |

### PromotionRuleValuePreviousAttributesInput variant 1

anyOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValuePreviousAttributesInput variant 2

anyOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValuePreviousAttributesInput variant 3

anyOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValuePreviousAttributesInput variant 4

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PromotionRuleValuePreviousAttributesInput variant 4.amount

Declared alternatives: [MoneyValuePreviousAttributesInput.amount](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputamount).

### PromotionRuleValuePreviousAttributesInput variant 4.currency

Declared alternatives: [MoneyValuePreviousAttributesInput.currency](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinputcurrency).

