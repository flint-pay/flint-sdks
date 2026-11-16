[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. `order_charge_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinputorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order that owns this tax breakdown and its line item or charge, when present. `order_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinputorder_id). |
| `tax_breakdown_id` | Optional | string or null | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. `tax_breakdown_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinputtax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax reversed for this breakdown. |

### RefundTaxBreakdownRefundPreviousAttributesInput.order_charge_id

### RefundTaxBreakdownRefundPreviousAttributesInput.order_charge_id variant 1

anyOf variant 1: ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`..

- Value shape: string. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### RefundTaxBreakdownRefundPreviousAttributesInput.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. 

### RefundTaxBreakdownRefundPreviousAttributesInput.order_id

### RefundTaxBreakdownRefundPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order that owns this tax breakdown and its line item or charge, when present..

- Value shape: string. ID of the order that owns this tax breakdown and its line item or charge, when present. ID of the order that owns this tax breakdown and its line item or charge, when present. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundTaxBreakdownRefundPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this tax breakdown and its line item or charge, when present. 

### RefundTaxBreakdownRefundPreviousAttributesInput.tax_breakdown_id

### RefundTaxBreakdownRefundPreviousAttributesInput.tax_breakdown_id variant 1

anyOf variant 1: ID of the tax breakdown (one jurisdiction's tax) this entry reverses..

- Value shape: string. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. 

### RefundTaxBreakdownRefundPreviousAttributesInput.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. 

