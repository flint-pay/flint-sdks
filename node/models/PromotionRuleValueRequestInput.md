[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleValueRequestInput

Request input. Response: [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue).

Rule comparison value. Use a primitive string, number, boolean, or a money object.





Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PromotionRuleValueRequestInput variant 1

oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. minLength: `1`. 

### PromotionRuleValueRequestInput variant 2

oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValueRequestInput variant 3

oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValueRequestInput variant 4

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

