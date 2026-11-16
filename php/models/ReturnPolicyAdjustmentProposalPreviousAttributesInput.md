[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyAdjustmentProposalPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. `adjustment_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinputadjustment_type). |
| `based_on_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `based_on_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `calculated_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount worked out for the line's returned quantity. |
| `calculation_type` | Optional | string or null | How the amount is worked out. Values: `"flat"`, `"percent"`. `calculation_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinputcalculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fixed amount proposed for the line, whatever the quantity. |
| `percent` | Optional | number or null | Percentage points of the returned units' subtotal, such as `10` for 10%. `percent`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinputpercent). |
| `value_effect` | Optional | string or null | Whether the amount reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. `value_effect`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinputvalue_effect). |

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.adjustment_type

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.adjustment_type variant 1

anyOf variant 1: What the fee or credit is for..

- Value shape: string. What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`.

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.adjustment_type variant 2

anyOf variant 2.

- Value shape: null. What the fee or credit is for. 

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.based_on_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.calculation_type

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.calculation_type variant 1

anyOf variant 1: How the amount is worked out..

- Value shape: string. How the amount is worked out. Values: `"flat"`, `"percent"`.

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.calculation_type variant 2

anyOf variant 2.

- Value shape: null. How the amount is worked out. 

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.percent

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.percent variant 1

anyOf variant 1: Percentage points of the returned units' subtotal, such as `10` for 10%..

- Value shape: number. Percentage points of the returned units' subtotal, such as `10` for 10%. Percentage points of the returned units' subtotal, such as `10` for 10%. Format: `double`. multipleOf: `0.0001`. 

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage points of the returned units' subtotal, such as `10` for 10%. 

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.value_effect

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.value_effect variant 1

anyOf variant 1: Whether the amount reduces or increases what the buyer receives..

- Value shape: string. Whether the amount reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`.

### ReturnPolicyAdjustmentProposalPreviousAttributesInput.value_effect variant 2

anyOf variant 2.

- Value shape: null. Whether the amount reduces or increases what the buyer receives. 

