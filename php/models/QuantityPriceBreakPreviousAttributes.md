[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## QuantityPriceBreakPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Optional | integer or null | Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. `minimum_quantity`: [declared alternatives](../models/QuantityPriceBreakPreviousAttributes.md#quantitypricebreakpreviousattributesminimum_quantity). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. |

### QuantityPriceBreakPreviousAttributes.minimum_quantity

### QuantityPriceBreakPreviousAttributes.minimum_quantity variant 1

anyOf variant 1: Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries..

- Value shape: integer. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: `int64`. minimum: `2`. 

### QuantityPriceBreakPreviousAttributes.minimum_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. 

