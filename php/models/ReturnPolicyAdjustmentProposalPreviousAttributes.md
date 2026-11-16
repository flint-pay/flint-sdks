[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyAdjustmentProposalPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. `adjustment_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesadjustment_type). |
| `based_on_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `based_on_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `calculated_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount worked out for the line's returned quantity. |
| `calculation_type` | Optional | string or null | How the amount is worked out. Values: `"flat"`, `"percent"`. `calculation_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributescalculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed amount proposed for the line, whatever the quantity. |
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

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculation_type

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculation_type variant 1

anyOf variant 1: How the amount is worked out..

- Value shape: string. How the amount is worked out. Values: `"flat"`, `"percent"`.

### ReturnPolicyAdjustmentProposalPreviousAttributes.calculation_type variant 2

anyOf variant 2.

- Value shape: null. How the amount is worked out. 

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

