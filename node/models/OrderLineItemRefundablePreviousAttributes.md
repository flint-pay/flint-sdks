[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemRefundablePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining discount component. `discount_money`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributesdiscount_money). |
| `gross_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining subtotal before discounts and tax. `gross_money`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributesgross_money). |
| `quantity` | Optional | integer or null | Whole-number units remaining for a quantity refund target; fractional quantities are not supported. `quantity`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributesquantity). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining tax component. `tax_money`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining target total after discounts and tax. `total_money`: [declared alternatives](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributestotal_money). |

### OrderLineItemRefundablePreviousAttributes.discount_money

Remaining discount component.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemRefundablePreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemRefundablePreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Remaining discount component. 

### OrderLineItemRefundablePreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemRefundablePreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemRefundablePreviousAttributes.gross_money

Remaining subtotal before discounts and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemRefundablePreviousAttributes.gross_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemRefundablePreviousAttributes.gross_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Remaining subtotal before discounts and tax. 

### OrderLineItemRefundablePreviousAttributes.gross_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemRefundablePreviousAttributes.gross_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemRefundablePreviousAttributes.quantity

### OrderLineItemRefundablePreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number units remaining for a quantity refund target; fractional quantities are not supported..

- Value shape: integer. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: `int64`. 

### OrderLineItemRefundablePreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. 

### OrderLineItemRefundablePreviousAttributes.tax_money

Remaining tax component.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemRefundablePreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemRefundablePreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Remaining tax component. 

### OrderLineItemRefundablePreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemRefundablePreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemRefundablePreviousAttributes.total_money

Remaining target total after discounts and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemRefundablePreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemRefundablePreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Remaining target total after discounts and tax. 

### OrderLineItemRefundablePreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemRefundablePreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

