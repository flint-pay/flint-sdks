[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## QuantityPriceBreakPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Optional | integer or null | Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. `minimum_quantity`: [declared alternatives](../models/QuantityPriceBreakPreviousAttributesInput.md#quantitypricebreakpreviousattributesinputminimum_quantity). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. |

### QuantityPriceBreakPreviousAttributesInput.minimum_quantity

### QuantityPriceBreakPreviousAttributesInput.minimum_quantity variant 1

anyOf variant 1: Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries..

- Value shape: integer. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: `int64`. minimum: `2`. 

### QuantityPriceBreakPreviousAttributesInput.minimum_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. 

