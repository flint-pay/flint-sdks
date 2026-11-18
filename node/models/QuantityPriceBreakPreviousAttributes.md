[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## QuantityPriceBreakPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Optional | integer or null | Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. `minimum_quantity`: [declared alternatives](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributesminimum_quantity). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. `unit_price_money`: [declared alternatives](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributesunit_price_money). |

### QuantityPriceBreakPreviousAttributes.minimum_quantity

### QuantityPriceBreakPreviousAttributes.minimum_quantity variant 1

anyOf variant 1: Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries..

- Value shape: integer. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: `int64`. minimum: `2`. 

### QuantityPriceBreakPreviousAttributes.minimum_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. 

### QuantityPriceBreakPreviousAttributes.unit_price_money

Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### QuantityPriceBreakPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### QuantityPriceBreakPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. 

### QuantityPriceBreakPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### QuantityPriceBreakPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

