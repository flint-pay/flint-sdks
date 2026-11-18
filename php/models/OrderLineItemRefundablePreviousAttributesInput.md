[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemRefundablePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Remaining discount component. |
| `gross_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Remaining subtotal before discounts and tax. |
| `quantity` | Optional | integer or null | Whole-number units remaining for a quantity refund target; fractional quantities are not supported. `quantity`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributesInput.md#orderlineitemrefundablepreviousattributesinputquantity). |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Remaining tax component. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Remaining target total after discounts and tax. |

### OrderLineItemRefundablePreviousAttributesInput.quantity

### OrderLineItemRefundablePreviousAttributesInput.quantity variant 1

anyOf variant 1: Whole-number units remaining for a quantity refund target; fractional quantities are not supported..

- Value shape: integer. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: `int64`. 

### OrderLineItemRefundablePreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. 

