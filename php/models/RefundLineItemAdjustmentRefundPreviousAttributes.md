[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded back against the adjustment. |
| `original_refund_line_item_adjustment_id` | Optional | string or null | ID of the adjustment this amount was refunded against. `original_refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributesoriginal_refund_line_item_adjustment_id). |
| `refund_line_item_adjustment_refund_id` | Optional | string or null | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. `refund_line_item_adjustment_refund_id`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributesrefund_line_item_adjustment_refund_id). |

### RefundLineItemAdjustmentRefundPreviousAttributes.original_refund_line_item_adjustment_id

### RefundLineItemAdjustmentRefundPreviousAttributes.original_refund_line_item_adjustment_id variant 1

anyOf variant 1: ID of the adjustment this amount was refunded against..

- Value shape: string. ID of the adjustment this amount was refunded against. 

### RefundLineItemAdjustmentRefundPreviousAttributes.original_refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the adjustment this amount was refunded against. 

### RefundLineItemAdjustmentRefundPreviousAttributes.refund_line_item_adjustment_refund_id

### RefundLineItemAdjustmentRefundPreviousAttributes.refund_line_item_adjustment_refund_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment refund, prefixed `rliar_`..

- Value shape: string. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. 

### RefundLineItemAdjustmentRefundPreviousAttributes.refund_line_item_adjustment_refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. 

