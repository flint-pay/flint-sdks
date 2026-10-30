[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleValue







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `currency` | Conditional | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### PromotionRuleValue variant 1

anyOf variant 1: Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValue variant 2

anyOf variant 1: Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValue variant 3

anyOf variant 1: Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValue variant 4

anyOf variant 1: Declared schema PromotionRuleValue. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PromotionRuleValue variant 5

anyOf variant 2: Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object. minLength: `1`. 

### PromotionRuleValue variant 6

anyOf variant 2: Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValue variant 7

anyOf variant 2: Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValue variant 8

anyOf variant 2: Declared schema PromotionRuleValueRequest. Rule comparison value. Use a primitive string, number, boolean, or a money object.; oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

