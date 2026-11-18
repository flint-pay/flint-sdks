[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyAdjustmentProposalPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. `adjustment_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesadjustment_type). |
| `based_on_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `based_on_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `calculated_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount worked out for the line's returned quantity. `calculated_amount_money`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributescalculated_amount_money). |
| `calculation_type` | Optional | string or null | How the amount is worked out. Values: `"flat"`, `"percent"`. `calculation_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributescalculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed amount proposed for the line, whatever the quantity. `flat_money`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesflat_money). |
| `percent` | Optional | number or null | Percentage points of the returned units' subtotal, such as `10` for 10%. `percent`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributespercent). |
| `value_effect` | Optional | string or null | Whether the amount reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. `value_effect`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesvalue_effect). |

### ReturnPolicyAdjustmentProposalPreviousAttributes.adjustment_type

### ReturnPolicyAdjustmentProposalPreviousAttributes.adjustment_type variant 1

anyOf variant 1: What the fee or credit is for..

- Value shape: string. What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`.

### ReturnPolicyAdjustmentProposalPreviousAttributes.adjustment_type variant 2

anyOf variant 2.

- Value shape: null. What the fee or credit is for. 

### ReturnPolicyAdjustmentProposalPreviousAttributes.based_on_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculated_amount_money

The amount worked out for the line's returned quantity.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculated_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculated_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount worked out for the line's returned quantity. 

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculated_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculated_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculation_type

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculation_type variant 1

anyOf variant 1: How the amount is worked out..

- Value shape: string. How the amount is worked out. Values: `"flat"`, `"percent"`.

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculation_type variant 2

anyOf variant 2.

- Value shape: null. How the amount is worked out. 

### ReturnPolicyAdjustmentProposalPreviousAttributes.flat_money

Fixed amount proposed for the line, whatever the quantity.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnPolicyAdjustmentProposalPreviousAttributes.flat_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnPolicyAdjustmentProposalPreviousAttributes.flat_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fixed amount proposed for the line, whatever the quantity. 

### ReturnPolicyAdjustmentProposalPreviousAttributes.flat_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnPolicyAdjustmentProposalPreviousAttributes.flat_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnPolicyAdjustmentProposalPreviousAttributes.percent

### ReturnPolicyAdjustmentProposalPreviousAttributes.percent variant 1

anyOf variant 1: Percentage points of the returned units' subtotal, such as `10` for 10%..

- Value shape: number. Percentage points of the returned units' subtotal, such as `10` for 10%. Percentage points of the returned units' subtotal, such as `10` for 10%. Format: `double`. multipleOf: `0.0001`. 

### ReturnPolicyAdjustmentProposalPreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage points of the returned units' subtotal, such as `10` for 10%. 

### ReturnPolicyAdjustmentProposalPreviousAttributes.value_effect

### ReturnPolicyAdjustmentProposalPreviousAttributes.value_effect variant 1

anyOf variant 1: Whether the amount reduces or increases what the buyer receives..

- Value shape: string. Whether the amount reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`.

### ReturnPolicyAdjustmentProposalPreviousAttributes.value_effect variant 2

anyOf variant 2.

- Value shape: null. Whether the amount reduces or increases what the buyer receives. 

