[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleValuePreviousAttributes

Rule comparison value. Use a primitive string, number, boolean, or a money object.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount). |
| `currency` | Conditional | string or null | ISO 4217 currency code for this amount. `currency`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency). |

### PromotionRuleValuePreviousAttributes variant 1

anyOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValuePreviousAttributes variant 2

anyOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValuePreviousAttributes variant 3

anyOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRuleValuePreviousAttributes variant 4

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PromotionRuleValuePreviousAttributes variant 4.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PromotionRuleValuePreviousAttributes variant 4.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

