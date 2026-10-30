[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleValueInput

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `currency` | Conditional | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### PromotionRuleValueInput variant 1

oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValueInput variant 2

oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValueInput variant 3

oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValueInput variant 4

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

