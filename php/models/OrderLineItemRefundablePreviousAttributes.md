[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemRefundablePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining discount component. |
| `gross_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining subtotal before discounts and tax. |
| `quantity` | Optional | integer or null | Whole-number units remaining for a quantity refund target; fractional quantities are not supported. `quantity`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributesquantity). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining tax component. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining target total after discounts and tax. |

### OrderLineItemRefundablePreviousAttributes.quantity

### OrderLineItemRefundablePreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number units remaining for a quantity refund target; fractional quantities are not supported..

- Value shape: integer. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: `int64`. 

### OrderLineItemRefundablePreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. 

