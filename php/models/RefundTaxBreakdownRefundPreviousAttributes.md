[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. `order_charge_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order that owns this tax breakdown and its line item or charge, when present. `order_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributesorder_id). |
| `tax_breakdown_id` | Optional | string or null | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. `tax_breakdown_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributestax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax reversed for this breakdown. |

### RefundTaxBreakdownRefundPreviousAttributes.order_charge_id

### RefundTaxBreakdownRefundPreviousAttributes.order_charge_id variant 1

anyOf variant 1: ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`..

- Value shape: string. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. 

### RefundTaxBreakdownRefundPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. 

### RefundTaxBreakdownRefundPreviousAttributes.order_id

### RefundTaxBreakdownRefundPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order that owns this tax breakdown and its line item or charge, when present..

- Value shape: string. ID of the order that owns this tax breakdown and its line item or charge, when present. 

### RefundTaxBreakdownRefundPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this tax breakdown and its line item or charge, when present. 

### RefundTaxBreakdownRefundPreviousAttributes.tax_breakdown_id

### RefundTaxBreakdownRefundPreviousAttributes.tax_breakdown_id variant 1

anyOf variant 1: ID of the tax breakdown (one jurisdiction's tax) this entry reverses..

- Value shape: string. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. 

### RefundTaxBreakdownRefundPreviousAttributes.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. 

